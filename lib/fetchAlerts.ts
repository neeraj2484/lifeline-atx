// import { db } from "./db";

// const ALERTS_URL =
//   "https://api.weather.gov/alerts/active?status=actual&message_type=alert&area=TX&event=Flash%20Flood%20Warning";

// // Target counties (Travis/Williamson + nearby)
// const COUNTY_FILTER = ["Travis", "Williamson", "Hays", "Bastrop", "Burnet", "Caldwell"];

// export async function syncFloodAlerts() {
//   try {
//     const res = await fetch(ALERTS_URL, {
//       headers: {
//         "User-Agent": "lifeline-atx (demo app)",
//         "Accept": "application/geo+json",
//       },
//     });
//     if (!res.ok) throw new Error(`NWS API error ${res.status}`);

//     const data = await res.json();

//     // Basic filter on areaDesc (NWS props)
//     const filtered = {
//       type: "FeatureCollection",
//       features: (data.features || []).filter((f: any) => {
//         const area: string = f?.properties?.areaDesc || "";
//         return COUNTY_FILTER.some((c) => area.includes(c));
//       }).map((f: any) => ({
//         ...f,
//         // Ensure fields expected by UI exist
//         properties: {
//           ...f.properties,
//           event: f.properties?.event,
//           severity: f.properties?.severity,
//           headline: f.properties?.headline || f.properties?.headline || f.properties?.description,
//           expires: f.properties?.expires,
//         },
//       })),
//     };

//     await db.datasets.put({
//       name: "flood-alerts",
//       updatedAt: Date.now(),
//       payload: filtered,
//     });

//     return filtered;
//   } catch (e) {
//     console.error("syncFloodAlerts failed:", e);
//     return null;
//   }
// }

// export async function loadCachedAlerts() {
//   const rec = await db.datasets.get("flood-alerts");
//   return rec?.payload || null;
// }
import { FeatureCollection, Geometry, GeoJsonProperties } from "geojson";
import { db } from "./db";

const ALERTS_URL =
  "https://api.weather.gov/alerts/active?status=actual&message_type=alert&area=TX&event=Flash%20Flood%20Warning";

// Target counties (Travis/Williamson + nearby)
const COUNTY_FILTER = ["Travis", "Williamson", "Hays", "Bastrop", "Burnet", "Caldwell"];

export async function syncFloodAlerts(): Promise<FeatureCollection<Geometry, GeoJsonProperties> | null> {
  try {
    const res = await fetch(ALERTS_URL, {
      headers: {
        "User-Agent": "lifeline-atx (demo app)",
        "Accept": "application/geo+json",
      },
    });
    if (!res.ok) throw new Error(`NWS API error ${res.status}`);

    const data = await res.json();

    // Build strongly typed FeatureCollection
    const filtered: FeatureCollection<Geometry, GeoJsonProperties> = {
      type: "FeatureCollection",
      features: (data.features || [])
        .filter((f: any) => {
          const area: string = f?.properties?.areaDesc || "";
          return COUNTY_FILTER.some((c) => area.includes(c));
        })
        .map((f: any) => ({
          ...f,
          properties: {
            ...f.properties,
            event: f.properties?.event,
            severity: f.properties?.severity,
            headline:
              f.properties?.headline ||
              f.properties?.event ||
              f.properties?.description,
            expires: f.properties?.expires,
          },
        })),
    };

    await db.datasets.put({
      name: "flood-alerts",
      updatedAt: Date.now(),
      payload: filtered,
    });

    return filtered;
  } catch (e) {
    console.error("syncFloodAlerts failed:", e);
    return null;
  }
}

export async function loadCachedAlerts(): Promise<FeatureCollection<Geometry, GeoJsonProperties> | null> {
  const rec = await db.datasets.get("flood-alerts");
  return rec?.payload || null;
}
