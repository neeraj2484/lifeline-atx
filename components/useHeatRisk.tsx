"use client";
import { useEffect, useState } from "react";

type HeatRisk = {
  band: string;
  index: number;
  reason: string;
};

function heatIndex(tempF: number, rh: number): number {
  const T = tempF;
  const R = rh;
  return (
    -42.379 +
    2.04901523 * T +
    10.14333127 * R -
    0.22475541 * T * R -
    6.83783e-3 * T * T -
    5.481717e-2 * R * R +
    1.22874e-3 * T * T * R +
    8.5282e-4 * T * R * R -
    1.99e-6 * T * T * R * R
  );
}

function classifyHI(hi: number): { band: string; reason: string } {
  if (hi < 80) return { band: "Safe", reason: "No significant risk." };
  if (hi < 90) return { band: "Caution", reason: "Fatigue possible with prolonged exposure." };
  if (hi < 103) return { band: "Extreme Caution", reason: "Heat cramps & exhaustion possible." };
  if (hi < 125) return { band: "Danger", reason: "Heat cramps, heat exhaustion likely." };
  return { band: "Extreme Danger", reason: "Heat stroke highly likely." };
}

export function useHeatRisk(lat = 30.2672, lon = -97.7431) {
  const [risk, setRisk] = useState<HeatRisk | null>(null);

  useEffect(() => {
    async function fetchHeat() {
      try {
        const ptsRes = await fetch(`https://api.weather.gov/points/${lat},${lon}`);
        const ptsData = await ptsRes.json();
        const { gridId, gridX, gridY } = ptsData.properties;

        const gridRes = await fetch(`https://api.weather.gov/gridpoints/${gridId}/${gridX},${gridY}`);
        const gridData = await gridRes.json();

        const temps = gridData.properties.temperature.values;
        const rhs = gridData.properties.relativeHumidity.values;

        let maxHI = -Infinity;
        for (let i = 0; i < Math.min(temps.length, rhs.length, 12); i++) {
          const hi = heatIndex(temps[i].value, rhs[i].value);
          if (hi > maxHI) maxHI = hi;
        }

        const { band, reason } = classifyHI(maxHI);
        setRisk({ band, index: Math.round(maxHI), reason });
      } catch (err) {
        console.error("Heat risk fetch failed", err);
      }
    }
    fetchHeat();
  }, [lat, lon]);

  return risk;
}
