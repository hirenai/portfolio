# Development Guide

## Quick Start

1. **Install Node.js** (version 18 or higher)
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Start development server**:
   ```bash
   npm run dev
   ```
4. **Open browser**: Navigate to `http://localhost:3000`

## Project Structure

```
components/
├── About.js          # About section with skills
├── Cooking.js        # Puzle startup section
├── Footer.js         # Footer with links
├── Hero.js           # Landing section
├── Navbar.js         # Navigation bar
├── PawWorld.js       # Cat gallery section
├── Projects.js       # Projects showcase
├── Publications.js   # Research papers
├── Reeds.js          # Books section
├── ScrollToTop.js    # Scroll to top button
└── LoadingSpinner.js # Loading component

pages/
├── _app.js           # App wrapper with global styles
└── index.js          # Main page

styles/
└── globals.css       # Global styles with Tailwind

public/
└── images/           # Static images
    ├── projects/     # Project screenshots
    ├── books/        # Book covers
    ├── cats/         # Cat photos
    └── papers/       # Research papers
```

## Customization

### Personal Information
Update the following files with your information:
- `components/Hero.js` - Name, title, bio
- `components/About.js` - Skills, achievements
- `components/Projects.js` - Your projects
- `components/Publications.js` - Research papers
- `components/Reeds.js` - Books you've read
- `components/Cooking.js` - Your startup/company info

### Styling
- Modify `tailwind.config.js` for color scheme
- Update `styles/globals.css` for custom styles
- Use Tailwind classes in components

### Images
Replace placeholder images in `/public/images/` with your actual images:
- Profile photo
- Project screenshots
- Book covers
- Cat photos (if applicable)
- Research paper thumbnails

## Features

### Dark/Light Mode
- Automatic detection of system preference
- Manual toggle in navigation
- Smooth transitions between themes

### Animations
- Framer Motion for smooth animations
- Scroll-triggered animations
- Hover effects and transitions

### Responsive Design
- Mobile-first approach
- Breakpoints: sm, md, lg, xl
- Flexible grid layouts

### Accessibility
- Semantic HTML
- ARIA labels
- Keyboard navigation
- Focus management

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect to Vercel
3. Deploy automatically

### Other Options
- Netlify
- GitHub Pages
- AWS Amplify
- Any static hosting service

## Troubleshooting

### Common Issues
1. **Port already in use**: Change port with `npm run dev -- -p 3001`
2. **Module not found**: Run `npm install`
3. **Build errors**: Check for syntax errors in components
4. **Images not loading**: Verify image paths in `/public/images/`

### Performance
- Images are optimized automatically
- Code splitting with Next.js
- Lazy loading for components
- Minimal bundle size

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## Support

For questions or issues:
- Create an issue on GitHub
- Contact: hiren@Puzle
- LinkedIn: [Hiren Vaghela](https://www.linkedin.com/in/hirenvaghela/)
