// components/AlertCard.tsx
"use client";

import { cn } from "@/lib/utils";

type AlertCardProps = {
  title: string;
  description?: string;
  level?: "info" | "caution" | "warning" | "danger";
};

const levelColors: Record<string, string> = {
  info: "bg-blue-100 text-blue-800 border-blue-300",
  caution: "bg-yellow-100 text-yellow-800 border-yellow-300",
  warning: "bg-orange-100 text-orange-800 border-orange-300",
  danger: "bg-red-100 text-red-800 border-red-300",
};

export default function AlertCard({
  title,
  description,
  level = "info",
}: AlertCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border p-4 shadow-sm mb-3",
        levelColors[level] || levelColors.info
      )}
    >
      <h3 className="font-semibold text-lg">{title}</h3>
      {description && (
        <p className="text-sm mt-1 leading-snug">{description}</p>
      )}
    </div>
  );
}
