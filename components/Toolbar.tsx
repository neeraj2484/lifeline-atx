// "use client";

// type Props = {
//   status: "Ready" | "Syncing" | "Synced";
//   lastSync: number | null;
//   onSync: () => void;
// };

// export default function Toolbar({ status, lastSync, onSync }: Props) {
//   return (
//     <div className="absolute top-3 left-3 z-10 bg-white/95 rounded-xl px-3 py-2 shadow">
//       <div className="flex items-center gap-3">
//         <button
//           onClick={onSync}
//           className="rounded-lg px-3 py-1 bg-blue-600 text-white text-sm"
//         >
//           Sync Alerts
//         </button>
//         <span className="text-sm">Status: {status}</span>
//         <span className="text-sm text-gray-600">
//           Last sync: {lastSync ? new Date(lastSync).toLocaleString() : "Never"}
//         </span>
//       </div>
//     </div>
//   );
// }
// "use client";

// import { useState } from "react";
// import * as turf from "@turf/turf";

// export default function Toolbar({
//   onSync,
//   alerts = [],
// }: {
//   onSync: () => void;
//   alerts?: any[];
// }) {
//   const [risk, setRisk] = useState<string>("Unknown");
//   const [lastSync, setLastSync] = useState<string>("Never");
//   const [heatRisk, setHeatRisk] = useState<string>("Unknown");

//   const handleSync = async () => {
//     await onSync();
//     setLastSync(new Date().toLocaleString());
//   };

//   const checkRisk = () => {
//     if (!navigator.geolocation) {
//       alert("Geolocation not supported");
//       return;
//     }

//     navigator.geolocation.getCurrentPosition((pos) => {
//       const pt = turf.point([pos.coords.longitude, pos.coords.latitude]);
//       let highRisk = false;

//       for (const alert of alerts) {
//         const poly = alert.geometry;
//         if (!poly) continue;

//         const geom = turf.geometry(poly.type, poly.coordinates);

//         if (turf.booleanPointInPolygon(pt, geom)) {
//           highRisk = true;
//           break;
//         }

//         const dist = turf.distance(pt, geom, { units: "miles" });
//         if (dist <= 5) {
//           highRisk = true;
//           break;
//         }
//       }

//       setRisk(highRisk ? "High" : "Low");
//     });
//   };

//   const checkHeatRisk = async () => {
//     if (!navigator.geolocation) {
//       alert("Geolocation not supported");
//       return;
//     }

//     navigator.geolocation.getCurrentPosition(async (pos) => {
//       try {
//         const lat = Number(pos.coords.latitude.toFixed(4));
//         const lon = Number(pos.coords.longitude.toFixed(4));
//         //const lat = 30.2672;
//         //const lon = -97.7431;
//         console.log(lat);
//         console.log(lon);
//         // ✅ Correct order: lat,lon
//         const metaResp = await fetch(
//           `https://api.weather.gov/points/${lat},${lon}`
//         );

//         if (!metaResp.ok) {
//           throw new Error(`Points API failed: ${metaResp.status}`);
//         }

//         const meta = await metaResp.json();
//         console.log("Gridpoint meta response:", meta);

//         const gridId = meta.properties?.gridId;
//         const gridX = meta.properties?.gridX;
//         const gridY = meta.properties?.gridY;

//         if (!gridId || gridX == null || gridY == null) {
//           throw new Error("Grid metadata missing");
//         }

//         // Step 2: Get forecast grid data
//         const gridResp = await fetch(
//           `https://api.weather.gov/gridpoints/${gridId}/${gridX},${gridY}`
//         );

//         if (!gridResp.ok) {
//           throw new Error(`Grid API failed: ${gridResp.status}`);
//         }

//         const grid = await gridResp.json();
//         console.log("Grid forecast response:", grid);

//         const tempC = grid.properties.temperature.values[0].value; // °C
//         const rh = grid.properties.relativeHumidity.values[0].value; // %
//         const tF = (tempC * 9) / 5 + 32;

//         if (tempC == null || rh == null) {
//           throw new Error("Missing temperature or humidity values");
//         }

//         // Compute Heat Index (NOAA simplified)
//         const HI =
//           -42.379 +
//           2.04901523 * tF +
//           10.14333127 * rh -
//           0.22475541 * tF * rh -
//           6.83783e-3 * tF * tF -
//           5.481717e-2 * rh * rh +
//           1.22874e-3 * tF * tF * rh +
//           8.5282e-4 * tF * rh * rh -
//           1.99e-6 * tF * tF * rh * rh;

//         let band = "Caution";
//         if (HI >= 103 && HI <= 124) band = "Extreme Caution";
//         if (HI >= 125) band = "Danger";

//         setHeatRisk(`${band} (HI=${HI.toFixed(1)}°F)`);
//       } catch (err: any) {
//         console.error("Heat risk error:", err);
//         setHeatRisk("Error fetching heat risk");
//       }
//     });
//   };

//   return (
//     <div className="absolute top-3 left-3 z-10 bg-white/95 rounded-xl px-3 py-2 shadow max-w-[90%]">
//       <div className="flex flex-col gap-2">
//         <button
//           onClick={handleSync}
//           className="px-3 py-2 bg-blue-500 text-white rounded text-sm"
//         >
//           Sync
//         </button>
//         <span className="text-sm">Last sync: {lastSync}</span>

