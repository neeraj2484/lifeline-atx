// utils/formatIncidents.ts
export function formatIncidentsToGeoJSON(incidents: any[]): GeoJSON.FeatureCollection {
  return {
    type: "FeatureCollection",
    features: incidents
      .filter(i => i.longitude && i.latitude)
      .map(i => ({
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [parseFloat(i.longitude), parseFloat(i.latitude)],
        },
        properties: {
          category: i.incident_type,
          timestamp: i.report_date,
        },
      })),
  };
}
