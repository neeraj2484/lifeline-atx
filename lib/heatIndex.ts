// lib/heatIndex.ts
export type HeatBand =
  | "Safe"
  | "Caution"
  | "Extreme Caution"
  | "Danger"
  | "Extreme Danger";

// NOAA heat index approximation (inputs in °F and %)
export function computeHeatIndex(tempF: number, rh: number): number {
  // For low T/RH, HI ≈ T (keeps values realistic for cooler hours)
  if (tempF < 80 || rh < 40) return tempF;

  const T = tempF;
  const R = rh;
  let HI =
    -42.379 +
    2.04901523 * T +
    10.14333127 * R -
    0.22475541 * T * R -
    0.00683783 * T * T -
    0.05481717 * R * R +
    0.00122874 * T * T * R +
    0.00085282 * T * R * R -
    0.00000199 * T * T * R * R;

  // Empirical adjustments used by NOAA
  if (R < 13 && T >= 80 && T <= 112) {
    HI -= ((13 - R) / 4) * Math.sqrt((17 - Math.abs(T - 95)) / 17);
  } else if (R > 85 && T >= 80 && T <= 87) {
    HI += ((R - 85) / 10) * ((87 - T) / 5);
  }

  return HI;
}

export function classifyHeatIndex(hiF: number): HeatBand {
  if (hiF < 80) return "Safe";
  if (hiF < 90) return "Caution";
  if (hiF < 103) return "Extreme Caution";
  if (hiF < 125) return "Danger";
  return "Extreme Danger";
}
