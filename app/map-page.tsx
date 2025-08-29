 
"use client";

import { useEffect, useState } from "react";
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
};
type RiskLevel = "Low" | "Caution" | "Extreme Caution" | "Danger" | "Extreme Danger";

export default function MapPage() {
  const [alertsGeoJSON, setAlertsGeoJSON] = useState<any | null>(null);
  const [selectedAlert, setSelectedAlert] = useState<SelectedAlert | null>(null);
  const [lastSync, setLastSync] = useState<string>("Never");
  const [status, setStatus] = useState<"Ready" | "Syncing" | "Synced">("Ready");
    const [floodRisk, setFloodRisk] = useState<"Low" | "Caution" | "Extreme Caution" | "Danger" | "Extreme Danger">("Low");
  const [heatRisk, setHeatRisk] = useState<"Low" | "Caution" | "Extreme Caution" | "Danger" | "Extreme Danger">("Low");
  const [heatRiskD, setHeatRiskD] = useState<RiskLevel>("None");
  const [loading, setLoading] = useState(true);
  const [helpOpen, setHelpOpen] = useState(true);
  // Austin lat/lon (can be replaced with geolocation)
  const lat = 30.2672;
  const lon = -97.7431;
 



  // Register Service Worker
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").catch(console.error);
    }
  }, []);
useEffect(() => {
    let timeout = setTimeout(async () => {
      setLoading(true);

      try {
       // Heat risk (NWS gridpoint forecast)
        const forecast = await fetchHeatRiskData(lat, lon);
        const hr = computeHeatRisk(forecast);
        setHeatRiskD(hr);
      } catch (err) {
        console.error("Error fetching risks:", err);
      } finally {
        setLoading(false);
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
      setAlertsGeoJSON(synced);
      setLastSync(new Date().toLocaleString());
      setStatus("Synced");
    } else {
      setStatus("Ready");
    }
  };

  // ✅ Hardcoded alerts converted to GeoJSON FeatureCollection
   
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
        alerts={alertsGeoJSON }//|| }
        geoAlerts={hardcodedAlerts}
        floodRisk={floodRisk}
        heatRisk={heatRiskD}
      />

      <FloodMap
        alerts={alertsGeoJSON} 
        onFeatureClick={(props) => {setSelectedAlert(props)
          //alert(props.floodRisk)
                      if (props.floodRisk) setFloodRisk(props.severity);
            if (props.heatRisk) setHeatRisk(props.severity);
        }}
      />

      <Legend />{/* Help sheet */}
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

 
// import React, { useState } from "react";
// import FloodMap from "../components/FloodMap";
// import CombinedRiskBadge from "../components/CombinedRiskBadge";
// import NetworkBanner from "../components/NetworkBanner";

// export default function Home() {
//   const [floodRisk, setFloodRisk] = useState<"Low" | "Caution" | "Extreme Caution" | "Danger" | "Extreme Danger">("Low");
//   const [heatRisk, setHeatRisk] = useState<"Low" | "Caution" | "Extreme Caution" | "Danger" | "Extreme Danger">("Low");

//   // You can update floodRisk & heatRisk from your existing APIs via useDebouncedFetch

//   return (
//     <div className="flex flex-col min-h-screen">
//       <NetworkBanner />
//       <header className="p-4 bg-gray-900 text-white flex justify-between items-center">
//         <h1 className="text-xl font-bold">LifeLine ATX</h1>
//         <CombinedRiskBadge floodRisk={floodRisk} heatRisk={heatRisk} />
//       </header>

//       <main className="flex-1">
//         <FloodMap
//           alerts={{ type: "FeatureCollection", features: [] }}
//           onFeatureClick={(props) => {
//             if (props.floodRisk) setFloodRisk(props.floodRisk);
//             if (props.heatRisk) setHeatRisk(props.heatRisk);
//           }}
//         />
//       </main>
//     </div>
//   );
// }