//         <button
//           onClick={checkRisk}
//           className="px-3 py-2 bg-green-500 text-white rounded text-sm"
//         >
//           Check My Risk
//         </button>
//         <span className="text-sm">My risk: {risk}</span>

//         <button
//           onClick={checkHeatRisk}
//           className="px-3 py-2 bg-red-500 text-white rounded text-sm"
//         >
//           Check Heat Risk
//         </button>
//         <span className="text-sm">Heat risk: {heatRisk}</span>
//       </div>
//     </div>
//   );
// }
// Code1:
// "use client";

// import { useState } from "react";
// import * as turf from "@turf/turf";

// type ToolbarProps = {
//   status: string;             // ✅ now accepts status from parent
//   lastSync: string;           // ✅ now accepts lastSync from parent
//   onSync: () => void;
//   alerts?: any[];
// };

// export default function Toolbar({
//   status,
//   lastSync,
//   onSync,
//   alerts = [],
// }: ToolbarProps) {
//   const [risk, setRisk] = useState<string>("Unknown");
//   const [heatRisk, setHeatRisk] = useState<string>("Unknown");
//   const [heatReason, setHeatReason] = useState<string>("");

//   const handleSync = async () => {
//     await onSync();
//     // ⛔ don’t override parent’s lastSync — parent should update it
//     // Instead, just call onSync. Parent sets lastSync and passes it back in.
//   };

//   // Tornado/Storm alerts
//   const checkRisk = () => {
//     if (!navigator.geolocation) {
//       alert("Geolocation not supported");
//       return;
//     }

//     navigator.geolocation.getCurrentPosition((pos) => {
//       const pt = turf.point([pos.coords.longitude, pos.coords.latitude]);
//       let highRisk = false;

//       for (const alert of alerts) {
//         const poly = alert.geometry;
//         if (!poly) continue;

//         const geom = turf.geometry(poly.type, poly.coordinates);

//         if (turf.booleanPointInPolygon(pt, geom)) {
//           highRisk = true;
//           break;
//         }

//         const dist = turf.distance(pt, geom, { units: "miles" });
//         if (dist <= 5) {
//           highRisk = true;
//           break;
//         }
//       }

//       setRisk(highRisk ? "High" : "Low");
//     });
//   };

//   // Heat Risk using NWS Gridpoint data
//   const checkHeatRisk = async () => {
//     try {
//       let lat = 30.2672; // default Austin
//       let lon = -97.7431;

//       if (navigator.geolocation) {
//         await new Promise<void>((resolve) => {
//           navigator.geolocation.getCurrentPosition(
//             (pos) => {
//               lat = Number(pos.coords.latitude.toFixed(4));
//               lon = Number(pos.coords.longitude.toFixed(4));
//               resolve();
//             },
//             () => resolve()
//           );
//         });
//       }

//       const metaResp = await fetch(
//         `https://api.weather.gov/points/${lat},${lon}`
//       );
//       if (!metaResp.ok) throw new Error(`Points API failed: ${metaResp.status}`);
//       const meta = await metaResp.json();
//       const { gridId, gridX, gridY } = meta.properties || {};
//       if (!gridId || gridX == null || gridY == null) throw new Error("Grid metadata missing");

//       const gridResp = await fetch(
//         `https://api.weather.gov/gridpoints/${gridId}/${gridX},${gridY}`
//       );
//       if (!gridResp.ok) throw new Error(`Grid API failed: ${gridResp.status}`);
//       const grid = await gridResp.json();

//       const temps = grid.properties.temperature.values.slice(0, 12);
//       const rhs = grid.properties.relativeHumidity.values.slice(0, 12);

//       let maxHI = -Infinity;
//       let worstBand = "Caution";

//       temps.forEach((t, i) => {
//         const tempC = t.value;
//         const rh = rhs[i]?.value;
//         if (tempC == null || rh == null) return;

//         const tF = (tempC * 9) / 5 + 32;
//         const HI =
//           -42.379 +
//           2.04901523 * tF +
//           10.14333127 * rh -
//           0.22475541 * tF * rh -
//           6.83783e-3 * tF * tF -
//           5.481717e-2 * rh * rh +
//           1.22874e-3 * tF * tF * rh +
//           8.5282e-4 * tF * rh * rh -
//           1.99e-6 * tF * tF * rh * rh;

//         if (HI > maxHI) {
//           maxHI = HI;
//           if (HI >= 125) worstBand = "Danger";
//           else if (HI >= 103) worstBand = "Extreme Caution";
//           else worstBand = "Caution";
//         }
//       });

//       setHeatRisk(`${worstBand} (Max HI=${maxHI.toFixed(1)}°F)`);

//       if (worstBand === "Caution")
//         setHeatReason("Moderate discomfort expected, hydrate often.");
//       if (worstBand === "Extreme Caution")
//         setHeatReason("Heat cramps/exhaustion likely if outdoors too long. Take breaks.");
//       if (worstBand === "Danger")
//         setHeatReason("Heatstroke possible. Avoid outdoor activity during peak hours.");
//     } catch (err) {
//       console.error("Heat risk error:", err);
//       setHeatRisk("Error fetching heat risk");
//       setHeatReason("");
//     }
//   };

//   return (
//     <div className="absolute top-3 left-3 z-10 bg-white/95 rounded-xl px-3 py-2 shadow max-w-[90%]">
//       <div className="flex flex-col gap-2">
//         {/* Status */}
//         <span className="text-sm font-semibold">Status: {status}</span>
//         <span className="text-sm">Last sync: {lastSync}</span>

