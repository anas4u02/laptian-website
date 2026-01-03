# Laptian Multi-Subdomain Website

A professional Next.js 15 website for Laptian business with subdomain-based routing for two business units:
- **Training Center** (training.laptian.com) - Laptop repair training and certification
- **Repair Services** (services.laptian.com) - Professional laptop repair services

## 🚀 Features

- ✅ **Multi-subdomain routing** using Next.js middleware
- ✅ **SEO optimized** with metadata, structured data (JSON-LD), and sitemaps
- ✅ **Premium dark theme** with gold accents inspired by academy.dhruvrathee.com
- ✅ **Fully responsive** design for mobile, tablet, and desktop
- ✅ **Server-Side Rendering (SSR)** + **Static Site Generation (SSG)**
- ✅ **Component-based architecture** with reusable components
- ✅ **Vanilla CSS** with custom design system (no framework dependencies)
- ✅ **Live countdown timer** for promotional offers
- ✅ **Interactive gallery** with lightbox
- ✅ **Contact forms** with validation

## 📁 Project Structure

```
laptian-website/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Main page (subdomain routing)
│   │   ├── globals.css         # Design system & utilities
│   │   └── sitemap.ts          # Dynamic sitemap
│   ├── components/
│   │   ├── InfoBar.tsx         # Top info bar
│   │   ├── Header.tsx          # Navigation header
│   │   ├── PromotionalBar.tsx  # Countdown timer banner
│   │   ├── Footer.tsx          # Site footer
│   │   ├── training/           # Training center components
│   │   │   ├── HeroSection.tsx
│   │   │   ├── Gallery.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── Placements.tsx
│   │   │   ├── ServicesCards.tsx
│   │   │   └── OtherServices.tsx
│   │   └── services/           # Repair services components
│   │       ├── HeroSection.tsx
│   │       ├── ServicesList.tsx
│   │       └── ProcessFlow.tsx
│   ├── lib/
│   │   ├── seo.ts              # SEO utilities
│   │   └── subdomain.ts        # Subdomain detection
│   └── middleware.ts           # Subdomain routing middleware
├── public/
│   ├── hero-bg.png             # Hero section background
│   ├── training-facility.png   # Gallery images
│   ├── laptop-repair.png       # Gallery images
│   └── robots.txt              # Search engine rules
└── package.json
```

## 🛠️ Installation

1. **Clone or navigate to the project:**
   ```bash
   cd /home/anas4u02/.gemini/antigravity/scratch/laptian-website
   ```

2. **Ensure Node.js 20+ is active:**
   ```bash
   nvm use 20.19.6
   ```

3. **Dependencies are already installed**, but if needed:
   ```bash
   npm install
   ```

## 🚀 Development

### Local Development (Recommended Method)

**Option 1: Using Query Parameters** (Easiest for testing)
```bash
npm run dev
```

Then access:
- Training Center: http://localhost:3000?subdomain=training
- Repair Services: http://localhost:3000?subdomain=services

**Option 2: Using Subdomain URLs** (Production-like)

1. Edit your `/etc/hosts` file:
   ```bash
   sudo nano /etc/hosts
   ```

2. Add these lines:
   ```
   127.0.0.1 training.localhost
   127.0.0.1 services.localhost
   ```

3. Start the dev server:
   ```bash
   npm run dev
   ```

4. Access:
   - Training Center: http://training.localhost:3000
   - Repair Services: http://services.localhost:3000

## 🏗️ Production Build

```bash
npm run build
npm start
```

## 📊 SEO Features

### Implemented SEO Best Practices:
- ✅ Unique meta titles and descriptions per page
- ✅ Open Graph tags for social media sharing
- ✅ Twitter Card metadata
- ✅ Structured data (JSON-LD) for Organization, LocalBusiness, Course
- ✅ Dynamic sitemap generation
- ✅ Robots.txt configuration
- ✅ Semantic HTML5 structure
- ✅ Proper heading hierarchy (H1-H6)
- ✅ Image alt attributes
- ✅ Fast load times with Next.js optimization
- ✅ Mobile-responsive design

### Lighthouse Targets:
- Performance: ≥90
- SEO: ≥95
- Accessibility: ≥90

## 🎨 Design System

### Color Palette:
- **Background**: `#000000` (primary), `#0A0A0A` (secondary), `#1A1A1A` (tertiary)
- **Accent Gold**: `#F2B01E`
- **Text**: `#FFFFFF` (primary), `#B3B3B3` (secondary), `#808080` (tertiary)

### Typography:
- **Font Family**: Inter (via Google Fonts)
- **Font Sizes**: Responsive scale from 12px to 60px
- **Font Weights**: 300 (light) to 900 (black)

### Components:
- Buttons (primary, secondary, sizes)
- Cards with hover effects
- Forms with validation
- Glassmorphism header
- Animations (fade-in, slide-in, pulse, glow)

## 📝 Content Customization

### Update Placeholder Content:

1. **Contact Information** - Edit in:
   - `src/components/InfoBar.tsx`
   - `src/components/Footer.tsx`

2. **Social Media Links** - Update URLs in:
   - `src/components/InfoBar.tsx`
   - `src/components/Footer.tsx`

3. **Business Details** - Modify in:
   - `src/lib/seo.ts` (structured data)
   - Component text content

4. **Promotional Offers** - Configure in:
   - `src/app/page.tsx` (set targetDate for countdown)

5. **Course/Service Pricing** - Edit arrays in:
   - `src/components/training/ServicesCards.tsx`
   - `src/components/services/ServicesList.tsx`

## 🌐 Deployment

### Vercel (Recommended):
```bash
vercel --prod
```

Configure custom domains in Vercel dashboard:
- Add `training.laptian.com`
- Add `services.laptian.com`

### Other Platforms:
- Ensure subdomain routing is supported
- Set environment variables if needed
- Configure DNS A/CNAME records

## 🧪 Testing Checklist

- [ ] Test both subdomains load correctly
- [ ] Verify all navigation links work
- [ ] Check countdown timer functionality
- [ ] Test responsive design on mobile/tablet
- [ ] Verify gallery lightbox works
- [ ] Test form validation
- [ ] Run Lighthouse audit
- [ ] Verify SEO metadata in page source
- [ ] Test social media previews
- [ ] Check browser console for errors

## 📞 Support

For issues or questions:
- Email: info@laptian.com
- Phone: +91 98765 43210

## 📄 License

© 2025 Laptian. All rights reserved.

---

**Built with ❤️ using Next.js 15, TypeScript, and Vanilla CSS**
