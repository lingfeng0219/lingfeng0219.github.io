self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      if (self.registration) {
        await self.registration.unregister();
      }

      if (self.caches) {
        const keys = await self.caches.keys();
        await Promise.all(keys.map((key) => self.caches.delete(key)));
      }

      const clients = await self.clients.matchAll({ type: 'window' });
      clients.forEach((client) => client.navigate(client.url));
    })(),
  );
});
