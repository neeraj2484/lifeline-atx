// "use client";

// import type { AppProps } from "next/app";
// import { useEffect } from "react";
// import "@/styles/globals.css";

// export default function App({ Component, pageProps }: AppProps) {
//   useEffect(() => {
//     if ("serviceWorker" in navigator) {
//       navigator.serviceWorker
//         .register("/sw.js")
//         .then((reg) => console.log("[SW] Registered:", reg))
//         .catch((err) => console.error("[SW] Registration failed:", err));
//     }
//   }, []);

//   return <Component {...pageProps} />;
// }
"use client";
import type { AppProps } from "next/app";
import { useEffect } from "react";
//import "../styles/globals.css";

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/service-worker.js").catch((err) => {
        console.error("SW registration failed", err);
      });
    }
  }, []);

  return <Component {...pageProps} />;
}

export default App;
