// "use client";
// import { useEffect, useRef } from "react";
// import mapboxgl from "mapbox-gl";
// import "mapbox-gl/dist/mapbox-gl.css"; 
// import { fetchIncidents } from "../lib/fetchSafety";

// import { insertMockAlert } from "@/lib/mockData";

// mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || "";

// type FloodMapProps = {
//   alerts: GeoJSON.FeatureCollection;
//   incidents?: GeoJSON.FeatureCollection; // APD data
//   onFeatureClick?: (props: any) => void;
// };

// export default function FloodMap({ alerts, incidents, onFeatureClick }: FloodMapProps) {
//   const mapContainer = useRef<HTMLDivElement>(null);
//   const mapRef = useRef<mapboxgl.Map | null>(null);
//   //console.log("alerts", alerts);
//   //insertMockAlert();

//   useEffect(() => {
//     if (!mapContainer.current) return;

//     const map = new mapboxgl.Map({
//       container: mapContainer.current,
//       style: "mapbox://styles/mapbox/streets-v11",
//       center: [-97.7431, 30.2672], // Austin
//       zoom: 12,
//     });

//     mapRef.current = map;

//     map.on("load", () => {
//       /** ---- FLOOD ALERTS ---- */
//       if (map.getSource("alerts")) {
//         (map.getSource("alerts") as mapboxgl.GeoJSONSource).setData(alerts);
//       } else {
//         map.addSource("alerts", { type: "geojson", data: alerts });
//       }

//       if (!map.getLayer("alerts-fill")) {
//         map.addLayer({
//           id: "alerts-fill",
//           type: "fill",
//           source: "alerts",
//           paint: {
//             "fill-color": [
//               "match",
//               ["get", "risk"],
//               "Low", "#00FF00",
//               "Medium", "#FFA500",
//               "High", "#FF0000",
//               "#00FF00",
//             ],
//             "fill-opacity": 0.5,
//           },
//         });
//       }

//       if (!map.getLayer("alerts-border")) {
//         map.addLayer({
//           id: "alerts-border",
//           type: "line",
//           source: "alerts",
//           paint: {
//             "line-color": "#000",
//             "line-width": 2,
//           },
//         });
//       }
// console.log("incidents",incidents);
//       /** ---- APD INCIDENT HEATMAP ---- */
//       if (incidents && incidents.type === "FeatureCollection" && incidents.features?.length > 0) {
//         if (map.getSource("apd-incidents")) {
//           (map.getSource("apd-incidents") as mapboxgl.GeoJSONSource).setData(incidents);
//         } else {
//           map.addSource("apd-incidents", { type: "geojson", data: incidents });

//           map.addLayer({
//             id: "incidents-heat",
//             type: "heatmap",
//             source: "apd-incidents",
//             maxzoom: 15,
//             paint: {
//               "heatmap-weight": 1,
//               "heatmap-intensity": [
//                 "interpolate", ["linear"], ["zoom"],
//                 0, 1,
//                 15, 3,
//               ],
//               "heatmap-color": [
//                 "interpolate", ["linear"], ["heatmap-density"],
//                 0, "rgba(0,0,255,0)",
//                 0.3, "blue",
//                 0.6, "orange",
//                 1, "red",
//               ],
//               "heatmap-radius": [
//                 "interpolate", ["linear"], ["zoom"],
//                 0, 2,
//                 14, 20,
//               ],
//               "heatmap-opacity": 0.6,
//             },
//           });
//         }
//       }
//       console.log(map);

//       /** ---- CLICK HANDLER ---- */
//       map.on("click", "alerts-fill", (e) => {
//         if (e.features && e.features.length > 0 && onFeatureClick) {
//           onFeatureClick(e.features[0].properties);
//         }
//       });

//       /** ---- SAFETY LAYER ---- */
//       //SafetyLayer(map); // ✅ Call SafetyLayer after map + alerts/heatmap load
//  {mapRef.current && <SafetyLayer map={mapRef.current} />}

//     });

