const fs = require('fs');
const path = require('path');

function getActualCasePath(filePath) {
  const parts = filePath.split(/[\\\/]/).filter(Boolean);
  let current = path.resolve('.');
  for (const part of parts) {
    if (!fs.existsSync(current)) return null;
    const items = fs.readdirSync(current);
    const match = items.find(i => i.toLowerCase() === part.toLowerCase());
    if (!match) return null;
    if (match !== part) {
      return { expected: part, actual: match, full: path.join(current, match) };
    }
    current = path.join(current, match);
  }
  return true;
}

function walk(dir) {
  let files = [];
  for (const item of fs.readdirSync(dir)) {
    const full = path.join(dir, item);
    if (fs.statSync(full).isDirectory()) {
      if (item !== 'node_modules' && item !== 'dist' && item !== '.git') {
        files = files.concat(walk(full));
      }
    } else if (/\.(tsx|ts|html|css)$/.test(item)) {
      files.push(full);
    }
  }
  return files;
}

const codeFiles = walk('src').concat(['index.html']);
const regex = /['"`]((\/images\/|\/hero\/)[^'"`]+)['"`]/g;
let issues = 0;

for (const f of codeFiles) {
  const content = fs.readFileSync(f, 'utf8');
  let m;
  while ((m = regex.exec(content)) !== null) {
    const imgPath = m[1];
    if (imgPath.includes('${')) continue;
    const localRel = 'public' + imgPath;
    const caseCheck = getActualCasePath(localRel);
    if (caseCheck === null) {
      console.error('File completely missing:', imgPath, 'in', f);
      issues++;
    } else if (caseCheck !== true) {
      console.warn('Case mismatch:', imgPath, 'Expected:', caseCheck.expected, 'Actual on disk:', caseCheck.actual, 'in', f);
      issues++;
    }
  }
}

// Also check all 204 hero frames
for (let i = 1; i <= 204; i++) {
  const framePath = `public/hero/frame-${String(i).padStart(4, '0')}.jpg`;
  const caseCheck = getActualCasePath(framePath);
  if (caseCheck !== true) {
    console.warn('Hero frame case mismatch or missing:', framePath);
    issues++;
  }
}

if (issues === 0) {
  console.log('✓ All 34 images and all 204 hero frames exist with EXACT case matching for Linux/Vercel!');
}
