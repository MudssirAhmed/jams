# Zersey — Landing Page

> Dark futuristic AI product landing page built with **React + Vite + Tailwind CSS**

---

## Quick Start

```bash
npm install
npm run dev
```

Visit `http://localhost:5173` in your browser.

---

## Folder & File Roadmap

```
jams/
├─ public/
│  └─ images/                     # Image assets (replace placeholders)
│     ├─ hero-z.png
│     ├─ problem-network.png
│     ├─ paradigm-orbit.png
│     ├─ arth-dashboard.png
│     └─ about-gateway.png
│
├─ src/
│  │
│  ├─ data/                        # All section copy / content data
│  │  ├─ navData.js                # Navigation links
│  │  ├─ heroData.js               # Hero / Our Vision section
│  │  ├─ problemData.js            # The Problem section
│  │  ├─ paradigmData.js           # The New Paradigm section
│  │  ├─ arthData.js               # Introducing Arth OS section
│  │  ├─ ecosystemData.js          # Our Ecosystem section
│  │  ├─ technologyData.js         # Our Technology section
│  │  ├─ aboutData.js              # About Zersey section
│  │  ├─ waitlistData.js           # Waitlist CTA section
│  │  └─ footerData.js             # Footer links & social
│  │
│  ├─ components/
│  │  ├─ common/                   # Reusable UI primitives
│  │  │  ├─ SectionLabel.jsx       # Section number + eyebrow label
│  │  │  ├─ PrimaryButton.jsx      # White filled button
│  │  │  ├─ SecondaryButton.jsx    # Ghost/outlined button
│  │  │  ├─ SectionContainer.jsx   # Consistent section wrapper
│  │  │  └─ StatCard.jsx           # Stat display card
│  │  │
│  │  ├─ layout/                   # App-wide layout components
│  │  │  ├─ Navbar.jsx             # Sticky top navigation
│  │  │  └─ Footer.jsx             # Footer with links & social
│  │  │
│  │  └─ landing/                  # One file per landing section
│  │     ├─ HeroSection.jsx        # 01 — Our Vision
│  │     ├─ ProblemSection.jsx     # 02 — The Problem
│  │     ├─ ParadigmSection.jsx    # 03 — The New Paradigm
│  │     ├─ ArthSection.jsx        # 04 — Introducing Arth OS
│  │     ├─ EcosystemSection.jsx   # 05 — Our Ecosystem
│  │     ├─ TechnologySection.jsx  # 06 — Our Technology
│  │     ├─ AboutSection.jsx       # 07 — About Zersey
│  │     └─ WaitlistSection.jsx    # 08 — Waitlist CTA
│  │
│  ├─ pages/
│  │  └─ landing/
│  │     └─ LandingPage.jsx        # Assembles all sections
│  │
│  ├─ App.jsx                      # Root component → LandingPage
│  ├─ main.jsx                     # React entry point
│  └─ index.css                    # Tailwind directives + global styles
│
├─ tailwind.config.js              # Tailwind configuration
├─ postcss.config.js               # PostCSS configuration
├─ vite.config.js                  # Vite configuration
├─ package.json
└─ index.html
```

---

## Sections

| # | Section | Component | Data File |
|---|---------|-----------|-----------|
| 01 | Our Vision (Hero) | `HeroSection.jsx` | `heroData.js` |
| 02 | The Problem | `ProblemSection.jsx` | `problemData.js` |
| 03 | The New Paradigm | `ParadigmSection.jsx` | `paradigmData.js` |
| 04 | Introducing Arth OS | `ArthSection.jsx` | `arthData.js` |
| 05 | Our Ecosystem | `EcosystemSection.jsx` | `ecosystemData.js` |
| 06 | Our Technology | `TechnologySection.jsx` | `technologyData.js` |
| 07 | About Zersey | `AboutSection.jsx` | `aboutData.js` |
| 08 | Waitlist CTA | `WaitlistSection.jsx` | `waitlistData.js` |
| — | Navbar | `Navbar.jsx` | `navData.js` |
| — | Footer | `Footer.jsx` | `footerData.js` |

---

## Design Tokens

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#050816` | Page background |
| Panel | `#0A0F1F` | Card/panel backgrounds |
| Border | `rgba(255,255,255,0.1)` | `border-white/10` |
| Primary Accent | `#8B5CF6` (violet-500) | Highlights, CTAs |
| Text Muted | `rgba(255,255,255,0.6)` | `text-white/60` |
| Radius | `xl` / `2xl` / `3xl` | Rounded corners |

---

## Tech Stack

- **React 19** + **Vite 6**
- **Tailwind CSS 3**
- **PostCSS** + **Autoprefixer**

---

## Adding Real Image Assets

Replace placeholder gradients by dropping images into `public/images/`:

```
public/images/hero-z.png
public/images/problem-network.png
public/images/paradigm-orbit.png
public/images/arth-dashboard.png
public/images/about-gateway.png
```

Each section component already references these paths via its data file.

---

## Adding New Sections

1. Add data to `src/data/yourSectionData.js`
2. Create `src/components/landing/YourSection.jsx`
3. Import and add to `src/pages/landing/LandingPage.jsx`
