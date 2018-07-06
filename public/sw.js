const version='currency_v1_0.01';

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
    .open(version)
    .then((cache) => {
        return cache.addAll([
          '/',
          '/static/js/bundle.js',
        ]);
    })
    .then(() => {
        console.log('install completed');
    })
  );
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
    .then( (cacheNames) => {
        return Promise.all(cacheNames.map((key, i) => {
          if(key !== version){
            return caches.delete(keys[i]);
          }
      }))
    })
  )
});


self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
