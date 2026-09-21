const { execSync } = require('child_process');

const gitCmd = '"C:\\Program Files\\Git\\cmd\\git.exe"';
const out = execSync(`${gitCmd} diff --name-only --cached`).toString();
const files = out.trim().split('\n').map(f => f.trim()).filter(Boolean);

console.log('Total staged files:', files.length);

const hero = files.filter(f => f.startsWith('public/hero/'));
console.log('Hero frames staged:', hero.length);

const images = files.filter(f => f.startsWith('public/images/'));
console.log('Images staged:', images.length);

const zip = files.filter(f => f.endsWith('.zip'));
console.log('Zip files staged:', zip.length);

const nodeModules = files.filter(f => f.includes('node_modules'));
console.log('node_modules staged:', nodeModules.length);

const dist = files.filter(f => f.startsWith('dist/'));
console.log('dist files staged:', dist.length);
