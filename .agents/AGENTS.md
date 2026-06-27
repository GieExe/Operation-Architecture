# Project Rules & Agent Guidelines

This document outlines the coding standards, styling conventions, and tool execution guidelines required for development in this repository.

## ── WEB & FULLSTACK ARCHITECTURE ──

### 1. Next.js 16 & React 19 (RSC-First)
* **Server-First Layered Architecture**: All data-fetching, file reads, and page builds must happen in React Server Components (RSC) or Server Actions.
* **Leaf-Only Interactivity**: Keep components as Server Components by default. Restrict `"use client"` to terminal leaf components requiring state hooks (`useState`, `useEffect`), context, or browser APIs.
* **SEO Best Practices**: Ensure each page contains a single logical `<h1>` element, semantic HTML5 tags, and correct meta tags.

### 2. Styling (Tailwind CSS v4 & Custom CSS)
* **Tailwind v4 Integration**: Use utility classes adhering to Tailwind CSS v4 standards. Avoid inline styles unless dynamic values are computed.
* **Component Aesthetics**: Ensure UI modifications feel premium, highly interactive, and use curated color schemes defined in standard classes or CSS variables.

### 3. Data & Blueprint Standards
* **Type Integrity**: All data additions to `src/data/frameworks.ts` must fully satisfy the `Framework` and `FrameworkBlock` interfaces.
* **Directory Blueprints**: Maintain the indentation-aligned syntax for file trees. Ensure comments use `#` formatting and are properly aligned via `textTreeToHtml` or matching CSS layout rules.

---

## ── AGENT WORKFLOW & TOOL EFFICIENCY ──

### 1. File Modification Guidelines
* **Targeted Edits**: Use exact, precise replacement tools (`replace_file_content` or `multi_replace_file_content`) to change only what is necessary. Never rewrite entire files unless creating them.
* **Preserve Code Integrity**: Retain all existing imports, type definitions, and comments unless explicitly asked to modify them.

### 2. Validation & Verification
* **Type and Build Check**: Always run `npm run build` to verify type safety and static site generation validity after modifying database or routing components.
* **Command Restraint**: Do not run background tasks, long sleep commands, or loop checks. Verify asynchronously or run synchronous short checks.
