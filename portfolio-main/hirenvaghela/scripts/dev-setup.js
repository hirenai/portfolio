#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Setting up development environment...\n');

// Check if Node.js and npm are available
const checkDependencies = () => {
  try {
    const { execSync } = require('child_process');
    const nodeVersion = execSync('node --version', { encoding: 'utf8' }).trim();
    const npmVersion = execSync('npm --version', { encoding: 'utf8' }).trim();
    
    console.log(`✅ Node.js: ${nodeVersion}`);
    console.log(`✅ npm: ${npmVersion}\n`);
    return true;
  } catch (error) {
    console.log('❌ Node.js or npm not found. Please install Node.js first.\n');
    return false;
  }
};

// Install dependencies
const installDependencies = () => {
  try {
    const { execSync } = require('child_process');
    console.log('📦 Installing dependencies...');
    execSync('npm install', { stdio: 'inherit' });
    console.log('✅ Dependencies installed successfully!\n');
    return true;
  } catch (error) {
    console.log('❌ Failed to install dependencies. Please run "npm install" manually.\n');
    return false;
  }
};

// Create placeholder images
const createPlaceholders = () => {
  const imageDirs = [
    'public/images/projects',
    'public/images/books',
    'public/images/cats',
    'public/images/papers',
    'public/images/profile'
  ];

  imageDirs.forEach(dir => {
    const fullPath = path.join(__dirname, '..', dir);
    if (!fs.existsSync(fullPath)) {
      fs.mkdirSync(fullPath, { recursive: true });
      console.log(`📁 Created directory: ${dir}`);
    }
  });

  // Create a simple placeholder image
  const placeholderSvg = `<svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="#f3f4f6"/>
    <text x="50%" y="50%" text-anchor="middle" dy=".3em" font-family="Arial, sans-serif" font-size="16" fill="#6b7280">
      Placeholder Image
    </text>
  </svg>`;

  const placeholderFiles = [
    'public/images/profile/avatar.svg',
    'public/images/og-image.svg'
  ];

  placeholderFiles.forEach(file => {
    const fullPath = path.join(__dirname, '..', file);
    if (!fs.existsSync(fullPath)) {
      fs.writeFileSync(fullPath, placeholderSvg);
      console.log(`📄 Created placeholder: ${file}`);
    }
  });
};

// Main setup function
const setup = () => {
  console.log('🚀 Hiren\'s Portfolio - Development Setup\n');
  
  if (!checkDependencies()) {
    console.log('Please install Node.js from https://nodejs.org/ and try again.');
    return;
  }

  createPlaceholders();
  
  if (installDependencies()) {
    console.log('🎉 Setup complete! You can now run:');
    console.log('   npm run dev');
    console.log('\n📝 Next steps:');
    console.log('1. Replace placeholder images with your actual photos');
    console.log('2. Update personal information in components');
    console.log('3. Customize colors in tailwind.config.js');
    console.log('4. Add your actual projects and publications');
    console.log('\n🌐 Open http://localhost:3000 to view your portfolio!');
  }
};

setup();
