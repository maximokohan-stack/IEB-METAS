const fs = require('fs');
const path = require('path');

function walk(d) {
  return fs.readdirSync(d, { withFileTypes: true }).flatMap(e =>
    e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name).split(path.sep).join('/')]);
}

const files = [...walk('src'), ...walk('icons-app'), 'manifest.json', 'index.html']
  .filter(f => !f.endsWith('.orig.html'));
const version = 'v' + new Date().toISOString().slice(0, 16).replace(/[-:T]/g, '');

const sw = `// Service worker de IEB+ Metas: guarda el prototipo en el dispositivo para que abra rápido y sin conexión.
const CACHE = 'ieb-metas-${version}';
const ARCHIVOS = ${JSON.stringify(files.map(f => './' + f), null, 2)};

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
`;

fs.writeFileSync('sw.js', sw);
console.log(files.length + ' archivos, cache ' + version);
