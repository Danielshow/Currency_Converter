const version='currency_v1_0.01';

self.addEventListener("install", function(event){
  event.waitUntil(
    caches
    .open('version')
    .then(function(cache){
        return cache.addAll([
          '/',
          '/static/js/bundle.js',
          '/favicon.ico',
        ]);
    })
    .then(function(){
        console.log('install completed');
    })
  );
})

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName) {
          return cacheName.startsWith('currency-') &&
                 cacheName != version;
        }).map(function(cacheName) {
          return caches.delete(cacheName);
        })
      );
    })
  );
});


self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
