const CACHE_VERSION = 'crafting-code-v1';
const urlsToCache = [
  '/',
  '/assets/hero-bg.jpg',
  '/fibonacci.js',
  '/main.js',
  '/style.css',
  '/worker.js',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.1/css/all.min.css',
  'https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css',
  'https://fonts.googleapis.com/css?family=Varela+Round',
  'https://fonts.gstatic.com/s/varelaround/v11/w8gdH283Tvk__Lua32TysjIfp8uP.woff2',
];

self.addEventListener('install', (event) => {
  console.log('Installation completed');

  event.waitUntil(
    caches.open(CACHE_VERSION)
    .then((cache) => {
      console.log('Opened cache');
      return cache.addAll(urlsToCache);
    })
  )
})

self.addEventListener('fetch', (event) => {
  console.log('Fetch completed');

  event.respondWith(
    caches.match(event.request)
    .then(function(response) {
      if (response) {
        return response;
      }

      return fetch(event.request);
    })
  )
})


self.addEventListener('activate', (event) => {
  console.log('Activation completed');

  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          return caches.delete(cacheName);
        })
      )
    })
  )
})
