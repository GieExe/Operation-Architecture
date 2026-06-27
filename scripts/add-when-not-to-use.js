#!/usr/bin/env node
const fs = require('fs');

const whenNotToUse = {
  'react-native': {
    title: "When Not To Use React Native",
    content: "<p><strong>Don't use React Native when:</strong> You need heavy GPU computation (3D, video, AR) — native is faster. App is UI-simple (3-5 screens) — native is faster to ship. Need deep OS integration (widgets, custom notifications). Team has zero React/JS experience. Must run on very old Android devices — RN has higher baseline memory.</p>"
  },
  'flutter': {
    title: "When Not To Use Flutter",
    content: "<p><strong>Don't use Flutter when:</strong> Need deep iOS/Android platform integration (widgets, extensions, health APIs) — native required. Team is small targeting one platform — native is simpler. Need mature third-party package ecosystem for niche features. App requires complex platform-specific UI.</p>"
  },
  'swiftui': {
    title: "When Not To Use SwiftUI",
    content: "<p><strong>Don't use SwiftUI when:</strong> Must support iOS 12 or earlier — SwiftUI requires iOS 13+. Need complex custom rendering (games, video editors) — UIKit is more predictable. Need deep UIKit customization. App requires backward compatibility with Objective-C codebases.</p>"
  },
  'android-compose': {
    title: "When Not To Use Compose",
    content: "<p><strong>Don't use Compose when:</strong> Must support Android 5 (API 21) — Compose requires API 21+ but older devices may struggle. App is very simple — XML views are lighter. Large existing View-based codebase that would need full rewrite. Need specific View components not yet ported to Compose.</p>"
  },
  'ionic': {
    title: "When Not To Use Ionic",
    content: "<p><strong>Don't use Ionic when:</strong> Need native performance (gaming, heavy animations, 3D) — Ionic runs in WebView. App requires complex platform-specific features (NFC, Bluetooth, AR). Need offline-first with heavy data processing. App must feel truly native in complex interactions.</p>"
  },
  'nextjs': {
    title: "When Not To Use Next.js",
    content: "<p><strong>Don't use Next.js when:</strong> Building a simple static site — Astro is lighter. App is purely client-side with no SEO — Vite + React is simpler. Need maximum routing flexibility without conventions. Team is small and doesn't need SSR/SSG complexity.</p>"
  },
  'reactjs': {
    title: "When Not To Use React",
    content: "<p><strong>Don't use React when:</strong> Simple page with minimal interactivity — vanilla JS or Alpine.js is lighter. Need strict conventions without choices — Angular has more opinions. Need SSR without extra setup. Need two-way binding out of the box — Vue is more natural.</p>"
  },
  'angular': {
    title: "When Not To Use Angular",
    content: "<p><strong>Don't use Angular when:</strong> Building a small app — Angular's ceremony (modules, services, decorators) is overkill. Team is new to TypeScript — React/Vue has lower barrier. Need maximum flexibility in structure. App is a simple dashboard with minimal routing.</p>"
  },
  'vue': {
    title: "When Not To Use Vue",
    content: "<p><strong>Don't use Vue when:</strong> Large enterprise app needing strict architecture — Angular has more built-in patterns. Team knows React and doesn't want to switch. Need the largest ecosystem of third-party libraries. App requires complex state management with strict patterns.</p>"
  },
  'svelte': {
    title: "When Not To Use Svelte",
    content: "<p><strong>Don't use Svelte when:</strong> Need large ecosystem of third-party components — React/Vue have more. Need enterprise-grade tooling and patterns. Need SSR with complex routing — Next.js/Remix is more mature. App requires strict TypeScript patterns.</p>"
  },
  'solidjs': {
    title: "When Not To Use SolidJS",
    content: "<p><strong>Don't use SolidJS when:</strong> Need large ecosystem — React/Vue have more packages. Need enterprise patterns — Angular has more built-in. Need SSR with complex data fetching — Next.js/Remix more mature. Large team with varying skill levels — React/Angular have larger hiring pool.</p>"
  },
  'remix': {
    title: "When Not To Use Remix",
    content: "<p><strong>Don't use Remix when:</strong> Need purely client-side SPA — Remix is server-first by design. App has no SEO and is behind auth — plain React + Vite is simpler. Need to deploy to serverless without Remix's adapter. Team is new to SSR concepts.</p>"
  },
  'spring-boot': {
    title: "When Not To Use Spring Boot",
    content: "<p><strong>Don't use Spring Boot when:</strong> Simple REST API with minimal logic — Spring's ceremony is overkill. Need fast startup for serverless/FaaS — Spring's cold start is slow. Team is new to Java — Node.js/Python has lower barrier. Microservice needing minimal footprint.</p>"
  },
  'dotnet': {
    title: "When Not To Use .NET",
    content: "<p><strong>Don't use .NET when:</strong> Need to deploy to Linux without Docker — historically Windows-centric. Team is new to C# — Node.js/Python has lower barrier. Need maximum performance with minimal memory — Go or Rust is more efficient. Simple API with no complex domain.</p>"
  },
  'express': {
    title: "When Not To Use Express",
    content: "<p><strong>Don't use Express when:</strong> Need built-in TypeScript support — Fastify is faster and has better TS. Need high performance with strict schema validation — Fastify's JSON schema is faster. Need structured error handling — NestJS provides more conventions.</p>"
  },
  'go-fiber': {
    title: "When Not To Use Go/Fiber",
    content: "<p><strong>Don't use Go/Fiber when:</strong> Team is new to Go — Node.js/Python has lower barrier. Need rich web framework ecosystem — Node.js has more. Need complex ORM patterns — Prisma/TypeORM with Node.js is more mature. Rapid prototyping with minimal boilerplate.</p>"
  },
  'rails': {
    title: "When Not To Use Rails",
    content: "<p><strong>Don't use Rails when:</strong> Need high concurrency — Rails' threading is limited vs Go/Node.js. App is API-only with no views — MVC overhead unnecessary. Need to scale horizontally — Rails' stateful nature complicates scaling. Need strict TypeScript patterns.</p>"
  },
  'django': {
    title: "When Not To Use Django",
    content: "<p><strong>Don't use Django when:</strong> Need high concurrency and real-time features — Django's synchronous nature limits WebSocket. App is purely API-based — admin is overkill. Need maximum performance — FastAPI or Go is faster. Complex frontend interactions.</p>"
  },
  'laravel': {
    title: "When Not To Use Laravel",
    content: "<p><strong>Don't use Laravel when:</strong> Need high concurrency and real-time — Laravel's synchronous nature limits WebSocket. App is API-only — MVC overhead unnecessary. Need maximum performance — Go/Fiber or Node.js is faster. Complex frontend interactions.</p>"
  },
  'dotnet-wpf': {
    title: "When Not To Use WPF",
    content: "<p><strong>Don't use WPF when:</strong> Need cross-platform support — WPF is Windows-only. App is simple — WinForms is faster to build. Need modern UI with web responsiveness — Electron or Blazor Hybrid is better. Team is new to .NET — WinForms has lower barrier.</p>"
  },
  'dotnet-maui': {
    title: "When Not To Use MAUI",
    content: "<p><strong>Don't use MAUI when:</strong> Need to support very old devices — MAUI requires newer OS. Need heavy platform-specific features — native is more reliable. Team is new to .NET — Flutter has more resources. Need maximum performance with complex animations.</p>"
  },
  'electron': {
    title: "When Not To Use Electron",
    content: "<p><strong>Don't use Electron when:</strong> Need minimal memory footprint — Electron bundles Chromium. App is simple with minimal UI — native is lighter. Need maximum performance for CPU-intensive tasks. App must run on low-end hardware — Electron's memory requirements are prohibitive.</p>"
  }
};