//     return () => {
//       map.remove();
//     };
//   }, [alerts, incidents, onFeatureClick]);


//  useEffect(() => {
//     if (!mapRef.current) return;
// console.log("SafetyLayer");
//     let cancelled = false;

//     const loadData = async () => {
//       try {
//         const incidents = await fetchIncidents();
//         if (cancelled) return;

//         // ✅ Already returns GeoJSON from fetchIncidents
//         console.log("Fetched incidents:", incidents);

//         if (!mapRef.current.getSource("safety-incidents")) {
//           mapRef.current.addSource("safety-incidents", {
//             type: "geojson",
//             data: incidents,
//           });

//           // 🔥 Heatmap layer
//           mapRef.current.addLayer({
//             id: "safety-heat",
//             type: "heatmap",
//             source: "safety-incidents",
//             maxzoom: 15,
//             paint: {
//               "heatmap-weight": [
//                 "interpolate",
//                 ["linear"],
//                 ["get", "date"], // numeric timestamp
//                 0, 0,
//                 Date.now(), 1,
//               ],
//               "heatmap-intensity": 1,
//               "heatmap-radius": 20,
//               "heatmap-opacity": 0.6,
//             },
//           });

//           // 🎯 Circle fallback (visible when zoomed in, or if heatmap fails)
//           mapRef.current.addLayer({
//             id: "safety-points",
//             type: "circle",
//             source: "safety-incidents",
//             minzoom: 12,
//             paint: {
//               "circle-radius": 4,
//               "circle-color": "#ff0000",
//               "circle-opacity": 0.8,
//               "circle-stroke-width": 1,
//               "circle-stroke-color": "#fff",
//             },
//           });
//         } else {
//           // update data if already added
//           (mapRef.current.getSource("safety-incidents") as mapboxgl.GeoJSONSource).setData(
//             incidents
//           );
//         }
//       } catch (err) {
//         console.error("Error loading safety data", err);
//       }
//     };

//     // ✅ only run after the map is fully ready
//     if (mapRef.current.loaded()) {
//       loadData();
//     } else {
//       mapRef.current.once("load", loadData);
//     }

//     return () => {
//       cancelled = true;
//     };
//   }, [mapRef.current]);


//   return (
//     <div className="relative w-full h-[calc(100vh-4rem)]">
//       <div ref={mapContainer} className="w-full h-full"> 

//       </div>
//     </div>
//   );
// }

// // "use client";
// // import { useEffect, useRef } from "react";
// // import mapboxgl from "mapbox-gl";
// // import "mapbox-gl/dist/mapbox-gl.css";
// // import { fetchIncidents } from "../lib/fetchSafety";
// // import { insertMockAlert } from "@/lib/mockData";
// // mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || "";

// // type FloodMapProps = {
// //   alerts: GeoJSON.FeatureCollection;
// //   onFeatureClick?: (props: any) => void;
// // };

// // export default function FloodMap({ alerts, onFeatureClick }: FloodMapProps) {
// //   const mapContainer = useRef<HTMLDivElement>(null);
// //   const mapRef = useRef<mapboxgl.Map | null>(null);
// // //insertMockAlert();
// // console.log("alerts:",alerts);
// //   useEffect(() => {
// //     if (!mapContainer.current) return;

// //     const map = new mapboxgl.Map({
// //       container: mapContainer.current,
// //       style: "mapbox://styles/mapbox/streets-v11",
// //       center: [-97.7431, 30.2672], // Austin
// //       zoom: 12,
// //     });

// //     mapRef.current = map;

// //     map.on("load", async () => {

// // //        const sampleUrl = "https://data.austintexas.gov/resource/fdj4-gpfu.json?$limit=1";
// // // const sampleResponse = await fetch(
// // //         sampleUrl,
// // //         {
// // //           method: 'get' 
// // //         }
// // //       );
// // // const dataaa = await sampleResponse.json();
// // // //(sampleUrl);
// // // console.log("dataaa:",dataaa.location);
// //       /** --- FLOOD ALERTS --- **/
// //       if (!map.getSource("alerts")) {
// //         map.addSource("alerts", { type: "geojson", data: alerts });