//         {/* Sync */}
//         <button
//           onClick={handleSync}
//           className="px-3 py-2 bg-blue-500 text-white rounded text-sm"
//         >
//           Sync
//         </button>

//         {/* Alerts Risk */}
//         <button
//           onClick={checkRisk}
//           className="px-3 py-2 bg-green-500 text-white rounded text-sm"
//         >
//           Check My Risk
//         </button>
//         <span className="text-sm">My risk: {risk}</span>

//         {/* Heat Risk */}
//         <button
//           onClick={checkHeatRisk}
//           className="px-3 py-2 bg-red-500 text-white rounded text-sm"
//         >
//           Check Heat Risk
//         </button>
//         <span className="text-sm font-bold">Heat risk: {heatRisk}</span>

//         {/* Explanation card */}
//         {heatReason && (
//           <div className="mt-2 p-2 bg-red-50 border border-red-300 rounded-lg text-xs text-red-800">
//             {heatReason}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
// Code2:
// "use client";

// import { useEffect, useState } from "react";
// import { fetchHeatRiskData } from "@/lib/nws";
// import { classifyHeatIndex, HeatBand } from "@/lib/heatIndex";
// import HeatBadge from "./HeatBadge";
// import RiskCard from "./RiskCard";

// export default function Toolbar() {
//   const [band, setBand] = useState<HeatBand>("Safe");
//   const [hiMax, setHiMax] = useState<number>(0);
//   const [details, setDetails] = useState<null | {
//     band: HeatBand;
//     hiMax: number;
//     reason: string;
//     samples: any[];
//     forecastJSON: any;
//   }>(null);
//   const [open, setOpen] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const loadHeat = async () => {
//     setLoading(true);
//     try {
//       const { samples, forecastJSON } = await fetchHeatRiskData(30.2672, -97.7431); // Austin
//       const worst = samples.reduce((a, b) => (b.hi > a.hi ? b : a), samples[0]);
//       const band = classifyHeatIndex(worst.hi);
//       const reason = `Based on NWS gridpoint forecast for the next ~72h, the maximum Heat Index is ${Math.round(
//         worst.hi
//       )}°F around ${new Date(worst.timeStart).toLocaleString()}.`;

//       setBand(band);
//       setHiMax(worst.hi);
//       setDetails({ band, hiMax: worst.hi, reason, samples, forecastJSON });
//     } catch (e) {
//       console.error(e);
//       setBand("Safe");
//       setHiMax(0);
//       setDetails(null);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     loadHeat();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   return (
//     <>
//       <header className="bg-blue-700 text-white px-4 py-3 flex items-center justify-between">
//         <h1 className="text-lg font-semibold">Weather Risk Dashboard</h1>
//         <div className="flex items-center gap-3">
//           <div className="flex items-center gap-2">
//             <span className="text-sm">Heat:</span>
//             <HeatBadge band={band} />
//           </div>
//           <button
//             onClick={loadHeat}
//             className="px-3 py-1 rounded bg-white/15 hover:bg-white/25 text-white text-sm"
//             disabled={loading}
//           >
//             {loading ? "Refreshing…" : "Refresh"}
//           </button>
//           <button
//             onClick={() => setOpen(true)}
//             className="px-3 py-1 rounded bg-white text-blue-700 text-sm font-semibold"
//             disabled={!details}
//           >
//             View Details
//           </button>
//         </div>
//       </header>

//       {open && details && (
//         <div className="fixed inset-0 bg-black/30 flex items-end sm:items-center justify-center p-3 z-50">
//           <RiskCard
//             band={details.band}
//             hiMax={details.hiMax}
//             reason={details.reason}
//             samples={details.samples}
//             forecastJSON={details.forecastJSON}
//             onClose={() => setOpen(false)}
//           />
//         </div>
//       )}
//     </>
//   );
// }
// // "use client";

// // import { useState, useEffect } from "react";
// // import * as turf from "@turf/turf";
// // import { fetchHeatRiskData } from "@/lib/nws";
// // import { classifyHeatIndex, HeatBand } from "@/lib/heatIndex";
// // import HeatBadge from "./HeatBadge";
// // import RiskCard from "./RiskCard";

// // type ToolbarProps = {
// //   status: string;
// //   lastSync: string;
// //   onSync: () => void;
// //   alerts?: any[];
// // };

// // export default function Toolbar({
// //   status,
// //   lastSync,
// //   onSync,
// //   alerts = [],
// // }: ToolbarProps) {
// //   const [risk, setRisk] = useState<string>("Unknown");

// //   // 🔥 Heat dashboard state
// //   const [band, setBand] = useState<HeatBand>("Safe");
// //   const [hiMax, setHiMax] = useState<number>(0);
// //   const [details, setDetails] = useState<null | {
// //     band: HeatBand;
// //     hiMax: number;
// //     reason: string;
// //     samples: any[];
// //     forecastJSON: any;
// //   }>(null);
// //   const [open, setOpen] = useState(false);
// //   const [loading, setLoading] = useState(false);

