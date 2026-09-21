const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

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

// 1. Find all image files on disk in public/images
const publicImages = walk('public/images');
const diskFiles = {};
const fileHashes = {};

for (const file of publicImages) {
  const relPath = '/' + path.relative('public', file).replace(/\\/g, '/');
  const buf = fs.readFileSync(file);
  const hash = crypto.createHash('md5').update(buf).digest('hex');
  const size = buf.length;
  diskFiles[relPath] = { size, hash, path: file };
  if (!fileHashes[hash]) fileHashes[hash] = [];
  fileHashes[hash].push(relPath);
}

// 2. Find duplicate files on disk (exact identical bytes)
console.log('=== EXACT IDENTICAL FILES (MD5 MATCH) ===');
let foundExactDupes = false;
for (const [hash, files] of Object.entries(fileHashes)) {
  if (files.length > 1) {
    foundExactDupes = true;
    console.log(`Hash ${hash} (${files.length} files):`);
    files.forEach(f => console.log('  -', f, `(${diskFiles[f].size} bytes)`));
  }
}
if (!foundExactDupes) console.log('No byte-for-byte identical files found.');

// 3. Find all code references
const codeFiles = walk('src', ['.tsx', '.ts', '.css', '.html']);
const imageRegex = /['"`](\/images\/[^'"`]+)['"`]/g;
const imageUsage = {};

for (const file of codeFiles) {
  const content = fs.readFileSync(file, 'utf8');
  let match;
  while ((match = imageRegex.exec(content)) !== null) {
    const img = match[1];
    if (!imageUsage[img]) imageUsage[img] = [];
    imageUsage[img].push(path.relative(process.cwd(), file).replace(/\\/g, '/'));
  }
}

console.log('\n=== CODE REFERENCES TO IMAGES (' + Object.keys(imageUsage).length + ' unique paths) ===');
for (const [img, files] of Object.entries(imageUsage).sort()) {
  const onDisk = diskFiles[img] ? `[EXISTS, ${Math.round(diskFiles[img].size/1024)}KB]` : '[MISSING!]';
  console.log(`${img} ${onDisk}`);
  const uniqueFiles = [...new Set(files)];
  console.log(`   referenced in: ${uniqueFiles.join(', ')}`);
}

// 4. Unused files in public/images
console.log('\n=== UNUSED FILES IN public/images ===');
let unusedCount = 0;
for (const img of Object.keys(diskFiles)) {
  if (!imageUsage[img]) {
    unusedCount++;
    console.log(`  - ${img} (${Math.round(diskFiles[img].size/1024)}KB)`);
  }
}
console.log(`Total unused images: ${unusedCount}`);
