# Comm360 Landing Page

A modern, cinematic landing page for Comm360 - Your AI that joins meetings for you.

## 🚀 Features

- **Modern Stack**: Built with React, Vite, TailwindCSS, and Framer Motion
- **Cinematic Animations**: Smooth scroll-triggered animations and micro-interactions
- **Fully Responsive**: Optimized for all device sizes
- **Performance-focused**: Fast load times with Vite's HMR
- **SEO-ready**: Semantic HTML and meta tags included

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Design Philosophy

This landing page is inspired by modern SaaS landing pages like sixtyfour.ai, featuring:

- Dark mode theme with gradient accents
- Subtle animations that enhance without distracting
- Clear visual hierarchy and information flow
- Strong call-to-action placements
- Trust-building elements throughout

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Navigation.jsx       # Top navigation bar
│   ├── Hero.jsx            # Hero section with main CTA
│   ├── TrustLine.jsx       # Value proposition statement
│   ├── ProductVision.jsx   # Product overview
│   ├── FeatureHighlights.jsx  # 3-card feature grid
│   ├── HowItWorks.jsx      # Step-by-step process
│   ├── VisualDemo.jsx      # Interactive demo showcase
│   ├── WhoItsFor.jsx       # Target audience cards
│   ├── WaitlistForm.jsx    # Early access form
│   └── Footer.jsx          # Footer with links
├── App.jsx                 # Main app component
├── main.jsx               # Entry point
└── index.css              # Global styles + Tailwind

## 🎯 Sections Overview

1. **Hero** - Compelling headline with dual CTAs
2. **Trust Line** - Differentiation statement
3. **Product Vision** - In-depth product explanation with visual
4. **Feature Highlights** - 3 core features with icons
5. **How It Works** - 3-step process timeline
6. **Visual Demo** - Interactive demo mockup
7. **Who It's For** - Target audience breakdown
8. **Waitlist Form** - Early access signup
9. **Footer** - Navigation and social links

## 🛠️ Customization

### Colors
Edit `tailwind.config.js` to customize the gradient colors and theme.

### Content
All copy is directly in the component files for easy editing.

### Animations
Adjust Framer Motion variants in each component file to customize animation behavior.

### Waitlist Form Email Setup

The waitlist form submits to Formspree and emails submissions.

- Default endpoint (can be overridden with env): `https://formspree.io/f/xdkwllee`
- To customize, set `VITE_FORMSPREE_ENDPOINT` in a `.env` file:

```
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your_form_id
```

The form includes `_subject: "IMP FROM COMM360"` and fields: `name`, `email`, `company`, `useCase`.

## 📝 TODO

- [ ] Connect waitlist form to backend/email service
- [ ] Add actual demo video
- [ ] Implement analytics tracking
- [ ] Add testimonials/customer logos
- [ ] Set up CI/CD pipeline

## 🌐 Deployment

This project can be deployed to:
- Vercel (recommended for Vite projects)
- Netlify
- GitHub Pages
- Any static hosting service

```bash
npm run build
# Deploy the 'dist' folder
```

## 📄 License

MIT License - feel free to use this for your own projects!

---

Built with ❤️ for Comm360
