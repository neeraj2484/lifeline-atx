 
"use client";

import { useEffect, useState } from "react";
import type { FeatureCollection, Geometry } from "geojson";
import FloodMap from "@/components/FloodMap";
import Toolbar from "@/components/Toolbar";
import Sidebar from "@/components/Sidebar";
import Legend from "@/components/Legend";
import { loadCachedAlerts, syncFloodAlerts } from "@/lib/fetchAlerts";
import { fetchHeatRiskData } from "@/lib/nws";
import { computeHeatRisk } from "@/lib/risk";
import HelpSheet from "../components/HelpSheet";
import NetworkBanner from "@/components/NetworkBanner";

export type SelectedAlert = {
  event?: string;
  severity?: string;
  headline?: string;
  expires?: string;
  floodRisk?: string;
  heatRisk?: string;
};

type RiskLevel = "Low" | "Caution" | "Extreme Caution" | "Danger" | "Extreme Danger";

export default function MapPage() {
  // 🔹 Use proper GeoJSON typing instead of any
  const [alertsGeoJSON, setAlertsGeoJSON] = useState<FeatureCollection<Geometry> | any>(null);

  const [selectedAlert, setSelectedAlert] = useState<SelectedAlert | null>(null);
  const [lastSync, setLastSync] = useState<string>("Never");
  const [status, setStatus] = useState<"Ready" | "Syncing" | "Synced">("Ready");
  const [floodRisk, setFloodRisk] = useState<RiskLevel>("Low");
  const [heatRiskD, setHeatRiskD] = useState<RiskLevel>();
  const [helpOpen, setHelpOpen] = useState(false);

  // Austin lat/lon (can be replaced with geolocation)
  const lat = 30.2672;
  const lon = -97.7431;

  // Register Service Worker
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").catch(console.error);
    }
  }, []);

  // Fetch Heat Risk
  useEffect(() => {
    const timeout = setTimeout(async () => {
      try {
        const forecast = await fetchHeatRiskData(lat, lon);
        const hr = computeHeatRisk(forecast);
        setHeatRiskD(hr);
      } catch (err) {
        console.error("Error fetching risks:", err);
      }
    }, 800); // debounce ~0.8s

    return () => clearTimeout(timeout);
  }, [lat, lon]);

  // Load cached alerts
  useEffect(() => {
    (async () => {
      const cached = await loadCachedAlerts();
      if (cached) setAlertsGeoJSON(cached);
    })();
  }, []);

  // Sync handler
  const handleSync = async () => {
    setStatus("Syncing");
    const synced = await syncFloodAlerts();
    if (synced) {
      setAlertsGeoJSON(synced as GeoJSON.FeatureCollection<GeoJSON.Geometry, GeoJSON.GeoJsonProperties>);
      setLastSync(new Date().toLocaleString());
      setStatus("Synced");
    } else {
      setStatus("Ready");
    }
  };

  // ✅ Hardcoded alerts converted to GeoJSON-like objects
  const hardcodedAlerts = [
    {
      id: 1,
      name: "Zone A",
      risk: "Low",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [72.8777, 19.076],
            [72.88, 19.076],
            [72.88, 19.078],
            [72.8777, 19.078],
            [72.8777, 19.076],
          ],
        ],
      },
    },
    {
      id: 2,
      name: "Zone B",
      risk: "High",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [72.885, 19.08],
            [72.887, 19.08],
            [72.887, 19.083],
            [72.885, 19.083],
            [72.885, 19.08],
          ],
        ],
      },
    },
  ];

  return (
    <div className="h-screen w-screen relative">
      <NetworkBanner />
      <Toolbar
        status={status}
        lastSync={lastSync}
        onSync={handleSync}
        alerts={alertsGeoJSON}
        geoAlerts={hardcodedAlerts}
        floodRisk={floodRisk}
        heatRisk={heatRiskD}
      />

      <FloodMap
        alerts={alertsGeoJSON}
        onFeatureClick={(props) => {
          setSelectedAlert(props);
          if (props.floodRisk) setFloodRisk(props.floodRisk as RiskLevel);
          if (props.heatRisk) setHeatRiskD(props.heatRisk as RiskLevel);
        }}
      />

      <Legend />

      {/* Help sheet */}
      <HelpSheet open={helpOpen} onClose={() => setHelpOpen(false)} />

      {selectedAlert && (
        <Sidebar
          alert={selectedAlert}
          alerts={alertsGeoJSON || hardcodedAlerts}
          onClose={() => setSelectedAlert(null)}
        />
      )}
    </div>
  );
}