// //         map.addLayer({
// //           id: "alerts-fill",
// //           type: "fill",
// //           source: "alerts",
// //           paint: {
// //             "fill-color": [
// //               "match",
// //               ["get", "risk"],
// //               "Low", "#00FF00",
// //               "Medium", "#FFA500",
// //               "High", "#FF0000",
// //               "#00FF00",
// //             ],
// //             "fill-opacity": 0.5,
// //           },
// //         });

// //         map.addLayer({
// //           id: "alerts-border",
// //           type: "line",
// //           source: "alerts",
// //           paint: {
// //             "line-color": "#000",
// //             "line-width": 2,
// //           },
// //         });
// //       }

// //       /** --- SAFETY INCIDENTS --- **/
// //       try {
// //         const incidents = await fetchIncidents();
// //         console.log("✅ Incidents loaded:", incidents);

// //         if (!map.getSource("apd-incidents")) {
// //           map.addSource("apd-incidents", { type: "geojson", data: incidents });
// //         } else {
// //           (map.getSource("apd-incidents") as mapboxgl.GeoJSONSource).setData(
// //             incidents
// //           );
// //         }

// //         // Add as pins (easy to verify visually)
// //         if (!map.getLayer("incidents-pins")) {
// //           map.addLayer({
// //             id: "incidents-pins",
// //             type: "circle",
// //             source: "apd-incidents",
// //             paint: {
// //               "circle-radius": 5,
// //               "circle-color": "#ff0000",
// //               "circle-stroke-width": 1,
// //               "circle-stroke-color": "#fff",
// //             },
// //           });
// //         }

// //         // Optional: Heatmap
// //         if (!map.getLayer("incidents-heat")) {
// //           map.addLayer({
// //             id: "incidents-heat",
// //             type: "heatmap",
// //             source: "apd-incidents",
// //             maxzoom: 15,
// //             paint: {
// //               "heatmap-weight": 1,
// //               "heatmap-intensity": ["interpolate", ["linear"], ["zoom"], 0, 1, 15, 3],
// //               "heatmap-color": [
// //                 "interpolate",
// //                 ["linear"],
// //                 ["heatmap-density"],
// //                 0, "rgba(0,0,255,0)",
// //                 0.3, "blue",
// //                 0.6, "orange",
// //                 1, "red",
// //               ],
// //               "heatmap-radius": ["interpolate", ["linear"], ["zoom"], 0, 2, 14, 20],
// //               "heatmap-opacity": 0.6,
// //             },
// //           });
// //         }
// //       } catch (err) {
// //         console.error("❌ Error loading APD incidents", err);
// //       }

// //       /** --- CLICK HANDLER --- **/
// //       map.on("click", "alerts-fill", (e) => {
// //         if (e.features?.length && onFeatureClick) {
// //           onFeatureClick(e.features[0].properties);
// //         }
// //       });
// //     });

// //     return () => {
// //       map.remove();
// //     };
// //   }, [alerts, onFeatureClick]);

// //   return (
// //     <div className="relative w-full h-[calc(100vh-4rem)]">
// //       <div ref={mapContainer} className="w-full h-full" />
// //     </div>
// //   );
// // }
// // // "use client";
// // // import { useEffect, useRef } from "react";
// // // import mapboxgl from "mapbox-gl";
// // // import "mapbox-gl/dist/mapbox-gl.css";
// // // import { fetchIncidents } from "../lib/fetchSafety"; // new function
// // // mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || "";

// // // type FloodMapProps = {
// // //   alerts: GeoJSON.FeatureCollection;
// // //   onFeatureClick?: (props: any) => void;
// // // };

// // // export default function FloodMap({ alerts, onFeatureClick }: FloodMapProps) {
// // //   const mapContainer = useRef<HTMLDivElement>(null);
// // //   const mapRef = useRef<mapboxgl.Map | null>(null);

