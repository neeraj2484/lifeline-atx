# Area Safety Plan

## Dataset
Austin Police Department (APD) Incidents — Socrata Open Data Portal

### Fields
- `incident_report_number`
- `occurrence_date`
- `primary_type` (general category of incident)
- `latitude`
- `longitude`
- `location`
- `clearance_status`

### Filters
- Time window: last 90 days
- Exclude categories:
  - Domestic Violence
  - Juvenile Offenses
  - Mental Health
  - Sexual Assault
  - Other categories flagged as sensitive
- Only include rows with valid `latitude` and `longitude`

### Disclaimer
This layer is **informational only**.  
It summarizes **recent police incident reports** to highlight general patterns of public safety.  
It does **not predict future crime**, nor should it be used for policing or profiling.  
Data is public, aggregated, and filtered to respect **privacy and ethics guardrails**.

---