// //   // 🌀 Tornado/Storm Risk
// //   const checkRisk = () => {
// //     if (!navigator.geolocation) {
// //       alert("Geolocation not supported");
// //       return;
// //     }
// //     navigator.geolocation.getCurrentPosition((pos) => {
// //       const pt = turf.point([pos.coords.longitude, pos.coords.latitude]);
// //       let highRisk = false;
// // if(!alerts.type)
// // {
// //  for (const alert of alerts) {
// //         const poly = alert.geometry;
// //         if (!poly) continue;
// //         const geom = turf.geometry(poly.type, poly.coordinates);

// //         if (turf.booleanPointInPolygon(pt, geom)) {
// //           highRisk = true;
// //           break;
// //         }

// //         const dist = turf.distance(pt, geom, { units: "miles" });
// //         if (dist <= 5) {
// //           highRisk = true;
// //           break;
// //         }
// //       }
// //       setRisk(highRisk ? "High" : "Low");
// // }
     
// //     });
// //   };

// //   // 🌡️ Load Heat Risk Dashboard
// //   const loadHeat = async () => {
// //     setLoading(true);
// //     try {
// //       let lat = 30.2672; // Austin default
// //       let lon = -97.7431;

// //       if (navigator.geolocation) {
// //         await new Promise<void>((resolve) => {
// //           navigator.geolocation.getCurrentPosition(
// //             (pos) => {
// //               lat = Number(pos.coords.latitude.toFixed(4));
// //               lon = Number(pos.coords.longitude.toFixed(4));
// //               resolve();
// //             },
// //             () => resolve()
// //           );
// //         });
// //       }

// //       const { samples, forecastJSON } = await fetchHeatRiskData(lat, lon);
// //       const worst = samples.reduce((a, b) => (b.hi > a.hi ? b : a), samples[0]);
// //       const band = classifyHeatIndex(worst.hi);
// //       const reason = `Based on NWS gridpoint forecast for the next ~72h, the maximum Heat Index is ${Math.round(
// //         worst.hi
// //       )}°F around ${new Date(worst.timeStart).toLocaleString()}.`;

// //       setBand(band);
// //       setHiMax(worst.hi);
// //       setDetails({ band, hiMax: worst.hi, reason, samples, forecastJSON });
// //     } catch (e) {
// //       console.error(e);
// //       setBand("Safe");
// //       setHiMax(0);
// //       setDetails(null);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   useEffect(() => {
// //     loadHeat();
// //     // eslint-disable-next-line react-hooks/exhaustive-deps
// //   }, []);

// //   return (
// //     <>
// //       {/* Top Toolbar */}
// //       <header className="bg-blue-700 text-white px-4 py-3 flex items-center justify-between">
// //         <h1 className="text-lg font-semibold">lifeline-atx Dashboard</h1>
// //         <div className="flex items-center gap-4">
// //           {/* Sync + Status */}
// //           <div className="text-sm">
// //             <div>Status: {status}</div>
// //             <div>Last sync: {lastSync}</div>
// //           </div>
// //           <button
// //             onClick={onSync}
// //             className="px-3 py-1 rounded bg-white/15 hover:bg-white/25 text-white text-sm"
// //           >
// //             Sync
// //           </button>

// //           {/* Tornado/Storm Risk */}
// //           <button
// //             onClick={checkRisk}
// //             className="px-3 py-1 rounded bg-green-600 hover:bg-green-700 text-white text-sm"
// //           >
// //             Check My Risk
// //           </button>
// //           <span className="text-sm">My risk: {risk}</span>

// //           {/* Heat Risk quick badge */}
// //           <div className="flex items-center gap-2">
// //             <span className="text-sm">Heat:</span>
// //             <HeatBadge band={band} />
// //           </div>

// //           {/* Heat actions */}
// //           <button
// //             onClick={loadHeat}
// //             className="px-3 py-1 rounded bg-white/15 hover:bg-white/25 text-white text-sm"
// //             disabled={loading}
// //           >
// //             {loading ? "Refreshing…" : "Refresh"}
// //           </button>
// //           <button
// //             onClick={() => setOpen(true)}
// //             className="px-3 py-1 rounded bg-white text-blue-700 text-sm font-semibold"
// //             disabled={!details}
// //           >
// //             View Details
// //           </button>
// //         </div>
// //       </header>

// //       {/* Heat Risk Detailed Card */}
// //       {open && details && (
// //         <div className="fixed inset-0 bg-black/30 flex items-end sm:items-center justify-center p-3 z-50">
// //           <RiskCard
// //             band={details.band}
// //             hiMax={details.hiMax}
// //             reason={details.reason}
// //             samples={details.samples}
// //             forecastJSON={details.forecastJSON}
// //             onClose={() => setOpen(false)}
// //           />
// //         </div>
// //       )}
// //     </>
// //   );
// // }
// "use client";

// import { useState, useEffect } from "react";
// import * as turf from "@turf/turf";
// import { fetchHeatRiskData } from "@/lib/nws";
// import { classifyHeatIndex, HeatBand } from "@/lib/heatIndex";
// import HeatBadge from "./HeatBadge";
// import RiskCard from "./RiskCard";
// import CombinedRiskBadge from "../components/CombinedRiskBadge";

// type ToolbarProps = {
//   status: string;
//   lastSync: string;
//   onSync: () => void;
//   alerts?:[];
//   geoAlerts?: {
//     id: string | number;
//     name?: string;
//     risk?: string;
//     geometry?: {
//       type: string;
//       coordinates: any[];
//     };
//   }[];
//   floodRisk?:any;
//   heatRisk?:any;
// };

