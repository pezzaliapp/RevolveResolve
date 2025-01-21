// Nome e versione del cache
const CACHE_NAME = 'revolve-resolve-cache-v1';

// File da mettere in cache
const urlsToCache = [
  '/',
  '/index.html',
  '/styles.css',
  '/app.js',
  '/manifest.json',
  '/icons/icon-192.png',
  '/icons/icon-512.png'
];

// Installazione del Service Worker e caching dei file essenziali
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Apertura cache:', CACHE_NAME);
        return cache.addAll(urlsToCache);
      })
  );
});

// Attivazione del Service Worker
self.addEventListener('activate', event => {
  // Se la versione del cache cambia, cancelliamo i vecchi caches
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Elimino cache vecchia:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Intercetta richieste fetch e serve i file dalla cache se disponibili
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Se trovata nella cache, restituisco quella
        if (response) {
          return response;
        }
        // Altrimenti cerco di scaricare dal network
        return fetch(event.request);
      })
  );
});
