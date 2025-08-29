// import type { Metadata } from "next";
// import "./globals.css";
// import SWRegister from "./sw-register";

// export const metadata: Metadata = {
//   title: "Lifeline ATX",
//   description: "Offline-ready Mapbox + Dexie demo",
// };

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en" suppressHydrationWarning> 
//       <body>
//         <SWRegister />
//         {children}
//       </body>
//     </html>
//   );
// }
// app/layout.tsx
//import type { Metadata } from "next";
import "./globals.css";
import SWRegister from "./sw-register";
export const metadata = {
  title: "Lifeline ATX",
  description: "LifeLine ATX is a multi-hazard, hyper-local, offline-first safety companion built for Austin, TX. It combines flood, heat, and crime risk data into a single map with explainable ‘Why’ cards. Unlike generic weather apps, it integrates Austin-specific open datasets, works offline during outages, and explains risks in plain English. The ultimate goal is to win the Congressional App Challenge (TX-37) and be competitive at Nationals.",
  themeColor: "#0ea5e9"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="theme-color" content="#0ea5e9" />
        {/* iOS A2HS */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <link rel="apple-touch-icon" href="/icons/icon-192.png" />
      </head>
      <body>
        <SWRegister />
        {children}</body>
    </html>
  );
}
