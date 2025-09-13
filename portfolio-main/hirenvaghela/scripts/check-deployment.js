#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔍 Checking deployment readiness...\n');

// Check if required files exist
const requiredFiles = [
  'netlify.toml',
  'next.config.js',
  'package.json',
  'pages/index.js',
  'pages/_app.js'
];

console.log('📁 Checking required files:');
requiredFiles.forEach(file => {
  const exists = fs.existsSync(file);
  console.log(`  ${exists ? '✅' : '❌'} ${file}`);
});

// Check package.json scripts
console.log('\n📦 Checking package.json scripts:');
try {
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  const requiredScripts = ['build', 'export', 'deploy'];
  
  requiredScripts.forEach(script => {
    const exists = packageJson.scripts && packageJson.scripts[script];
    console.log(`  ${exists ? '✅' : '❌'} ${script} script`);
  });
} catch (error) {
  console.log('  ❌ Error reading package.json');
}

// Check next.config.js
console.log('\n⚙️ Checking next.config.js:');
try {
  const nextConfigContent = fs.readFileSync('next.config.js', 'utf8');
  const hasOutputExport = nextConfigContent.includes("output: 'export'");
  const hasUnoptimizedImages = nextConfigContent.includes('unoptimized: true');
  
  console.log(`  ${hasOutputExport ? '✅' : '❌'} output: 'export' configured`);
  console.log(`  ${hasUnoptimizedImages ? '✅' : '❌'} images unoptimized for static export`);
} catch (error) {
  console.log('  ❌ Error reading next.config.js');
}

// Check public folder structure
console.log('\n📂 Checking public folder:');
const publicFiles = ['favicon.ico'];
const publicDirs = ['images', 'icons', 'fonts'];

publicFiles.forEach(file => {
  const exists = fs.existsSync(path.join('public', file));
  console.log(`  ${exists ? '✅' : '❌'} public/${file}`);
});

publicDirs.forEach(dir => {
  const exists = fs.existsSync(path.join('public', dir));
  console.log(`  ${exists ? '✅' : '❌'} public/${dir}/ directory`);
});

// Check for potential issues
console.log('\n⚠️ Checking for potential issues:');

// Check for large files in public
try {
  const publicDir = 'public';
  if (fs.existsSync(publicDir)) {
    const files = fs.readdirSync(publicDir, { withFileTypes: true });
    const largeFiles = files
      .filter(file => file.isFile())
      .map(file => ({
        name: file.name,
        size: fs.statSync(path.join(publicDir, file.name)).size
      }))
      .filter(file => file.size > 1024 * 1024); // > 1MB
    
    if (largeFiles.length > 0) {
      console.log('  ⚠️ Large files found in public folder:');
      largeFiles.forEach(file => {
        console.log(`    - ${file.name} (${(file.size / 1024 / 1024).toFixed(2)}MB)`);
      });
    } else {
      console.log('  ✅ No large files in public folder');
    }
  }
} catch (error) {
  console.log('  ❌ Error checking public folder');
}

// Check for common import issues
console.log('\n🔗 Checking for import issues:');
try {
  const indexContent = fs.readFileSync('pages/index.js', 'utf8');
  const hasCorrectImports = indexContent.includes('import Head from "next/head"') &&
                           indexContent.includes('import { useState, useEffect } from "react"');
  
  console.log(`  ${hasCorrectImports ? '✅' : '❌'} Correct Next.js imports`);
} catch (error) {
  console.log('  ❌ Error checking imports');
}

console.log('\n🎯 Deployment Checklist:');
console.log('  1. Push code to Git repository');
console.log('  2. Connect repository to Netlify');
console.log('  3. Set build command: npm run build && npm run export');
console.log('  4. Set publish directory: out');
console.log('  5. Set Node version: 18');
console.log('  6. Deploy!');

console.log('\n✨ Ready for deployment!');
