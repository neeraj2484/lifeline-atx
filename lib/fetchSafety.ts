// lib/fetchSafety.ts
// import { addDays, format } from "date-fns";

// const BASE_URL = "https://data.austintexas.gov/resource/fdj4-gpfu.json";

// export async function fetchIncidents() {
//   try {
//     // ✅ Proper Socrata datetime format with UTC "Z"
//     const ninetyDaysAgo = format(
//       addDays(new Date(), -90),
//       "yyyy-MM-dd'T'HH:mm:ss'Z'"
//     );

//     const query = new URL(BASE_URL);

//     query.searchParams.set(
//       "$where",
//       `occ_date_time > '${ninetyDaysAgo}'`
//     );
//     query.searchParams.set("$limit", "5000");
//     query.searchParams.set(
//       "$select",
//       [
//         "incident_report_number",
//         "crime_type",
//         "ucr_code",
//         "family_violence",
//         "occ_date_time",
//         "occ_date",
//         "rep_date_time",
//         "rep_date",
//         "rep_time",
//         "location_type",
//         "council_district",
//         "sector",
//         "district",
//         "clearance_status",
//         "census_block_group",
//       ].join(",")
//     );
//     query.searchParams.set("$order", "occ_date_time DESC");

//     const finalUrl = query.toString();
//     console.log("🔍 APD Query URL:", finalUrl);

//     const res = await fetch(finalUrl, {
//       headers: { Accept: "application/json" },
//       cache: "no-store",
//     });

//     if (!res.ok) {
//       throw new Error(
//         `Failed to fetch APD incidents: ${res.status} ${res.statusText}`
//       );
//     }

//     const data = await res.json();
// console.log("— Area Safety (Crime) — Plan & Data",data);
//     return {
//       type: "FeatureCollection",
//       features: data
//         .filter((d: any) => d.latitude && d.longitude)
//         .map((d: any) => ({
//           type: "Feature",
//           geometry: {
//             type: "Point",
//             coordinates: [parseFloat(d.longitude), parseFloat(d.latitude)],
//           },
//           properties: {
//             id: d.incident_report_number,
//             type: d.crime_type,
//             status: d.clearance_status,
//             occurred: d.occ_date_time,
//             location: d.location_type,
//           },
//         })),
//     } as GeoJSON.FeatureCollection;
//   } catch (error) {
//     console.error("❌ Error fetching APD incidents:", error);
//     return { type: "FeatureCollection", features: [] };
//   }
// }



// import { addDays, format } from "date-fns";
// import { logMetric } from "../utils/metricsLogger";
// const BASE_URL = "https://data.austintexas.gov/resource/fdj4-gpfu.json";
// const requestCache: Record<string, any> = {};
// /**
//  * Fetches APD incidents aggregated by council district for the last 90 days.
//  * Returns a dictionary: { "1": 123, "2": 95, ... }
//  */
// export async function fetchSafetyIncidents() {
//   try {
//     // ✅ Proper Socrata datetime format with UTC "Z"
//     const ninetyDaysAgo = format(
//       addDays(new Date(), -148),
//       "yyyy-MM-dd'T'HH:mm:ss"
//       //2024-12-31T00:00:00.000
//     );

//     const query = new URL(BASE_URL);

//     query.searchParams.set(
//       "$where",
//       `occ_date > '${ninetyDaysAgo}' AND council_district IS NOT NULL`
//     );
//     query.searchParams.set("$limit", "50000"); // bigger limit since we're aggregating
//     query.searchParams.set(
//       "$select",
//       [
//         "council_district",
//        // "crime_type",
//         "count(incident_report_number) as incident_count",
//       ].join(",")
//     );
//     query.searchParams.set("$group", "council_district");
//     query.searchParams.set("$order", "council_district ASC");

//     const finalUrl = query.toString();
//     console.log("🔍 APD Query URL:", finalUrl);

