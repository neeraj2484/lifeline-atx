| #  | Test Case                                          | Expected Behavior                                         | Pass/Fail Criteria           |
| -- | -------------------------------------------------- | --------------------------------------------------------- | ---------------------------- |
| 1  | Call `fetchSafetyIncidents` first time             | Cache miss, should log `cache_hit=Fail`                   | Pass if `Fail` logged        |
| 2  | Call `fetchSafetyIncidents` second time (same URL) | Cache hit, should log `cache_hit=Pass`                    | Pass if `Pass` logged        |
| 3  | Successful fetch latency                           | Latency in ms logged under `latency_ms`                   | Pass if value > 0            |
| 4  | Error occurs (bad URL)                             | Should log `error` with message                           | Pass if error message logged |
| 5  | Metrics file CSV headers                           | `timestamp,browser,feature,value` present                 | Pass if headers correct      |
| 6  | Browser field populated                            | Should log `Chrome`, `Edge`, etc.                         | Pass if not empty            |
| 7  | Feature field populated                            | Should log values like `latency_ms`, `cache_hit`, `error` | Pass if not empty            |
| 8  | Value field populated                              | Should log ms, Pass/Fail, or error text                   | Pass if not empty            |
| 9  | Multiple metrics logged per call                   | Should log latency + cache\_hit in same run               | Pass if both exist           |
| 10 | Call after 2 mins (new fetch)                      | Should re-log `cache_hit=Fail`                            | Pass if logged correctly     |
| 11 | Invalid council district returned                  | Should still log metrics without breaking                 | Pass if metrics logged       |
| 12 | API returns empty result                           | Should log latency + cache\_hit                           | Pass if still logs           |
| 13 | Simulate slow network                              | Latency should increase                                   | Pass if latency > 2000ms     |
| 14 | Log metric manually                                | `logMetric({feature:"test", value:"123"})` works          | Pass if row added            |
| 15 | Export CSV button clicked                          | Should download metrics.csv                               | Pass if file downloaded      |
| 16 | Exported CSV row count                             | Rows = number of logMetric calls                          | Pass if counts match         |
| 17 | Exported CSV open in Excel                         | Columns aligned                                           | Pass if clean view           |
| 18 | Error thrown inside `metricsLogger`                | Should not crash app                                      | Pass if handled              |
| 19 | Feature names consistent                           | Always lowercase with `_`                                 | Pass if consistent           |
| 20 | Value types correct                                | Latency = number, cache\_hit = Pass/Fail, error = string  | Pass if correct              |
