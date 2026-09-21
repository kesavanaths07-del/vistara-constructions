const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, '..', 'src', 'index.css');
const cssContent = fs.readFileSync(cssPath, 'utf8');

console.log('=== VISTARA RESPONSIVE AUDIT ===\n');

// 1. Check for overflow-x rules
const hasOverflowClip = cssContent.includes('overflow-x: clip;');
console.log('1. Horizontal overflow prevention (overflow-x: clip):', hasOverflowClip ? 'PASS' : 'FAIL');

// 2. Check clamp usage in headings
const heroClamp = cssContent.match(/\.heading-hero\s*\{[^}]*font-size:\s*([^;]+);/s);
console.log('2. .heading-hero clamp:', heroClamp ? heroClamp[1].trim() : 'NOT FOUND');

const sectionClamp = cssContent.match(/\.heading-section\s*\{[^}]*font-size:\s*([^;]+);/s);
console.log('3. .heading-section clamp:', sectionClamp ? sectionClamp[1].trim() : 'NOT FOUND');

// 3. Check touch target definitions
const hasTouchTarget = cssContent.includes('min-height: 44px');
console.log('4. Touch target minimum height (min-height: 44px):', hasTouchTarget ? 'PASS' : 'FAIL');

// 4. Check mobile input font-size for iOS Safari zoom prevention
const hasIosInputRule = cssContent.includes('font-size: 16px !important');
console.log('5. iOS input zoom prevention (16px font-size):', hasIosInputRule ? 'PASS' : 'FAIL');

// 5. Check mobile landscape rules
const hasLandscapeRule = cssContent.includes('@media (max-height: 500px) and (orientation: landscape)');
console.log('6. Mobile landscape optimization (< 500px height):', hasLandscapeRule ? 'PASS' : 'FAIL');

// 6. Check hover suppression for touch devices
const hasHoverNone = cssContent.includes('@media (hover: none)');
console.log('7. Touch device hover protection (@media (hover: none)):', hasHoverNone ? 'PASS' : 'FAIL');

// 7. Check container padding breakpoints
const hasContainerBreakpoints = cssContent.includes('--container-padding: 20px') &&
  cssContent.includes('--container-padding: 36px') &&
  cssContent.includes('--container-padding: 56px') &&
  cssContent.includes('--container-padding: 64px');
console.log('8. Container padding across mobile/tablet/desktop/ultra-wide:', hasContainerBreakpoints ? 'PASS' : 'FAIL');

// 8. Check Navbar mobile menu implementation
const navbarPath = path.join(__dirname, '..', 'src', 'components', 'Navbar.tsx');
const navbarContent = fs.readFileSync(navbarPath, 'utf8');
const hasArchitecturalMenu = navbarContent.includes('mobile-toggle-btn') && navbarContent.includes('MENU') && navbarContent.includes('CLOSE');
console.log('9. Architectural MENU/CLOSE toggle button:', hasArchitecturalMenu ? 'PASS' : 'FAIL');

const hasReturnToHeroEvent = navbarContent.includes('vistara-reset-hero');
console.log('10. HOME return-to-hero event dispatch:', hasReturnToHeroEvent ? 'PASS' : 'FAIL');

// 9. Check HeroScroll frame counter and reset
const heroPath = path.join(__dirname, '..', 'src', 'components', 'HeroScroll.tsx');
const heroContent = fs.readFileSync(heroPath, 'utf8');
const hasCounterResponsive = heroContent.includes('.hero-counter') && !heroContent.includes('.hero-counter {\n            display: none !important;\n          }');
console.log('11. Hero frame counter remains visible on mobile:', hasCounterResponsive ? 'PASS' : 'FAIL');

const heroListensReset = heroContent.includes("window.addEventListener('vistara-reset-hero'");
console.log('12. Hero listens to vistara-reset-hero event:', heroListensReset ? 'PASS' : 'FAIL');

console.log('\nAll 12 Core Responsive Checks Evaluated!');
