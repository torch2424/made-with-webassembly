// Import our showcaseJson so we can get all the keys
import { precacheAndRoute } from "workbox-precaching";
import showcaseJson from "./assets/showcase.json";

precacheAndRoute(self.__WB_MANIFEST);

// Cache Images
// https://developers.google.com/web/tools/workbox/guides/common-recipes#caching_images
workbox.routing.registerRoute(
  /\.(?:png|gif|jpg|jpeg|webp|svg)$/,
  new workbox.strategies.CacheFirst({
    cacheName: "images",
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 60,
        maxAgeSeconds: 7 * 24 * 60 * 60 // 7 Days
      })
    ]
  })
);

// Handle unversioned 3p assets, that preact-cli is not handling
workbox.routing.registerRoute(
  new RegExp("/assets/showcase/*.html"),
  new workbox.strategies.NetworkFirst()
);
// Then, precache these assets as they are updated.
// Since we already defined their routes, they will still follow the network first trategy
// But be precached on initial load!
// https://developers.google.com/web/tools/workbox/modules/workbox-precaching#serving_precached_responses
const showcaseUrls = [];
Object.keys(showcaseJson).forEach(key => {
  showcaseUrls.push(`/assets/showcase/${key}.html`);
});
workbox.precaching.precacheAndRoute(showcaseUrls);

// Original sw.js
// From: https://raw.githubusercontent.com/preactjs/preact-cli/master/packages/cli/lib/lib/sw.js
// https://github.com/preactjs/preact-cli/issues/816

self.__precacheManifest = [].concat(self.__precacheManifest || []);

/* global workbox */
/** We are sure brotli is enabled for browsers supporting script type=module
 * so we do brotli support only for them.
 * We can do brolti support for other browsers but there is no good way of
 * feature detect the same at the time of pre-caching.
 */
if (process.env.ENABLE_BROTLI && process.env.ES_BUILD) {
  // Alter the precache manifest to precache brotli files instead of gzip files.
  self.__precacheManifest = self.__precacheManifest.map(asset => {
    if (/\.js$/.test(asset.url)) {
      asset.url = asset.url.replace(/\.esm\.js$/, ".esm.js.br");
    }
    return asset;
  });

  class BrotliRedirectPlugin {
    // Before saving the response in cache, we need to treat the headers.
    async cacheWillUpdate({ response }) {
      const clonedResponse = response.clone();
      if (/\.js\.br(\?.*)?$/.test(clonedResponse.url)) {
        const headers = new Headers(clonedResponse.headers);
        headers.set("content-type", "application/javascript");
        return new Response(await clonedResponse.text(), { headers });
      }
      return response;
    }
  }
  workbox.precaching.addPlugins([new BrotliRedirectPlugin()]);
}

const precacheOptions = {};
if (process.env.ENABLE_BROTLI) {
  precacheOptions["urlManipulation"] = ({ url }) => {
    if (/\.esm\.js$/.test(url.href)) {
      url.href += ".br";
    }
    return [url];
  };
}

const isNav = event => event.request.mode === "navigate";

/**
 * Adding this before `precacheAndRoute` lets us handle all
 * the navigation requests even if they are in precache.
 */
workbox.routing.registerRoute(
  ({ event }) => isNav(event),
  new workbox.strategies.NetworkFirst({
    // this cache is plunged with every new service worker deploy so we dont need to care about purging the cache.
    cacheName: workbox.core.cacheNames.precache,
    networkTimeoutSeconds: 5, // if u dont start getting headers within 5 sec fallback to cache.
    plugins: [
      new workbox.cacheableResponse.Plugin({
        statuses: [200] // only cache valid responses, not opaque responses e.g. wifi portal.
      })
    ]
  })
);

workbox.precaching.precacheAndRoute(self.__precacheManifest, precacheOptions);

workbox.routing.setCatchHandler(({ event }) => {
  if (isNav(event))
    return caches.match(workbox.precaching.getCacheKeyForURL("/index.html"));
  return Response.error();
});
