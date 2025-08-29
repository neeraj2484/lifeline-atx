"use client";
import { useEffect, useState } from "react";

export default function InstallPrompt() {
  const [deferredEvt, setDeferredEvt] = useState<any>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault();           // stop auto-prompt
      setDeferredEvt(e);
      setVisible(true);
    };
    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const onInstall = async () => {
    if (!deferredEvt) return;
    setVisible(false);
    const { outcome } = await deferredEvt.prompt();
    setDeferredEvt(null);
    // outcome: 'accepted' | 'dismissed'
  };

  // hide on iOS (no beforeinstallprompt support)
  const isiOS = typeof window !== "undefined" && /iphone|ipad|ipod/i.test(navigator.userAgent);
  if (isiOS) return null;

  if (!visible) return null;
  return (
    <button
      className="fixed bottom-4 right-4 px-4 py-2 rounded bg-blue-600 text-white shadow"
      onClick={onInstall}
    >
      Install app
    </button>
  );
}
