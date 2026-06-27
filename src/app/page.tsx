import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";
import ComparisonMatrix from "../components/ComparisonMatrix";
import ClientScript from "../components/ClientScript";
import { frameworks } from "../data/frameworks";

export default function Home() {
  return (
    <>
      <Header />
      <Sidebar />
      
      <main className="main">
        {/* HERO */}
        <section className="hero" id="hero">
          <div className="hero-eyebrow">
            Enterprise Architecture Reference — June 2026
          </div>
          <h1>The Definitive Guide to Framework <em>Architectures</em></h1>
          <p className="hero-sub">
            A production-grade master reference detailing every prominent
            programming framework's golden-standard architectural pattern, data
            flow mechanics, directory blueprints, and complementary tech stacks.
            Each framework includes both a <strong>small project</strong> quickstart
            and a <strong>serious, long-lived project</strong> blueprint — toggle
            between tiers on any card.
          </p>
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="num">23</div>
              <div className="label">Frameworks Analyzed</div>
            </div>
            <div className="hero-stat">
              <div className="num">2</div>
              <div className="label">Architecture Tiers</div>
            </div>
            <div className="hero-stat">
              <div className="num">4</div>
              <div className="label">Stack Categories</div>
            </div>
            <div className="hero-stat">
              <div className="num">46</div>
              <div className="label">Architecture Blueprints</div>
            </div>
          </div>
        </section>

        {/* CONTENT */}
        <MainContent frameworks={frameworks} />

        {/* COMPARISON MATRIX */}
        <ComparisonMatrix />

        {/* KEY INSIGHTS */}
        <section className="insights-section" id="insights">
          <h2>Key Architectural Insights for 2026</h2>
          <div className="insights-grid">
            <div className="insight-card">
              <div className="insight-num">01</div>
              <h3>Server-First Is the New Default</h3>
              <p>
                Next.js RSC, Nuxt server functions, and SvelteKit loaders all push
                data fetching to the server. Client-side state management is
                minimized. The era of "SPA for everything" is definitively over.
              </p>
            </div>
            <div className="insight-card">
              <div className="insight-num">02</div>
              <h3>Signals Are Replacing Virtual DOM</h3>
              <p>
                Angular Signals, Solid Signals, Vue Proxy reactivity, and Svelte 5
                Runes share the same insight: track dependencies at the granular
                level and update only what changed. React remains the holdout with
                its reconciliation model.
              </p>
            </div>
            <div className="insight-card">
              <div className="insight-num">03</div>
              <h3>Hexagonal Architecture Wins at Scale</h3>
              <p>
                Whether NestJS decorators, Spring DI, .NET project systems, or
                Go's implicit interfaces — the principle is the same: isolate
                domain logic behind ports and implement adapters for
                infrastructure. Every mature backend converges here.
              </p>
            </div>
            <div className="insight-card">
              <div className="insight-num">04</div>
              <h3>Feature-First Is Universal</h3>
              <p>
                Every mobile and frontend framework uses feature-based folder
                structures. Grouping by type (controllers/, models/, views/) as
                top-level folders is dead for anything beyond small projects.
              </p>
            </div>
            <div className="insight-card">
              <div className="insight-num">05</div>
              <h3>Architecture Is Framework-Specific</h3>
              <p>
                Using Redux in Angular fights the framework. Using Clean
                Architecture in a 5-endpoint Express API is over-engineering. The
                right architecture maximizes the framework's strengths while
                solving the specific problem's complexity.
              </p>
            </div>
            <div className="insight-card">
              <div className="insight-num">06</div>
              <h3>Composition Over Inheritance</h3>
              <p>
                Composables (Vue), Hooks (React), Actions (Laravel), Service
                Objects (Rails), and Use Cases (Clean Arch) all converge on the
                same principle: small, single-purpose, composable units of logic
                over deep class hierarchies.
              </p>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="footer">
          <div className="footer-left">
            Architectura. — The Definitive Framework Architecture Reference 2026
          </div>
          <div className="footer-right">
            Production-grade standards · 23 frameworks · 4 stacks
          </div>
        </footer>
      </main>

      <ClientScript />
    </>
  );
}
