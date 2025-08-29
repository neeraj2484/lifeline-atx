import Papa from "papaparse";

type Metric = {
  timestamp: string;
  browser: string;
  feature: string;   // e.g. "latency_ms", "cache_hit"
  value: string | number;
};

const metrics: Metric[] = [];

/**
 * Log a metric event with timestamp, browser, feature, and value
 */
export function logMetric({ feature, value }: { feature: string; value: string | number }) {
  const entry: Metric = {
    timestamp: new Date().toISOString(),
    browser: navigator.userAgent.includes("Chrome")
      ? "Chrome"
      : navigator.userAgent.includes("Firefox")
      ? "Firefox"
      : navigator.userAgent.includes("Safari")
      ? "Safari"
      : navigator.userAgent.includes("Edg")
      ? "Edge"
      : "Other",
    feature,
    value,
  };
  metrics.push(entry);
}

/**
 * Export metrics as CSV
 */
export function exportMetricsCSV() {
  if (metrics.length === 0) {
    alert("No metrics logged yet!");
    return;
  }
  const csv = Papa.unparse(metrics);
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "metrics_log.csv";
  a.click();
}
