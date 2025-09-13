# Subdirectory Deployment Guide for Netlify

Since your project is in a subdirectory (`portfolio-main/hirenvaghela`), here's how to properly deploy it on Netlify.

## 🚀 **Method 1: Netlify Dashboard (Recommended)**

### Step 1: Connect Your Repository
1. Go to [netlify.com](https://netlify.com)
2. Click "New site from Git"
3. Connect your GitHub/GitLab/Bitbucket account
4. Select your repository

### Step 2: Configure Build Settings
**IMPORTANT**: Set these exact values:

- **Base directory**: `portfolio-main/hirenvaghela`
- **Build command**: `npm run build`
- **Publish directory**: `portfolio-main/hirenvaghela/out`
- **Node version**: `18`

### Step 3: Deploy
Click "Deploy site" and wait for the build to complete.

## 🚀 **Method 2: Netlify CLI**

```bash
# Navigate to your project root (where .git is)
cd /path/to/your/website

# Deploy from subdirectory
netlify deploy --prod --dir=portfolio-main/hirenvaghela/out
```

## 🚀 **Method 3: Move Project to Root (Alternative)**

If you prefer to have your project at the root level:

1. **Move files to root**:
   ```bash
   # From your website directory
   mv portfolio-main/hirenvaghela/* .
   mv portfolio-main/hirenvaghela/.* . 2>/dev/null || true
   rmdir portfolio-main/hirenvaghela
   rmdir portfolio-main
   ```

2. **Update .gitignore** (if needed):
   ```bash
   # Remove any portfolio-main/ references
   ```

3. **Deploy normally** with:
   - Build command: `npm run build`
   - Publish directory: `out`

## ⚙️ **Current Configuration**

Your `netlify.toml` is now configured for subdirectory deployment:

```toml
[build]
  base = "portfolio-main/hirenvaghela"
  command = "npm run build"
  publish = "portfolio-main/hirenvaghela/out"

[build.environment]
  NODE_VERSION = "18"

# Handle Next.js static export routing
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## 🔍 **Verification Steps**

### 1. Test Build Locally
```bash
cd portfolio-main/hirenvaghela
npm run test-build
```

### 2. Check Generated Files
After build, verify these files exist:
- `portfolio-main/hirenvaghela/out/index.html`
- `portfolio-main/hirenvaghela/out/About.html`
- `portfolio-main/hirenvaghela/out/Projects.html`
- `portfolio-main/hirenvaghela/out/_next/` (static assets)

### 3. Test Locally
```bash
cd portfolio-main/hirenvaghela/out
npx serve .
```

## 🐛 **Common Issues & Solutions**

### Issue 1: "Build directory not found"
**Solution**: Make sure the base directory is set to `portfolio-main/hirenvaghela`

### Issue 2: "Publish directory not found"
**Solution**: Make sure publish directory is set to `portfolio-main/hirenvaghela/out`

### Issue 3: "Package.json not found"
**Solution**: Verify the base directory contains `package.json`

### Issue 4: Build succeeds but site shows 404
**Solution**: Check that the publish directory contains `index.html`

## 📁 **Directory Structure**

Your current structure:
```
website/
├── .git/
├── portfolio-main/
│   └── hirenvaghela/
│       ├── package.json
│       ├── next.config.js
│       ├── netlify.toml
│       ├── pages/
│       ├── components/
│       └── out/ (after build)
└── other-files...
```

## ✅ **Deployment Checklist**

- [ ] Repository connected to Netlify
- [ ] Base directory set to `portfolio-main/hirenvaghela`
- [ ] Build command set to `npm run build`
- [ ] Publish directory set to `portfolio-main/hirenvaghela/out`
- [ ] Node version set to 18
- [ ] Code pushed to repository
- [ ] Build completed successfully
- [ ] Site accessible without 404 errors

## 🎯 **Quick Fix for Current Issue**

1. **Go to Netlify Dashboard**
2. **Site Settings** → **Build & deploy** → **Build settings**
3. **Set Base directory**: `portfolio-main/hirenvaghela`
4. **Set Publish directory**: `portfolio-main/hirenvaghela/out`
5. **Save and redeploy**

This should resolve your 404 issues!
