#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🎨 Creating placeholder project images...\n');

// Create placeholder images directory if it doesn't exist
const imagesDir = path.join('public', 'images');
if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
}

// Create simple placeholder images using SVG
const createPlaceholderImage = (filename, title, color) => {
    const svg = `<svg width="400" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="200" fill="${color}"/>
  <text x="200" y="100" font-family="Arial, sans-serif" font-size="24" fill="white" text-anchor="middle" dominant-baseline="middle">${title}</text>
</svg>`;
    
    const filePath = path.join(imagesDir, filename);
    fs.writeFileSync(filePath, svg);
    console.log(`✅ Created ${filename}`);
};

// Create placeholder images
createPlaceholderImage('finance_tracker.png', 'Finance Tracker', '#4CAF50');
createPlaceholderImage('crypto_tracker.png', 'Crypto Tracker', '#FF9800');
createPlaceholderImage('password_manager.png', 'Password Manager', '#2196F3');

console.log('\n🎉 Placeholder images created successfully!');
console.log('\n📋 Next steps:');
console.log('1. Replace these placeholder images with actual project screenshots');
console.log('2. Run npm run build to test');
console.log('3. Deploy to Netlify');
