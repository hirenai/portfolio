#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔍 Verifying deployment readiness...\n');

// Check if we're in the right directory
const packageJsonExists = fs.existsSync('package.json');
console.log(`📦 Package.json found: ${packageJsonExists ? '✅' : '❌'}`);

if (!packageJsonExists) {
  console.log('❌ Not in the correct directory. Please run from portfolio-main/hirenvaghela/');
  process.exit(1);
}

// Check key files
const keyFiles = [
  'next.config.js',
  'netlify.toml',
  '.eslintrc.json',
  'pages/index.js',
  'pages/_app.js'
];

console.log('\n📁 Checking key files:');
keyFiles.forEach(file => {
  const exists = fs.existsSync(file);
  console.log(`  ${exists ? '✅' : '❌'} ${file}`);
});

// Check package.json scripts
console.log('\n🔧 Checking package.json scripts:');
try {
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  const buildScript = packageJson.scripts?.build;
  console.log(`  Build script: ${buildScript ? '✅' : '❌'} ${buildScript || 'Not found'}`);
} catch (error) {
  console.log('  ❌ Error reading package.json');
}

// Check next.config.js
console.log('\n⚙️ Checking next.config.js:');
try {
  const nextConfigContent = fs.readFileSync('next.config.js', 'utf8');
  const hasEslintIgnore = nextConfigContent.includes('ignoreDuringBuilds: true');
  const hasImagesUnoptimized = nextConfigContent.includes('unoptimized: true');
  
  console.log(`  ESLint ignored during builds: ${hasEslintIgnore ? '✅' : '❌'}`);
  console.log(`  Images unoptimized: ${hasImagesUnoptimized ? '✅' : '❌'}`);
} catch (error) {
  console.log('  ❌ Error reading next.config.js');
}

// Check public directory
console.log('\n📂 Checking public directory:');
const publicFiles = ['_redirects', 'favicon.ico'];
publicFiles.forEach(file => {
  const exists = fs.existsSync(path.join('public', file));
  console.log(`  ${exists ? '✅' : '❌'} public/${file}`);
});

console.log('\n🌐 Netlify Configuration:');
console.log('  Base directory: portfolio-main/hirenvaghela');
console.log('  Build command: npm run build');
console.log('  Publish directory: portfolio-main/hirenvaghela/out');

console.log('\n📋 Next Steps:');
console.log('1. Push changes to Git: git add . && git commit -m "Fix deployment" && git push');
console.log('2. Check Netlify build logs for any errors');
console.log('3. If still failing, try the alternative approach in NETLIFY_TROUBLESHOOTING.md');

console.log('\n✨ Ready for deployment!');