// export default function Toolbar({
//   status,
//   lastSync,
//   onSync,
//   alerts = [],
//   geoAlerts=[],
//   floodRisk,
//   heatRisk
// }: ToolbarProps) {
//   const [risk, setRisk] = useState<string>("Unknown");

//   // 🔥 Heat dashboard state
//   const [band, setBand] = useState<HeatBand>("Safe");
//   const [hiMax, setHiMax] = useState<number>(0); 
//   const [details, setDetails] = useState<null | {
//     band: HeatBand;
//     hiMax: number;
//     reason: string;
//     samples: any[];
//     forecastJSON: any;
//   }>(null);
//   const [open, setOpen] = useState(false);
//   const [loading, setLoading] = useState(false);
  
//   // 🌀 Tornado/Storm/Flood Risk from GeoJSON
//   const checkRisk = () => {
//     if (!navigator.geolocation) {
//       alert("Geolocation not supported");
//       return;
//     }

//     navigator.geolocation.getCurrentPosition((pos) => {
//       const pt = turf.point([pos.coords.longitude, pos.coords.latitude]);
//       let highRisk = false;

//       for (const alert of geoAlerts) {
//         if (!alert.geometry) continue;

//         const geom = turf.geometry(alert.geometry.type, alert.geometry.coordinates);

//         // If inside polygon → high risk
//         if (turf.booleanPointInPolygon(pt, geom)) {
//           highRisk = true;
//           break;
//         }

//         // Otherwise, check distance from polygon boundary (within 5 miles)
//         const centroid = turf.centroid(geom);
//         const dist = turf.distance(pt, centroid, { units: "miles" });
//         if (dist <= 5) {
//           highRisk = true;
//           break;
//         }
//       }

//       setRisk(highRisk ? "High" : "Low");
//     });
//   };

//   // 🌡️ Load Heat Risk Dashboard
//   const loadHeat = async () => {
//     setLoading(true);
//     try {
//       let lat = 30.2672; // Austin default
//       let lon = -97.7431;

//       if (navigator.geolocation) {
//         await new Promise<void>((resolve) => {
//           navigator.geolocation.getCurrentPosition(
//             (pos) => {
//               lat = Number(pos.coords.latitude.toFixed(4));
//               lon = Number(pos.coords.longitude.toFixed(4));
//               resolve();
//             },
//             () => resolve()
//           );
//         });
//       }

//       const { samples, forecastJSON } = await fetchHeatRiskData(lat, lon);
//       const worst = samples.reduce((a, b) => (b.hi > a.hi ? b : a), samples[0]);
//       const band = classifyHeatIndex(worst.hi);
//       const reason = `Based on NWS forecast for the next ~72h, the maximum Heat Index is ${Math.round(
//         worst.hi
//       )}°F around ${new Date(worst.timeStart).toLocaleString()}.`;

//       setBand(band);
//       setHiMax(worst.hi);
//       setDetails({ band, hiMax: worst.hi, reason, samples, forecastJSON });
//     } catch (e) {
//       console.error(e);
//       setBand("Safe");
//       setHiMax(0);
//       setDetails(null);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     loadHeat();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   return (
//     <> 

// <header className="bg-blue-700 text-white px-4 py-3">
//   <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
//     {/* Title */}
//     <h1 className="text-lg font-semibold text-center sm:text-left">
//       Lifeline-ATX Dashboard
//     </h1>

//     {/* Right side controls */}
//     <div className="flex flex-wrap sm:flex-nowrap items-center justify-center sm:justify-end gap-2">
//       {/* Sync + Status */}
//       <div className="text-xs sm:text-sm bg-blue-800/50 px-2 py-1 rounded">
//         <div>Status: {status}</div>
//         <div>Last sync: {lastSync}</div>
//       </div>

//       <button
//         onClick={onSync}
//         className="px-3 py-1 rounded bg-white/15 hover:bg-white/25 text-white text-xs sm:text-sm"
//       >
//         Sync
//       </button>

//       {<CombinedRiskBadge floodRisk={floodRisk} heatRisk={heatRisk} />}

//       {/* Risk buttons */}
//       <button
//         onClick={checkRisk}
//         className="px-3 py-1 rounded bg-green-600 hover:bg-green-700 text-white text-xs sm:text-sm"
//       >
//         Check My Risk
//       </button>
//       <span className="text-xs sm:text-sm">My risk: {risk}</span>
// <div className="flex items-center gap-1 sm:gap-2" id="safety-badge">
             
//           </div>
// <div className="flex items-center gap-1 sm:gap-2" id="safety-card">
             
//           </div> 
//       {/* Heat Risk quick badge */}
//       <div className="flex items-center gap-1 sm:gap-2">
//         <span className="text-xs sm:text-sm">Heat:</span>
//         <HeatBadge band={band} />
//       </div>

//       {/* Heat actions */}
//       <button
//         onClick={loadHeat}
//         className="px-3 py-1 rounded bg-white/15 hover:bg-white/25 text-white text-xs sm:text-sm"
//         disabled={loading}
//       >
//         {loading ? "Refreshing…" : "Refresh"}
//       </button>
//       <button
//         onClick={() => setOpen(true)}
//         className="px-3 py-1 rounded bg-white text-blue-700 text-xs sm:text-sm font-semibold"
//         disabled={!details}
//       >
//         View Details
//       </button>
//     </div>
//   </div>
// </header>

