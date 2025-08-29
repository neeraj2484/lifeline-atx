"use client";

import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || "";

export default function MapPage() {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (mapContainerRef.current) {
      const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: "mapbox://styles/mapbox/streets-v12",
        center: [-97.7431, 30.2672],
        zoom: 11,
      });
      map.addControl(new mapboxgl.NavigationControl(), "top-right");
      return () => map.remove();
    }
  }, []);

  return (
    <div className="relative w-screen h-screen">
      {/* Map container */}
      <div ref={mapContainerRef} className="absolute inset-0w-full h-full touch-none sm:touch-auto" />

      {/* Toolbar */}
      <div className="absolute top-4 left-4 bg-white shadow-md rounded p-2 z-10">
        <h2 className="text-sm font-bold">Toolbar</h2>
        <button className="block mt-1 px-2 py-1 text-xs bg-blue-500 text-white rounded">
          Action
        </button>
        <div className="mt-2 text-xs text-gray-600">
          Status: <span id="sync-status">Ready</span>
        </div>
      </div>

      {/* Legend */}
      <div className="absolute bottom-4 left-4 bg-white shadow-md rounded p-2 z-10">
        <h2 className="text-sm font-bold">Legend</h2>
        <div className="flex items-center space-x-2 mt-1">
          <span className="w-4 h-4 bg-blue-500 inline-block"></span>
          <span className="text-xs">Water</span>
        </div>
        <div className="flex items-center space-x-2 mt-1">
          <span className="w-4 h-4 bg-green-500 inline-block"></span>
          <span className="text-xs">Parks</span>
        </div>
      </div>
    </div>
  );
}
