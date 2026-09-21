const http = require('http');
const fs = require('fs');
const path = require('path');

function walk(dir, extFilter) {
  let files = [];
  if (!fs.existsSync(dir)) return files;
  for (const item of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      if (item !== 'node_modules' && item !== '.git' && item !== 'dist' && item !== 'hero') {
        files = files.concat(walk(fullPath, extFilter));
      }
    } else if (!extFilter || extFilter.some(ext => item.endsWith(ext))) {
      files.push(fullPath);
    }
  }
  return files;
}

const codeFiles = walk('src', ['.tsx', '.ts', '.css']);
const imageRegex = /['"`](\/images\/[^'"`]+)['"`]/g;
const uniqueImages = new Set();

for (const file of codeFiles) {
  const content = fs.readFileSync(file, 'utf8');
  let match;
  while ((match = imageRegex.exec(content)) !== null) {
    uniqueImages.add(match[1]);
  }
}

console.log(`Checking ${uniqueImages.size} referenced images against http://localhost:3000 ...\n`);

async function testAll() {
  let passed = 0;
  let failed = 0;

  for (const imgUrl of Array.from(uniqueImages).sort()) {
    await new Promise((resolve) => {
      http.get(`http://localhost:3000${imgUrl}`, (res) => {
        if (res.statusCode === 200) {
          passed++;
          console.log(`✓ 200 OK: ${imgUrl} (${res.headers['content-type']}, ${Math.round(res.headers['content-length']/1024)}KB)`);
        } else {
          failed++;
          console.error(`✗ ${res.statusCode}: ${imgUrl}`);
        }
        resolve();
      }).on('error', (err) => {
        failed++;
        console.error(`✗ ERROR ${imgUrl}: ${err.message}`);
        resolve();
      });
    });
  }

  console.log(`\nResults: ${passed} passed, ${failed} failed out of ${uniqueImages.size} images.`);
  if (failed > 0) process.exit(1);
}

testAll();
