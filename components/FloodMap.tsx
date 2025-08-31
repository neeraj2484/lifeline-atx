"use client";
import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { fetchSafetyIncidents } from "../lib/fetchSafety";
import councilDistrictsGeoJSON from "../public/councilDistricts.json";
import { logMetric, exportMetricsCSV } from "../utils/metricsLogger";
mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || "";

type FloodMapProps = {
  alerts: GeoJSON.FeatureCollection;
  onFeatureClick?: (props: any) => void;
};

export default function FloodMap({ alerts, onFeatureClick }: FloodMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const popupRef = useRef<mapboxgl.Popup | null>(null);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstallButton, setShowInstallButton] = useState(false);

  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallButton(true);
    };
    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    setDeferredPrompt(null);
    setShowInstallButton(false);
  };

  useEffect(() => {
    if (!mapContainer.current) return;

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-97.7431, 30.2672],
      zoom: 10,
    });

    mapRef.current = map;
    popupRef.current = new mapboxgl.Popup({ closeButton: true, closeOnClick: true });

    map.on("load", async () => {
      // Flood alerts
      if (!map.getSource("alerts")) {
        map.addSource("alerts", { type: "geojson", data: alerts });
        map.addLayer({
          id: "alerts-fill",
          type: "fill",
          source: "alerts",
          paint: {
            "fill-color": [
              "match",
              ["get", "risk"],
              "Low", "#00FF00",
              "Medium", "#FFA500",
              "High", "#FF0000",
              "#00FF00",
            ],
            "fill-opacity": 0.5,
          },
        });
        map.addLayer({
          id: "alerts-border",
          type: "line",
          source: "alerts",
          paint: { "line-color": "#000", "line-width": 2 },
        });
      }

      try {
        const incidentCounts = await fetchSafetyIncidents();

        // Heatmap points
        const allIncidentsPoints: GeoJSON.FeatureCollection<GeoJSON.Point> = {
          type: "FeatureCollection",
          features: Object.values(incidentCounts)
            .flatMap((d: any) => d.incidents || [])
            .map((incident: any) => ({
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: [incident.lon, incident.lat],
              },
              properties: {},
            })),
        };

        map.addSource("incident-points", {
          type: "geojson",
          data: allIncidentsPoints,
        });

        map.addLayer({
          id: "heatmap",
          type: "heatmap",
          source: "incident-points",
          maxzoom: 15,
          paint: {
            "heatmap-weight": 1,
            "heatmap-intensity": ["interpolate", ["linear"], ["zoom"], 0, 1, 15, 3],
            "heatmap-color": [
              "interpolate",
              ["linear"],
              ["heatmap-density"],
              0, "rgba(0,0,255,0)",
              0.2, "blue",
              0.4, "cyan",
              0.6, "lime",
              0.8, "yellow",
              1, "red",
            ],
            "heatmap-radius": ["interpolate", ["linear"], ["zoom"], 0, 2, 15, 20],
          },
        });

        // Districts with incident counts
        const geojsonWithCounts: GeoJSON.FeatureCollection = {
          type: "FeatureCollection",
          features: (councilDistrictsGeoJSON.features as any[]).map((f: any) => ({
            ...f,
            properties: {
              ...f.properties,
              incidentCount: incidentCounts[f.properties.district_number] || 0,
            },
          })),
        };

        map.addSource("council-districts", { type: "geojson", data: geojsonWithCounts });

        map.addLayer({
          id: "districts-fill",
          type: "fill",
          source: "council-districts",
          paint: {
            "fill-color": [
              "interpolate",
              ["linear"],
              ["get", "incidentCount"],
              0, "#edf8fb",
              10, "#b2e2e2",
              50, "#66c2a4",
              100, "#238b45",
              200, "#00441b",
            ],
            "fill-opacity": 0.6,
          },
        });

        map.addLayer({
          id: "districts-border",
          type: "line",
          source: "council-districts",
          paint: { "line-color": "#333", "line-width": 2 },
        });

        // District click popup
        map.on("click", "districts-fill", (e) => {
          const props = e.features?.[0].properties;
          if (!props) return;
          popupRef.current
            ?.setLngLat((e.lngLat as any))
            .setHTML(
              `<strong style='z-index:999'>${props.district_name}</strong><br/>Incidents: ${props.incidentCount}`
            )
            .addTo(map);

          const safetyCard = document.getElementById("safety-card");
          const badge = document.getElementById("safety-badge");
          if (safetyCard && badge) {
            const count = props.incidentCount;
            safetyCard.innerHTML = `
              <div class="text-lg font-bold mb-1">${props.district_name}</div>
              <div class="text-sm">Incidents: ${count}</div>
            `;
            let color = "bg-green-500";
            if (count > 100) color = "bg-red-500";
            else if (count > 50) color = "bg-yellow-500";
            else if (count > 10) color = "bg-orange-500";
            badge.className = `text-white px-2 py-1 rounded ${color}`;
            badge.innerText =
              count > 100 ? "High Risk" : count > 50 ? "Moderate" : "Low";
          }
        });

        // Flood alert click popup
        map.on("click", "alerts-fill", (e) => {
          if (popupRef.current) popupRef.current.remove();
          if (e.features?.length) {
            const props = e.features[0].properties;
            popupRef.current = new mapboxgl.Popup({ closeOnClick: true })
              .setLngLat(e.lngLat)
              .setHTML(
                `<div style="font-size:14px;">
                   <strong>Flood Alert</strong><br/>
                   Risk: ${props?.risk || "N/A"}
                 </div>`
              )
              .addTo(map);
            if (onFeatureClick) onFeatureClick(props);
          }
          const safetyCard = document.getElementById("safety-card");
          const badge = document.getElementById("safety-badge");
          if (safetyCard) safetyCard.innerHTML = "";
          if (badge) badge.className = "hidden";
        });
      } catch (err) {
        console.error("❌ Error loading incidents", err);
      }
    });

    return () => {
      popupRef.current?.remove();
      map.remove();
    };
  }, [alerts, onFeatureClick]);

  return (
    <div className="w-full h-screen relative">
      {/* Header bar with Export + Install buttons */}
      <div className="absolute top-2 left-2 z-10 flex gap-2">
        <button
          className="p-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700"
          onClick={exportMetricsCSV}
        >
          📊 Export Metrics CSV
        </button>
        {showInstallButton && (
          <button
            onClick={handleInstallClick}
            className="p-2 bg-green-600 text-white rounded shadow hover:bg-green-700"
          >
            📲 Install Lifeline ATX
          </button>
        )}
      </div>
      {/* Map container */}
      <div ref={mapContainer} className="w-full h-full" />
    </div>
  );
}