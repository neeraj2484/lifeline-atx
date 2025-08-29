import React from "react";

type RiskLevel = "Low" | "Caution" | "Extreme Caution" | "Danger" | "Extreme Danger";

interface CombinedRiskBadgeProps {
  floodRisk: RiskLevel;
  heatRisk: RiskLevel;
}

const levels: RiskLevel[] = ["Low", "Caution", "Extreme Caution", "Danger", "Extreme Danger"];

function combinedRisk(flood: RiskLevel, heat: RiskLevel): RiskLevel {
  console.log(flood+":"+heat)

  const floodIdx = levels.indexOf(flood);
  const heatIdx = levels.indexOf(heat);
  return levels[Math.max(floodIdx, heatIdx)];
}

export default function CombinedRiskBadge({ floodRisk, heatRisk }: CombinedRiskBadgeProps) {
  const risk = combinedRisk(floodRisk, heatRisk);

  const colorMap: Record<RiskLevel, string> = {
    Low: "bg-green-600",
    Caution: "bg-yellow-500",
    "Extreme Caution": "bg-orange-500",
    Danger: "bg-red-600",
    "Extreme Danger": "bg-purple-700",
  };

  return (
    <span className={`px-3 py-1 rounded-xl text-white font-semibold ${colorMap[risk]}`}>
      Combined Risk: {risk}
    </span>
  );
}
