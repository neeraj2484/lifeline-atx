import React from "react";
import { useNetworkStatus } from "../hooks/useNetworkStatus";

export default function NetworkBanner() {
  const online = useNetworkStatus();

  if (online) return null;

  return (
    <div className="bg-red-600 text-white text-center p-2">
      ⚠️ Offline: showing last-viewed data
    </div>
  );
}
