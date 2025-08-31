
declare module "geojson" {
  export interface GeoJsonProperties { [name: string]: any }
  export interface Geometry { [name: string]: any }
  export interface FeatureCollection<G = Geometry, P = GeoJsonProperties> {
    type: "FeatureCollection";
    features: any[];
  }
}
