self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('star-ref-store').then((cache) => {
      return cache.addAll([
        '/star-refrigration/',
        '/star-refrigration/index.html',
        '/star-refrigration/style.css',
        '/star-refrigration/icon.png'
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWih(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});