# Hiren Vaghela - Portfolio Website

A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS showcasing my work as an AI/ML Engineer, Data Scientist, and Founder of Puzle.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive across all devices
- **Dark/Light Mode**: Toggle between dark and light themes
- **Interactive Sections**:
  - Hero section with animated introduction
  - About section with skills and achievements
  - Projects showcase with filtering
  - Research publications
  - Books I've read (Reeds section)
  -  My Furry Co-Pilot - Cat gallery featuring Nyra
  - Puzle startup story
- **Accessibility**: Built with accessibility best practices
- **SEO Optimized**: Meta tags and structured data
- **Performance**: Optimized for fast loading

## 🛠️ Tech Stack

- **Frontend**: Next.js 13, React 18, TypeScript
- **Styling**: Tailwind CSS, Framer Motion
- **Icons**: React Icons
- **Animations**: Framer Motion, CSS Transitions
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. **Prerequisites**:
   - Node.js 18+ 
   - npm or yarn

2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run development server**:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

### Other Platforms

- **Netlify**: Build command: `npm run build`, Publish directory: `out`
- **GitHub Pages**: Use `next export` for static export

## 📁 Project Structure

```
portfolio-main/neelbavarva/
├── components/           # React components
│   ├── About.js         # About section
│   ├── Cooking.js       # Puzle section
│   ├── Footer.js        # Footer component
│   ├── Hero.js          # Hero section
│   ├── Navbar.js        # Navigation
│   ├── PawWorld.js      # Cat gallery
│   ├── Projects.js      # Projects showcase
│   ├── Publications.js  # Research papers
│   └── Reeds.js         # Books section
├── pages/               # Next.js pages
│   ├── _app.js         # App wrapper
│   └── index.js        # Home page
├── public/             # Static assets
│   └── images/         # Images and media
├── styles/             # CSS files
│   └── globals.css     # Global styles
├── tailwind.config.js  # Tailwind configuration
└── package.json        # Dependencies
```

## 🎨 Customization

### Colors
Update the color scheme in `tailwind.config.js`:
```javascript
colors: {
  primary: { /* Your primary colors */ },
  secondary: { /* Your secondary colors */ },
  accent: { /* Your accent colors */ }
}
```

### Content
- Update personal information in each component
- Replace placeholder images in `/public/images/`
- Modify the projects, publications, and books data
- Update social media links

### Styling
- Modify `styles/globals.css` for global styles
- Update component-specific styles using Tailwind classes
- Customize animations in Framer Motion components

## 📱 Sections Overview

### 1. Hero Section
- Animated introduction
- Professional photo placeholder
- Call-to-action buttons
- Social media links

### 2. About Section
- Professional bio
- Skills with progress bars
- Achievements grid
- Personal quote

### 3. Projects Section
- Filterable project grid
- Project details with tech stack
- GitHub and demo links
- Featured projects highlighting

### 4. Publications Section
- Research papers listing
- Citation counts
- PDF download links
- Publication statistics

### 5. Reeds Section
- Books I've read
- Search and filter functionality
- Personal ratings and quotes
- Reading statistics

### 6.  My Furry Co-Pilot Section
- Cat photo gallery
- Nyra's stats and facts
- Interactive photo modal
- Fun cat-related content

### 7. Cooking Section (Puzle)
- Startup story and mission
- Product features
- Technology stack
- Contact form
- Company milestones

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Adding New Sections

1. Create a new component in `/components/`
2. Import and add to `pages/index.js`
3. Add navigation link in `components/Navbar.js`
4. Style with Tailwind CSS classes

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📞 Contact

- **Email**: hiren@Puzle
- **LinkedIn**: [Hiren Vaghela](https://www.linkedin.com/in/hirenvaghela/)
- **GitHub**: [@hiren-2911](https://github.com/hiren-2911)
- **Website**: [Puzle](https://Puzle)

---

Made with ❤️ and lots of coffee ☕ by Hiren Vaghela