//     const res = await fetch(finalUrl, {
//       headers: { Accept: "application/json" },
//       cache: "no-store",
//     });

//     if (!res.ok) {
//       throw new Error(
//         `Failed to fetch APD incidents: ${res.status} ${res.statusText}`
//       );
//     }

//     const data = await res.json();
//     console.log("📊 Aggregated incidents by district:", data);

//     // Map into dictionary for fast lookup when joining with GeoJSON
//     const counts: Record<string, number> = {};
//     data.forEach((d: any) => {
//       counts[d.council_district] = parseInt(d.incident_count, 10);
//     });

//     return counts; // { "1": 123, "2": 95, ... }
//   } catch (error) {
//     console.error("❌ Error fetching APD incidents:", error);
//     return {};
//   }
// }
// import { addDays, format } from "date-fns";
// import { logMetric } from "../utils/metricsLogger";

// const BASE_URL = "https://data.austintexas.gov/resource/fdj4-gpfu.json";
// const requestCache: Record<string, any> = {};

// /**
//  * Fetches APD incidents aggregated by council district for the last 90 days.
//  * Returns a dictionary: { "1": 123, "2": 95, ... }
//  */
// export async function fetchSafetyIncidents() {
//   try {
//     // ✅ Proper Socrata datetime format with UTC "Z"
//     const ninetyDaysAgo = format(
//       addDays(new Date(), -148),
//       "yyyy-MM-dd'T'HH:mm:ss"
//     );

//     const query = new URL(BASE_URL);

//     query.searchParams.set(
//       "$where",
//       `occ_date > '${ninetyDaysAgo}' AND council_district IS NOT NULL`
//     );
//     query.searchParams.set("$limit", "50000"); // bigger limit since we're aggregating
//     query.searchParams.set(
//       "$select",
//       [
//         "council_district",
//         "count(incident_report_number) as incident_count",
//       ].join(",")
//     );
//     query.searchParams.set("$group", "council_district");
//     query.searchParams.set("$order", "council_district ASC");

//     const finalUrl = query.toString();
//     console.log("🔍 APD Query URL:", finalUrl);

//     // 🔎 Check cache first
//     if (requestCache[finalUrl]) {
//       logMetric({ name: "cache_hit", value: "Pass" });
//       return requestCache[finalUrl];
//     }

//     const start = performance.now();

//     const res = await fetch(finalUrl, {
//       headers: { Accept: "application/json" },
//       cache: "no-store",
//     });

//     if (!res.ok) {
//       throw new Error(
//         `Failed to fetch APD incidents: ${res.status} ${res.statusText}`
//       );
//     }

//     const data = await res.json();
//     console.log("📊 Aggregated incidents by district:", data);

//     const end = performance.now();
//     const latency = end - start;

//     // Map into dictionary for fast lookup when joining with GeoJSON
//     const counts: Record<string, number> = {};
//     data.forEach((d: any) => {
//       counts[d.council_district] = parseInt(d.incident_count, 10);
//     });

//     // ✅ Cache result
//     requestCache[finalUrl] = counts;

//     // Log metrics
//     logMetric({ name: "latency_ms", value: latency });
//     logMetric({ name: "cache_hit", value: "Fail" }); // first time → miss

//     return counts; // { "1": 123, "2": 95, ... }
//   } catch (error: any) {
//     console.error("❌ Error fetching APD incidents:", error);
//     logMetric({ name: "error", value: error.message || "unknown" });
//     return {};
//   }
// }
// import { addDays, format } from "date-fns";
// import { logMetric } from "../utils/metricsLogger";

// const BASE_URL = "https://data.austintexas.gov/resource/fdj4-gpfu.json";
// const requestCache: Record<string, any> = {};

