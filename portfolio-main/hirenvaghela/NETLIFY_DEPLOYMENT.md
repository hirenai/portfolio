# Netlify Deployment Guide for Hiren's Portfolio

This guide will help you deploy your Next.js portfolio to Netlify successfully.

## 🚀 Quick Deployment Steps

### Method 1: Deploy via Netlify Dashboard (Recommended)

1. **Prepare Your Repository**
   - Push your code to GitHub/GitLab/Bitbucket
   - Ensure all files are committed and pushed

2. **Connect to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Sign up/Login with your Git provider account
   - Click "New site from Git"
   - Choose your repository

3. **Configure Build Settings**
   - **Build command**: `npm run build && npm run export`
   - **Publish directory**: `out`
   - **Node version**: `18` (set in Environment variables)

4. **Deploy**
   - Click "Deploy site"
   - Wait for build to complete
   - Your site will be live at `https://your-site-name.netlify.app`

### Method 2: Deploy via Netlify CLI

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**
   ```bash
   netlify login
   ```

3. **Build and Deploy**
   ```bash
   cd portfolio-main/hirenvaghela
   npm run build
   npm run export
   netlify deploy --prod --dir=out
   ```

## ⚙️ Configuration Files

### netlify.toml
This file is already configured with:
- Build command: `npm run build && npm run export`
- Publish directory: `out`
- Node version: 18
- Redirects for SPA routing
- Security headers
- Caching headers

### next.config.js
Updated with:
- `output: 'export'` for static site generation
- `unoptimized: true` for images
- Proper asset handling

### package.json
Added export script:
- `"export": "next export"`
- `"deploy": "npm run build && npm run export"`

## 🔧 Environment Variables

If you need environment variables, add them in Netlify dashboard:
1. Go to Site settings → Environment variables
2. Add any required variables

## 🐛 Common Issues & Solutions

### Issue 1: Build Fails with "next export" not found
**Solution**: Update to Next.js 13+ or use the build command without export:
```bash
# In netlify.toml, change build command to:
command = "npm run build"
```

### Issue 2: Images not loading
**Solution**: Ensure all images are in the `public` folder and use relative paths:
```jsx
// ✅ Correct
<img src="/images/profile.jpg" alt="Profile" />

// ❌ Incorrect
<img src="./images/profile.jpg" alt="Profile" />
```

### Issue 3: 404 errors on page refresh
**Solution**: The netlify.toml already includes redirects for SPA routing.

### Issue 4: Hydration errors
**Solution**: The app already uses proper client-side mounting patterns.

### Issue 5: Build timeout
**Solution**: 
- Check if you have large files in public folder
- Optimize images
- Remove unnecessary dependencies

## 📁 File Structure After Build

```
out/
├── _next/
│   ├── static/
│   └── ...
├── images/
├── icons/
├── fonts/
├── index.html
├── About.html
├── Projects.html
└── ...
```

## 🚀 Custom Domain Setup

1. Go to Site settings → Domain management
2. Add your custom domain
3. Update DNS records as instructed
4. Enable HTTPS (automatic with Netlify)

## 📊 Performance Optimization

### Before Deployment:
1. **Optimize Images**
   - Use WebP format when possible
   - Compress images
   - Use appropriate sizes

2. **Minimize Bundle Size**
   - Remove unused dependencies
   - Use dynamic imports for large components

3. **Enable Compression**
   - Netlify automatically enables gzip compression

## 🔍 Testing Your Deployment

1. **Local Testing**
   ```bash
   npm run build
   npm run export
   npx serve out
   ```

2. **Check for Issues**
   - All images load correctly
   - Navigation works
   - No console errors
   - Responsive design works

## 📈 Monitoring & Analytics

1. **Netlify Analytics**
   - Available in Netlify dashboard
   - Shows page views, visitors, etc.

2. **Google Analytics**
   - Add GA tracking code to `_app.js`

## 🆘 Getting Help

If you encounter issues:
1. Check Netlify build logs
2. Test locally with `npm run build && npm run export`
3. Verify all file paths are correct
4. Check browser console for errors

## ✅ Deployment Checklist

- [ ] Code pushed to Git repository
- [ ] netlify.toml configured
- [ ] next.config.js updated
- [ ] package.json scripts added
- [ ] All images in public folder
- [ ] No console errors
- [ ] Local build works
- [ ] Site deployed successfully
- [ ] Custom domain configured (if needed)
- [ ] HTTPS enabled
- [ ] Analytics set up (optional)

---

**Need help?** Check the troubleshooting section or contact support.
