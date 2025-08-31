"use client";

import { useState, useEffect } from "react";
import * as turf from "@turf/turf";
import { fetchHeatRiskData } from "@/lib/nws";
import { classifyHeatIndex, HeatBand } from "@/lib/heatIndex";
import HeatBadge from "./HeatBadge";
import RiskCard from "./RiskCard";
import CombinedRiskBadge from "../components/CombinedRiskBadge";
import { Menu, X } from "lucide-react";
import HelpSheet from "./HelpSheet";

type ToolbarProps = {
  status: string;
  lastSync: string;
  onSync: () => void;
  alerts?: any;
  geoAlerts?: {
    id: string | number;
    name?: string;
    risk?: string;
    geometry?: {
      type: string;
      coordinates: any[];
    };
  }[];
  floodRisk?: any;
  heatRisk?: any;
};

const allowedTypes = [
  "Polygon",
  "MultiPolygon",
  "Point",
  "LineString",
  "MultiPoint",
  "MultiLineString",
] as const;

export default function Toolbar({
  status,
  lastSync,
  onSync,
  alerts = [],
  geoAlerts = [],
  floodRisk,
  heatRisk,
}: ToolbarProps) {
  const [risk, setRisk] = useState<string>("Unknown");

  // Heat dashboard state
  const [band, setBand] = useState<HeatBand>("Safe");
  const [hiMax, setHiMax] = useState<number>(0);
  const [details, setDetails] = useState<null | {
    band: HeatBand;
    hiMax: number;
    reason: string;
    samples: any[];
    forecastJSON: any;
  }>(null);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  // Mobile menu toggle
  const [menuOpen, setMenuOpen] = useState(false);

  const checkRisk = () => {
    if (!navigator.geolocation) {
      alert("Geolocation not supported");
      return;
    }
    navigator.geolocation.getCurrentPosition((pos) => {
      const pt = turf.point([pos.coords.longitude, pos.coords.latitude]);
      let highRisk = false;

      for (const alert of geoAlerts) {
        if (!alert.geometry) continue;
        // Type guard for geometry.type
        if (!allowedTypes.includes(alert.geometry.type as typeof allowedTypes[number])) continue;

        const geom = turf.geometry(
          alert.geometry.type as typeof allowedTypes[number],
          alert.geometry.coordinates
        );

        if (turf.booleanPointInPolygon(pt, geom)) {
          highRisk = true;
          break;
        }

        const centroid = turf.centroid(geom);
        const dist = turf.distance(pt, centroid, { units: "miles" });
        if (dist <= 5) {
          highRisk = true;
          break;
        }
      }
      setRisk(highRisk ? "High" : "Low");
    });
  };

  const loadHeat = async () => {
    setLoading(true);
    try {
      let lat = 30.2672;
      let lon = -97.7431;

      if (navigator.geolocation) {
        await new Promise<void>((resolve) => {
          navigator.geolocation.getCurrentPosition(
            (pos) => {
              lat = Number(pos.coords.latitude.toFixed(4));
              lon = Number(pos.coords.longitude.toFixed(4));
              resolve();
            },
            () => resolve()
          );
        });
      }

      const { samples, forecastJSON } = await fetchHeatRiskData(lat, lon);
      const worst = samples.reduce((a, b) => (b.hi > a.hi ? b : a), samples[0]);
      const band = classifyHeatIndex(worst.hi);
      const reason = `Based on NWS forecast for the next ~72h, the maximum Heat Index is ${Math.round(
        worst.hi
      )}°F around ${new Date(worst.timeStart).toLocaleString()}.`;

      setBand(band);
      setHiMax(worst.hi);
      setDetails({ band, hiMax: worst.hi, reason, samples, forecastJSON });
    } catch (e) {
      console.error(e);
      setBand("Safe");
      setHiMax(0);
      setDetails(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadHeat();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {/* HEADER */}
      <header className="bg-blue-700 text-white px-4 py-3 flex items-center justify-between">
        <h1 className="text-lg font-semibold">Lifeline-ATX Dashboard</h1>

        {/* Desktop controls */}
        <div className="hidden sm:flex items-center gap-2">
          <div className="text-xs sm:text-sm bg-blue-800/50 px-2 py-1 rounded">
            <div>Status: {status}</div>
            <div>Last sync: {lastSync}</div>
          </div>

          <button
            onClick={onSync}
            className="px-3 py-1 rounded bg-white/15 hover:bg-white/25 text-xs sm:text-sm"
          >
            Sync
          </button>

          <CombinedRiskBadge floodRisk={floodRisk} heatRisk={heatRisk} />

          <button
            onClick={checkRisk}
            className="px-3 py-1 rounded bg-green-600 hover:bg-green-700 text-xs sm:text-sm"
          >
            Check My Risk
          </button>

          {/* My risk text (DESKTOP) */}
          <span className="text-xs sm:text-sm">My risk: {risk}</span>

          {/* Safety placeholders (DESKTOP) */}
          <div className="flex items-center gap-1 sm:gap-2" id="safety-badge" />
          <div className="flex items-center gap-1 sm:gap-2" id="safety-card" />

          <div className="flex items-center gap-2">
            <span className="text-xs sm:text-sm">Heat:</span>
            <HeatBadge band={band} />
          </div>

          <button
            onClick={loadHeat}
            className="px-3 py-1 rounded bg-white/15 hover:bg-white/25 text-xs sm:text-sm"
            disabled={loading}
          >
            {loading ? "Refreshing…" : "Refresh"}
          </button>

          <button
            onClick={() => setOpen(true)}
            className="px-3 py-1 rounded bg-white text-blue-700 text-xs sm:text-sm font-semibold"
            disabled={!details}
          >
            View Details
          </button>
        </div>

        {/* Hamburger for mobile */}
        <button
          className="sm:hidden p-2 rounded hover:bg-blue-600"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="sm:hidden bg-blue-600 text-white p-4 space-y-3">
          <div className="text-xs bg-blue-800/50 px-2 py-1 rounded">
            <div>Status: {status}</div>
            <div>Last sync: {lastSync}</div>
          </div>

          <button
            onClick={onSync}
            className="block w-full px-3 py-2 rounded bg-white/15 hover:bg-white/25 text-left"
          >
            Sync
          </button>

          <CombinedRiskBadge floodRisk={floodRisk} heatRisk={heatRisk} />

          <button
            onClick={checkRisk}
            className="block w-full px-3 py-2 rounded bg-green-600 hover:bg-green-700 text-left"
          >
            Check My Risk
          </button>

          {/* My risk text (MOBILE) */}
          <div className="text-sm">My risk: {risk}</div>

          {/* Safety placeholders (MOBILE) */}
          <div className="flex items-center gap-2" id="safety-badge" />
          <div className="flex items-center gap-2" id="safety-card" />

          <div className="flex items-center gap-2">
            <span>Heat:</span>
            <HeatBadge band={band} />
          </div>

          <button
            onClick={loadHeat}
            className="block w-full px-3 py-2 rounded bg-white/15 hover:bg-white/25 text-left"
            disabled={loading}
          >
            {loading ? "Refreshing…" : "Refresh"}
          </button>

          <button
            onClick={() => setOpen(true)}
            className="block w-full px-3 py-2 rounded bg-white text-blue-700 font-semibold text-left"
            disabled={!details}
          >
            View Details
          </button>
        </div>
      )}

      {/* Heat Risk Detailed Card */}
      {open && details && (
        <div className="fixed inset-0 bg-black/30 flex items-end sm:items-center justify-center p-3 z-50">
          <RiskCard
            band={details.band}
            hiMax={details.hiMax}
            reason={details.reason}
            samples={details.samples}
            forecastJSON={details.forecastJSON}
            onClose={() => setOpen(false)}
          />
        </div>
      )}
    </>
  );
}