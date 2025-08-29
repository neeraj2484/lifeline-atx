// components/RiskDashboard.tsx
"use client";

import { useEffect, useState } from "react";
import FloodMap from "./FloodMap";
import AlertCard from "./AlertCard";
import { fetchAlerts } from "@/lib/fetchAlerts";
import { fetchGridpointForecast } from "@/lib/nws";
import { computeHeatRisk, computeCombinedRisk, RiskLevel } from "@/lib/risk";

type RiskDashboardProps = {
  lat: number;
  lon: number;
};

export default function RiskDashboard({ lat, lon }: RiskDashboardProps) {
  const [alerts, setAlerts] = useState<GeoJSON.FeatureCollection | null>(null);
  const [heatRisk, setHeatRisk] = useState<RiskLevel>("None");
  const [floodRisk, setFloodRisk] = useState<RiskLevel>("None");
  const [combinedRisk, setCombinedRisk] = useState<RiskLevel>("None");
  const [loading, setLoading] = useState(true);
  const [online, setOnline] = useState(true);

  // Network status banner
  useEffect(() => {
    const updateOnline = () => setOnline(navigator.onLine);
    window.addEventListener("online", updateOnline);
    window.addEventListener("offline", updateOnline);
    updateOnline();
    return () => {
      window.removeEventListener("online", updateOnline);
      window.removeEventListener("offline", updateOnline);
    };
  }, []);

  // Debounced fetch
  useEffect(() => {
    let timeout = setTimeout(async () => {
      setLoading(true);

      try {
        // Flood alerts
        const alertData = await fetchAlerts();
        setAlerts(alertData);

        // Heat risk (NWS gridpoint forecast)
        const forecast = await fetchGridpointForecast(lat, lon);
        const hr = computeHeatRisk(forecast);
        setHeatRisk(hr);

        // Flood risk → simple check from alerts
        const fr: RiskLevel =
          alertData.features.length > 0 ? "Caution" : "None";
        setFloodRisk(fr);

        // Combined
        const combined = computeCombinedRisk(fr, hr);
        setCombinedRisk(combined);
      } catch (err) {
        console.error("Error fetching risks:", err);
      } finally {
        setLoading(false);
      }
    }, 800); // debounce ~0.8s

    return () => clearTimeout(timeout);
  }, [lat, lon]);

  return (
    <div className="flex flex-col h-full">
      {/* Network banner */}
      {!online && (
        <div className="bg-yellow-500 text-white text-center p-2">
          Offline mode: showing last available data
        </div>
      )}

      {/* Risk badges */}
      <div className="flex justify-around p-2 bg-gray-100 shadow-md">
        <span className="font-bold">Flood: {floodRisk}</span>
        <span className="font-bold">Heat: {heatRisk}</span>
        <span className="font-bold text-red-600">
          Combined: {combinedRisk}
        </span>
      </div>

      {/* Map + Alerts */}
      <div className="flex-1 relative">
        {alerts && (
          <FloodMap
            alerts={alerts}
            onFeatureClick={(props) => console.log("Clicked:", props)}
          />
        )}
      </div>

      {/* Alert cards */}
      <div className="p-2 overflow-y-auto max-h-[200px] bg-white">
        {alerts && alerts.features.length > 0 ? (
          alerts.features.map((f, idx) => (
            <AlertCard key={idx} alert={f.properties} />
          ))
        ) : (
          <p className="text-gray-500">No current flood alerts</p>
        )}
      </div>
    </div>
  );
}
