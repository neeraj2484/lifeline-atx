// // public/sw.js

// // Simple offline shell setup
// self.addEventListener("install", (event) => {
//   console.log("[SW] Installing...");
//   event.waitUntil(
//     caches.open("lifeline-shell").then((cache) => {
//       return cache.addAll(["/"]); // cache the shell (homepage)
//     })
//   );
//   self.skipWaiting();
// });

// self.addEventListener("activate", (event) => {
//   console.log("[SW] Activated");
//   event.waitUntil(self.clients.claim());
// });

// self.addEventListener("fetch", (event) => {
//   event.respondWith(
//     caches.match(event.request).then((cached) => {
//       return cached || fetch(event.request);
//     })
//   );
// });
// Minimal offline shell: cache homepage and basic assets

// // self.addEventListener("install", (event) => {
// //   event.waitUntil(
// //     caches.open("lifeline-shell-v1").then((cache) => cache.addAll(["/"]))
// //   );
// //   self.skipWaiting();
// // });

// // self.addEventListener("activate", (event) => {
// //   event.waitUntil(self.clients.claim());
// // });

// // self.addEventListener("fetch", (event) => {
// //   event.respondWith(
// //     caches.match(event.request).then((cached) => cached || fetch(event.request))
// //   );
// // });
/* sw.js */
const SW_VERSION = "v1";
const STATIC_CACHE = `static-${SW_VERSION}`;
const OFFLINE_URL = "/offline.html";

// Precache core shell
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) =>
      cache.addAll([
        "/",              // your entry (optional)
        OFFLINE_URL,      // offline fallback
      ])
    )
  );
  self.skipWaiting();
});

// Clean old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.map((k) => (k !== STATIC_CACHE ? caches.delete(k) : null)))
    )
  );
  self.clients.claim();
});

// Network-first for navigations (pages), fallback to offline.html
self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.mode === "navigate") {
    event.respondWith(
      (async () => {
        try {
          const fresh = await fetch(req);
          return fresh;
        } catch (err) {
          const cache = await caches.open(STATIC_CACHE);
          const cached = await cache.match(OFFLINE_URL);
          return cached || new Response("Offline", { status: 503 });
        }
      })()
    );
    return;
  }

  // Static assets: stale-while-revalidate
  if (req.url.includes("/_next/") || req.destination === "style" || req.destination === "script" || req.destination === "image") {
    event.respondWith(
      caches.open(STATIC_CACHE).then(async (cache) => {
        const cached = await cache.match(req);
        const network = fetch(req).then((res) => {
          cache.put(req, res.clone());
          return res;
        }).catch(() => cached);
        return cached || network;
      })
    );
  }
});

