const http = require('http');

const routes = [
  '/',
  '/projects',
  '/about',
  '/expertise',
  '/journal',
  '/contact',
  '/projects/courtyard-house'
];

function checkRoute(route) {
  return new Promise((resolve, reject) => {
    http.get(`http://localhost:3000${route}`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        resolve({ route, statusCode: res.statusCode, length: data.length });
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

async function run() {
  console.log('Testing Vite routes on http://localhost:3000...\n');
  for (const r of routes) {
    try {
      const res = await checkRoute(r);
      console.log(`✓ ${res.route} -> Status: ${res.statusCode} (HTML length: ${res.length})`);
    } catch (e) {
      console.error(`✗ ${r} -> Failed: ${e.message}`);
    }
  }
}

run();
