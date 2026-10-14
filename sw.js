/**
 * KanaMaster - Service Worker for 100% Offline Progressive Web App
 * Caches core HTML, scripts, datasets, icons, Tailwind CDN, and Tone.js
 */

const CACHE_NAME = 'kanamaster-v1';

const STATIC_PRECACHE_URLS = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon.svg',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './data/kana.js',
  './data/vocab.js',
  './data/levels.js',
  './js/audio.js',
  './js/quiz.js',
  './js/vocab.js',
  './js/canvas.js',
  './js/app.js',
  './js/theme.js',
  './js/storage.js',
  // External Essential CDNs for Standalone Offline Functionality
  'https://cdn.tailwindcss.com',
  'https://cdnjs.cloudflare.com/ajax/libs/tone/14.8.49/Tone.min.js',
  'https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@500;700;900&family=Zen+Kaku+Gothic+New:wght@500;700;900&display=swap'
];

// Install: Cache critical assets and activate immediately
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      // Use resilient individual caching to ensure all reachable assets are cached
      await Promise.allSettled(
        STATIC_PRECACHE_URLS.map(async (url) => {
          try {
            const req = new Request(url, { mode: url.startsWith('http') ? 'cors' : 'no-cors' });
            const res = await fetch(req);
            if (res.status === 200 || res.type === 'opaque') {
              await cache.put(url, res);
            }
          } catch (err) {
            // Non-blocking if offline during re-install
            console.warn(`[SW] Pre-cache warning for ${url}:`, err);
          }
        })
      );
    }).then(() => self.skipWaiting())
  );
});

// Activate: Purge obsolete cache versions and take immediate control
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch: Cache-First / Stale-While-Revalidate for offline readiness
self.addEventListener('fetch', (event) => {
  // Only handle HTTP/HTTPS GET requests
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // Skip browser extension schemes or non-http
  if (!url.protocol.startsWith('http')) return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // 1. If found in cache, return cached response immediately
      // and optionally fetch in background to revalidate (Stale-While-Revalidate)
      if (cachedResponse) {
        // Asynchronously update cache in background if online
        fetch(event.request)
          .then((networkResponse) => {
            if (networkResponse && (networkResponse.status === 200 || networkResponse.type === 'opaque')) {
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(event.request, networkResponse);
              });
            }
          })
          .catch(() => {
            // Perfectly fine when offline
          });

        return cachedResponse;
      }

      // 2. If not in cache, fetch from network and dynamically store in cache
      return fetch(event.request)
        .then((networkResponse) => {
          if (!networkResponse || (networkResponse.status !== 200 && networkResponse.type !== 'opaque')) {
            return networkResponse;
          }

          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });

          return networkResponse;
        })
        .catch(() => {
          // 3. Offline fallback: for navigation requests, fallback to index.html
          if (event.request.mode === 'navigate' || event.request.headers.get('accept')?.includes('text/html')) {
            return caches.match('./index.html') || caches.match('./');
          }
        });
    })
  );
});
