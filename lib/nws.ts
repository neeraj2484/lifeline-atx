// lib/nws.ts
import { computeHeatIndex } from "./heatIndex";

const BASE = "https://api.weather.gov";

type GridMeta = {
  gridId: string;
  gridX: number;
  gridY: number;
};

export async function getGridpoint(lat: number, lon: number) {
    //center: [-97.7431, 30.2672], // Austin, TX
    //uncomment below code
  //const res = await fetch(`${BASE}/points/${lat},${lon}`
  const res = await fetch(`${BASE}/points/${30.2672},${-97.7431}`
    , {
    headers: { "User-Agent": "weather-risk-nextjs (neeraj.pandya04@gmail.com)" },
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`Points API failed: ${res.status}`);
  return res.json();
}

export async function getGridForecast(meta: GridMeta) {
  const res = await fetch(`${BASE}/gridpoints/${meta.gridId}/${meta.gridX},${meta.gridY}`, {
    headers: { "User-Agent": "weather-risk-nextjs (neeraj.pandya04@gmail.com)" },
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`Grid API failed: ${res.status}`);
  return res.json();
}

export async function fetchHeatRiskData(lat = 30.2672, lon = -97.7431)
 {
  // 1) points → meta
  const pointsJSON = await getGridpoint(lat, lon);
  const meta: GridMeta = {
    gridId: pointsJSON.properties.gridId,
    gridX: pointsJSON.properties.gridX,
    gridY: pointsJSON.properties.gridY,
  };

  // 2) gridpoints forecast
  const forecastJSON = await getGridForecast(meta);

  const temps = forecastJSON.properties?.temperature?.values ?? [];
  const rhs = forecastJSON.properties?.relativeHumidity?.values ?? [];

  const steps = Math.min(12, temps.length, rhs.length); // ~72h
  const samples = Array.from({ length: steps }).map((_, i) => {
    const t = temps[i];
    const r = rhs[i];
    const tempF = Number(t?.value ?? 0); // NWS gridpoints temp is already °F
    const rh = Number(r?.value ?? 0);

    // validTime: "2025-08-18T06:00:00+00:00/PT6H"
    const [start, dur] = String(t?.validTime ?? "").split("/");
    const hours =
      dur && /PT(\d+)H/.test(dur) ? Number(dur.match(/PT(\d+)H/)![1]) : 6;

    const startDate = new Date(start);
    const endDate = new Date(startDate.getTime() + hours * 3600_000);

    const hi = computeHeatIndex(tempF, rh);

    return {
      T: tempF,
      R: rh,
      hi,
      timeStart: startDate.toISOString(),
      timeEnd: endDate.toISOString(),
    };
  });

  return {
    pointsJSON, // meta evidence
    forecastJSON, // clipboard evidence
    meta,
    samples,
  };
}
