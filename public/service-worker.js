const CACHE_NAME = 'mkww-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/assets/index-GOjYDRBZ.css',
  '/assets/index-Di73QT6l.js',
  '/icon-192x192.png',
  '/icon-512x512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
}); 