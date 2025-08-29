"use client";

import type { HeatBand } from "@/lib/heatIndex";

const bandClass: Record<HeatBand, string> = {
  "Safe": "bg-gray-600",
  "Caution": "bg-green-600",
  "Extreme Caution": "bg-orange-500",
  "Danger": "bg-red-600",
  "Extreme Danger": "bg-purple-700",
};

export default function HeatBadge({ band }: { band: HeatBand }) {
  return (
    <span className={`px-3 py-1 rounded-full text-white text-sm font-semibold ${bandClass[band]}`}>
      {band}
    </span>
  );
}
