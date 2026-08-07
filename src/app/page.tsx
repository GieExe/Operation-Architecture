import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";
import ComparisonMatrix from "../components/ComparisonMatrix";
import ArchitectureScorecard from "../components/ArchitectureScorecard";
import StackCompatibility from "../components/StackCompatibility";
import FrameworkComparison from "../components/FrameworkComparison";
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
          <div className="hero-grid">
            <div className="hero-content">
              <div className="hero-eyebrow">
                <span className="hero-line" />
                Architecture Intelligence &mdash; June 2026
              </div>
              <h1>
                Build Code That
                <br />
                <em>AI Agents</em> Understand
              </h1>
              <p className="hero-sub">
                Structured architecture is the single biggest lever for AI agent
                effectiveness. When code follows predictable patterns, clear data
                flow, and explicit boundaries, AI agents navigate, modify, and
                verify changes with significantly fewer errors. This reference
                catalogs every major framework&apos;s golden-standard architecture
                &mdash; designed for both human developers and the AI agents that
                assist them.
              </p>
              <div className="hero-actions">
                <a href="#frameworks" className="hero-btn primary">
                  Explore Frameworks
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17l9.2-9.2M17 17V7H7" />
                  </svg>
                </a>
                <a href="#scorecard" className="hero-btn secondary">
                  View AI Scorecard
                </a>
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-stat-big">
                <div className="hero-stat-big-num">
                  <span className="hero-stat-digit">3</span>
                  <span className="hero-stat-digit">5</span>
                  <span className="hero-stat-pct">%</span>
                </div>
                <div className="hero-stat-big-label">Average AI friction reduction</div>
                <div className="hero-stat-big-sub">when architecture is applied</div>
              </div>
              <div className="hero-mini-stats">
                <div className="hero-mini-stat">
                  <div className="mini-num">45</div>
                  <div className="mini-label">Frameworks</div>
                </div>
                <div className="hero-mini-stat">
                  <div className="mini-num">36</div>
                  <div className="mini-label">Verified Stacks</div>
                </div>
                <div className="hero-mini-stat">
                  <div className="mini-num">5</div>
                  <div className="mini-label">AI Metrics</div>
                </div>
                <div className="hero-mini-stat">
                  <div className="mini-num">2</div>
                  <div className="mini-label">Tiers</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTENT */}
        <MainContent frameworks={frameworks} />

        {/* AI AGENT SCORECARD */}
        <ArchitectureScorecard />

        {/* STACK COMPATIBILITY */}
        <StackCompatibility />

        {/* HEAD-TO-HEAD COMPARISON */}
        <FrameworkComparison />

        {/* COMPARISON MATRIX */}
        <ComparisonMatrix />

        {/* KEY INSIGHTS */}
        <section className="insights-section" id="insights">
          <div className="section-head">
            <span className="section-line" />
            <div>
              <h2>Architectural Insights for 2026</h2>
              <p className="section-desc">Patterns that define modern software architecture across every framework and platform.</p>
            </div>
          </div>
          <div className="insights-grid">
            <div className="insight-card">
              <div className="insight-num">01</div>
              <h3>Server-First Is the New Default</h3>
              <p>Next.js RSC, Nuxt server functions, and SvelteKit loaders push data fetching to the server. Client-side state management is minimized. The SPA-for-everything era is over.</p>
            </div>
            <div className="insight-card">
              <div className="insight-num">02</div>
              <h3>Signals Are Replacing Virtual DOM</h3>
              <p>Angular Signals, Solid Signals, Vue Proxy reactivity, and Svelte 5 Runes share the same insight: track dependencies at the granular level and update only what changed.</p>
            </div>
            <div className="insight-card">
              <div className="insight-num">03</div>
              <h3>Hexagonal Architecture Wins at Scale</h3>
              <p>From NestJS decorators to Spring DI to Go&apos;s implicit interfaces, the principle is universal: isolate domain logic behind ports and implement adapters for infrastructure.</p>
            </div>
            <div className="insight-card">
              <div className="insight-num">04</div>
              <h3>Feature-First Is Universal</h3>
              <p>Every modern framework uses feature-based folder structures. Grouping by type (controllers/, models/, views/) is dead for anything beyond small projects.</p>
            </div>
            <div className="insight-card">
              <div className="insight-num">05</div>
              <h3>Architecture Is Framework-Specific</h3>
              <p>Redux in Angular fights the framework. Clean Architecture in a 5-endpoint Express API is over-engineering. The right architecture maximizes framework strengths.</p>
            </div>
            <div className="insight-card">
              <div className="insight-num">06</div>
              <h3>Composition Over Inheritance</h3>
              <p>Composables (Vue), Hooks (React), Actions (Laravel), Service Objects (Rails), Use Cases (Clean Arch) all converge on small, composable units of logic.</p>
            </div>
          </div>
        </section>

        {/* AI AGENT ARCHITECTURE INSIGHTS */}
        <section className="insights-section" id="ai-insights">
          <div className="section-head">
            <span className="section-line" />
            <div>
              <h2>Best Architecture for AI Agents — 2026 Research</h2>
              <p className="section-desc">Production-proven patterns for building reliable, testable AI agent systems.</p>
            </div>
          </div>
          <div className="insights-grid">
            <div className="insight-card">
              <div className="insight-num">A1</div>
              <h3>pgvector + PostgreSQL Is the Default Data Layer</h3>
              <p>For 90% of AI applications, PostgreSQL with the pgvector extension is the correct choice. Your relational data and vector embeddings live in the same database, share the same transactions, and use the same access control. Pinecone/Weaviate only when you exceed 50M vectors.</p>
            </div>
            <div className="insight-card">
              <div className="insight-num">A2</div>
              <h3>Tool-Augmented LLM Is the Only Proven Pattern</h3>
              <p>Every production AI agent architecture converges on one pattern: LLM + typed tool registry + agent loop. LangChain, CrewAI, AutoGen, and the OpenAI SDK all implement this. The framework matters less than the architectural structure around it.</p>
            </div>
            <div className="insight-card">
              <div className="insight-num">A3</div>
              <h3>SvelteKit + Express = The Ideal AI Agent Frontend Stack</h3>
              <p>SvelteKit&apos;s SSR and form actions handle the UI layer with zero client overhead. Express manages the AI agent runtime — tool execution, LLM calls, RAG pipeline. Monorepo with shared types (Zod) gives end-to-end type safety from frontend to agent to database.</p>
            </div>
            <div className="insight-card">
              <div className="insight-num">A4</div>
              <h3>Multi-Agent Orchestration Requires Explicit State Machines</h3>
              <p>Ad-hoc agent chains become unpredictable at 3+ agents. Production systems use explicit state machines (LangGraph, Temporal) for durable execution. Each agent step is a state transition. Failed steps are retried or escalated. Observability is non-negotiable.</p>
            </div>
            <div className="insight-card">
              <div className="insight-num">A5</div>
              <h3>Guardrails at Every I/O Boundary</h3>
              <p>AI agents are non-deterministic by nature. Production architectures enforce guardrails at every boundary: input validation (prompt injection detection), tool output validation (schema enforcement via Zod/Pydantic), and response validation (PII redaction, content safety). No unguarded LLM output should reach users or databases.</p>
            </div>
            <div className="insight-card">
              <div className="insight-num">A6</div>
              <h3>Agent Architecture Is 80% Infrastructure</h3>
              <p>The AI agent that ships is 20% LLM and 80% architecture: structured prompts, typed tools, deterministic routing, robust error handling, caching, rate limiting, and monitoring. The same principles that make any software architecture good — separation of concerns, explicit contracts, testability — make AI agents reliable.</p>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-brand">
              Architectura<span className="footer-dot">.</span>
              <span className="footer-edition">2026 Edition</span>
            </div>
            <div className="footer-meta">
              Production-grade standards &middot; 45 frameworks &middot; 36 stacks
            </div>
          </div>
        </footer>
      </main>

      <ClientScript />
    </>
  );
}