// // //   useEffect(() => {
// // //     if (!mapContainer.current) return;

// // //     const map = new mapboxgl.Map({
// // //       container: mapContainer.current,
// // //       style: "mapbox://styles/mapbox/streets-v11",
// // //       center: [-97.7431, 30.2672], // Austin
// // //       zoom: 10,
// // //     });

// // //     mapRef.current = map;

// // //     map.on("load", async () => {
// // //       /** --- FLOOD ALERTS --- **/
// // //       if (!map.getSource("alerts")) {
// // //         map.addSource("alerts", { type: "geojson", data: alerts });

// // //         map.addLayer({
// // //           id: "alerts-fill",
// // //           type: "fill",
// // //           source: "alerts",
// // //           paint: {
// // //             "fill-color": [
// // //               "match",
// // //               ["get", "risk"],
// // //               "Low", "#00FF00",
// // //               "Medium", "#FFA500",
// // //               "High", "#FF0000",
// // //               "#00FF00",
// // //             ],
// // //             "fill-opacity": 0.5,
// // //           },
// // //         });

// // //         map.addLayer({
// // //           id: "alerts-border",
// // //           type: "line",
// // //           source: "alerts",
// // //           paint: {
// // //             "line-color": "#000",
// // //             "line-width": 2,
// // //           },
// // //         });
// // //       }

// // //       /** --- SAFETY INCIDENTS AGGREGATED BY DISTRICT --- **/
// // //       try {
// // //         const districtsWithCounts = await fetchIncidents(); // returns councilDistricts.geojson with { incidentCount }

// // //         if (!map.getSource("council-districts")) {
// // //           map.addSource("council-districts", {
// // //             type: "geojson",
// // //             data: districtsWithCounts,
// // //           });
// // //         } else {
// // //           (map.getSource("council-districts") as mapboxgl.GeoJSONSource).setData(
// // //             districtsWithCounts
// // //           );
// // //         }

// // //         // Choropleth fill layer
// // //         if (!map.getLayer("districts-fill")) {
// // //           map.addLayer({
// // //             id: "districts-fill",
// // //             type: "fill",
// // //             source: "council-districts",
// // //             paint: {
// // //               "fill-color": [
// // //                 "interpolate",
// // //                 ["linear"],
// // //                 ["get", "incidentCount"],
// // //                 0, "#edf8fb",
// // //                 10, "#b2e2e2",
// // //                 50, "#66c2a4",
// // //                 100, "#238b45"
// // //               ],
// // //               "fill-opacity": 0.6,
// // //             },
// // //           });
// // //         }

// // //         // Borders
// // //         if (!map.getLayer("districts-border")) {
// // //           map.addLayer({
// // //             id: "districts-border",
// // //             type: "line",
// // //             source: "council-districts",
// // //             paint: {
// // //               "line-color": "#333",
// // //               "line-width": 2,
// // //             },
// // //           });
// // //         }

// // //         // Click event: show district incident count
// // //         map.on("click", "districts-fill", (e) => {
// // //           if (e.features?.length) {
// // //             const props = e.features[0].properties;
// // //             alert(`District ${props.district}: ${props.incidentCount} incidents`);
// // //           }
// // //         });
// // //       } catch (err) {
// // //         console.error("❌ Error loading safety incidents", err);
// // //       }

// // //       /** --- CLICK HANDLER FOR ALERTS --- **/
// // //       map.on("click", "alerts-fill", (e) => {
// // //         if (e.features?.length && onFeatureClick) {
// // //           onFeatureClick(e.features[0].properties);
// // //         }
// // //       });
// // //     });

// // //     return () => {
// // //       map.remove();
// // //     };
// // //   }, [alerts, onFeatureClick]);

// // //   return (
// // //     <div className="relative w-full h-[calc(100vh-4rem)]">
// // //       <div ref={mapContainer} className="w-full h-full" />
// // //     </div>
// // //   );
// // // }

// useEffect(() => {
//   if (!mapContainer.current) return;