let c = fs.readFileSync('src/data/frameworks.ts', 'utf8');

Object.keys(whenNotToUse).forEach(id => {
  if (id === 'nestjs') return; // Already done
  
  const fw = whenNotToUse[id];
  
  // Find the last "tier": "all" before the next framework
  const idPattern = `"id": "${id}"`;
  const idIdx = c.indexOf(idPattern);
  if (idIdx === -1) {
    console.log(`Not found: ${id}`);
    return;
  }
  
  // Find next framework id
  const nextIds = c.matchAll(/"id":\s*"([^"]+)"/g);
  let nextIdx = c.length;
  for (const m of nextIds) {
    if (m.index > idIdx && m[1] !== id) {
      nextIdx = m.index;
      break;
    }
  }
  
  // Find the "tier": "all" block (Complementary Stack) in this framework
  const tierAllPattern = /"tier":\s*"all"\s*\}\s*\]/g;
  tierAllPattern.lastIndex = idIdx;
  const tierMatch = tierAllPattern.exec(c);
  
  if (!tierMatch || tierMatch.index >= nextIdx) {
    console.log(`No tier:all found for ${id}`);
    return;
  }
  
  // Insert the When Not To Use block before the Complementary Stack
  // Find the position of the last block with tier: "serious" before "tier": "all"
  const insertBefore = `"title": "Complementary Stack"`;
  const compIdx = c.indexOf(insertBefore, idIdx);
  
  if (compIdx === -1 || compIdx >= nextIdx) {
    console.log(`No Complementary Stack for ${id}`);
    return;
  }
  
  const block = `{
        "title": "${fw.title}",
        "svgIcon": "<svg viewBox=\\"0 0 24 24\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\"><path d=\\"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z\\"/></svg>",
        "contentHtml": "${fw.content}",
        "fullWidth": false,
        "tier": "serious"
      },
      `;
  
  c = c.slice(0, compIdx) + block + c.slice(compIdx);
  console.log(`Added When Not To Use to ${id}`);
});

fs.writeFileSync('src/data/frameworks.ts', c);
console.log('Done!');
