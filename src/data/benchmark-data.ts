export type PerfTier = "S" | "A" | "B" | "C";

export interface FrameworkBenchmark {
  id: string;
  name: string;
  category: string;
  perfTier: PerfTier;
  perfNotes: string;
  coldStartMs: number | null;
  bundleKb: number | null;
  memoryMb: number | null;
  npmDownloads: number | null;
  soUsagePct: number | null;
  sojsRetention: number | null;
  stars: number | null;
}

export const benchmarkData: FrameworkBenchmark[] = [
  // ── MOBILE ──
  { id: "react-native", name: "React Native", category: "mobile", perfTier: "B", perfNotes: "Near-native via Fabric/TurboModules. JS bridge eliminated in New Architecture. ~60fps for most UIs.", coldStartMs: 800, bundleKb: 420, memoryMb: 85, npmDownloads: null, soUsagePct: 7.4, sojsRetention: 67, stars: 120000 },
  { id: "flutter", name: "Flutter", category: "mobile", perfTier: "A", perfNotes: "Compiled to native ARM. Skia/Impeller rendering. Consistent 60fps. Heavier binary but smoother animations.", coldStartMs: 600, bundleKb: 4800, memoryMb: 95, npmDownloads: null, soUsagePct: 5.9, sojsRetention: null, stars: 168000 },
  { id: "swift", name: "Swift/SwiftUI", category: "mobile", perfTier: "S", perfNotes: "Native Apple frameworks. Zero overhead. Metal-accelerated rendering. Best-in-class performance on iOS.", coldStartMs: 300, bundleKb: 2000, memoryMb: 60, npmDownloads: null, soUsagePct: 5.4, sojsRetention: null, stars: null },
  { id: "android", name: "Android/Compose", category: "mobile", perfTier: "A", perfNotes: "Compiled to native via ART. Compose skips XML inflation. JIT/AOT hybrid compilation.", coldStartMs: 500, bundleKb: 3500, memoryMb: 80, npmDownloads: null, soUsagePct: 10.8, sojsRetention: null, stars: null },
  { id: "ionic", name: "Ionic", category: "mobile", perfTier: "C", perfNotes: "WebView-based. Performance ceiling of the WebView renderer. Capacitor bridges add latency.", coldStartMs: 1200, bundleKb: 600, memoryMb: 120, npmDownloads: null, soUsagePct: null, sojsRetention: 44, stars: null },
  { id: "dotnet-maui", name: ".NET MAUI", category: "mobile", perfTier: "B", perfNotes: "Native controls. Blazor Hybrid uses in-process WebView. Native path is fast; Blazor path is slower.", coldStartMs: 900, bundleKb: 5000, memoryMb: 90, npmDownloads: null, soUsagePct: 7.6, sojsRetention: null, stars: null },

  // ── FRONTEND ──
  { id: "nextjs", name: "Next.js", category: "frontend", perfTier: "B", perfNotes: "RSC reduces client JS. Turbopack improves dev builds. Average client bundle ~85KB gzipped.", coldStartMs: 2500, bundleKb: 85, memoryMb: null, npmDownloads: 53700000, soUsagePct: 21.5, sojsRetention: 68, stars: 132000 },
  { id: "react", name: "React", category: "frontend", perfTier: "B", perfNotes: "Virtual DOM reconciliation. ~40KB gzipped (react + react-dom). React 19 compiler reduces manual memo.", coldStartMs: 800, bundleKb: 42, memoryMb: null, npmDownloads: 163900000, soUsagePct: 46.9, sojsRetention: 75, stars: 234000 },
  { id: "angular", name: "Angular", category: "frontend", perfTier: "C", perfNotes: "Heavier runtime. Zone.js adds overhead. Signals improve granularity but bundle is larger. ~65KB gzipped min.", coldStartMs: 3000, bundleKb: 65, memoryMb: null, npmDownloads: 5900000, soUsagePct: 19.8, sojsRetention: 54, stars: 98000 },
  { id: "vue", name: "Vue/Nuxt", category: "frontend", perfTier: "A", perfNotes: "Proxy-based reactivity is efficient. ~23KB gzipped. Vapor mode (experimental) eliminates Virtual DOM.", coldStartMs: 1200, bundleKb: 23, memoryMb: null, npmDownloads: 14500000, soUsagePct: 18.4, sojsRetention: 87, stars: 256000 },
  { id: "svelte", name: "SvelteKit", category: "frontend", perfTier: "S", perfNotes: "Compiles away the framework. No virtual DOM. Runes provide surgical reactivity. ~2KB overhead. Smallest bundle.", coldStartMs: 800, bundleKb: 2, memoryMb: null, npmDownloads: 5400000, soUsagePct: 6.9, sojsRetention: 88, stars: 82000 },
  { id: "solidjs", name: "SolidJS", category: "frontend", perfTier: "S", perfNotes: "No Virtual DOM. Surgical DOM updates via signals. ~7KB gzipped. Fastest reactive UI library in benchmarks.", coldStartMs: 600, bundleKb: 7, memoryMb: null, npmDownloads: 3500000, soUsagePct: 3.9, sojsRetention: null, stars: 34000 },
  { id: "remix", name: "Remix", category: "frontend", perfTier: "B", perfNotes: "Server-driven with progressive enhancement. Smaller client bundles than SPAs. Streaming SSR reduces TTFB.", coldStartMs: 1500, bundleKb: 50, memoryMb: null, npmDownloads: 24000, soUsagePct: null, sojsRetention: 80, stars: 31000 },

  // ── BACKEND ──
  { id: "nestjs", name: "NestJS", category: "backend", perfTier: "C", perfNotes: "Decorator overhead. Express/Fastify underneath. Slower than raw Express but still ~15K req/s on modest hardware.", coldStartMs: 1800, bundleKb: null, memoryMb: 95, npmDownloads: 13300000, soUsagePct: 7.4, sojsRetention: null, stars: 71000 },
  { id: "spring-boot", name: "Spring Boot", category: "backend", perfTier: "B", perfNotes: "JVM startup is slow (~2s) but throughput is high after warmup. GraalVM native images reduce startup to ~50ms.", coldStartMs: 2000, bundleKb: null, memoryMb: 180, npmDownloads: null, soUsagePct: 15.6, sojsRetention: null, stars: 78000 },
  { id: "dotnet-core", name: ".NET Core", category: "backend", perfTier: "A", perfNotes: "Top-tier throughput in TechEmpower. ~6M req/s plaintext. Native AOT compilation available. Low latency.", coldStartMs: 500, bundleKb: null, memoryMb: 70, npmDownloads: null, soUsagePct: 21.3, sojsRetention: null, stars: 37000 },
  { id: "express", name: "Express/Fastify", category: "backend", perfTier: "B", perfNotes: "Express: ~12K req/s. Fastify: ~45K req/s (3-4x Express). Fastify is near Go speeds for Node.", coldStartMs: 200, bundleKb: null, memoryMb: 50, npmDownloads: 130000000, soUsagePct: 20.3, sojsRetention: null, stars: null },
  { id: "go-fiber", name: "Go/Fiber", category: "backend", perfTier: "S", perfNotes: "Fiber is fastest Go HTTP framework. ~500K+ req/s on modest hardware. Near-zero GC pauses. Tiny memory footprint.", coldStartMs: 5, bundleKb: null, memoryMb: 15, npmDownloads: null, soUsagePct: 16.4, sojsRetention: null, stars: 35000 },
  { id: "rails", name: "Rails", category: "backend", perfTier: "C", perfNotes: "Ruby's GIL limits concurrency. ~1-3K req/s. Puma + multiple workers for scale. JIT (YJIT) improving.", coldStartMs: 1500, bundleKb: null, memoryMb: 120, npmDownloads: null, soUsagePct: 6.2, sojsRetention: null, stars: 57000 },
  { id: "django", name: "Django", category: "backend", perfTier: "C", perfNotes: "Python's GIL limits concurrency. ~2-5K req/s with gunicorn. Async views improving. ORM overhead is significant.", coldStartMs: 800, bundleKb: null, memoryMb: 80, npmDownloads: null, soUsagePct: 11.7, sojsRetention: null, stars: 84000 },
  { id: "laravel", name: "Laravel", category: "backend", perfTier: "C", perfNotes: "PHP's request-per-process model. ~1-3K req/s. Octane (Swoole/RoadRunner) boosts to ~20K req/s.", coldStartMs: 300, bundleKb: null, memoryMb: 60, npmDownloads: null, soUsagePct: 9.3, sojsRetention: null, stars: 81000 },

  // ── DESKTOP ──
  { id: "dotnet-wpf", name: ".NET WPF", category: "desktop", perfTier: "A", perfNotes: "Native Windows rendering. DirectX-accelerated. Very fast for data-heavy desktop apps.", coldStartMs: 400, bundleKb: null, memoryMb: 50, npmDownloads: null, soUsagePct: 7.6, sojsRetention: null, stars: null },
  { id: "electron", name: "Electron", category: "desktop", perfTier: "C", perfNotes: "Full Chromium instance per app. ~150MB RAM minimum. Slow cold start. Heavy but most flexible.", coldStartMs: 3000, bundleKb: 75000, memoryMb: 150, npmDownloads: null, soUsagePct: null, sojsRetention: 62, stars: 116000 },
];

export function getBenchmark(id: string): FrameworkBenchmark | undefined {
  return benchmarkData.find((b) => b.id === id);
}

export function getBenchmarksByCategory(cat: string): FrameworkBenchmark[] {
  return benchmarkData.filter((b) => b.category === cat);
}

export function getTopPerformers(limit = 5): FrameworkBenchmark[] {
  const order: PerfTier[] = ["S", "A", "B", "C"];
  return [...benchmarkData]
    .sort((a, b) => order.indexOf(a.perfTier) - order.indexOf(b.perfTier))
    .slice(0, limit);
}