//   const map = new mapboxgl.Map({
//     container: mapContainer.current,
//     style: "mapbox://styles/mapbox/streets-v11",
//     center: [-97.7431, 30.2672],
//     zoom: 10,
//   });

//   mapRef.current = map;

//   map.on("load", async () => {
//     /** --- FLOOD ALERTS --- **/
//     if (!map.getSource("alerts")) {
//       map.addSource("alerts", { type: "geojson", data: alerts });

//       map.addLayer({
//         id: "alerts-fill",
//         type: "fill",
//         source: "alerts",
//         paint: {
//           "fill-color": [
//             "match",
//             ["get", "risk"],
//             "Low", "#00FF00",
//             "Medium", "#FFA500",
//             "High", "#FF0000",
//             "#00FF00",
//           ],
//           "fill-opacity": 0.5,
//         },
//       });

//       map.addLayer({
//         id: "alerts-border",
//         type: "line",
//         source: "alerts",
//         paint: { "line-color": "#000", "line-width": 2 },
//       });
//     }

//     /** --- SAFETY INCIDENTS AGGREGATED BY DISTRICT --- **/
//     try {
//       const incidentCounts = await fetchSafetyIncidents();

//       // Merge incident counts with locally imported GeoJSON
//      console.log("incidentCounts",incidentCounts)
//       //const dd=(councilDistrictsGeoJSON);
//       const geojsonWithCounts = {
//         ...councilDistrictsGeoJSON,
//         features: councilDistrictsGeoJSON.features.map(f => ({
//           ...f,
//           properties: {
//             ...f.properties,
//             incidentCount: incidentCounts[f.properties.district_number] || 0,
//             //crime_type:incidentCounts[f.properties.district_number] || 0,
//           },
//         })),
//       };

//       if (!map.getSource("council-districts")) {
//         map.addSource("council-districts", { type: "geojson", data: geojsonWithCounts });
//       } else {
//         (map.getSource("council-districts") as mapboxgl.GeoJSONSource).setData(geojsonWithCounts);
//       }

//       // Choropleth fill layer
//       if (!map.getLayer("districts-fill")) {
//         map.addLayer({
//           id: "districts-fill",
//           type: "fill",
//           source: "council-districts",
//           paint: {
//             "fill-color": [
//               "interpolate",
//               ["linear"],
//               ["get", "incidentCount"],
//               0, "#edf8fb",
//               10, "#1af606",
//               50, "#f3db06",
//               100, "#fa0000"
//             ],
//             "fill-opacity": 0.6,
//           },
//         });
//       }

//       // Borders
//       if (!map.getLayer("districts-border")) {
//         map.addLayer({
//           id: "districts-border",
//           type: "line",
//           source: "council-districts",
//           paint: { "line-color": "#333", "line-width": 2 },
//         });
//       }

//       // Click event: show district incident count
//       map.on("click", "districts-fill", (e) => {
//         if (e.features?.length) {
//           const props = e.features[0].properties;
//           console.log(props)
//           alert(`District ${props.district_name} : ${props.incidentCount} incidents`);
//         }
//       });

//     } catch (err) {
//       console.error("❌ Error loading safety incidents", err);
//     }

//     /** --- CLICK HANDLER FOR ALERTS --- **/
//     map.on("click", "alerts-fill", (e) => {
//       if (e.features?.length && onFeatureClick) {
//         onFeatureClick(e.features[0].properties);
//       }
//     });
//   });

//   return () => map.remove();
// }, [alerts, onFeatureClick]);

"use client";
import { useEffect, useRef ,useState} from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { fetchSafetyIncidents } from "../lib/fetchSafety";
import councilDistrictsGeoJSON from "../public/councilDistricts.json"; // imported locally
import { insertMockAlert } from "@/lib/mockData";
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
   const [incidents, setIncidents] = useState<any[]>([]);
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
    const { outcome } = await deferredPrompt.userChoice;
    console.log("User response:", outcome);

    setDeferredPrompt(null);
    setShowInstallButton(false);
  };

