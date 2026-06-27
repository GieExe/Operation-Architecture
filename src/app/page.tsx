import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import FilterBar from "../components/FilterBar";
import FrameworkCard from "../components/FrameworkCard";
import ComparisonMatrix from "../components/ComparisonMatrix";
import ClientScript from "../components/ClientScript";
import { frameworks } from "../data/frameworks";

interface PageProps {
  searchParams: Promise<{ q?: string; cat?: string }>;
}

export default async function Home({ searchParams }: PageProps) {
  const resolvedParams = await searchParams;
  const q = resolvedParams.q?.toLowerCase().trim() || "";
  const activeCat = resolvedParams.cat || "all";

  // Filter frameworks on the server based on query & category
  const filteredFrameworks = frameworks.filter((fw) => {
    const matchesCat = activeCat === "all" || fw.cat === activeCat;
    const matchesQuery = !q || fw.name.toLowerCase().includes(q) || fw.id.includes(q);
    return matchesCat && matchesQuery;
  });

  const mobileFws = filteredFrameworks.filter((f) => f.cat === "mobile");
  const frontendFws = filteredFrameworks.filter((f) => f.cat === "frontend");
  const backendFws = filteredFrameworks.filter((f) => f.cat === "backend");
  const desktopFws = filteredFrameworks.filter((f) => f.cat === "desktop");

  const totalCount = filteredFrameworks.length;

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
        <div className="content-container">
          <FilterBar activeCat={activeCat} searchQuery={q} />

          {totalCount === 0 ? (
            <div style={{ padding: "60px 0", textAlign: "center", color: "var(--text-secondary)" }}>
              <h3>No frameworks found matching "{q}"</h3>
              <p style={{ marginTop: "8px", fontSize: "14px", color: "var(--text-muted)" }}>
                Try adjusting your search query or switching categories.
              </p>
            </div>
          ) : (
            <>
              {/* MOBILE */}
              {mobileFws.length > 0 && (
                <>
                  <div className="section-header cat-section" data-cat="mobile">
                    <h2>Mobile Frameworks</h2>
                    <p className="section-desc">
                      Cross-platform UI rendering engines and native mobile development architectures.
                    </p>
                  </div>
                  <div className="frameworks-grid cat-section" data-cat="mobile">
                    {mobileFws.map((fw) => (
                      <FrameworkCard key={fw.id} framework={fw} />
                    ))}
                  </div>
                </>
              )}

              {/* FRONTEND */}
              {frontendFws.length > 0 && (
                <>
                  <div className="section-header cat-section" data-cat="frontend">
                    <h2>Frontend Web Frameworks</h2>
                    <p className="section-desc">
                      Modern client-side libraries, SSR systems, and compilation-based web platforms.
                    </p>
                  </div>
                  <div className="frameworks-grid cat-section" data-cat="frontend">
                    {frontendFws.map((fw) => (
                      <FrameworkCard key={fw.id} framework={fw} />
                    ))}
                  </div>
                </>
              )}

              {/* BACKEND */}
              {backendFws.length > 0 && (
                <>
                  <div className="section-header cat-section" data-cat="backend">
                    <h2>Backend Frameworks</h2>
                    <p className="section-desc">
                      Server-side runtime frameworks, database isolation layers, and microservices foundations.
                    </p>
                  </div>
                  <div className="frameworks-grid cat-section" data-cat="backend">
                    {backendFws.map((fw) => (
                      <FrameworkCard key={fw.id} framework={fw} />
                    ))}
                  </div>
                </>
              )}

              {/* DESKTOP */}
              {desktopFws.length > 0 && (
                <>
                  <div className="section-header cat-section" data-cat="desktop">
                    <h2>Desktop Frameworks</h2>
                    <p className="section-desc">
                      Windows desktop interface foundations leveraging hardware-accelerated rendering and strict data decoupling patterns.
                    </p>
                  </div>
                  <div className="frameworks-grid cat-section" data-cat="desktop">
                    {desktopFws.map((fw) => (
                      <FrameworkCard key={fw.id} framework={fw} />
                    ))}
                  </div>
                </>
              )}
            </>
          )}
        </div>

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
