// "use client";

// import { computeRiskViaGeolocation } from "@/lib/risk";

// type Props = {
//   alert: {
//     event?: string;
//     severity?: string;
//     headline?: string;
//     expires?: string;
//   };
//   alerts: any | null; // full FeatureCollection (for risk checks)
//   onClose: () => void;
// };

// export default function Sidebar({ alert, alerts, onClose }: Props) {
//   return (
//     <div className="absolute right-0 top-0 z-10 w-80 h-full bg-white shadow-xl p-4 overflow-y-auto">
//       <div className="flex items-center justify-between">
//         <h2 className="text-lg font-semibold">Alert Details</h2>
//         <button onClick={onClose} className="text-sm">✕</button>
//       </div>

//       <div className="mt-3 space-y-2">
//         <div><span className="font-medium">Event:</span> {alert.event ?? "—"}</div>
//         <div><span className="font-medium">Severity:</span> {alert.severity ?? "—"}</div>
//         <div><span className="font-medium">Headline:</span> {alert.headline ?? "—"}</div>
//         <div><span className="font-medium">Expires:</span> {alert.expires ? new Date(alert.expires).toLocaleString() : "—"}</div>
//       </div>

//       <button
//         className="mt-4 w-full bg-rose-600 text-white rounded-lg px-3 py-2"
//         onClick={async () => {
//           const result = await computeRiskViaGeolocation(alerts);
//           if (!result) return;
//           const msg =
//             result.risk === "High"
//               ? "🚨 High Risk: inside or within 5 miles of an alert polygon."
//               : "✅ Low Risk: outside alert polygons.";
//           alertBrowser(msg);
//         }}
//       >
//         Check My Risk
//       </button>
//     </div>
//   );
// }

// // simple UI alert that doesn't block types
// function alertBrowser(message: string) {
//   window.alert(message);
// }
// "use client";
// import { useState } from "react";

// export default function Sidebar({ feature }: { feature: any }) {
//   if (!feature) return null;

//   return (
//     <div className="absolute top-0 right-0 w-80 h-full bg-white shadow-lg p-4 overflow-y-auto">
//       <h2 className="text-xl font-bold">{feature.properties.event}</h2>
//       <p className="text-red-600">Severity: {feature.properties.severity}</p>
//       <p>Expires: {new Date(feature.properties.expires).toLocaleString()}</p>
//     </div>
//   );
// }
"use client";

import { computeRiskViaGeolocation } from "@/lib/risk";

type Props = {
  alert: {
    event?: string;
    severity?: string;
    headline?: string;
    expires?: string;
  };
  alerts: any | null; // full FeatureCollection (for risk checks)
  onClose: () => void;
};

export default function Sidebar({ alert, alerts, onClose }: Props) {
  console.log("alert1",alert.severity);
  return (
    <div className="absolute right-0 top-0 z-10 w-80 h-full bg-white shadow-xl p-4 overflow-y-auto">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Alert Details</h2>
        <button onClick={onClose} className="text-sm">✕</button>
      </div>

      <div className="mt-3 space-y-2">
        <div><span className="font-medium">Event:</span> {alert.event ?? "—"}</div>
        <div><span className="font-medium">Severity:</span> {alert.severity ?? "—"}</div>
        <div><span className="font-medium">Headline:</span> {alert.headline ?? "—"}</div>
        <div><span className="font-medium">Expires:</span> {alert.expires ? new Date(alert.expires).toLocaleString() : "—"}</div>
      </div>

      <button
        className="mt-4 w-full bg-rose-600 text-white rounded-lg px-3 py-2"
        onClick={async () => {
          const result = await computeRiskViaGeolocation(alerts);
          if (!result) return;
          const msg =
            result.risk === "High"
              ? "🚨 High Risk: inside or within 5 miles of an alert polygon."
              : "✅ Low Risk: outside alert polygons.";
          alertBrowser(msg);
        }}
      >
        Check My Risk
      </button>
    </div>
  );
}

// simple UI alert that doesn't block types
function alertBrowser(message: string) {
  window.alert(message);
}

