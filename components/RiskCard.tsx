"use client";

import HeatBadge from "./HeatBadge";
import type { HeatBand } from "@/lib/heatIndex";

const explain: Record<HeatBand, string> = {
  Safe: "No significant heat risk.",
  Caution: "Fatigue possible with prolonged exposure and activity.",
  "Extreme Caution": "Heat cramps and heat exhaustion likely with prolonged exposure.",
  Danger: "Heat stroke possible. Avoid strenuous activity and stay hydrated.",
  "Extreme Danger": "Life-threatening heat stroke likely. Avoid outdoor exposure.",
};

export default function RiskCard({
  band,
  hiMax,
  reason,
  samples,
  forecastJSON,
  onClose,
}: {
  band: HeatBand;
  hiMax: number;
  reason: string;
  samples: Array<{ hi: number; T: number; R: number; timeStart: string; timeEnd: string }>;
  forecastJSON: any;
  onClose: () => void;
}) {
  const copyJSON = async () => {
    try {
      await navigator.clipboard.writeText(JSON.stringify(forecastJSON, null, 2));
      alert("Gridpoints JSON copied ✅");
    } catch {
      alert("Copy failed — expand and copy manually.");
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-4 w-full max-w-lg">
      <div className="flex items-start justify-between gap-2">
        <div>
          <h2 className="text-lg font-semibold">Heat Risk Details</h2>
          <p className="text-sm text-gray-600">{explain[band]}</p>
        </div>
        <button onClick={onClose} className="px-3 py-1 rounded bg-gray-800 text-white text-sm">
          Close
        </button>
      </div>

      <div className="mt-3 flex items-center gap-3">
        <HeatBadge band={band} />
        <div className="text-sm">
          <div>
            Max Heat Index (next 72h): <b>{Math.round(hiMax)}°F</b>
          </div>
          <div className="text-gray-700">{reason}</div>
        </div>
      </div>

      <details className="mt-4">
        <summary className="cursor-pointer text-blue-600">View next 72h samples</summary>
        <div className="mt-2 max-h-56 overflow-y-auto text-xs font-mono bg-gray-50 p-2 rounded">
          {samples.map((s, i) => (
            <div key={i} className="py-1 border-b last:border-b-0">
              <div>
                {new Date(s.timeStart).toLocaleString()} – {new Date(s.timeEnd).toLocaleString()}
              </div>
              <div>
                HI: {Math.round(s.hi)}°F | T: {Math.round(s.T)}°F | RH: {Math.round(s.R)}%
              </div>
            </div>
          ))}
        </div>
      </details>

      <details className="mt-3" style={{maxHeight:"400px",minHeight:"50px",overflow:"auto"}}>
        <summary className="cursor-pointer text-blue-600">Raw gridpoints JSON</summary>
        <pre className="mt-2 text-xs overflow-x-auto bg-gray-50 p-2 rounded">
{JSON.stringify(forecastJSON, null, 2)}
        </pre>
      </details>

      <div className="mt-3 flex gap-2">
        <button onClick={copyJSON} className="px-3 py-1 rounded bg-emerald-600 text-white text-sm">
          Copy JSON
        </button>
      </div>
    </div>
  );
}
