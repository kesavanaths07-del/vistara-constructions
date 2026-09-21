const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const sharp = require('sharp');

const rootDir = path.resolve(__dirname, '..');
const heroDir = path.join(rootDir, 'public', 'hero');
const tempDir = path.join(rootDir, 'temp_hero_extract');

// Possible zip names in order of preference
const candidateZips = [
  '1 Hero New.zip',
  '1 HERO NEW.zip',
  '1 Hero.zip',
  '1 HERO.zip'
];

let zipPath = null;
for (const name of candidateZips) {
  const p = path.join(rootDir, name);
  if (fs.existsSync(p)) {
    zipPath = p;
    break;
  }
}

const expectedFrames = 204;
const existingFrames = fs.existsSync(heroDir)
  ? fs.readdirSync(heroDir).filter((f) => f.startsWith('frame-') && f.endsWith('.jpg')).length
  : 0;

if (existingFrames === expectedFrames && !process.argv.includes('--force')) {
  console.log(`✓ Verified all ${expectedFrames} hero frames exist in public/hero. Ready for build.`);
  process.exit(0);
}

if (!zipPath) {
  console.error(`Error: Hero animation zip not found and public/hero only has ${existingFrames}/${expectedFrames} frames.`);
  process.exit(1);
}

console.log(`Using zip archive: ${path.basename(zipPath)} (${Math.round(fs.statSync(zipPath).size / (1024 * 1024))} MB)`);

// 1. Prepare temp directory
if (fs.existsSync(tempDir)) {
  fs.rmSync(tempDir, { recursive: true, force: true });
}
fs.mkdirSync(tempDir, { recursive: true });

// 2. Extract into temp directory
console.log('Extracting archive into temporary directory...');
execSync(`tar -xf "${zipPath}" -C "${tempDir}"`, { stdio: 'inherit' });

// 3. Find and sort frames numerically
const rawFiles = fs.readdirSync(tempDir)
  .filter((f) => f.toLowerCase().endsWith('.jpg') || f.toLowerCase().endsWith('.jpeg'))
  .sort((a, b) => {
    const numA = parseInt(a.replace(/\D/g, ''), 10) || 0;
    const numB = parseInt(b.replace(/\D/g, ''), 10) || 0;
    return numA - numB;
  });

console.log(`Total valid frames detected in zip: ${rawFiles.length}`);

if (rawFiles.length === 0) {
  console.error('Error: No JPG frames found in zip archive!');
  fs.rmSync(tempDir, { recursive: true, force: true });
  process.exit(1);
}

// 4. Wipe public/hero completely
console.log('Clearing old public/hero files...');
if (fs.existsSync(heroDir)) {
  fs.rmSync(heroDir, { recursive: true, force: true });
}
fs.mkdirSync(heroDir, { recursive: true });

// 5. Optimize and write frames to public/hero
console.log(`Optimizing ${rawFiles.length} frames (1920x1080 JPEG quality 86 mozjpeg) for peak web performance...`);

async function processFrames() {
  const concurrency = 8;
  let processed = 0;
  let totalOptimizedBytes = 0;

  async function processSingle(file, index) {
    const frameNum = String(index + 1).padStart(4, '0');
    const inputPath = path.join(tempDir, file);
    const outputPath = path.join(heroDir, `frame-${frameNum}.jpg`);

    const buffer = await sharp(inputPath)
      .jpeg({ quality: 86, mozjpeg: true })
      .toBuffer();

    fs.writeFileSync(outputPath, buffer);
    totalOptimizedBytes += buffer.length;
    processed++;

    if (processed % 25 === 0 || processed === rawFiles.length) {
      console.log(`Processed ${processed}/${rawFiles.length} frames...`);
    }
  }

  // Pool execution
  const queue = rawFiles.map((file, idx) => () => processSingle(file, idx));
  const executing = new Set();

  for (const task of queue) {
    const p = task().then(() => executing.delete(p));
    executing.add(p);
    if (executing.size >= concurrency) {
      await Promise.race(executing);
    }
  }
  await Promise.all(executing);

  // 6. Cleanup temp
  console.log('Cleaning temporary extraction directory...');
  fs.rmSync(tempDir, { recursive: true, force: true });

  // 7. Verify public/hero
  const finalFiles = fs.readdirSync(heroDir).filter((f) => f.endsWith('.jpg')).sort();
  console.log('--- Verification Summary ---');
  console.log(`Final extracted frames: ${finalFiles.length}`);
  console.log(`First frame: ${finalFiles[0]}`);
  console.log(`Middle frame: ${finalFiles[Math.floor(finalFiles.length / 2)]}`);
  console.log(`Last frame: ${finalFiles[finalFiles.length - 1]}`);
  console.log(`Total hero asset size: ${Math.round(totalOptimizedBytes / (1024 * 1024))} MB (average ${Math.round(totalOptimizedBytes / finalFiles.length / 1024)} KB per frame)`);
  console.log('✓ Successfully installed and verified new hero frame sequence!');
}

processFrames().catch((err) => {
  console.error('Error optimizing frames:', err);
  if (fs.existsSync(tempDir)) {
    fs.rmSync(tempDir, { recursive: true, force: true });
  }
  process.exit(1);
});
