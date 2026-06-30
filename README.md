# NICT Chandigarh — Computer Education Institute Website

A modern, premium, responsive, SEO-optimized website built with **React + Vite**, **Tailwind CSS**, and **Framer Motion**.

## ✨ Features

- Fully responsive, mobile-first design
- Dark / light mode with persisted preference
- Glassmorphism cards, gradient buttons, premium shadows
- Animated hero with typewriter effect and floating tech icons
- Scroll-reveal animations (fade-up, slide-left/right, zoom-in)
- Animated counters for stats and achievements
- Filterable courses grid (15 courses across 6 categories)
- Testimonials carousel, image gallery with lightbox
- Validated contact form (client-side validation, no backend required out of the box)
- Sticky navbar, scroll progress bar, back-to-top button, floating WhatsApp button
- SEO meta tags, Open Graph tags, and JSON-LD structured data
- Page-load animation and route-level SEO updates via a lightweight `Seo` component

## 🛠 Tech Stack

- React 18 + Vite 5
- Tailwind CSS 3 (custom theme: primary `#0057D9`, secondary `#FF9800`, accent `#00B4D8`)
- Framer Motion (animations)
- React Router v6 (routing)
- React Icons (Font Awesome set)
- Poppins (display) + Inter (body) via Google Fonts

## 📁 Folder Structure

```
src/
  components/
    layout/      Navbar, Footer
    sections/    Hero, About, Courses, WhyChooseUs, Placements, Testimonials,
                 Gallery, Faculty, FAQ, Contact, Achievements, CourseCard
    ui/          Reveal, SectionHeading, StatChip, Loader, ScrollProgressBar,
                 BackToTop, WhatsAppButton, Seo, ScrollToTop
  pages/         Home, Courses, AboutPage, FacultyPage, GalleryPage,
                 ContactPage, PrivacyPolicy, NotFound
  data/          courses.js, siteData.js (faculty, testimonials, FAQs, contact info)
  hooks/         useDarkMode, useScrollProgress, useCountUp
  layouts/       MainLayout.jsx
  App.jsx
  main.jsx
```

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Visit `http://localhost:5173`.

### Build for production

```bash
npm run build
npm run preview
```

The production build is output to `dist/`.

## ✏️ Customizing Content

- **Courses**: edit `src/data/courses.js`
- **Faculty, testimonials, FAQs, contact info, stats**: edit `src/data/siteData.js`
- **Colors / fonts**: edit `tailwind.config.js`
- **Google Map embed**: replace `mapEmbed` in `src/data/siteData.js` with your actual embed URL from Google Maps (Share → Embed a map)
- **Contact form backend**: the form currently validates client-side only and shows a success state. To actually send submissions, wire `handleSubmit` in `src/components/sections/Contact.jsx` to an API endpoint, Formspree, EmailJS, or similar service.
- **Real photos**: the gallery and OG image currently use styled gradient placeholders — swap in real photos from the institute by replacing the `gradient` divs in `src/components/sections/Gallery.jsx` with `<img>` tags, and add `/public/og-image.jpg` for social sharing previews.

## 📌 Notes

- `npm install` requires internet access, which wasn't available in the sandbox this was built in — the code has been syntax-checked and import-resolution-checked file by file, but hasn't been run through a live `vite build`. Run `npm install && npm run build` locally to do a final build verification.
- Update the canonical URLs in each page's `<Seo />` call once the site has a real production domain.
