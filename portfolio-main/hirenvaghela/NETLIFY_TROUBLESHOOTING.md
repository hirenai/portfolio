# Netlify Deployment Troubleshooting Guide

## 🔍 **Common Netlify Deployment Errors & Solutions**

### **Error 1: "Build directory not found"**
**Solution:**
- Verify base directory is set to: `portfolio-main/hirenvaghela`
- Check that `package.json` exists in that directory

### **Error 2: "Publish directory not found"**
**Solution:**
- Verify publish directory is set to: `portfolio-main/hirenvaghela/out`
- Ensure the build completes successfully first

### **Error 3: "Build command failed"**
**Solution:**
- Check build logs for specific error messages
- Try building locally first: `npm run build`

### **Error 4: "No index.html found"**
**Solution:**
- Verify static export is working
- Check that `out/index.html` exists after build

## 🚀 **Alternative Deployment Approach**

If the subdirectory approach isn't working, try this simpler method:

### **Method 1: Move Project to Root**
```bash
# From your website directory
cd portfolio-main/hirenvaghela
# Copy all files to parent directory
cp -r * ../
cp -r .* ../ 2>/dev/null || true
cd ..
# Remove empty directories
rmdir portfolio-main/hirenvaghela
rmdir portfolio-main
```

Then deploy with standard settings:
- Build command: `npm run build`
- Publish directory: `out`

### **Method 2: Use Netlify CLI**
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy from subdirectory
cd portfolio-main/hirenvaghela
netlify deploy --prod --dir=out
```

## 🔧 **Quick Fixes to Try**

### **Fix 1: Update Build Command**
In Netlify dashboard, try these build commands:
1. `npm run build` (current)
2. `cd portfolio-main/hirenvaghela && npm run build`
3. `npm install && npm run build`

### **Fix 2: Check Node Version**
Ensure Node version is set to 18 in Netlify environment variables.

### **Fix 3: Verify File Structure**
Make sure your repository structure is:
```
your-repo/
├── .git/
├── portfolio-main/
│   └── hirenvaghela/
│       ├── package.json
│       ├── next.config.js
│       ├── netlify.toml
│       └── pages/
```

## 🧪 **Test Locally First**

Before deploying, test locally:
```bash
cd portfolio-main/hirenvaghela
npm run build
ls out/
```

Should show:
- index.html
- About.html
- Projects.html
- _next/ directory
- images/ directory

## 📋 **Deployment Checklist**

- [ ] Code pushed to Git repository
- [ ] Base directory set correctly
- [ ] Build command set correctly
- [ ] Publish directory set correctly
- [ ] Node version set to 18
- [ ] Local build works
- [ ] out/ directory contains index.html

## 🆘 **If Still Failing**

Please share:
1. The exact error message from Netlify build logs
2. Your current Netlify build settings
3. The output of `npm run build` when run locally

This will help me provide a more specific solution!
