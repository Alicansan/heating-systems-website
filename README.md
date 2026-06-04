# Heating Systems Website

Premium industrial heating, plumbing, and radiator systems website built with modern web technologies for Turkish market.

## 🚀 Features

- **Turkish Language & SEO**: Fully localized for Turkish Google with optimized metadata and keywords
- **Auto-scrolling Hero**: Dynamic background carousel with professional industrial imagery
- **Interactive Catalog**: Search and filter products with modal viewer
- **Brand-Focused Design**: Uses company colors (#e95a0d, #037db1, #1c355e) throughout
- **Fully Responsive**: Mobile-first design optimized for all devices
- **Modern Animations**: Subtle Framer Motion transitions with reduced-motion support
- **Contact Integration**: Direct phone and WhatsApp contact buttons
- **Performance Optimized**: Next.js static generation, image optimization, code splitting
- **Accessibility Ready**: Semantic HTML, ARIA labels, keyboard navigation

## 📋 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Fonts**: Inter, Space Grotesk (Google Fonts)
- **Image Optimization**: Next/Image

## 🏗️ Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with global metadata
│   ├── page.tsx            # Landing page assembly
│   └── styles/             # Global styles and CSS variables
├── components/
│   ├── layout/             # Header, Footer
│   ├── sections/           # Hero, Services, About, Showcase, Catalog, Contact
│   ├── catalog/            # Product grid, detail, modal, viewer
│   ├── ui/                 # Reusable components (Button)
│   ├── animations/         # Reveal animation wrapper
├── hooks/                  # Custom React hooks (useSmoothScroll, useModal)
├── lib/                    # Utilities (api, seo helpers)
├── data/                   # Static product data
├── types/                  # TypeScript type definitions
├── public/                 # Static assets (SVG slides, images)
└── styles/                 # Global CSS with CSS variables
```

## 🎨 Color Palette

- **Accent**: `#e95a0d` (Orange) - Primary CTA and highlights
- **Brand Blue**: `#037db1` - Secondary interactive elements
- **Brand Navy**: `#1c355e` - Deep brand color for overlays
- **Background**: `#0b1220` - Dark premium background
- **Surface**: `#111827` - Card and section backgrounds
- **Muted**: `#94a3b8` - Secondary text

## 📦 Installation

```bash
# Clone repository
git clone https://github.com/YOUR_USERNAME/heating-systems-website.git
cd heating-systems-website

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🔍 SEO Features

- **Turkish Localization**: `lang="tr"`, metadata in Turkish
- **Structured Data**: JSON-LD ready for products and organization
- **Sitemap**: Generated via `/app/sitemap.ts` route
- **Robots.txt**: Configured for search engine crawling
- **Keywords**: Optimized for Turkish search terms
  - endüstriyel ısıtma
  - kombi kazanları
  - radyatör montajı
  - tesisatçılık sistemleri
- **Open Graph**: Turkish-language OG tags for social sharing

## 🚀 Sections Overview

### Hero
- Full-screen auto-scrolling background carousel
- 6-second slide transitions
- Headline, description, and dual CTAs

### Services
- 5 service offerings with descriptions
- Reveal animations on scroll
- Dark surface cards with accent borders

### About
- Company value statement
- Two-column layout with capabilities list
- Professional copy focused on reliability

### Showcase
- Product preview with catalog integration
- Search and filter functionality
- Interactive modal product viewer

### Catalog
- Full product browsing experience
- Real-time search across names, SKUs, descriptions
- Modal product detail view
- Responsive grid layout

### Contact
- Direct phone and WhatsApp integration
- Quick action buttons with tel: and WhatsApp links
- Surface card design matching brand

## 🎬 Animations

All animations respect `prefers-reduced-motion` for accessibility:

- **Reveal**: Fade-in + slight Y-axis slide for sections
- **Modal**: Scale + fade entrance/exit
- **Hover**: Brightness adjustment on buttons
- **Carousel**: Smooth slide transitions

## 📱 Responsive Design

- **Mobile**: Single column, optimized touch targets
- **Tablet**: Two-column grids where appropriate
- **Desktop**: Full multi-column layouts, expanded spacing
- **Large Screens**: Max-width container with centered content

## 🌐 Deployment

### Vercel (Recommended)

```bash
# Push to GitHub, then:
# 1. Visit https://vercel.com/new
# 2. Import repository
# 3. Deploy with zero configuration
```

## 💻 Development Commands

```bash
npm run dev      # Start dev server (http://localhost:3000)
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

MIT License - see LICENSE file for details

## 📞 Contact

- Phone: 0554 176 89 50
- WhatsApp: 0554 176 89 50
- Email: info@example.com

---

**Built with ❤️ for industrial heating systems in Turkey**
