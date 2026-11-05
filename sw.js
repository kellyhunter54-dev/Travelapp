/* Waypoint Planner service worker: makes the app open offline and keeps it up to date. */
const VERSION = 'waypoint-20261105-1157';
const RUNTIME = 'waypoint-runtime';
const TILES = 'waypoint-tiles';
const MAX_TILES = 1500;

const CORE = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/apple-touch-icon.png',
  './icons/favicon-32.png',
  './icons/icon.svg',
  './lib/leaflet-1.9.4.js'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(VERSION).then(cache => cache.addAll(CORE)));
});

self.addEventListener('activate', event => {
  event.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k.startsWith('waypoint-') && k !== VERSION && k !== RUNTIME && k !== TILES).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

// The page asks for this when you tap "Update"
self.addEventListener('message', event => { if (event.data === 'skip') self.skipWaiting(); });

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // The app itself: newest version when online, saved copy when offline
  if (req.mode === 'navigate') {
    event.respondWith(networkFirst(req, './index.html'));
    return;
  }
  // Map tiles for the Street map: keep the ones you've looked at for offline use
  if (/\.basemaps\.cartocdn\.com$/.test(url.hostname)) {
    event.respondWith(cacheFirst(req, TILES, true));
    return;
  }
  // Fonts: use the saved copy, refresh it in the background
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    event.respondWith(staleWhileRevalidate(req, RUNTIME));
    return;
  }
  // The app's own files (icons, manifest, map library)
  if (url.origin === self.location.origin) {
    event.respondWith(caches.match(req).then(hit => hit || fetch(req)));
  }
  // Everything else (routes, place search) goes straight to the network
});

function timeout(ms) { return new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), ms)); }

async function networkFirst(req, fallback) {
  const cache = await caches.open(VERSION);
  try {
    const res = await Promise.race([fetch(req), timeout(4000)]);
    if (res && res.ok) cache.put(fallback, res.clone());
    return res;
  } catch (e) {
    return (await cache.match(fallback)) || (await cache.match('./')) || Response.error();
  }
}

async function cacheFirst(req, name, trim) {
  const cache = await caches.open(name);
  const hit = await cache.match(req);
  if (hit) return hit;
  try {
    const res = await fetch(req);
    if (res && (res.ok || res.type === 'opaque')) {
      await cache.put(req, res.clone());
      if (trim && Math.random() < 0.05) trimCache(cache, MAX_TILES);
    }
    return res;
  } catch (e) {
    return Response.error();
  }
}

async function staleWhileRevalidate(req, name) {
  const cache = await caches.open(name);
  const hit = await cache.match(req);
  const fresh = fetch(req).then(res => { if (res && (res.ok || res.type === 'opaque')) cache.put(req, res.clone()); return res; }).catch(() => hit);
  return hit || fresh;
}

async function trimCache(cache, max) {
  const keys = await cache.keys();
  for (let i = 0; i < keys.length - max; i++) await cache.delete(keys[i]);
}
