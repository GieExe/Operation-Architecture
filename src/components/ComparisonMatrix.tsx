import { architectureEfficiency } from "../data/ai-metrics";

const CAT_COLORS: Record<string, string> = {
  mobile: "var(--rose)",
  frontend: "var(--blue)",
  backend: "var(--green)",
  desktop: "var(--purple)",
};

function FmtNpm(n: number | undefined): string {
  if (n == null) return "\u2014";
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M/w`;
  return `${(n / 1000).toFixed(0)}K/w`;
}

export default function ComparisonMatrix() {
  return (
    <section className="matrix-section" id="matrix">
      <h2>Quick-Reference Comparison Matrix</h2>
      <p className="section-desc">
        Every framework&apos;s architecture, reactivity model, DI mechanism, testing paradigm, and real-world metrics at a glance. Data from Stack Overflow 2025, State of JS 2024, and npm API (Aug 2026).
      </p>
      <div className="matrix-wrap">
        <table className="matrix">
          <thead>
            <tr>
              <th>Framework</th>
              <th>Architecture</th>
              <th>State / Reactivity Model</th>
              <th>DI Mechanism</th>
              <th>Testing Paradigm</th>
              <th>AI Friction</th>
              <th>Market</th>
              <th>npm</th>
              <th>Retention</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span className="cat-indicator" style={{ background: CAT_COLORS.mobile }} />React Native</td>
              <td>Feature-MVVM + UDF</td>
              <td>Unidirectional (hooks + Zustand)</td>
              <td>Manual (module imports)</td>
              <td>Unit (hooks) + E2E (Detox)</td>
              <td>{architectureEfficiency.find((m) => m.id === "react-native")?.aiFrictionAfter ?? "-"}</td>
              <td>-</td>
              <td>{FmtNpm(architectureEfficiency.find((m) => m.id === "react-native")?.npmDownloads)}</td>
              <td>-</td>
            </tr>
            <tr>
              <td><span className="cat-indicator" style={{ background: CAT_COLORS.mobile }} />Flutter</td>
              <td>BLoC + Clean Arch</td>
              <td>Event\u2192State streams (BLoC)</td>
              <td>get_it / Riverpod</td>
              <td>Unit (bloc_test) + Widget + E2E</td>
              <td>{architectureEfficiency.find((m) => m.id === "flutter")?.aiFrictionAfter}</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td><span className="cat-indicator" style={{ background: CAT_COLORS.mobile }} />Swift/SwiftUI</td>
              <td>MVVM + Coordinator</td>
              <td>@Observable / Combine</td>
              <td>Factory / Swinject</td>
              <td>XCTest + snapshot</td>
              <td>{architectureEfficiency.find((m) => m.id === "swift")?.aiFrictionAfter}</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td><span className="cat-indicator" style={{ background: CAT_COLORS.mobile }} />Android/Compose</td>
              <td>MVVM + UDF + Clean</td>
              <td>StateFlow + Coroutines</td>
              <td>Hilt (Dagger)</td>
              <td>JUnit + Compose UI Test</td>
              <td>{architectureEfficiency.find((m) => m.id === "android-compose")?.aiFrictionAfter}</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td><span className="cat-indicator" style={{ background: CAT_COLORS.mobile }} />Ionic</td>
              <td>MVVM + Web Abstraction</td>
              <td>Host framework model</td>
              <td>Host framework DI</td>
              <td>Host framework + Cypress</td>
              <td>{architectureEfficiency.find((m) => m.id === "ionic")?.aiFrictionAfter}</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td><span className="cat-indicator" style={{ background: CAT_COLORS.mobile }} />.NET MAUI</td>
              <td>Blazor Hybrid / Clean MVVM</td>
              <td>In-Process Webview UI + C# Interop</td>
              <td>Microsoft.Extensions.DependencyInjection</td>
              <td>xUnit + BUnit</td>
              <td>{architectureEfficiency.find((m) => m.id === "maui")?.aiFrictionAfter}</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td><span className="cat-indicator" style={{ background: CAT_COLORS.frontend }} />Next.js</td>
              <td>Server-First Layered</td>
              <td>RSC + React hooks (minimal)</td>
              <td>Module imports</td>
              <td>Vitest + Playwright</td>
              <td>{architectureEfficiency.find((m) => m.id === "nextjs")?.aiFrictionAfter}</td>
              <td>{architectureEfficiency.find((m) => m.id === "nextjs")?.soUsage}%</td>
              <td>{FmtNpm(architectureEfficiency.find((m) => m.id === "nextjs")?.npmDownloads)}</td>
              <td>{architectureEfficiency.find((m) => m.id === "nextjs")?.retention}%</td>
            </tr>
            <tr>
              <td><span className="cat-indicator" style={{ background: CAT_COLORS.frontend }} />React JS</td>
              <td>Vite SPA + Client Routing</td>
              <td>Client-side (hooks, Zustand)</td>
              <td>Context API / Modules</td>
              <td>Vitest + React Testing Library</td>
              <td>{architectureEfficiency.find((m) => m.id === "react")?.aiFrictionAfter}</td>
              <td>{architectureEfficiency.find((m) => m.id === "react")?.soUsage}%</td>
              <td>{FmtNpm(architectureEfficiency.find((m) => m.id === "react")?.npmDownloads)}</td>
              <td>{architectureEfficiency.find((m) => m.id === "react")?.retention}%</td>
            </tr>
            <tr>
              <td><span className="cat-indicator" style={{ background: CAT_COLORS.frontend }} />Angular</td>
              <td>Layered + Signals</td>
              <td>Signals (fine-grained)</td>
              <td>Built-in DI container</td>
              <td>Jest + Cypress</td>
              <td>{architectureEfficiency.find((m) => m.id === "angular")?.aiFrictionAfter}</td>
              <td>{architectureEfficiency.find((m) => m.id === "angular")?.soUsage}%</td>
              <td>{FmtNpm(architectureEfficiency.find((m) => m.id === "angular")?.npmDownloads)}</td>
              <td>{architectureEfficiency.find((m) => m.id === "angular")?.retention}%</td>
            </tr>
            <tr>
              <td><span className="cat-indicator" style={{ background: CAT_COLORS.frontend }} />Vue/Nuxt</td>
              <td>Composition MVVM</td>
              <td>Proxy reactivity (ref/reactive)</td>
              <td>Composable injection</td>
              <td>Vitest + Vue Test Utils</td>
              <td>{architectureEfficiency.find((m) => m.id === "vue")?.aiFrictionAfter}</td>
              <td>{architectureEfficiency.find((m) => m.id === "vue")?.soUsage}%</td>
              <td>{FmtNpm(architectureEfficiency.find((m) => m.id === "vue")?.npmDownloads)}</td>
              <td>{architectureEfficiency.find((m) => m.id === "vue")?.retention}%</td>
            </tr>
            <tr>
              <td><span className="cat-indicator" style={{ background: CAT_COLORS.frontend }} />SvelteKit</td>
              <td>Compile-time MVVM</td>
              <td>Reactive assignments ($)</td>
              <td>Module exports</td>
              <td>Vitest + Playwright</td>
              <td>{architectureEfficiency.find((m) => m.id === "sveltekit")?.aiFrictionAfter}</td>
              <td>{architectureEfficiency.find((m) => m.id === "sveltekit")?.soUsage}%</td>
              <td>{FmtNpm(architectureEfficiency.find((m) => m.id === "sveltekit")?.npmDownloads)}</td>
              <td>{architectureEfficiency.find((m) => m.id === "sveltekit")?.retention}%</td>
            </tr>
            <tr>
              <td><span className="cat-indicator" style={{ background: CAT_COLORS.frontend }} />SolidJS</td>
              <td>Signal-Based MVVM</td>
              <td>Signals (surgical DOM)</td>
              <td>Context API</td>
              <td>Vitest + testing-library</td>
              <td>{architectureEfficiency.find((m) => m.id === "solidjs")?.aiFrictionAfter}</td>
              <td>-</td>
              <td>{FmtNpm(architectureEfficiency.find((m) => m.id === "solidjs")?.npmDownloads)}</td>
              <td>-</td>
            </tr>
            <tr>
              <td><span className="cat-indicator" style={{ background: CAT_COLORS.frontend }} />Remix</td>
              <td>Progressive Enhancement</td>
              <td>Server-driven loaders</td>
              <td>Module exports</td>
              <td>Vitest + Playwright</td>
              <td>{architectureEfficiency.find((m) => m.id === "remix")?.aiFrictionAfter}</td>
              <td>-</td>
              <td>-</td>
              <td>{architectureEfficiency.find((m) => m.id === "remix")?.retention}%</td>
            </tr>
            <tr>
              <td><span className="cat-indicator" style={{ background: CAT_COLORS.backend }} />NestJS</td>
              <td>Hexagonal + CQRS + DDD</td>
              <td>Event-driven + CQRS</td>
              <td>Built-in DI (decorators)</td>
              <td>Jest + @nestjs/testing + Supertest</td>
              <td>{architectureEfficiency.find((m) => m.id === "nestjs")?.aiFrictionAfter}</td>
              <td>{architectureEfficiency.find((m) => m.id === "nestjs")?.soUsage}%</td>
              <td>{FmtNpm(architectureEfficiency.find((m) => m.id === "nestjs")?.npmDownloads)}</td>
              <td>-</td>
            </tr>
            <tr>
              <td><span className="cat-indicator" style={{ background: CAT_COLORS.backend }} />Spring Boot</td>
              <td>Layered / Hexagonal</td>
              <td>N/A (server)</td>
              <td>Spring IoC</td>
              <td>JUnit + Testcontainers</td>
              <td>{architectureEfficiency.find((m) => m.id === "spring-boot")?.aiFrictionAfter}</td>
              <td>{architectureEfficiency.find((m) => m.id === "spring-boot")?.soUsage}%</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td><span className="cat-indicator" style={{ background: CAT_COLORS.backend }} />.NET Core</td>
              <td>Clean + MediatR</td>
              <td>N/A (server)</td>
              <td>Built-in DI</td>
              <td>xUnit + Testcontainers</td>
              <td>{architectureEfficiency.find((m) => m.id === "dotnet-core")?.aiFrictionAfter}</td>
              <td>{architectureEfficiency.find((m) => m.id === "dotnet-core")?.soUsage}%</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td><span className="cat-indicator" style={{ background: CAT_COLORS.backend }} />Express/Fastify</td>
              <td>3-Tier Service Layer</td>
              <td>N/A (server)</td>
              <td>Manual (constructors)</td>
              <td>Vitest + supertest</td>
              <td>{architectureEfficiency.find((m) => m.id === "express")?.aiFrictionAfter}</td>
              <td>{architectureEfficiency.find((m) => m.id === "express")?.soUsage}%</td>
              <td>{FmtNpm(architectureEfficiency.find((m) => m.id === "express")?.npmDownloads)}</td>
              <td>-</td>
            </tr>
            <tr>
              <td><span className="cat-indicator" style={{ background: CAT_COLORS.backend }} />Go/Fiber</td>
              <td>Package-by-Feature</td>
              <td>N/A (server)</td>
              <td>Interfaces + main()</td>
              <td>testify + testcontainers</td>
              <td>{architectureEfficiency.find((m) => m.id === "go-fiber")?.aiFrictionAfter}</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td><span className="cat-indicator" style={{ background: CAT_COLORS.backend }} />Rails</td>
              <td>MVC + Service Objects</td>
              <td>ActiveRecord + Hotwire</td>
              <td>Rails container</td>
              <td>RSpec + FactoryBot</td>
              <td>{architectureEfficiency.find((m) => m.id === "rails")?.aiFrictionAfter}</td>
              <td>{architectureEfficiency.find((m) => m.id === "rails")?.soUsage}%</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td><span className="cat-indicator" style={{ background: CAT_COLORS.backend }} />Django</td>
              <td>MTV + Service Layer</td>
              <td>ORM + Celery</td>
              <td>Python modules</td>
              <td>pytest + factory_boy</td>
              <td>{architectureEfficiency.find((m) => m.id === "django")?.aiFrictionAfter}</td>
              <td>{architectureEfficiency.find((m) => m.id === "django")?.soUsage}%</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td><span className="cat-indicator" style={{ background: CAT_COLORS.backend }} />Laravel</td>
              <td>MVC + Action Classes</td>
              <td>Eloquent + Livewire</td>
              <td>Service Container</td>
              <td>PHPUnit + Dusk</td>
              <td>{architectureEfficiency.find((m) => m.id === "laravel")?.aiFrictionAfter}</td>
              <td>{architectureEfficiency.find((m) => m.id === "laravel")?.soUsage}%</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td><span className="cat-indicator" style={{ background: CAT_COLORS.desktop }} />.NET WPF</td>
              <td>Clean DDD + MVVM + Application Layer</td>
              <td>WeakReferenceMessenger + INavigationService</td>
              <td>Microsoft.Extensions.DependencyInjection</td>
              <td>xUnit + Moq</td>
              <td>{architectureEfficiency.find((m) => m.id === "wpf")?.aiFrictionAfter}</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td><span className="cat-indicator" style={{ background: CAT_COLORS.desktop }} />Electron</td>
              <td>Type-Safe IPC + electron-vite</td>
              <td>Typed RPC bridge + Zod validation</td>
              <td>electron-vite + electron-builder</td>
              <td>Vitest + Playwright</td>
              <td>{architectureEfficiency.find((m) => m.id === "electron")?.aiFrictionAfter}</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td><span className="cat-indicator" style={{ background: CAT_COLORS.backend }} />FastAPI</td>
              <td>DI + Service Layer</td>
              <td>Depends() + Pydantic v2</td>
              <td>FastAPI Depends()</td>
              <td>pytest + httpx + testcontainers</td>
              <td>-</td>
              <td>15.1%</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td><span className="cat-indicator" style={{ background: CAT_COLORS.backend }} />Hono</td>
              <td>Edge-First Middleware + RPC</td>
              <td>Context chain + Zod</td>
              <td>Middleware context (c.env)</td>
              <td>Vitest + @hono/vite-ssg</td>
              <td>-</td>
              <td>-</td>
              <td>58.1M/w</td>
              <td>-</td>
            </tr>
            <tr>
              <td><span className="cat-indicator" style={{ background: CAT_COLORS.backend }} />Bun / Elysia</td>
              <td>Decorator-Driven + Eden Treaty</td>
              <td>Lifecycle + Guard + Decorate</td>
              <td>Plugin decoration (typed)</td>
              <td>Bun test (built-in)</td>
              <td>-</td>
              <td>-</td>
              <td>823K/w</td>
              <td>-</td>
            </tr>
            <tr>
              <td><span className="cat-indicator" style={{ background: CAT_COLORS.backend }} />Gin (Go)</td>
              <td>Handler-Based + Middleware</td>
              <td>gin.Context + interface DI</td>
              <td>Interface-based (manual/wire)</td>
              <td>testify + httptest + testcontainers-go</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td><span className="cat-indicator" style={{ background: CAT_COLORS.backend }} />Phoenix / Elixir</td>
              <td>MVC + LiveView + OTP</td>
              <td>LiveView stateful WebSocket</td>
              <td>OTP Application supervision</td>
              <td>ExUnit + Phoenix.ConnTest</td>
              <td>-</td>
              <td>2.5%</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td><span className="cat-indicator" style={{ background: CAT_COLORS.frontend }} />Astro</td>
              <td>Islands + Content Collections</td>
              <td>Content Collections (Zod)</td>
              <td>N/A (static/server)</td>
              <td>Vitest + Playwright</td>
              <td>-</td>
              <td>4.3%</td>
              <td>4.4M/w</td>
              <td>-</td>
            </tr>
            <tr>
              <td><span className="cat-indicator" style={{ background: CAT_COLORS.desktop }} />Tauri</td>
              <td>Rust Core + Frontend Shell + IPC</td>
              <td>tauri::State + Commands</td>
              <td>tauri::Builder (Rust)</td>
              <td>cargo test + Vitest + Playwright</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td><span className="cat-indicator" style={{ background: CAT_COLORS.frontend }} />htmx</td>
              <td>HATEOAS Hypermedia-Driven</td>
              <td>Server state (no client state)</td>
              <td>N/A (server-only state)</td>
              <td>Backend tests (no JS testing)</td>
              <td>-</td>
              <td>-</td>
              <td>221K/w</td>
              <td>-</td>
            </tr>
            <tr>
              <td><span className="cat-indicator" style={{ background: CAT_COLORS.frontend }} />Lit / Web Components</td>
              <td>ReactiveElement + Web Components</td>
              <td>@property() + @state()</td>
              <td>@consume/@provide context</td>
              <td>@open-wc/testing + Web Test Runner</td>
              <td>-</td>
              <td>-</td>
              <td>7.0M/w</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
