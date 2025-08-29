"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const riskBands = [
  { label: "Flood Risk", color: "bg-blue-500", icon: "🌊" },
  { label: "Tornado Risk", color: "bg-purple-500", icon: "🌪️" },
  { label: "Heat Risk - Caution", color: "bg-yellow-400", icon: "🌡️" },
  { label: "Heat Risk - Extreme Caution", color: "bg-orange-500", icon: "🔥" },
  { label: "Heat Risk - Danger", color: "bg-red-600", icon: "☠️" },
];

export default function HelpSheet() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Toggle Button (can also go in your header) */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-20 right-4 sm:bottom-4 bg-indigo-600 text-white px-4 py-2 rounded-lg shadow-lg z-50"
      >
        Help
      </button>

      {/* Sheet Overlay + Panel */}
      <AnimatePresence>
        {open && (
          <>
            {/* Dark background */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Slide-in panel */}
            <motion.div
              className="fixed right-0 top-0 h-full w-80 bg-white shadow-lg z-50 p-4 overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Risk Bands</h2>
                <button
                  onClick={() => setOpen(false)}
                  className="text-gray-600 hover:text-black"
                >
                  ✕
                </button>
              </div>

              <ul className="space-y-3">
                {riskBands.map((band, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <span className="text-xl">{band.icon}</span>
                    <span
                      className={`inline-block w-4 h-4 rounded ${band.color}`}
                    />
                    <span>{band.label}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
