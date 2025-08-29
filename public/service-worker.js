const CACHE_NAME = "lifeline-cache-v1";
const TILE_URL_PATTERN = /^https:\/\/api\.mapbox\.com\/styles\/v1\//;

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener("fetch", (event) => {
  if (TILE_URL_PATTERN.test(event.request.url)) {
    event.respondWith(
      caches.open(CACHE_NAME).then((cache) =>
        cache.match(event.request).then((resp) => {
          const fetchPromise = fetch(event.request).then((networkResp) => {
            cache.put(event.request, networkResp.clone());
            return networkResp;
          });
          return resp || fetchPromise;
        })
      )
    );
  }
});
