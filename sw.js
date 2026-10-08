// Service worker de IEB+ Metas: guarda el prototipo en el dispositivo para que abra rápido y sin conexión.
const CACHE = 'ieb-metas-v202610080202';
const ARCHIVOS = [
  "./src/fonts/nunito-italic-latin.woff2",
  "./src/fonts/nunito-latin.woff2",
  "./src/fonts/nunitosans-latin.woff2",
  "./src/icons/activity.svg",
  "./src/icons/arrow-down.svg",
  "./src/icons/arrow-left.svg",
  "./src/icons/arrow-right.svg",
  "./src/icons/arrow-up-right.svg",
  "./src/icons/arrow-up.svg",
  "./src/icons/baseline.svg",
  "./src/icons/bell-ring.svg",
  "./src/icons/bell.svg",
  "./src/icons/book-open.svg",
  "./src/icons/calculator.svg",
  "./src/icons/calendar-check.svg",
  "./src/icons/calendar-clock.svg",
  "./src/icons/calendar.svg",
  "./src/icons/car.svg",
  "./src/icons/chart-pie.svg",
  "./src/icons/check.svg",
  "./src/icons/chevron-down.svg",
  "./src/icons/chevron-right.svg",
  "./src/icons/compass.svg",
  "./src/icons/dollar-sign.svg",
  "./src/icons/file-text.svg",
  "./src/icons/fingerprint.svg",
  "./src/icons/flask-conical.svg",
  "./src/icons/ghost.svg",
  "./src/icons/git-branch.svg",
  "./src/icons/globe.svg",
  "./src/icons/graduation-cap.svg",
  "./src/icons/grid.svg",
  "./src/icons/hand-coins.svg",
  "./src/icons/house.svg",
  "./src/icons/info.svg",
  "./src/icons/landmark.svg",
  "./src/icons/layers.svg",
  "./src/icons/line-chart.svg",
  "./src/icons/lock.svg",
  "./src/icons/log-out.svg",
  "./src/icons/mail.svg",
  "./src/icons/map-pin.svg",
  "./src/icons/minus.svg",
  "./src/icons/newspaper.svg",
  "./src/icons/option.svg",
  "./src/icons/pause.svg",
  "./src/icons/pencil.svg",
  "./src/icons/piggy-bank.svg",
  "./src/icons/plane.svg",
  "./src/icons/plus.svg",
  "./src/icons/radio.svg",
  "./src/icons/receipt.svg",
  "./src/icons/rocket.svg",
  "./src/icons/scale.svg",
  "./src/icons/search.svg",
  "./src/icons/section.svg",
  "./src/icons/shield-check.svg",
  "./src/icons/shopping-bag.svg",
  "./src/icons/sliders-horizontal.svg",
  "./src/icons/sparkles.svg",
  "./src/icons/sprout.svg",
  "./src/icons/target.svg",
  "./src/icons/text.svg",
  "./src/icons/trending-down.svg",
  "./src/icons/trending-up.svg",
  "./src/icons/triangle-alert.svg",
  "./src/icons/umbrella.svg",
  "./src/icons/unlock.svg",
  "./src/icons/user.svg",
  "./src/icons/users.svg",
  "./src/icons/wallet.svg",
  "./src/metas-v3.dc.html",
  "./src/support.js",
  "./src/_ds/ieb-design-system-afd0370e-8960-496f-9ec9-2bcfce8e0f40/css/components.css",
  "./src/_ds/ieb-design-system-afd0370e-8960-496f-9ec9-2bcfce8e0f40/readme.md",
  "./src/_ds/ieb-design-system-afd0370e-8960-496f-9ec9-2bcfce8e0f40/styles.css",
  "./src/_ds/ieb-design-system-afd0370e-8960-496f-9ec9-2bcfce8e0f40/tokens/base.css",
  "./src/_ds/ieb-design-system-afd0370e-8960-496f-9ec9-2bcfce8e0f40/tokens/colors.css",
  "./src/_ds/ieb-design-system-afd0370e-8960-496f-9ec9-2bcfce8e0f40/tokens/elevation.css",
  "./src/_ds/ieb-design-system-afd0370e-8960-496f-9ec9-2bcfce8e0f40/tokens/fonts.css",
  "./src/_ds/ieb-design-system-afd0370e-8960-496f-9ec9-2bcfce8e0f40/tokens/motion.css",
  "./src/_ds/ieb-design-system-afd0370e-8960-496f-9ec9-2bcfce8e0f40/tokens/radius.css",
  "./src/_ds/ieb-design-system-afd0370e-8960-496f-9ec9-2bcfce8e0f40/tokens/spacing.css",
  "./src/_ds/ieb-design-system-afd0370e-8960-496f-9ec9-2bcfce8e0f40/tokens/theme.js",
  "./src/_ds/ieb-design-system-afd0370e-8960-496f-9ec9-2bcfce8e0f40/tokens/typography.css",
  "./src/_ds/ieb-design-system-afd0370e-8960-496f-9ec9-2bcfce8e0f40/_adherence.oxlintrc.json",
  "./src/_ds/ieb-design-system-afd0370e-8960-496f-9ec9-2bcfce8e0f40/_ds_bundle.js",
  "./src/_ds/ieb-design-system-afd0370e-8960-496f-9ec9-2bcfce8e0f40/_ds_manifest.json",
  "./icons-app/apple-touch-icon.png",
  "./icons-app/icon-192.png",
  "./icons-app/icon-512.png",
  "./manifest.json",
  "./index.html"
];

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE)
      .then(function (c) { return Promise.all(ARCHIVOS.map(function (a) { return c.add(a).catch(function () {}); })); })
      .then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys()
      .then(function (ks) {
        return Promise.all(ks.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
      })
      .then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  e.respondWith(
    caches.open(CACHE).then(function (c) {
      return c.match(req, { ignoreSearch: true }).then(function (hit) {
        var red = fetch(req)
          .then(function (r) { if (r && r.ok) c.put(req, r.clone()); return r; })
          .catch(function () { return hit; });
        return hit || red;
      });
    })
  );
});