//       {/* Heat Risk Detailed Card */}
//       {open && details && (
//         <div className="fixed inset-0 bg-black/30 flex items-end sm:items-center justify-center p-3 z-50">
//           <RiskCard
//             band={details.band}
//             hiMax={details.hiMax}
//             reason={details.reason}
//             samples={details.samples}
//             forecastJSON={details.forecastJSON}
//             onClose={() => setOpen(false)}
//           />
//         </div>
//       )}
//     </>
//   );
// }


// "use client";

// import { useState, useEffect } from "react";
// import * as turf from "@turf/turf";
// import { fetchHeatRiskData } from "@/lib/nws";
// import { classifyHeatIndex, HeatBand } from "@/lib/heatIndex";
// import HeatBadge from "./HeatBadge";
// import RiskCard from "./RiskCard";
// import CombinedRiskBadge from "../components/CombinedRiskBadge";

// type ToolbarProps = {
//   status: string;
//   lastSync: string;
//   onSync: () => void;
//   alerts?: [];
//   geoAlerts?: {
//     id: string | number;
//     name?: string;
//     risk?: string;
//     geometry?: {
//       type: string;
//       coordinates: any[];
//     };
//   }[];
//   floodRisk?: any;
//   heatRisk?: any;
// };

// export default function Toolbar({
//   status,
//   lastSync,
//   onSync,
//   alerts = [],
//   geoAlerts = [],
//   floodRisk,
//   heatRisk,
// }: ToolbarProps) {
//   const [risk, setRisk] = useState<string>("Unknown");

//   // 🔥 Heat dashboard state
//   const [band, setBand] = useState<HeatBand>("Safe");
//   const [hiMax, setHiMax] = useState<number>(0);
//   const [details, setDetails] = useState<null | {
//     band: HeatBand;
//     hiMax: number;
//     reason: string;
//     samples: any[];
//     forecastJSON: any;
//   }>(null);
//   const [open, setOpen] = useState(false);
//   const [loading, setLoading] = useState(false);

//   // 📱 Mobile menu toggle
//   const [menuOpen, setMenuOpen] = useState(false);

//   // 🌀 Tornado/Storm/Flood Risk from GeoJSON
//   const checkRisk = () => {
//     if (!navigator.geolocation) {
//       alert("Geolocation not supported");
//       return;
//     }

//     navigator.geolocation.getCurrentPosition((pos) => {
//       const pt = turf.point([pos.coords.longitude, pos.coords.latitude]);
//       let highRisk = false;

//       for (const alert of geoAlerts) {
//         if (!alert.geometry) continue;

//         const geom = turf.geometry(alert.geometry.type, alert.geometry.coordinates);

//         if (turf.booleanPointInPolygon(pt, geom)) {
//           highRisk = true;
//           break;
//         }

//         const centroid = turf.centroid(geom);
//         const dist = turf.distance(pt, centroid, { units: "miles" });
//         if (dist <= 5) {
//           highRisk = true;
//           break;
//         }
//       }

//       setRisk(highRisk ? "High" : "Low");
//     });
//   };

//   // 🌡️ Load Heat Risk Dashboard
//   const loadHeat = async () => {
//     setLoading(true);
//     try {
//       let lat = 30.2672; // Austin default
//       let lon = -97.7431;

//       if (navigator.geolocation) {
//         await new Promise<void>((resolve) => {
//           navigator.geolocation.getCurrentPosition(
//             (pos) => {
//               lat = Number(pos.coords.latitude.toFixed(4));
//               lon = Number(pos.coords.longitude.toFixed(4));
//               resolve();
//             },
//             () => resolve()
//           );
//         });
//       }

//       const { samples, forecastJSON } = await fetchHeatRiskData(lat, lon);
//       const worst = samples.reduce((a, b) => (b.hi > a.hi ? b : a), samples[0]);
//       const band = classifyHeatIndex(worst.hi);
//       const reason = `Based on NWS forecast for the next ~72h, the maximum Heat Index is ${Math.round(
//         worst.hi
//       )}°F around ${new Date(worst.timeStart).toLocaleString()}.`;

//       setBand(band);
//       setHiMax(worst.hi);
//       setDetails({ band, hiMax: worst.hi, reason, samples, forecastJSON });
//     } catch (e) {
//       console.error(e);
//       setBand("Safe");
//       setHiMax(0);
//       setDetails(null);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     loadHeat();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   return (
//     <>
//       {/* HEADER */}
//       <header className="bg-blue-700 text-white px-4 py-3 flex items-center justify-between">
//         {/* Title */}
//         <h1 className="text-lg font-semibold">Lifeline-ATX Dashboard</h1>

//         {/* Desktop controls */}
//         <div className="hidden sm:flex items-center gap-2">
//           {/* Sync + Status */}
//           <div className="text-xs sm:text-sm bg-blue-800/50 px-2 py-1 rounded">
//             <div>Status: {status}</div>
//             <div>Last sync: {lastSync}</div>
//           </div>

//           <button
//             onClick={onSync}
//             className="px-3 py-1 rounded bg-white/15 hover:bg-white/25 text-white text-xs sm:text-sm"
//           >
//             Sync
//           </button>

//           <CombinedRiskBadge floodRisk={floodRisk} heatRisk={heatRisk} />

