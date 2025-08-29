# Inventure - Recruiting Without Limits

A modern, responsive recruitment platform built with React and designed for speed and scale. This project features a clean, professional interface with dark mode support and smooth animations.

## ✨ Features

- 🌗 **Dark/Light Mode Toggle** - Seamless theme switching with persistent preferences
- 📱 **Fully Responsive Design** - Optimized for desktop, tablet, and mobile devices
- ⚡ **Lightning Fast** - Built with Vite for optimal performance
- 🎨 **Modern UI** - Clean design with Tailwind CSS and Framer Motion animations
- 🧩 **Modular Architecture** - Well-organized component structure for easy maintenance
- 🤖 **AI Assistant** - Floating chatbot for user interaction
- 🔗 **Professional Sections** - Hero, Community, Integrations, About, and Footer

## 🚀 Live Demo

🔗 **[View Live Site](https://inventure.vercel.app/)**

## 🛠️ Tech Stack

- **Frontend:** React 19.1.1
- **Build Tool:** Vite 7.1.3
- **Styling:** Tailwind CSS (CDN)
- **Animations:** Framer Motion 12.23.12
- **Icons:** Lucide React 0.542.0
- **Deployment:** Vercel

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/hiren1407/inventure.git
   cd inventure
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## 🏗️ Project Structure

```
inventure/
├── public/
│   ├── favicon.svg         # Custom recruitment-themed favicon
│   └── vite.svg           # Vite logo
├── src/
│   ├── components/        # Modular React components
│   │   ├── Navbar.jsx     # Navigation with dark mode toggle
│   │   ├── HeroSection.jsx # Main landing section
│   │   ├── CommunitySection.jsx # Team member cards
│   │   ├── IntegrationsSection.jsx # Integration tools
│   │   ├── AboutSection.jsx # About information
│   │   ├── Footer.jsx     # Footer component
│   │   └── AIChatbot.jsx  # Floating AI assistant
│   ├── App.jsx           # Main application component
│   ├── main.jsx          # React entry point
│   └── index.css         # Global styles
├── index.html            # HTML template with Tailwind CDN
├── package.json          # Dependencies and scripts
├── vite.config.js        # Vite configuration
└── README.md            # This file
```

## 🎯 Available Scripts

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
```

## 🎨 Design Features

### Dark Mode Implementation
- Class-based dark mode with `document.documentElement.classList`
- Smooth transitions between themes
- Persistent toggle button visibility

### Component Architecture
- **Modular Design:** Each section is a separate, reusable component
- **Props Management:** Clean state management with React hooks
- **Responsive Layout:** Mobile-first design approach

### Animation Details
- **Framer Motion:** Smooth scroll-triggered animations
- **Stagger Effects:** Sequential animation timing for visual appeal
- **Performance Optimized:** Hardware-accelerated transforms

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically on push

### Manual Build
```bash
npm run build
# Upload dist/ folder to your hosting provider
```

## 📝 Customization

### Theme Colors
Modify the Tailwind configuration in `index.html`:
```javascript
tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Add custom colors here
      }
    }
  }
}
```

### Content Updates
- **Hero Section:** Edit `src/components/HeroSection.jsx`
- **Community:** Update team members in `src/components/CommunitySection.jsx`
- **Integrations:** Modify tools in `src/components/IntegrationsSection.jsx`

## 🔧 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

## 📄 License

This project is licensed under the MIT License.



## 🙏 Acknowledgments

- [React](https://reactjs.org/) - The web framework used
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - Styling framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide React](https://lucide.dev/) - Icon library

---

Made with ❤️ by [Hiren Khanchandani](https://github.com/hiren1407)+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
