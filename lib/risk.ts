import * as turf from "@turf/turf";
export type RiskLevel = "Low" | "Caution" | "Extreme Caution" | "Danger";
/**
 * Compute risk for current user location:
 * - High: inside ANY polygon OR within 5 miles of any polygon boundary
 * - Low: otherwise
 */
export function computeHeatRisk(
  forecast: any // NWS forecast JSON
): RiskLevel {
  if (!forecast?.properties?.periods?.length) return "Low";

  // Take the first (current or upcoming) forecast period
  const current = forecast.properties.periods[0];
  const temp = current.temperature;
  const unit = current.temperatureUnit;

  // Convert °C → °F if needed
  const tempF = unit === "C" ? (temp * 9) / 5 + 32 : temp;

  if (tempF >= 105) return "Danger";
  if (tempF >= 95) return "Extreme Caution";
  if (tempF >= 85) return "Caution";
  return "Low";
}
export async function computeRiskViaGeolocation(geojson: any | null) {
  if (!geojson) return null;
  if (!("geolocation" in navigator)) {
    alert("Geolocation not supported in this browser.");
    return null;
  }

  return new Promise<{ risk: "High" | "Low"; distanceMiles?: number }>((resolve) => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const user = turf.point([pos.coords.longitude, pos.coords.latitude]);
        const res = computeRiskForPoint(user, geojson);
        resolve(res);
      },
      (err) => {
        alert("Unable to get location: " + err.message);
        resolve({ risk: "Low" });
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  });
}

export function computeRiskForPoint(point: turf.helpers.Point, geojson: any) {
  const FIVE_MILES = 5;

  // Precompute minimum distance to polygon boundaries
  let minMiles = Infinity;

  for (const f of geojson.features || []) {
    if (!f?.geometry) continue;

    // Inside?
    if (turf.booleanPointInPolygon(point, f)) {
      return { risk: "High" as const, distanceMiles: 0 };
    }

    // Distance to boundary: convert polygon to line(s) and measure nearest
    try {
      const poly = f.geometry;
      const asLines = turf.polygonToLine(poly as any);
      const lines = asLines.type === "FeatureCollection" ? asLines.features : [asLines];

      for (const ln of lines) {
        const snapped = turf.nearestPointOnLine(ln as any, point);
        const miles = turf.distance(point, snapped, { units: "miles" });
        if (miles < minMiles) minMiles = miles;
      }
    } catch {}
  }

  if (minMiles <= FIVE_MILES) {
    return { risk: "High" as const, distanceMiles: minMiles };
  }
  return { risk: "Low" as const, distanceMiles: minMiles };
}