// /**
//  * Fetches APD incidents aggregated by council district for the last 90 days.
//  * Returns a dictionary: { "1": 123, "2": 95, ... }
//  */
// export async function fetchSafetyIncidents() {
//   try {
//     // ✅ Proper Socrata datetime format with UTC "Z"
//     const ninetyDaysAgo = format(
//       addDays(new Date(), -148),
//       "yyyy-MM-dd'T'HH:mm:ss"
//     );

//     const query = new URL(BASE_URL);

//     query.searchParams.set(
//       "$where",
//       `occ_date > '${ninetyDaysAgo}' AND council_district IS NOT NULL`
//     );
//     query.searchParams.set("$limit", "50000"); // bigger limit since we're aggregating
//     query.searchParams.set(
//       "$select",
//       [
//         "council_district",
//         "count(incident_report_number) as incident_count",
//       ].join(",")
//     );
//     query.searchParams.set("$group", "council_district");
//     query.searchParams.set("$order", "council_district ASC");

//     const finalUrl = query.toString();
//     console.log("🔍 APD Query URL:", finalUrl);

//     // 🔎 Check cache first
//     if (requestCache[finalUrl]) {
//       logMetric("cache_hit", "Pass");
//       return requestCache[finalUrl];
//     }

//     const start = performance.now();

//     const res = await fetch(finalUrl, {
//       headers: { Accept: "application/json" },
//       cache: "no-store",
//     });

//     if (!res.ok) {
//       throw new Error(
//         `Failed to fetch APD incidents: ${res.status} ${res.statusText}`
//       );
//     }

//     const data = await res.json();
//     console.log("📊 Aggregated incidents by district:", data);

//     const end = performance.now();
//     const latency = end - start;

//     // Map into dictionary for fast lookup when joining with GeoJSON
//     const counts: Record<string, number> = {};
//     data.forEach((d: any) => {
//       counts[d.council_district] = parseInt(d.incident_count, 10);
//     });

//     // ✅ Cache result
//     requestCache[finalUrl] = counts;

//     // Log metrics
//     logMetric("latency_ms", latency.toFixed(2));
//     logMetric("cache_hit", "Fail"); // first time → miss

//     return counts; // { "1": 123, "2": 95, ... }
//   } catch (error: any) {
//     console.error("❌ Error fetching APD incidents:", error);
//     logMetric("error", error.message || "unknown");
//     return {};
//   }
// }


// import { addDays, format } from "date-fns";
// import { logMetric } from "../utils/metricsLogger";

// const BASE_URL = "https://data.austintexas.gov/resource/fdj4-gpfu.json";
// const requestCache: Record<string, any> = {};

// /**
//  * Fetches APD incidents aggregated by council district for the last 90 days.
//  * Returns a dictionary: { "1": 123, "2": 95, ... }
//  */
// export async function fetchSafetyIncidents() {
//   try {
//     // ✅ Proper Socrata datetime format with UTC "Z"
//     const ninetyDaysAgo = format(
//       addDays(new Date(), -148),
//       "yyyy-MM-dd'T'HH:mm:ss"
//     );

//     const query = new URL(BASE_URL);

//     query.searchParams.set(
//       "$where",
//       `occ_date > '${ninetyDaysAgo}' AND council_district IS NOT NULL`
//     );
//     query.searchParams.set("$limit", "50000"); // bigger limit since we're aggregating
//     query.searchParams.set(
//       "$select",
//       [
//         "council_district",
//         "count(incident_report_number) as incident_count",
//       ].join(",")
//     );
//     query.searchParams.set("$group", "council_district");
//     query.searchParams.set("$order", "council_district ASC");

//     const finalUrl = query.toString();
//     console.log("🔍 APD Query URL:", finalUrl);

//     // 🔎 Check cache first
//     if (requestCache[finalUrl]) {
//       logMetric("cache_hit", "true"); // ✅ mark cache hit clearly
//       return requestCache[finalUrl];
//     }

//     const start = performance.now();

//     const res = await fetch(finalUrl, {
//       headers: { Accept: "application/json" },
//       cache: "no-store",
//     });

