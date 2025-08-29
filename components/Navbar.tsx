"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">Lifeline ATX</h1>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-6">
          <li><a href="/" className="hover:underline">Home</a></li>
          <li><a href="/alerts" className="hover:underline">Alerts</a></li>
          <li><a href="/about" className="hover:underline">About</a></li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <ul className="md:hidden flex flex-col bg-blue-700 p-4 space-y-3">
          <li><a href="/" className="hover:underline">Home</a></li>
          <li><a href="/alerts" className="hover:underline">Alerts</a></li>
          <li><a href="/about" className="hover:underline">About</a></li>
        </ul>
      )}
    </nav>
  );
}
