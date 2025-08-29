"use client";
import { useHeatRisk } from "./useHeatRisk";

export default function HeatCard() {
  const risk = useHeatRisk();

  if (!risk) return null;

  const color =
    risk.band === "Danger" || risk.band === "Extreme Danger"
      ? "bg-red-500"
      : risk.band === "Extreme Caution"
      ? "bg-orange-500"
      : risk.band === "Caution"
      ? "bg-yellow-500"
      : "bg-green-500";

  return (
    <div className={`p-4 rounded-xl shadow-md text-white ${color}`}>
      <h3 className="font-bold">Heat Risk</h3>
      <p className="text-lg">{risk.band} (HI {risk.index}°F)</p>
      <p className="text-sm">{risk.reason}</p>
    </div>
  );
}
