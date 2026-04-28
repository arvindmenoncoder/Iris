const CACHE_NAME = 'iris-wallet-cache'; 

// Force the waiting service worker to become the active service worker.
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

// Tell the active service worker to take control of the page immediately.
self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

// Network-First Strategy
self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request)
            .then((networkResponse) => {
                // If the network request succeeds, save a fresh copy to the cache
                return caches.open(CACHE_NAME).then((cache) => {
                    cache.put(event.request, networkResponse.clone());
                    return networkResponse;
                });
            })
            .catch(() => {
                // If the network fails (iPhone is offline), serve from the cache
                return caches.match(event.request);
            })
    );
});
