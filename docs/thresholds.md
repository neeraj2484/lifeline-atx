# Risk Thresholds — Lifeline ATX

## Current Classification (v1)
- **High Risk**
  - User point is inside any NWS alert polygon, OR
  - User point is within **5 miles** of any alert polygon boundary.

- **Low Risk**
  - Otherwise (outside polygons and > 5 miles away).

## Why these rules?
- Polygon boundaries represent issued warning areas; flooding can extend beyond them.
- A 5-mile buffer provides a conservative safety margin for nearby impacts and uncertainty.

## Notes
- Distance measured as the minimum distance from user location to the polygon boundary (converted to line) using Turf.
- Event details shown: `event`, `severity`, `headline`, `expires` from NWS properties.
- “Last sync” displays the time of the last successful fetch that was cached in IndexedDB.

## Future Enhancements
- Add `Moderate` tier (e.g., 5–10 miles).
- Weight risk by NWS `severity` and `expires`.
- Display time since issuance and callouts for `Immediate` urgency.