//           <button
//             onClick={checkRisk}
//             className="px-3 py-1 rounded bg-green-600 hover:bg-green-700 text-white text-xs sm:text-sm"
//           >
//             Check My Risk
//           </button>
//           <span className="text-xs sm:text-sm">My risk: {risk}</span>
// <div className="flex items-center gap-1 sm:gap-2" id="safety-badge">
             
//            </div>
//  <div className="flex items-center gap-1 sm:gap-2" id="safety-card">
             
//            </div> 
//           <div className="flex items-center gap-1 sm:gap-2">
//             <span className="text-xs sm:text-sm">Heat:</span>
//             <HeatBadge band={band} />
//           </div>

//           <button
//             onClick={loadHeat}
//             className="px-3 py-1 rounded bg-white/15 hover:bg-white/25 text-white text-xs sm:text-sm"
//             disabled={loading}
//           >
//             {loading ? "Refreshing…" : "Refresh"}
//           </button>

//           <button
//             onClick={() => setOpen(true)}
//             className="px-3 py-1 rounded bg-white text-blue-700 text-xs sm:text-sm font-semibold"
//             disabled={!details}
//           >
//             View Details
//           </button>
//         </div>

//         {/* Hamburger for mobile */}
//         <button
//           className="sm:hidden text-white text-2xl"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           {menuOpen ? "✕" : "☰"}
//         </button>
//       </header>

//       {/* Mobile dropdown menu */}
//       {menuOpen && (
//         <div className="sm:hidden bg-blue-600 text-white p-3 space-y-3">
//           <div className="text-xs bg-blue-800/50 px-2 py-1 rounded">
//             <div>Status: {status}</div>
//             <div>Last sync: {lastSync}</div>
//           </div>

//           <button
//             onClick={onSync}
//             className="block w-full px-3 py-2 rounded bg-white/15 hover:bg-white/25 text-left"
//           >
//             Sync
//           </button>

//           <CombinedRiskBadge floodRisk={floodRisk} heatRisk={heatRisk} />

//           <button
//             onClick={checkRisk}
//             className="block w-full px-3 py-2 rounded bg-green-600 hover:bg-green-700 text-left"
//           >
//             Check My Risk (Now: {risk})
//           </button>

//           <div className="flex items-center gap-2">
//             <span>Heat:</span>
//             <HeatBadge band={band} />
//           </div>

//           <button
//             onClick={loadHeat}
//             className="block w-full px-3 py-2 rounded bg-white/15 hover:bg-white/25 text-left"
//             disabled={loading}
//           >
//             {loading ? "Refreshing…" : "Refresh"}
//           </button>

//           <button
//             onClick={() => setOpen(true)}
//             className="block w-full px-3 py-2 rounded bg-white text-blue-700 font-semibold text-left"
//             disabled={!details}
//           >
//             View Details
//           </button>
//         </div>
//       )}

//       {/* Heat Risk Detailed Card */}
//       {open && details && (
//         <div className="fixed inset-0 bg-black/30 flex items-end sm:items-center justify-center p-3 z-50">
//           <RiskCard
//             band={details.band}
//             hiMax={details.hiMax}
//             reason={details.reason}
//             samples={details.samples}
//             forecastJSON={details.forecastJSON}
//             onClose={() => setOpen(false)}
//           />
//         </div>
//       )}
//     </>
//   );
// }
"use client";

import { useState, useEffect } from "react";
import * as turf from "@turf/turf";
import { fetchHeatRiskData } from "@/lib/nws";
import { classifyHeatIndex, HeatBand } from "@/lib/heatIndex";
import HeatBadge from "./HeatBadge";
import RiskCard from "./RiskCard";
import CombinedRiskBadge from "../components/CombinedRiskBadge";
import { Menu, X } from "lucide-react";
import HelpSheet from "./HelpSheet";
type ToolbarProps = {
  status: string;
  lastSync: string;
  onSync: () => void;
  alerts?: [];
  geoAlerts?: {
    id: string | number;
    name?: string;
    risk?: string;
    geometry?: {
      type: string;
      coordinates: any[];
    };
  }[];
  floodRisk?: any;
  heatRisk?: any;
};

