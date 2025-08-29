// // app/page.tsx
// "use client";

// import dynamic from "next/dynamic";
// import Toolbar from "@/components/Toolbar";
// // import { insertMockAlert } from "@/lib/mockData";
// const FloodMap = dynamic(() => import("@/components/FloodMap"), { ssr: false });

// export default function Page() {
  
//   //return <FloodMap />;

//    return (
//     <div className="h-screen flex flex-col">
//       <Toolbar />
//       <div className="flex-1">
//         <FloodMap />
//       </div>
//     </div>
//   );
// }

// "use client";

// import dynamic from "next/dynamic";

// // Client-only page wrapper (avoids hydration issues with Mapbox)
// const MapPage = dynamic(() => import("./map-page"), { ssr: false });

// export default function Page() {
//   return <MapPage />;
// }

"use client";

import dynamic from "next/dynamic";

const MapPage = dynamic(() => import("./map-page"), { ssr: false });

export default function Page() {
  return (
    <main className="flex flex-col min-h-screen">
      <MapPage />
    </main>
  );
}
