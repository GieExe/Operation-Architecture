export default function ComparisonMatrix() {
  return (
    <section className="matrix-section" id="matrix">
      <h2>Quick-Reference Comparison Matrix</h2>
      <p className="section-desc">
        Every framework's architecture, reactivity model, DI mechanism, and testing paradigm at a glance.
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
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <span className="cat-indicator" style={{ background: "var(--rose)" }}></span>
                React Native
              </td>
              <td>Feature-MVVM + UDF</td>
              <td>Unidirectional (hooks + Zustand)</td>
              <td>Manual (module imports)</td>
              <td>Unit (hooks) + E2E (Detox)</td>
            </tr>
            <tr>
              <td>
                <span className="cat-indicator" style={{ background: "var(--rose)" }}></span>
                Flutter
              </td>
              <td>BLoC + Clean Arch</td>
              <td>Event→State streams (BLoC)</td>
              <td>get_it / Riverpod</td>
              <td>Unit (bloc_test) + Widget + E2E</td>
            </tr>
            <tr>
              <td>
                <span className="cat-indicator" style={{ background: "var(--rose)" }}></span>
                Swift/SwiftUI
              </td>
              <td>MVVM + Coordinator</td>
              <td>@Observable / Combine</td>
              <td>Factory / Swinject</td>
              <td>XCTest + snapshot</td>
            </tr>
            <tr>
              <td>
                <span className="cat-indicator" style={{ background: "var(--rose)" }}></span>
                Android/Compose
              </td>
              <td>MVVM + UDF + Clean</td>
              <td>StateFlow + Coroutines</td>
              <td>Hilt (Dagger)</td>
              <td>JUnit + Compose UI Test</td>
            </tr>
            <tr>
              <td>
                <span className="cat-indicator" style={{ background: "var(--rose)" }}></span>
                Ionic
              </td>
              <td>MVVM + Web Abstraction</td>
              <td>Host framework model</td>
              <td>Host framework DI</td>
              <td>Host framework + Cypress</td>
            </tr>
            <tr>
              <td>
                <span className="cat-indicator" style={{ background: "var(--rose)" }}></span>
                .NET MAUI
              </td>
              <td>Blazor Hybrid / Clean MVVM</td>
              <td>In-Process Webview UI + C# Interop</td>
              <td>Microsoft.Extensions.DependencyInjection</td>
              <td>xUnit + BUnit</td>
            </tr>
            <tr>
              <td>
                <span className="cat-indicator" style={{ background: "var(--blue)" }}></span>
                Next.js
              </td>
              <td>Server-First Layered</td>
              <td>RSC + React hooks (minimal)</td>
              <td>Module imports</td>
              <td>Vitest + Playwright</td>
            </tr>
            <tr>
              <td>
                <span className="cat-indicator" style={{ background: "var(--blue)" }}></span>
                React JS
              </td>
              <td>Vite SPA + Client Routing</td>
              <td>Client-side (hooks, Zustand)</td>
              <td>Context API / Modules</td>
              <td>Vitest + React Testing Library</td>
            </tr>
            <tr>
              <td>
                <span className="cat-indicator" style={{ background: "var(--blue)" }}></span>
                Angular
              </td>
              <td>Layered + Signals</td>
              <td>Signals (fine-grained)</td>
              <td>Built-in DI container</td>
              <td>Jest + Cypress</td>
            </tr>
            <tr>
              <td>
                <span className="cat-indicator" style={{ background: "var(--blue)" }}></span>
                Vue/Nuxt
              </td>
              <td>Composition MVVM</td>
              <td>Proxy reactivity (ref/reactive)</td>
              <td>Composable injection</td>
              <td>Vitest + Vue Test Utils</td>
            </tr>
            <tr>
              <td>
                <span className="cat-indicator" style={{ background: "var(--blue)" }}></span>
                SvelteKit
              </td>
              <td>Compile-time MVVM</td>
              <td>Reactive assignments ($)</td>
              <td>Module exports</td>
              <td>Vitest + Playwright</td>
            </tr>
            <tr>
              <td>
                <span className="cat-indicator" style={{ background: "var(--blue)" }}></span>
                SolidJS
              </td>
              <td>Signal-Based MVVM</td>
              <td>Signals (surgical DOM)</td>
              <td>Context API</td>
              <td>Vitest + testing-library</td>
            </tr>
            <tr>
              <td>
                <span className="cat-indicator" style={{ background: "var(--blue)" }}></span>
                Remix
              </td>
              <td>Progressive Enhancement</td>
              <td>Server-driven loaders</td>
              <td>Module exports</td>
              <td>Vitest + Playwright</td>
            </tr>
            <tr>
              <td>
                <span className="cat-indicator" style={{ background: "var(--green)" }}></span>
                NestJS
              </td>
              <td>Hexagonal + CQRS + DDD</td>
              <td>Event-driven + CQRS</td>
              <td>Built-in DI (decorators)</td>
              <td>Jest + @nestjs/testing + Supertest</td>
            </tr>
            <tr>
              <td>
                <span className="cat-indicator" style={{ background: "var(--green)" }}></span>
                Spring Boot
              </td>
              <td>Layered / Hexagonal</td>
              <td>N/A (server)</td>
              <td>Spring IoC</td>
              <td>JUnit + Testcontainers</td>
            </tr>
            <tr>
              <td>
                <span className="cat-indicator" style={{ background: "var(--green)" }}></span>
                .NET Core
              </td>
              <td>Clean + MediatR</td>
              <td>N/A (server)</td>
              <td>Built-in DI</td>
              <td>xUnit + Testcontainers</td>
            </tr>
            <tr>
              <td>
                <span className="cat-indicator" style={{ background: "var(--green)" }}></span>
                Express/Fastify
              </td>
              <td>3-Tier Service Layer</td>
              <td>N/A (server)</td>
              <td>Manual (constructors)</td>
              <td>Vitest + supertest</td>
            </tr>
            <tr>
              <td>
                <span className="cat-indicator" style={{ background: "var(--green)" }}></span>
                Go/Fiber
              </td>
              <td>Package-by-Feature</td>
              <td>N/A (server)</td>
              <td>Interfaces + main()</td>
              <td>testify + testcontainers</td>
            </tr>
            <tr>
              <td>
                <span className="cat-indicator" style={{ background: "var(--green)" }}></span>
                Rails
              </td>
              <td>MVC + Service Objects</td>
              <td>ActiveRecord + Hotwire</td>
              <td>Rails container</td>
              <td>RSpec + FactoryBot</td>
            </tr>
            <tr>
              <td>
                <span className="cat-indicator" style={{ background: "var(--green)" }}></span>
                Django
              </td>
              <td>MTV + Service Layer</td>
              <td>ORM + Celery</td>
              <td>Python modules</td>
              <td>pytest + factory_boy</td>
            </tr>
            <tr>
              <td>
                <span className="cat-indicator" style={{ background: "var(--green)" }}></span>
                Laravel
              </td>
              <td>MVC + Action Classes</td>
              <td>Eloquent + Livewire</td>
              <td>Service Container</td>
              <td>PHPUnit + Dusk</td>
            </tr>
            <tr>
              <td>
                <span className="cat-indicator" style={{ background: "var(--purple)" }}></span>
                .NET WPF
              </td>
              <td>Clean DDD + MVVM + Application Layer</td>
              <td>WeakReferenceMessenger + INavigationService</td>
              <td>Microsoft.Extensions.DependencyInjection</td>
              <td>xUnit + Moq</td>
            </tr>
            <tr>
              <td>
                <span className="cat-indicator" style={{ background: "var(--purple)" }}></span>
                Electron
              </td>
              <td>Type-Safe IPC + electron-vite</td>
              <td>Typed RPC bridge + Zod validation</td>
              <td>electron-vite + electron-builder</td>
              <td>Vitest + Playwright</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
