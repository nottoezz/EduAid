# Edu-Aid - Educational Font Platform

A modern React application for Edu-Aid's educational font platform, built with Vite, React, and Tailwind CSS.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Smooth Animations**: Framer Motion powered transitions and interactions
- **Glass Morphism**: Modern UI with backdrop blur effects
- **Accessibility**: WCAG compliant with proper ARIA labels
- **Performance**: Optimized build with code splitting

## 🛠️ Tech Stack

- **Frontend**: React 19 with Vite
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **Deployment**: GitHub Pages ready

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/edu.git
cd edu

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🚀 Deployment to GitHub Pages

### Automatic Deployment

1. **Install gh-pages globally** (optional, but recommended):
   ```bash
   npm install -g gh-pages
   ```

2. **Update Vite config** (if needed):
   - The base path is already configured in `vite.config.js`
   - If your repository name is different from 'edu', update the base path

3. **Deploy**:
   ```bash
   npm run deploy
   ```

### Manual Deployment

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Commit and push the `dist` folder** to the `gh-pages` branch:
   ```bash
   git add dist -f
   git commit -m "Deploy to GitHub Pages"
   git subtree push --prefix dist origin gh-pages
   ```

3. **Enable GitHub Pages** in your repository settings:
   - Go to Settings → Pages
   - Select "gh-pages" branch as source

## ⚙️ Configuration

### Base Path
The app is configured for GitHub Pages deployment with base path `/edu/`. If your repository has a different name, update `vite.config.js`:

```js
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/your-repo-name/' : '/',
})
```

### Environment Variables
No environment variables are currently required.

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.jsx      # Navigation header
│   ├── Hero.jsx        # Hero section
│   ├── FontPackSection.jsx
│   ├── WhoUsesEduAid.tsx
│   ├── PricingLicenses.tsx
│   ├── TrustedByEducators.tsx
│   ├── FaqSupport.tsx
│   └── Footer.tsx
├── App.jsx             # Main app component
├── App.css            # Global styles
└── main.jsx           # App entry point
```

## 🎨 Design System

- **Colors**: Edu-Aid brand palette with glass morphism effects
- **Typography**: Custom font stack with proper hierarchy
- **Spacing**: Consistent spacing scale using Tailwind utilities
- **Components**: Reusable component library with consistent styling

## 📱 Responsive Design

- **Mobile-first**: Optimized for mobile devices
- **Tablet**: Enhanced experience for tablets
- **Desktop**: Full feature set with advanced interactions
- **Accessibility**: WCAG AA compliant

## 🔧 Development

```bash
# Development server
npm run dev

# Build for production
npm run build

# Lint code
npm run lint

# Preview production build
npm run preview
```

## 📄 License

This project is private and proprietary to Edu-Aid.

## 👥 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For support or questions:
- Email: schoolfonts@gmail.com
- Phone: 082 853 6516