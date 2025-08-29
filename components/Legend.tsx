// export default function Legend() {
//   return (
//     <div className="absolute bottom-3 left-6 z-10 bg-white/95 rounded-xl px-3 py-2 shadow">
//       <div className="text-sm font-medium mb-1">Legend</div>
//       <div className="flex items-center gap-2 text-sm">
//         <span style={{ width: 14, height: 14, background: "#e11d48", opacity: 0.28, border: "2px solid #be123c", display: "inline-block" }} />
//         <span>Flash Flood Warning</span>
//       </div>
//     </div>
//   );
// }
// export default function Legend() {
//   return (
//     <div className="absolute bottom-3 left-3 z-10 bg-white/95 rounded-xl px-3 py-2 shadow">
//       <div className="text-sm font-medium mb-1">Legend</div>
//       <div className="flex items-center gap-2 text-sm">
//         <span style={{ width: 14, height: 14, background: "#e11d48", opacity: 0.28, border: "2px solid #be123c", display: "inline-block" }} />
//         <span>Flash Flood Warning</span>
//       </div>
//     </div>
//   );
// }
// "use client";

// export default function Legend() {
//   const Item = ({ c, t }: { c: string; t: string }) => (
//     <div className="flex items-center gap-2">
//       <span className={`inline-block w-3 h-3 rounded ${c}`} />
//       <span className="text-xs">{t}</span>
//     </div>
//   );

//   return (
//     <div className="bg-white rounded-xl shadow p-3 text-sm">
//       <div className="font-semibold mb-2">Heat Risk</div>
//       <div className="flex flex-col gap-1">
//         <Item c="bg-gray-600" t="Safe" />
//         <Item c="bg-green-600" t="Caution" />
//         <Item c="bg-orange-500" t="Extreme Caution" />
//         <Item c="bg-red-600" t="Danger" />
//         <Item c="bg-purple-700" t="Extreme Danger" />
//       </div>
//     </div>
//   );
// }
// components/Legend.tsx
"use client";

import React, { useState } from "react";

const legendItems = [
  { label: "Flood Risk", color: "bg-blue-500" },
  { label: "Tornado Risk", color: "bg-purple-500" },
  { label: "Heat Risk - Caution", color: "bg-yellow-400" },
  { label: "Heat Risk - Extreme Caution", color: "bg-orange-500" },
  { label: "Heat Risk - Danger", color: "bg-red-600" },
];

export default function Legend() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="
        fixed bottom-4 left-1/2 -translate-x-1/2 
        sm:left-4 sm:translate-x-0
        bg-white shadow-lg rounded-lg p-2 sm:p-3 text-xs sm:text-sm z-50
        max-w-[90%] sm:max-w-xs
      "
    >
      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center font-semibold text-left"
      >
        <span>Legend</span>
        <span className="ml-2">{open ? "▲" : "▼"}</span>
      </button>

      {/* Legend Items */}
      {open && (
        <ul className="mt-2 grid grid-cols-2 sm:block gap-2 sm:space-y-2">
          {legendItems.map((item, idx) => (
            <li key={idx} className="flex items-center space-x-2">
              <span
                className={`inline-block w-3 h-3 sm:w-4 sm:h-4 rounded ${item.color}`}
              />
              <span className="truncate">{item.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