//     if (!res.ok) {
//       throw new Error(
//         `Failed to fetch APD incidents: ${res.status} ${res.statusText}`
//       );
//     }

//     const data = await res.json();
//     console.log("📊 Aggregated incidents by district:", data);

//     const end = performance.now();
//     const latency = end - start;

//     // Map into dictionary for fast lookup when joining with GeoJSON
//     const counts: Record<string, number> = {};
//     data.forEach((d: any) => {
//       counts[d.council_district] = parseInt(d.incident_count, 10);
//     });

//     // ✅ Cache result
//     requestCache[finalUrl] = counts;

//     // Log metrics
//     logMetric("latency_ms", latency.toFixed(2));
//     logMetric("cache_hit", "false"); // ✅ first time → miss

//     return counts; // { "1": 123, "2": 95, ... }
//   } catch (error: any) {
//     console.error("❌ Error fetching APD incidents:", error);
//     logMetric("error", error.message || "unknown");
//     return {};
//   }
// }

import { addDays, format } from "date-fns";
import { logMetric } from "../utils/metricsLogger";

const BASE_URL = "https://data.austintexas.gov/resource/fdj4-gpfu.json";
const requestCache: Record<string, any> = {};

/**
 * Fetches APD incidents aggregated by council district for the last 90 days.
 * Returns a dictionary: { "1": 123, "2": 95, ... }
 */
