const urlsToCache = ["/","style.css"];

self.addEventListener("install", event => {
  console.log("Service worker installed");
	event.waitUntil(async () => {
		const cache = await caches.open("pwa-assets");
		return cache.addAll(urlsToCache);
	});
});

self.addEventListener("activate", event => {
   console.log("Service worker activated");
});

self.addEventListener("fetch", event => {
  event.respondWith(
    fetch(event.request)
    .catch(error => {
      console.log("responding with cache");
      return caches.match(event.request);
    })
  );
});
