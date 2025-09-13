#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 Setting up Hiren\'s Portfolio...\n');

// Create necessary directories
const directories = [
  'public/images/projects',
  'public/images/books', 
  'public/images/cats',
  'public/images/papers',
  'public/images/profile'
];

directories.forEach(dir => {
  const fullPath = path.join(__dirname, '..', dir);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
    console.log(`✅ Created directory: ${dir}`);
  } else {
    console.log(`📁 Directory already exists: ${dir}`);
  }
});

// Create placeholder files
const placeholderFiles = [
  {
    path: 'public/images/profile/avatar.jpg',
    content: 'Placeholder for profile avatar'
  },
  {
    path: 'public/images/og-image.jpg', 
    content: 'Placeholder for Open Graph image'
  }
];

placeholderFiles.forEach(file => {
  const fullPath = path.join(__dirname, '..', file.path);
  if (!fs.existsSync(fullPath)) {
    fs.writeFileSync(fullPath, file.content);
    console.log(`✅ Created placeholder: ${file.path}`);
  } else {
    console.log(`📄 File already exists: ${file.path}`);
  }
});

console.log('\n🎉 Setup complete!');
console.log('\nNext steps:');
console.log('1. Run: npm install');
console.log('2. Run: npm run dev');
console.log('3. Open: http://localhost:3000');
console.log('\n📝 Don\'t forget to:');
console.log('- Replace placeholder images with your actual photos');
console.log('- Update personal information in components');
console.log('- Customize colors in tailwind.config.js');
console.log('- Add your actual projects and publications');