export async function fetchSafetyIncidents() {
  try {
    const ninetyDaysAgo = format(
      addDays(new Date(), -148),
      "yyyy-MM-dd'T'HH:mm:ss"
    );

    const query = new URL(BASE_URL);

    query.searchParams.set(
      "$where",
      `occ_date > '${ninetyDaysAgo}' AND council_district IS NOT NULL`
    );
    query.searchParams.set("$limit", "50000");
    query.searchParams.set(
      "$select",
      [
        "council_district",
        "count(incident_report_number) as incident_count",
      ].join(",")
    );
    query.searchParams.set("$group", "council_district");
    query.searchParams.set("$order", "council_district ASC");

    const finalUrl = query.toString();
    console.log("🔍 APD Query URL:", finalUrl);

    // 🔎 Check cache first
    if (requestCache[finalUrl]) {
      logMetric({ feature: "cache_hit", value: "Pass" });
      return requestCache[finalUrl];
    }

    const start = performance.now();

    const res = await fetch(finalUrl, {
      headers: { Accept: "application/json" },
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(
        `Failed to fetch APD incidents: ${res.status} ${res.statusText}`
      );
    }

    const data = await res.json();
    console.log("📊 Aggregated incidents by district:", data);

    const end = performance.now();
    const latency = end - start;

    const counts: Record<string, number> = {};
    data.forEach((d: any) => {
      counts[d.council_district] = parseInt(d.incident_count, 10);
    });

    requestCache[finalUrl] = counts;

    // ✅ Proper metric logging
    logMetric({ feature: "latency_ms", value: latency.toFixed(2) });
    logMetric({ feature: "cache_hit", value: "Fail" }); // first miss

    return counts;
  } catch (error: any) {
    console.error("❌ Error fetching APD incidents:", error);
    logMetric({ feature: "error", value: error.message || "unknown" });
    return {};
  }
}


// lib/fetchSafety.ts
// import { addDays, format } from "date-fns";

// // ✅ Import local JSON directly
// import blockGroupsRaw from "../public/rows.json"; // adjust path if needed

// const BASE_URL = "https://data.austintexas.gov/resource/fdj4-gpfu.json";

// /** --- HELPERS --- **/

// // parse WKT POLYGON into coordinates
// function parseWKTPolygon(wkt: string): number[][][] | null {
//   if (!wkt || !wkt.startsWith("POLYGON((")) return null;

//   const coords = wkt
//     .replace("POLYGON((", "")
//     .replace("))", "")
//     .split(",")
//     .map((pair) => pair.trim().split(" ").map(Number))
//     .filter(
//       ([lon, lat]) =>
//         !isNaN(lon) &&
//         !isNaN(lat) &&
//         lon >= -180 &&
//         lon <= 180 &&
//         lat >= -90 &&
//         lat <= 90
//     );

//   if (coords.length < 3) return null; // polygon must have at least 3 points
//   return [coords];
// }

// // compute centroid safely
// function getCentroid(coords: number[][][]): [number, number] | null {
//   if (!coords || !coords[0] || coords[0].length === 0) return null;

//   let x = 0,
//     y = 0,
//     n = 0;
//   coords[0].forEach(([lon, lat]) => {
//     if (!isNaN(lon) && !isNaN(lat)) {
//       x += lon;
//       y += lat;
//       n++;
//     }
//   });

//   if (n === 0) return null;
//   return [x / n, y / n];
// }

// /** --- TRANSFORM LOCAL rows.json into polygons --- **/
// const polygons = {
//   type: "FeatureCollection",
//   features: blockGroupsRaw.data
//     .map((row: any[]) => {
//       const geoid = row[10]; // census block group code
//       const name = row[19]; // block group name
//       const polygonWkt = row[24]; // WKT polygon string

//       const coords = parseWKTPolygon(polygonWkt);
//       if (!coords) return null; // skip invalid polygons

//       return {
//         type: "Feature",
//         geometry: {
//           type: "Polygon",
//           coordinates: coords,
//         },
//         properties: {
//           GEOID: geoid,
//           name,
//         },
//       };
//     })
//     .filter(Boolean),
// };

// /** --- FETCH INCIDENTS --- **/
// export async function fetchIncidents() {
//   try {
//     const ninetyDaysAgo = format(
//       addDays(new Date(), -90),
//       "yyyy-MM-dd'T'HH:mm:ss'Z'"
//     );

//     const query = new URL(BASE_URL);
//     query.searchParams.set("$limit", "5000");
//     query.searchParams.set(
//       "$select",
//       [
//         "incident_report_number",
//         "crime_type",
//         "ucr_code",
//         "family_violence",
//         "occ_date_time",
//         "council_district",
//         "sector",
//         "district",
//         "clearance_status",
//         "census_block_group",
//       ].join(",")
//     );
//     query.searchParams.set("$order", "occ_date_time DESC");

//     const incRes = await fetch(query.toString(), {
//       headers: { Accept: "application/json" },
//       cache: "no-store",
//     });

//     if (!incRes.ok) throw new Error(`Failed incidents: ${incRes.status}`);

//     const data = await incRes.json();

//     console.log("— Area Safety (Crime) —", data.length, "records");

//     return {
//       type: "FeatureCollection",
//       features: data
//         .map((d: any) => {
//           const match = polygons.features.find(
//             (f: any) => f.properties.GEOID === d.census_block_group
//           );
//           if (!match) {
//             // console.warn(
//             //   "⚠️ No polygon found for census block:",
//             //   d.census_block_group
//             // );
//             return null;
//           }

//           const centroid = getCentroid(
//             match.geometry.coordinates as number[][][]
//           );
//           if (!centroid) {
//            // console.warn("❌ Skipped invalid coords for:", d.incident_report_number);
//             return null;
//           }

//           return {
//             type: "Feature",
//             geometry: {
//               type: "Point",
//               coordinates: centroid,
//             },
//             properties: {
//               id: d.incident_report_number,
//               type: d.crime_type,
//               status: d.clearance_status,
//               occurred: d.occ_date_time,
//               district: d.council_district,
//               census_block: d.census_block_group,
//             },
//           };
//         })
//         .filter(Boolean),
//     } as GeoJSON.FeatureCollection;
//   } catch (error) {
//     console.error("❌ Error fetching APD incidents:", error);
//     return { type: "FeatureCollection", features: [] };
//   }
// }
