"use client";

import { useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import { fetchIncidents } from "../lib/fetchSafety";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || "";

type SafetyLayerProps = {
  map: mapboxgl.Map | null;
};

export default function SafetyLayer({ map }: SafetyLayerProps) {
  useEffect(() => {
    if (!map) return;
console.log("SafetyLayer");
    let cancelled = false;

    const loadData = async () => {
      try {
        const incidents = await fetchIncidents();
        if (cancelled) return;

        // ✅ Already returns GeoJSON from fetchIncidents
        console.log("Fetched incidents:", incidents);

        if (!map.getSource("safety-incidents")) {
          map.addSource("safety-incidents", {
            type: "geojson",
            data: incidents,
          });

          // 🔥 Heatmap layer
          map.addLayer({
            id: "safety-heat",
            type: "heatmap",
            source: "safety-incidents",
            maxzoom: 15,
            paint: {
              "heatmap-weight": [
                "interpolate",
                ["linear"],
                ["get", "date"], // numeric timestamp
                0, 0,
                Date.now(), 1,
              ],
              "heatmap-intensity": 1,
              "heatmap-radius": 20,
              "heatmap-opacity": 0.6,
            },
          });

          // 🎯 Circle fallback (visible when zoomed in, or if heatmap fails)
          map.addLayer({
            id: "safety-points",
            type: "circle",
            source: "safety-incidents",
            minzoom: 12,
            paint: {
              "circle-radius": 4,
              "circle-color": "#ff0000",
              "circle-opacity": 0.8,
              "circle-stroke-width": 1,
              "circle-stroke-color": "#fff",
            },
          });
        } else {
          // update data if already added
          (map.getSource("safety-incidents") as mapboxgl.GeoJSONSource).setData(
            incidents
          );
        }
      } catch (err) {
        console.error("Error loading safety data", err);
      }
    };

    // ✅ only run after the map is fully ready
    if (map.loaded()) {
      loadData();
    } else {
      map.once("load", loadData);
    }

    return () => {
      cancelled = true;
    };
  }, [map]);

  return null;
}
