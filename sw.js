const CACHE_NAME = 'aif-v3';
const ASSETS = [
  './index.html',
  './manifest.json',
  './css/style.css',
  './js/questions_d1.js',
  './js/questions_d2.js',
  './js/questions_d2b.js',
  './js/questions_d3.js',
  './js/questions_d3b.js',
  './js/questions_d4.js',
  './js/questions_d4b.js',
  './js/questions_d5.js',
  './js/questions_d5b.js',
  './js/questions.js',
  './js/stats.js',
  './js/app.js',
  './icons/icon-192.svg',
  './icons/icon-512.svg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        const clone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        return response;
      });
    })
  );
});