//insertMockAlert();
  
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
      // Load alerts
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

        // Build GeoJSON of incidents for heatmap
        const allIncidentsPoints = {
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

        // Heatmap source & layer
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

        // Merge district counts into GeoJSON
        const geojsonWithCounts = {
          ...councilDistrictsGeoJSON,
          features: councilDistrictsGeoJSON.features.map((f) => ({
            ...f,
            properties: {
              ...f.properties,
              incidentCount: incidentCounts[f.properties.district_number] || 0,
            },
          })),
        };

        map.addSource("council-districts", { type: "geojson", data: geojsonWithCounts });

        // Choropleth fill
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

        // ✅ Show Safety Card on District Click
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

        // ✅ Hide Safety Card on Flood Polygon Click
        map.on("click", "alerts-fill", (e) => {
          if (popupRef.current) popupRef.current.remove();

          if (e.features?.length) {
            const props = e.features[0].properties;
            popupRef.current = new mapboxgl.Popup({ closeOnClick: true })
              .setLngLat(e.lngLat)
              .setHTML(
                `<div style="font-size:14px;">
                   <strong>Flood Alert</strong><br/>
                   Risk: ${props.risk || "N/A"}
                 </div>`
              )
              .addTo(map);
              if (onFeatureClick) onFeatureClick(props);
          }

          // clear/hide sidebar
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
useEffect(() => {
  async function loadIncidents() {
    const start = performance.now();
    let cacheHit = false;

    try {
      const data = await fetchSafetyIncidents();
      const latency = performance.now() - start;

      // Example check for cache header
      if (data?.fromCache) cacheHit = true;

      logMetric("fetchIncidents", latency, cacheHit, null);
      setIncidents(data);
    } catch (err: any) {
      const latency = performance.now() - start;
      logMetric("fetchIncidents", latency, false, err.message);
    }
  }

  loadIncidents();
}, []);

  // return (
  //   <div
  //     ref={mapContainer}
  //     className="w-full h-[400px] sm:h-[500px] md:h-[650px] lg:h-[800px] rounded-xl shadow-md">
        

  //     </div>
    
  // );
//   return (
//   <div className="relative w-full h-full">
//     {/* The Map Container */}
//     <div ref={mapContainer} className="w-full h-[600px]" />

//     {/* Export Metrics Button */}
//     <div className="absolute top-2 right-2 z-10">
//       <button
//         className="p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
//         onClick={exportMetricsCSV}
//       >
//         Export Metrics CSV
//       </button>
//     </div>
//   </div>
// );
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

// "use client";
// import { useEffect, useRef } from "react";
// import mapboxgl from "mapbox-gl";
// import "mapbox-gl/dist/mapbox-gl.css";
// import { fetchSafetyIncidents } from "../lib/fetchSafety";
// import councilDistrictsGeoJSON from "../public/councilDistricts.json";
// import { insertMockAlert } from "@/lib/mockData";

// mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || "";

// type FloodMapProps = {
//   alerts: GeoJSON.FeatureCollection;
//   onFeatureClick?: (props: any) => void;
// };
// //insertMockAlert();
// export default function FloodMap({ alerts, onFeatureClick }: FloodMapProps) {
//   const mapContainer = useRef<HTMLDivElement>(null);
//   const mapRef = useRef<mapboxgl.Map | null>(null);
//   const popupRef = useRef<mapboxgl.Popup | null>(null);

//   useEffect(() => {
//     if (!mapContainer.current) return;

//     const map: mapboxgl.Map = new mapboxgl.Map({
//       container: mapContainer.current,
//       style: "mapbox://styles/mapbox/streets-v11",
//       center: [-97.7431, 30.2672],
//       zoom: 10,
//     });

//     mapRef.current = map;

//     map.on("load", async () => {
//       /** --- FLOOD ALERTS --- **/
//       if (!map.getSource("alerts")) {
//         map.addSource("alerts", { type: "geojson", data: alerts });

//         map.addLayer({
//           id: "alerts-fill",
//           type: "fill",
//           source: "alerts",
//           paint: {
//             "fill-color": [
//               "match",
//               ["get", "risk"],
//               "Low", "#00FF00",
//               "Medium", "#FFA500",
//               "High", "#FF0000",
//               "#00FF00",
//             ],
//             "fill-opacity": 0.5,
//           },
//         });

//         map.addLayer({
//           id: "alerts-border",
//           type: "line",
//           source: "alerts",
//           paint: { "line-color": "#000", "line-width": 2 },
//         });
//       }

//       /** --- SAFETY INCIDENTS BY DISTRICT --- **/
//       try {
//         const incidentCounts = await fetchSafetyIncidents();

//         const geojsonWithCounts = {
//           ...councilDistrictsGeoJSON,
//           features: councilDistrictsGeoJSON.features.map((f) => ({
//             ...f,
//             properties: {
//               ...f.properties,
//               incidentCount: incidentCounts[f.properties.district_number] || 0,
//             },
//           })),
//         };

//         // ✅ Safer getSource
//         let districtsSource = map.getSource("council-districts") as
//           | mapboxgl.GeoJSONSource
//           | undefined;

//         if (!districtsSource) {
//           map.addSource("council-districts", {
//             type: "geojson",
//             data: geojsonWithCounts,
//           });
//         } else {
//           districtsSource.setData(geojsonWithCounts);
//         }

//         if (!map.getLayer("districts-fill")) {
//           map.addLayer({
//             id: "districts-fill",
//             type: "fill",
//             source: "council-districts",
//             paint: {
//               "fill-color": [
//                 "interpolate",
//                 ["linear"],
//                 ["get", "incidentCount"],
//                 0, "#edf8fb",
//                 10, "#1af606",
//                 50, "#f3db06",
//                 100, "#fa0000",
//               ],
//               "fill-opacity": 0.6,
//             },
//           });
//         }

//         if (!map.getLayer("districts-border")) {
//           map.addLayer({
//             id: "districts-border",
//             type: "line",
//             source: "council-districts",
//             paint: { "line-color": "#333", "line-width": 2 },
//           });
//         }

//         // ✅ Popup instead of alert()
//         map.on("click", "districts-fill", (e) => {
//           if (e.features?.length) {
//             const props = e.features[0].properties;
//             const coords = (e.lngLat as mapboxgl.LngLatLike) || [-97.7431, 30.2672];

//             if (popupRef.current) popupRef.current.remove();

//             popupRef.current = new mapboxgl.Popup({ closeOnClick: true })
//               .setLngLat(coords)
//               .setHTML(
//                 `<div style="font-size:14px;">
//                    <strong>District ${props.district_name}</strong><br/>
//                    Incidents: ${props.incidentCount}
//                  </div>`
//               )
//               .addTo(map);
//           }
//         });
//       } catch (err) {
//         console.error("❌ Error loading safety incidents", err);
//       }

//       /** --- CLICK HANDLER FOR ALERTS --- **/
//       map.on("click", "alerts-fill", (e) => {
//         if (e.features?.length) {
//           const props = e.features[0].properties;
//           const coords = (e.lngLat as mapboxgl.LngLatLike) || [-97.7431, 30.2672];

//           if (popupRef.current) popupRef.current.remove();

//           popupRef.current = new mapboxgl.Popup({ closeOnClick: true })
//             .setLngLat(coords)
//             .setHTML(
//               `<div style="font-size:14px;">
//                  <strong>Alert</strong><br/>
//                  Risk: ${props.risk || "N/A"}
//                </div>`
//             )
//             .addTo(map);

//           if (onFeatureClick) onFeatureClick(props);
//         }
//       });
//     });

//     return () => {
//       if (popupRef.current) popupRef.current.remove();
//       map.remove();
//     };
//   }, [alerts, onFeatureClick]);

//   return (
//     <div
//       ref={mapContainer}
//       className="w-full h-[400px] sm:h-[500px] md:h-[650px] lg:h-[800px] rounded-xl shadow-md"
//     />
//   );
// }