export default function Toolbar({
  status,
  lastSync,
  onSync,
  alerts = [],
  geoAlerts = [],
  floodRisk,
  heatRisk,
}: ToolbarProps) {
  const [risk, setRisk] = useState<string>("Unknown");

  // Heat dashboard state
  const [band, setBand] = useState<HeatBand>("Safe");
  const [hiMax, setHiMax] = useState<number>(0);
  const [details, setDetails] = useState<null | {
    band: HeatBand;
    hiMax: number;
    reason: string;
    samples: any[];
    forecastJSON: any;
  }>(null);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  // Mobile menu toggle
  const [menuOpen, setMenuOpen] = useState(false);

  const checkRisk = () => {
    if (!navigator.geolocation) {
      alert("Geolocation not supported");
      return;
    }
    navigator.geolocation.getCurrentPosition((pos) => {
      const pt = turf.point([pos.coords.longitude, pos.coords.latitude]);
      let highRisk = false;

      for (const alert of geoAlerts) {
        if (!alert.geometry) continue;
        const geom = turf.geometry(alert.geometry.type, alert.geometry.coordinates);

        if (turf.booleanPointInPolygon(pt, geom)) {
          highRisk = true;
          break;
        }

        const centroid = turf.centroid(geom);
        const dist = turf.distance(pt, centroid, { units: "miles" });
        if (dist <= 5) {
          highRisk = true;
          break;
        }
      }
      setRisk(highRisk ? "High" : "Low");
    });
  };

  const loadHeat = async () => {
    setLoading(true);
    try {
      let lat = 30.2672;
      let lon = -97.7431;

      if (navigator.geolocation) {
        await new Promise<void>((resolve) => {
          navigator.geolocation.getCurrentPosition(
            (pos) => {
              lat = Number(pos.coords.latitude.toFixed(4));
              lon = Number(pos.coords.longitude.toFixed(4));
              resolve();
            },
            () => resolve()
          );
        });
      }

      const { samples, forecastJSON } = await fetchHeatRiskData(lat, lon);
      const worst = samples.reduce((a, b) => (b.hi > a.hi ? b : a), samples[0]);
      const band = classifyHeatIndex(worst.hi);
      const reason = `Based on NWS forecast for the next ~72h, the maximum Heat Index is ${Math.round(
        worst.hi
      )}°F around ${new Date(worst.timeStart).toLocaleString()}.`;

      setBand(band);
      setHiMax(worst.hi);
      setDetails({ band, hiMax: worst.hi, reason, samples, forecastJSON });
    } catch (e) {
      console.error(e);
      setBand("Safe");
      setHiMax(0);
      setDetails(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadHeat();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {/* HEADER */}
      <header className="bg-blue-700 text-white px-4 py-3 flex items-center justify-between">
        <h1 className="text-lg font-semibold">Lifeline-ATX Dashboard</h1>

        {/* Desktop controls */}
        <div className="hidden sm:flex items-center gap-2">
          <div className="text-xs sm:text-sm bg-blue-800/50 px-2 py-1 rounded">
            <div>Status: {status}</div>
            <div>Last sync: {lastSync}</div>
          </div>

          <button
            onClick={onSync}
            className="px-3 py-1 rounded bg-white/15 hover:bg-white/25 text-xs sm:text-sm"
          >
            Sync
          </button>

          <CombinedRiskBadge floodRisk={floodRisk} heatRisk={heatRisk} />

          <button
            onClick={checkRisk}
            className="px-3 py-1 rounded bg-green-600 hover:bg-green-700 text-xs sm:text-sm"
          >
            Check My Risk
          </button>

          {/* ✅ My risk text (DESKTOP) */}
          <span className="text-xs sm:text-sm">My risk: {risk}</span>

          {/* ✅ Safety placeholders (DESKTOP) */}
          <div className="flex items-center gap-1 sm:gap-2" id="safety-badge" />
          <div className="flex items-center gap-1 sm:gap-2" id="safety-card" />

          <div className="flex items-center gap-2">
            <span className="text-xs sm:text-sm">Heat:</span>
            <HeatBadge band={band} />
          </div>

          <button
            onClick={loadHeat}
            className="px-3 py-1 rounded bg-white/15 hover:bg-white/25 text-xs sm:text-sm"
            disabled={loading}
          >
            {loading ? "Refreshing…" : "Refresh"}
          </button>

          <button
            onClick={() => setOpen(true)}
            className="px-3 py-1 rounded bg-white text-blue-700 text-xs sm:text-sm font-semibold"
            disabled={!details}
          >
            View Details
          </button>
        </div>

        {/* Hamburger for mobile */}
        <button
          className="sm:hidden p-2 rounded hover:bg-blue-600"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="sm:hidden bg-blue-600 text-white p-4 space-y-3">
          <div className="text-xs bg-blue-800/50 px-2 py-1 rounded">
            <div>Status: {status}</div>
            <div>Last sync: {lastSync}</div>
          </div>

          <button
            onClick={onSync}
            className="block w-full px-3 py-2 rounded bg-white/15 hover:bg-white/25 text-left"
          >
            Sync
          </button>

          <CombinedRiskBadge floodRisk={floodRisk} heatRisk={heatRisk} />

          <button
            onClick={checkRisk}
            className="block w-full px-3 py-2 rounded bg-green-600 hover:bg-green-700 text-left"
          >
            Check My Risk
          </button>

          {/* ✅ My risk text (MOBILE) */}
          <div className="text-sm">My risk: {risk}</div>

          {/* ✅ Safety placeholders (MOBILE) */}
          <div className="flex items-center gap-2" id="safety-badge" />
          <div className="flex items-center gap-2" id="safety-card" />

          <div className="flex items-center gap-2">
            <span>Heat:</span>
            <HeatBadge band={band} />
          </div>

          <button
            onClick={loadHeat}
            className="block w-full px-3 py-2 rounded bg-white/15 hover:bg-white/25 text-left"
            disabled={loading}
          >
            {loading ? "Refreshing…" : "Refresh"}
          </button>

          <button
            onClick={() => setOpen(true)}
            className="block w-full px-3 py-2 rounded bg-white text-blue-700 font-semibold text-left"
            disabled={!details}
          >
            View Details
          </button>
        </div>
      )}

      {/* Heat Risk Detailed Card */}
      {open && details && (
        <div className="fixed inset-0 bg-black/30 flex items-end sm:items-center justify-center p-3 z-50">
          <RiskCard
            band={details.band}
            hiMax={details.hiMax}
            reason={details.reason}
            samples={details.samples}
            forecastJSON={details.forecastJSON}
            onClose={() => setOpen(false)}
          />
        </div>
      )}
    </>
  );
}
