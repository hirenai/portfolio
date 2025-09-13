#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🧪 Testing build process...\n');

try {
  // Clean previous build
  console.log('🧹 Cleaning previous build...');
  if (fs.existsSync('out')) {
    fs.rmSync('out', { recursive: true, force: true });
  }
  if (fs.existsSync('.next')) {
    fs.rmSync('.next', { recursive: true, force: true });
  }

  // Run build
  console.log('🔨 Running build...');
  execSync('npm run build', { stdio: 'inherit' });

  // Check if out directory exists
  if (fs.existsSync('out')) {
    console.log('✅ Build successful! out/ directory created');
    
    // Check for key files
    const keyFiles = ['index.html', 'About.html', 'Projects.html'];
    keyFiles.forEach(file => {
      const exists = fs.existsSync(path.join('out', file));
      console.log(`  ${exists ? '✅' : '❌'} ${file}`);
    });

    // Check for static assets
    const staticDirs = ['_next', 'images', 'icons', 'fonts'];
    staticDirs.forEach(dir => {
      const exists = fs.existsSync(path.join('out', dir));
      console.log(`  ${exists ? '✅' : '❌'} ${dir}/ directory`);
    });

    // List all HTML files
    console.log('\n📄 Generated HTML files:');
    const htmlFiles = fs.readdirSync('out')
      .filter(file => file.endsWith('.html'))
      .sort();
    
    htmlFiles.forEach(file => {
      console.log(`  - ${file}`);
    });

    // Check Netlify deployment path
    console.log('\n🌐 Netlify Deployment Path:');
    console.log(`  Base directory: portfolio-main/hirenvaghela`);
    console.log(`  Publish directory: portfolio-main/hirenvaghela/out`);
    console.log(`  Full path to index.html: portfolio-main/hirenvaghela/out/index.html`);

    console.log('\n🎉 Build test completed successfully!');
    console.log('\n📋 Next steps:');
    console.log('  1. Push changes to your repository');
    console.log('  2. Redeploy on Netlify');
    console.log('  3. Check if 404 errors are resolved');

  } else {
    console.log('❌ Build failed - out/ directory not created');
    process.exit(1);
  }

} catch (error) {
  console.error('❌ Build test failed:', error.message);
  process.exit(1);
}
