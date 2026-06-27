<div align="center">
  <br />
  <h1>🏛️ Architectura</h1>
  <p><strong>The Definitive Guide to Framework Architecture Patterns — 2026 Edition</strong></p>
  <p>
    <img src="https://img.shields.io/badge/Next.js-16.2.9-000?logo=next.js&labelColor=111" alt="Next.js 16" />
    <img src="https://img.shields.io/badge/React-19.2.4-58c4dc?logo=react&labelColor=111" alt="React 19" />
    <img src="https://img.shields.io/badge/Tailwind-4-06B6D4?logo=tailwindcss&labelColor=111" alt="Tailwind CSS 4" />
    <img src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&labelColor=111" alt="TypeScript 5" />
    <img src="https://img.shields.io/badge/23_Frameworks_Analyzed-e8a838?labelColor=111" alt="23 Frameworks" />
  </p>
  <br />
</div>

---

**Architectura** is a production-grade master reference that catalogs the golden-standard architecture patterns, data flow mechanics, directory blueprints, and complementary tech stacks for **23 prominent programming frameworks** across **4 categories** — mobile, frontend, backend, and desktop.

Every framework includes **two architecture tiers**:

- 🚀 **Small Project Quickstart** — Minimal, pragmatic structure for MVPs, prototypes, and small teams
- 🏗️ **Serious Project Blueprint** — The "golden standard" architecture for long-lived, large-scale applications

---

## 📋 Frameworks Analyzed

### 📱 Mobile (6)
| Framework | Architecture Badge |
|---|---|
| **React Native** | Feature-Based MVVM + UDF |
| **Flutter** | BLoC + Clean Architecture |
| **Swift / SwiftUI** | MVVM + Coordinator |
| **Kotlin / Jetpack Compose** | MVVM + Clean Architecture + UDF |
| **Ionic** | MVVM + Web Component Abstraction |
| **.NET MAUI** | Blazor Hybrid / Clean MVVM |

### 🎨 Frontend (7)
| Framework | Architecture Badge |
|---|---|
| **Next.js (React)** | RSC + Server-First + App Router |
| **React JS (SPA)** | Feature-Based + UDF + Flux |
| **Angular** | Module-Based + MVVM + DI |
| **Vue.js / Nuxt 3** | Composition API + Auto-Import + Layers |
| **Svelte / SvelteKit** | Runes + SSR-First + File-Based |
| **SolidJS** | Signals + Fine-Grained Reactivity |
| **Remix** | Nested Routes + Server-First + Progressive Enhancement |

### ⚙️ Backend (8)
| Framework | Architecture Badge |
|---|---|
| **NestJS** | Modular + CQRS + Hexagonal |
| **Spring Boot** | Layered + Hexagonal + DI |
| **.NET Core (ASP.NET)** | Clean / Vertical Slice + Mediator |
| **Express / Fastify** | Modular Monolith + Service Layer |
| **Go / Fiber** | Handler → Service → Repository |
| **Ruby on Rails** | MVC + Service Objects + Concerns |
| **Django** | MVT + App-Based + DRY |
| **Laravel** | MVC + Service Layer + Action Pattern |

### 🖥️ Desktop (2)
| Framework | Architecture Badge |
|---|---|
| **.NET WPF** | MVVM + DI + Event-Based |
| **Electron** | Main/Renderer IPC + MVVM |

---

## ✨ Features

- **🔍 Search** — Filter frameworks by name with instant results via server-side query params
- **🏷️ Category Filters** — Toggle between All, Mobile, Frontend, Backend, and Desktop views
- **🔄 Architecture Tiers** — Each framework card toggles between small-project and serious-project blueprints
- **📐 Golden Standard Architecture** — Detailed breakdown of each framework's recommended architecture pattern
- **📊 Data & State Flow** — How data moves through the system (unidirectional, streams, signals, etc.)
- **📁 Directory Blueprints** — Production-grade folder structures for serious projects
- **⚠️ When Not To Use** — Honest tradeoff assessments for each framework
- **🧩 Complementary Stack** — Battle-tested library recommendations per concern
- **📊 Comparison Matrix** — Quick-reference table comparing architecture, reactivity model, DI mechanism, and testing paradigm across all frameworks
- **💡 Key Insights** — 2026 architectural trends: Server-First, Signals over Virtual DOM, Hexagonal Architecture, Feature-First organization

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to explore the reference.

### Other Commands

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

## 🏗️ Architecture

Built with **Next.js 16** (App Router) and **React 19**, the application follows a straightforward architecture:

```
src/
├── app/                      # Next.js App Router pages & layout
│   ├── globals.css           # Global styles (dark theme, CSS variables)
│   ├── layout.tsx            # Root layout with custom fonts
│   └── page.tsx              # Main page (server-rendered with search/category filtering)
├── components/               # React components
│   ├── ClientScript.tsx      # Client-side interactivity
│   ├── ComparisonMatrix.tsx  # Full framework comparison table
│   ├── FilterBar.tsx         # Category filter buttons
│   ├── FrameworkCard.tsx     # Expandable framework detail card
│   ├── Header.tsx            # Site header with logo & search
│   ├── SearchInput.tsx       # Search input (client component)
│   └── Sidebar.tsx           # Navigation sidebar
└── data/
    └── frameworks.ts         # All framework data (23 entries)
```

Key design decisions:

- **Server Components** — Page rendering, filtering, and data loading happen on the server via Next.js App Router
- **CSS Variables** — A cohesive dark theme with gold accent (#e8a838) using custom CSS custom properties
- **Zero Runtime Dependencies** — No UI libraries, state management, or CSS frameworks beyond Tailwind 4
- **Custom Fonts** — Instrument Serif (display), Space Grotesk (body), DM Mono (monospace) for a refined typographic hierarchy

---

## 🎨 Design System

The UI features a dark-themed, noise-textured design with:

| Token | Value |
|---|---|
| Background | `#080808` with subtle fractal noise overlay |
| Surface | `#111111` / `#171717` |
| Accent | `#e8a838` (gold) with glow effects |
| Text | `#f0ece4` primary, `#a09a90` secondary |
| Typography | Instrument Serif (headings), Space Grotesk (body), DM Mono (code) |

Category colors: Mobile (rose), Frontend (cyan), Backend (blue), Desktop (purple)

---

## 🧩 Tech Stack

| Concern | Choice |
|---|---|
| **Framework** | [Next.js 16](https://nextjs.org) (App Router) |
| **UI Library** | [React 19](https://react.dev) |
| **Styling** | [Tailwind CSS 4](https://tailwindcss.com) + CSS custom properties |
| **Language** | [TypeScript 5](https://www.typescriptlang.org) |
| **Fonts** | Space Grotesk, Instrument Serif, DM Mono (via next/font) |
| **Linting** | ESLint 9 with `eslint-config-next` |

---

## 📄 License

This project is private. All rights reserved.
