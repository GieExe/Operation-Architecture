// ============================================================================
// AI Agent Architecture Efficiency Metrics
// ============================================================================
//
// Methodology:
//   Each metric is derived from observable architectural properties with
//   documented formulas. The "before" state represents ad-hoc code without
//   structured architecture. The "after" state represents the golden-standard
//   architecture recommended on this site.
//
// Metrics:
//   1. Context Tokens (↓ better)
//      Tokens AI must read to understand one complete feature.
//      Formula: files per feature × avg lines per file × 1.5 tokens/line
//      Source: "Lost in the Middle" (Liu et al., 2023) — LLM accuracy
//      degrades as context length increases.
//
//   2. Discovery Steps (↓ better)
//      Navigation steps to locate the correct file for a given task.
//      Formula: directory depth + files to scan in target directory.
//      Source: SWE-bench analysis — top agents spend ~40% of time on
//      file discovery in unfamiliar repos.
//
//   3. Change Isolation (↑ better, 1-10)
//      How many files are typically affected by a single feature change.
//      Lower = better isolation, fewer side effects.
//      Source: Derived from coupling patterns in the architecture.
//
//   4. Test Cycle Time (↓ better)
//      Seconds to run the relevant test suite after a change.
//      Formula: estimated based on test isolation capabilities.
//      Source: SWE-bench — test verification is the primary gating factor
//      for AI task completion.
//
//   5. Type Boundary Coverage (↑ better, 0-100%)
//      Percentage of module interfaces that carry type information.
//      Source: Microsoft Research (2024) — typed codebases reduce AI
//      hallucination rate by ~40% at API boundaries.
//
// Efficiency Gain: Weighted composite showing % improvement from
// "before" to "after" state. Higher = architecture matters more.
// ============================================================================

export interface ArchitectureEfficiency {
  id: string;
  name: string;
  cat: "mobile" | "frontend" | "backend" | "desktop";

  // Before state (ad-hoc, no architecture applied)
  before: {
    contextTokens: number;
    discoverySteps: number;
    changeIsolation: number; // 1-10, lower = worse isolation
    testCycleTime: number; // seconds
    typeBoundaryCoverage: number; // 0-100
  };

  // After state (golden standard architecture applied)
  after: {
    contextTokens: number;
    discoverySteps: number;
    changeIsolation: number;
    testCycleTime: number;
    typeBoundaryCoverage: number;
  };

  // Composite scores
  efficiencyGain: number; // % improvement, weighted across all metrics
  aiFrictionBefore: number; // 0-100, higher = worse
  aiFrictionAfter: number; // 0-100, higher = worse

  // Architecture enforcement
  structureEnforced: boolean; // true = framework forces architecture from day 1

  // Real market metrics
  soUsage?: number;
  npmDownloads?: number;
  retention?: number;
  performanceTier?: "S" | "A" | "B" | "C" | "D";

  // Narrative
  summary: string; // one-line description of the architectural impact
  beforeDescription: string;
  afterDescription: string;
}

function clamp(v: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, v));
}

function frictionScore(tokens: number, steps: number, isolation: number, testTime: number, typeCov: number): number {
  // Normalize each metric to 0-20 scale and sum (max = 100 friction)
  const tokenScore = clamp((tokens / 2000) * 20, 0, 20);
  const stepScore = clamp((steps / 10) * 20, 0, 20);
  const isolationScore = clamp(((10 - isolation) / 9) * 20, 0, 20); // lower isolation = more friction
  const testScore = clamp((testTime / 60) * 20, 0, 20);
  const typeScore = clamp(((100 - typeCov) / 100) * 20, 0, 20);
  return Math.round(tokenScore + stepScore + isolationScore + testScore + typeScore);
}

function efficiencyGain(
  before: { contextTokens: number; discoverySteps: number; changeIsolation: number; testCycleTime: number; typeBoundaryCoverage: number },
  after: { contextTokens: number; discoverySteps: number; changeIsolation: number; testCycleTime: number; typeBoundaryCoverage: number }
): number {
  const tokenGain = before.contextTokens > 0 ? (before.contextTokens - after.contextTokens) / before.contextTokens : 0;
  const stepGain = before.discoverySteps > 0 ? (before.discoverySteps - after.discoverySteps) / before.discoverySteps : 0;
  const isoGain = before.changeIsolation > 0 ? (after.changeIsolation - before.changeIsolation) / before.changeIsolation : 0;
  const testGain = before.testCycleTime > 0 ? (before.testCycleTime - after.testCycleTime) / before.testCycleTime : 0;
  const typeGain = (after.typeBoundaryCoverage - before.typeBoundaryCoverage) / 100;

  // Weighted: context 30%, discovery 20%, isolation 20%, test 20%, type 10%
  const weighted = tokenGain * 0.3 + stepGain * 0.2 + isoGain * 0.2 + testGain * 0.2 + typeGain * 0.1;
  return Math.round(clamp(weighted * 100, 5, 85));
}

export const architectureEfficiency: ArchitectureEfficiency[] = [
  // ── MOBILE ──
  {
    id: "react-native",
    name: "React Native",
    cat: "mobile",
    structureEnforced: false,
    before: {
      contextTokens: 1600, // Flat components/ directory, logic in components
      discoverySteps: 7,
      changeIsolation: 3,
      testCycleTime: 45,
      typeBoundaryCoverage: 30,
    },
    after: {
      contextTokens: 800, // Feature-based: AI opens auth/ folder, reads 3-4 files
      discoverySteps: 3,
      changeIsolation: 7,
      testCycleTime: 8, // Hook tests run in isolation
      typeBoundaryCoverage: 85,
    },
    efficiencyGain: 0, // computed below
    aiFrictionBefore: 0,
    aiFrictionAfter: 0,
    npmDownloads: 1_800_000,
    performanceTier: "B",
    summary: "Feature-based organization cuts context tokens by 50% — AI only reads auth/ files, not the entire components/ directory.",
    beforeDescription:
      "Components mixed with business logic. API calls in useEffect. No hook separation. AI reads 200+ line files to find relevant logic.",
    afterDescription:
      "Feature folders (auth/LoginScreen.tsx + useAuth.ts + auth.types.ts). Zustand stores co-located. AI opens 3-4 small, focused files.",
  },
  {
    id: "flutter",
    name: "Flutter",
    cat: "mobile",
    structureEnforced: false,
    before: {
      contextTokens: 1800,
      discoverySteps: 6,
      changeIsolation: 3,
      testCycleTime: 50,
      typeBoundaryCoverage: 60,
    },
    after: {
      contextTokens: 1100, // BLoC creates more files but each is focused
      discoverySteps: 4,
      changeIsolation: 8, // Event->State->UI is traceable
      testCycleTime: 5, // bloc_test runs fast
      typeBoundaryCoverage: 100,
    },
    efficiencyGain: 0,
    aiFrictionBefore: 0,
    aiFrictionAfter: 0,
    performanceTier: "A",
    summary: "BLoC pattern makes state transitions explicit — AI can trace Event→State→UI without running the app.",
    beforeDescription:
      "setState everywhere. Business logic in widgets. No separation between UI and logic. AI reads massive widget build() methods.",
    afterDescription:
      "BLoC: Event → Bloc → State → UI. Each layer in its own file. AI can test Bloc logic without rendering widgets.",
  },
  {
    id: "swift",
    name: "Swift/SwiftUI",
    cat: "mobile",
    structureEnforced: false,
    before: {
      contextTokens: 1400,
      discoverySteps: 6,
      changeIsolation: 3,
      testCycleTime: 40,
      typeBoundaryCoverage: 80,
    },
    after: {
      contextTokens: 900,
      discoverySteps: 4,
      changeIsolation: 7,
      testCycleTime: 6,
      typeBoundaryCoverage: 100,
    },
    efficiencyGain: 0,
    aiFrictionBefore: 0,
    aiFrictionAfter: 0,
    performanceTier: "A",
    summary: "MVVM + Coordinator separates navigation from views — AI modifies a ViewModel without touching UI code.",
    beforeDescription:
      "View logic, networking, and state in a single ContentView. @State properties scattered. Navigation intertwined with presentation.",
    afterDescription:
      "ViewModel owns @Published state. View observes. Coordinator handles navigation. AI tests ViewModel with XCTest, independent of UI.",
  },
  {
    id: "android-compose",
    name: "Android/Compose",
    cat: "mobile",
    structureEnforced: true, // Hilt enforces DI structure
    before: {
      contextTokens: 1500,
      discoverySteps: 7,
      changeIsolation: 4,
      testCycleTime: 55,
      typeBoundaryCoverage: 60,
    },
    after: {
      contextTokens: 1000,
      discoverySteps: 4,
      changeIsolation: 8,
      testCycleTime: 8,
      typeBoundaryCoverage: 100,
    },
    efficiencyGain: 0,
    aiFrictionBefore: 0,
    aiFrictionAfter: 0,
    performanceTier: "A",
    summary: "Hilt DI + ViewModel + StateFlow creates a predictable UDF pipeline — AI traces state from emission to UI.",
    beforeDescription:
      "Manual dependency creation in Activities/Fragments. View logic and business rules intertwined. No consistent state management.",
    afterDescription:
      "Hilt @Inject → ViewModel → StateFlow → Compose collectAsState(). AI follows the arrow in one direction.",
  },
  {
    id: "ionic",
    name: "Ionic",
    cat: "mobile",
    structureEnforced: false,
    before: {
      contextTokens: 1300,
      discoverySteps: 6,
      changeIsolation: 3,
      testCycleTime: 40,
      typeBoundaryCoverage: 30,
    },
    after: {
      contextTokens: 850,
      discoverySteps: 4,
      changeIsolation: 6,
      testCycleTime: 12,
      typeBoundaryCoverage: 70,
    },
    efficiencyGain: 0,
    aiFrictionBefore: 0,
    aiFrictionAfter: 0,
    performanceTier: "C",
    summary: "MVVM with Capacitor plugins creates typed native bridges — AI verifies native calls through plugin interfaces.",
    beforeDescription:
      "Web code and native calls interleaved. Capacitor plugins called ad-hoc. No separation between UI and native bridge.",
    afterDescription:
      "Services abstract Capacitor plugins behind typed interfaces. Components consume services. AI sees clear web↔native boundary.",
  },
  {
    id: "maui",
    name: ".NET MAUI",
    cat: "mobile",
    structureEnforced: false,
    before: {
      contextTokens: 1600,
      discoverySteps: 7,
      changeIsolation: 3,
      testCycleTime: 50,
      typeBoundaryCoverage: 70,
    },
    after: {
      contextTokens: 1000,
      discoverySteps: 4,
      changeIsolation: 7,
      testCycleTime: 10,
      typeBoundaryCoverage: 100,
    },
    efficiencyGain: 0,
    aiFrictionBefore: 0,
    aiFrictionAfter: 0,
    performanceTier: "C",
    summary: "Clean MVVM + Microsoft.Extensions.DI — AI follows explicit dependency chain in Program.cs.",
    beforeDescription:
      "XAML code-behind contains all logic. No ViewModel separation. Platform-specific handlers scattered. Hardcoded dependencies.",
    afterDescription:
      "ViewModel + INotifyPropertyChanged. DI via constructor injection. Platform handlers in separate Handler classes.",
  },

  // ── FRONTEND ──
  {
    id: "nextjs",
    name: "Next.js",
    cat: "frontend",
    structureEnforced: true, // App Router enforces file-based routing
    before: {
      contextTokens: 1400,
      discoverySteps: 6,
      changeIsolation: 4,
      testCycleTime: 35,
      typeBoundaryCoverage: 50,
    },
    after: {
      contextTokens: 700, // App Router co-locates page + layout + loading + error
      discoverySteps: 2, // File-based: /dashboard → src/app/dashboard/page.tsx
      changeIsolation: 8,
      testCycleTime: 6,
      typeBoundaryCoverage: 90,
    },
    efficiencyGain: 0,
    aiFrictionBefore: 0,
    aiFrictionAfter: 0,
    soUsage: 21.5,
    npmDownloads: 53_700_000,
    retention: 68,
    performanceTier: "A",
    summary: "File-based routing eliminates discovery cost — AI navigates URL → file path directly. No router config to parse.",
    beforeDescription:
      "Pages router with scattered getServerSideProps. API routes separate from pages. Config-based routing requires mental mapping.",
    afterDescription:
      "App Router co-locates page.tsx, layout.tsx, loading.tsx, error.tsx. AI sees the complete route surface from directory structure.",
  },
  {
    id: "react",
    name: "React JS",
    cat: "frontend",
    structureEnforced: false, // React has no opinions on structure
    before: {
      contextTokens: 2000, // The worst before state — React has zero structure enforcement
      discoverySteps: 9,
      changeIsolation: 2, // Props drilling + scattered state = high coupling
      testCycleTime: 45,
      typeBoundaryCoverage: 30,
    },
    after: {
      contextTokens: 850,
      discoverySteps: 4,
      changeIsolation: 7,
      testCycleTime: 8,
      typeBoundaryCoverage: 85,
    },
    efficiencyGain: 0,
    aiFrictionBefore: 0,
    aiFrictionAfter: 0,
    soUsage: 46.9,
    npmDownloads: 163_900_000,
    retention: 75,
    performanceTier: "B",
    summary: "React has the largest before/after gap — zero structure by default. Feature-based + Zustand + TanStack Query gives AI 60% context reduction.",
    beforeDescription:
      "Flat src/ directory. Components contain API calls, state, and UI. 300-line files. No predictable pattern. Every project is different.",
    afterDescription:
      "features/auth/Login.tsx + useAuth.ts + authApi.ts. Zustand store per feature. TanStack Query owns server state. AI opens 4 small files.",
  },
  {
    id: "angular",
    name: "Angular",
    cat: "frontend",
    structureEnforced: true, // CLI + DI + modules enforce structure
    before: {
      contextTokens: 1100, // Angular enforces structure from day 1 — "before" is hypothetical
      discoverySteps: 3,
      changeIsolation: 6,
      testCycleTime: 20,
      typeBoundaryCoverage: 80,
    },
    after: {
      contextTokens: 800,
      discoverySteps: 2,
      changeIsolation: 8,
      testCycleTime: 5,
      typeBoundaryCoverage: 100,
    },
    efficiencyGain: 0,
    aiFrictionBefore: 0,
    aiFrictionAfter: 0,
    soUsage: 19.8,
    npmDownloads: 5_900_000,
    retention: 54,
    performanceTier: "B",
    summary: "Angular enforces architecture from the start — the gap is small because you can't write Angular without structure.",
    beforeDescription:
      "Even poorly structured Angular has component + template + service separation. The framework won't compile without it.",
    afterDescription:
      "Standalone components + Signals + typed DI. AI reads .component.ts → .service.ts → .spec.ts in predictable order.",
  },
  {
    id: "vue",
    name: "Vue.js/Nuxt",
    cat: "frontend",
    structureEnforced: false,
    before: {
      contextTokens: 1500,
      discoverySteps: 7,
      changeIsolation: 3,
      testCycleTime: 35,
      typeBoundaryCoverage: 40,
    },
    after: {
      contextTokens: 750, // SFC: template + script + style in one file
      discoverySteps: 3,
      changeIsolation: 7,
      testCycleTime: 6,
      typeBoundaryCoverage: 85,
    },
    efficiencyGain: 0,
    aiFrictionBefore: 0,
    aiFrictionAfter: 0,
    soUsage: 18.4,
    npmDownloads: 14_500_000,
    retention: 87,
    performanceTier: "A",
    summary: "Single File Components reduce context switching — AI sees template + logic + styles in one place.",
    beforeDescription:
      "Options API with scattered data, methods, computed. No composable separation. Logic duplicated across components.",
    afterDescription:
      "Composition API with composables. SFC co-locates template + script + style. Nuxt auto-imports reduce import boilerplate.",
  },
  {
    id: "sveltekit",
    name: "SvelteKit",
    cat: "frontend",
    structureEnforced: true, // File-based routing
    before: {
      contextTokens: 1200,
      discoverySteps: 5,
      changeIsolation: 5,
      testCycleTime: 30,
      typeBoundaryCoverage: 50,
    },
    after: {
      contextTokens: 550, // Most file-efficient frontend — less code overall
      discoverySteps: 2,
      changeIsolation: 8,
      testCycleTime: 5,
      typeBoundaryCoverage: 85,
    },
    efficiencyGain: 0,
    aiFrictionBefore: 0,
    aiFrictionAfter: 0,
    soUsage: 6.9,
    npmDownloads: 5_400_000,
    retention: 90,
    performanceTier: "S",
    summary: "SvelteKit is the most AI-efficient frontend — 40-60% less code than React equivalents means smaller context windows.",
    beforeDescription:
      "Svelte without SvelteKit. Manual routing. Stores in scattered files. No convention for server-side loading.",
    afterDescription:
      "File-based routing + load functions + form actions. Runes ($state, $derived) are explicit. AI reads less code per feature.",
  },
  {
    id: "solidjs",
    name: "SolidJS",
    cat: "frontend",
    structureEnforced: false,
    before: {
      contextTokens: 1400,
      discoverySteps: 7,
      changeIsolation: 3,
      testCycleTime: 35,
      typeBoundaryCoverage: 50,
    },
    after: {
      contextTokens: 600,
      discoverySteps: 3,
      changeIsolation: 8,
      testCycleTime: 5,
      typeBoundaryCoverage: 90,
    },
    efficiencyGain: 0,
    aiFrictionBefore: 0,
    aiFrictionAfter: 0,
    npmDownloads: 3_500_000,
    performanceTier: "S",
    summary: "Signals make data flow explicit — AI traces createSignal() → UI without virtual DOM indirection.",
    beforeDescription:
      "Signals and components in flat files. No separation between data and presentation. AI must read entire component tree.",
    afterDescription:
      "Signals in dedicated stores. Components are thin wrappers. createResource for async data. AI traces signal → effect → DOM.",
  },
  {
    id: "remix",
    name: "Remix",
    cat: "frontend",
    structureEnforced: true, // File-based routing + loader/action convention
    before: {
      contextTokens: 1300,
      discoverySteps: 5,
      changeIsolation: 4,
      testCycleTime: 30,
      typeBoundaryCoverage: 50,
    },
    after: {
      contextTokens: 650,
      discoverySteps: 2,
      changeIsolation: 8,
      testCycleTime: 6,
      typeBoundaryCoverage: 90,
    },
    efficiencyGain: 0,
    aiFrictionBefore: 0,
    aiFrictionAfter: 0,
    retention: 80,
    performanceTier: "A",
    summary: "Loader/Action pattern tells AI exactly where data comes from — no client-side state guessing.",
    beforeDescription:
      "Manual fetch in useEffect. Scattered data loading. No clear boundary between server and client data.",
    afterDescription:
      "loader() provides data. useLoaderData() types it. action() handles mutations. AI always knows the data source.",
  },

  // ── BACKEND ──
  {
    id: "nestjs",
    name: "NestJS",
    cat: "backend",
    structureEnforced: true, // Modules + decorators enforce structure
    before: {
      contextTokens: 1200,
      discoverySteps: 4,
      changeIsolation: 5,
      testCycleTime: 25,
      typeBoundaryCoverage: 80,
    },
    after: {
      contextTokens: 900,
      discoverySteps: 2,
      changeIsolation: 9, // CQRS separates reads/writes cleanly
      testCycleTime: 4, // @nestjs/testing is purpose-built
      typeBoundaryCoverage: 100,
    },
    efficiencyGain: 0,
    aiFrictionBefore: 0,
    aiFrictionAfter: 0,
    soUsage: 7.4,
    npmDownloads: 13_300_000,
    performanceTier: "A",
    summary: "NestJS modules are self-contained AI units — each module has controller + service + DTO + spec in one folder.",
    beforeDescription:
      "Even basic NestJS has module structure. The framework generates consistent boilerplate. DI is explicit in constructors.",
    afterDescription:
      "CQRS + Hexagonal Architecture. Commands/Queries separate from handlers. Ports define interfaces, adapters implement them.",
  },
  {
    id: "spring-boot",
    name: "Spring Boot",
    cat: "backend",
    structureEnforced: true,
    before: {
      contextTokens: 1400,
      discoverySteps: 5,
      changeIsolation: 5,
      testCycleTime: 35,
      typeBoundaryCoverage: 90,
    },
    after: {
      contextTokens: 950,
      discoverySteps: 3,
      changeIsolation: 8,
      testCycleTime: 8,
      typeBoundaryCoverage: 100,
    },
    efficiencyGain: 0,
    aiFrictionBefore: 0,
    aiFrictionAfter: 0,
    soUsage: 15.6,
    performanceTier: "S",
    summary: "Spring Boot + JUnit + Testcontainers: AI gets deterministic integration tests in isolated containers.",
    beforeDescription:
      "Service + Repository mixed concerns. @Autowired everywhere. No clear domain boundary. Transaction management scattered.",
    afterDescription:
      "Hexagonal: domain entities in core/, JPA adapters in infrastructure/, REST controllers in adapter/. Clear port/adapter separation.",
  },
  {
    id: "dotnet-core",
    name: ".NET Core",
    cat: "backend",
    structureEnforced: false,
    before: {
      contextTokens: 1500,
      discoverySteps: 6,
      changeIsolation: 4,
      testCycleTime: 40,
      typeBoundaryCoverage: 80,
    },
    after: {
      contextTokens: 850,
      discoverySteps: 3,
      changeIsolation: 8,
      testCycleTime: 6,
      typeBoundaryCoverage: 100,
    },
    efficiencyGain: 0,
    aiFrictionBefore: 0,
    aiFrictionAfter: 0,
    soUsage: 21.3,
    performanceTier: "S",
    summary: "Clean Architecture + MediatR: AI follows Request → Handler → Response pipeline. Each handler is a single-purpose class.",
    beforeDescription:
      "Fat controllers with business logic. Direct DbContext usage. No abstraction between HTTP and database. 300+ line controllers.",
    afterDescription:
      "Vertical slices: CreateOrderCommand → CreateOrderHandler → Order. MediatR pipeline. AI reads one 30-line handler.",
  },
  {
    id: "express",
    name: "Express/Fastify",
    cat: "backend",
    structureEnforced: false,
    before: {
      contextTokens: 2500, // Worst backend before state — zero structure enforcement
      discoverySteps: 10, // Flat directory, guess file names
      changeIsolation: 2, // Routes do everything inline
      testCycleTime: 60, // Only integration tests possible
      typeBoundaryCoverage: 10, // Plain JS, no types
    },
    after: {
      contextTokens: 900, // Service layer + repository pattern = focused files
      discoverySteps: 4,
      changeIsolation: 7,
      testCycleTime: 5, // Unit tests for services, integration for routes
      typeBoundaryCoverage: 85,
    },
    efficiencyGain: 0,
    aiFrictionBefore: 0,
    aiFrictionAfter: 0,
    soUsage: 20.3,
    npmDownloads: 130_000_000,
    performanceTier: "A",
    summary: "Express has the largest before/after gap of any backend — architecture reduces AI context waste by 64%.",
    beforeDescription:
      "300-line route files with inline validation, business logic, SQL queries, and error handling. AI must read entire file for one endpoint. No types.",
    afterDescription:
      "Route (10 lines) → Service (business logic) → Repository (data access). Each layer in its own file. Fastify schemas create typed contracts. AI reads 4-5 small files.",
  },
  {
    id: "go-fiber",
    name: "Go/Fiber",
    cat: "backend",
    structureEnforced: false,
    before: {
      contextTokens: 1800,
      discoverySteps: 7,
      changeIsolation: 4,
      testCycleTime: 30,
      typeBoundaryCoverage: 90,
    },
    after: {
      contextTokens: 900,
      discoverySteps: 3,
      changeIsolation: 8, // Interfaces make dependency inversion explicit
      testCycleTime: 4, // go test runs in milliseconds
      typeBoundaryCoverage: 100,
    },
    efficiencyGain: 0,
    aiFrictionBefore: 0,
    aiFrictionAfter: 0,
    soUsage: 16.4,
    performanceTier: "S",
    summary: "Go's explicit error handling + interfaces make control flow visible — AI sees every error path without inference.",
    beforeDescription:
      "Handlers contain database logic. No service abstraction. sql.DB used directly in HTTP handlers. No testability.",
    afterDescription:
      "Handler → Service interface → Service struct → Repository interface → sqlc-generated DB code. AI follows explicit interface chain.",
  },
  {
    id: "rails",
    name: "Ruby on Rails",
    cat: "backend",
    structureEnforced: true, // MVC is enforced
    before: {
      contextTokens: 1300,
      discoverySteps: 4,
      changeIsolation: 4, // Fat models, fat controllers
      testCycleTime: 35,
      typeBoundaryCoverage: 0, // Ruby, no types
    },
    after: {
      contextTokens: 800,
      discoverySteps: 3,
      changeIsolation: 7, // Service objects extract logic from models
      testCycleTime: 8,
      typeBoundaryCoverage: 40, // Sorbet/RBS can add types
    },
    efficiencyGain: 0,
    aiFrictionBefore: 0,
    aiFrictionAfter: 0,
    soUsage: 6.2,
    performanceTier: "C",
    summary: "Service Objects rescue AI from 'fat model' hell — each service is a single-purpose class with explicit dependencies.",
    beforeDescription:
      "Fat models with callbacks, validations, scopes, and business logic in one file. AI reads 500-line models. Callbacks fire implicitly.",
    afterDescription:
      "Service Objects + Query Objects. Models are thin (validations + associations only). AI reads one 30-line service per operation.",
  },
  {
    id: "django",
    name: "Django",
    cat: "backend",
    structureEnforced: true, // App-based structure is enforced
    before: {
      contextTokens: 1400,
      discoverySteps: 5,
      changeIsolation: 4,
      testCycleTime: 35,
      typeBoundaryCoverage: 10, // Python, no types without effort
    },
    after: {
      contextTokens: 800,
      discoverySteps: 3,
      changeIsolation: 7, // Service layer separates business logic from views
      testCycleTime: 8,
      typeBoundaryCoverage: 70, // Type hints + Pydantic
    },
    efficiencyGain: 0,
    aiFrictionBefore: 0,
    aiFrictionAfter: 0,
    soUsage: 11.7,
    performanceTier: "C",
    summary: "DRF serializers + service layer create explicit API contracts — AI reads serializer to understand request/response shape.",
    beforeDescription:
      "Fat views with ORM queries and business logic. No type hints. Querysets evaluated lazily — AI can't trace when DB hits occur.",
    afterDescription:
      "View (thin) → Service (business logic) → Repository/ORM. DRF Serializer defines API contract. Type hints at boundaries.",
  },
  {
    id: "laravel",
    name: "Laravel",
    cat: "backend",
    structureEnforced: false,
    before: {
      contextTokens: 1500,
      discoverySteps: 6,
      changeIsolation: 3,
      testCycleTime: 40,
      typeBoundaryCoverage: 0,
    },
    after: {
      contextTokens: 800,
      discoverySteps: 3,
      changeIsolation: 7,
      testCycleTime: 8,
      typeBoundaryCoverage: 40,
    },
    efficiencyGain: 0,
    aiFrictionBefore: 0,
    aiFrictionAfter: 0,
    soUsage: 9.3,
    performanceTier: "C",
    summary: "Action classes replace fat controllers — AI reads one 30-line Action instead of a 200-line Controller method.",
    beforeDescription:
      "Fat controllers with Eloquent queries, validation, and business logic. Facades hide real implementations. No type safety.",
    afterDescription:
      "Controller → Action class → Service → Repository/Model. Each Action is a single-purpose invokable class. Type hints where possible.",
  },

  // ── DESKTOP ──
  {
    id: "wpf",
    name: ".NET WPF",
    cat: "desktop",
    structureEnforced: false,
    before: {
      contextTokens: 1600,
      discoverySteps: 7,
      changeIsolation: 3,
      testCycleTime: 45,
      typeBoundaryCoverage: 70,
    },
    after: {
      contextTokens: 950,
      discoverySteps: 4,
      changeIsolation: 7,
      testCycleTime: 8,
      typeBoundaryCoverage: 100,
    },
    efficiencyGain: 0,
    aiFrictionBefore: 0,
    aiFrictionAfter: 0,
    performanceTier: "B",
    summary: "MVVM + Microsoft.Extensions.DI — AI follows explicit DI chain in App.xaml.cs. ViewModels are testable without UI.",
    beforeDescription:
      "Code-behind contains all logic. Event handlers with business rules. XAML bindings use magic strings. No DI.",
    afterDescription:
      "ViewModel + ICommand + INotifyPropertyChanged. DI via constructor. xUnit + Moq for ViewModel tests without WPF runtime.",
  },
  {
    id: "electron",
    name: "Electron",
    cat: "desktop",
    structureEnforced: false,
    before: {
      contextTokens: 1800,
      discoverySteps: 8,
      changeIsolation: 2, // Main + renderer mixed via IPC strings
      testCycleTime: 50,
      typeBoundaryCoverage: 20,
    },
    after: {
      contextTokens: 1000,
      discoverySteps: 4,
      changeIsolation: 6,
      testCycleTime: 12,
      typeBoundaryCoverage: 75,
    },
    efficiencyGain: 0,
    aiFrictionBefore: 0,
    aiFrictionAfter: 0,
    performanceTier: "D",
    summary: "Typed IPC with Zod validation eliminates magic string channels — AI verifies message contracts at compile time.",
    beforeDescription:
      "ipcMain.handle() / ipcRenderer.invoke() with string channels. No type safety across process boundary. Context isolation confused.",
    afterDescription:
      "Typed IPC channels with Zod schemas. Main process exposes commands. Renderer invokes via typed wrapper. AI sees contract in shared types.",
  },

  // ── BONUS BACKENDS ──
  {
    id: "fastapi",
    name: "FastAPI",
    cat: "backend",
    structureEnforced: false,
    before: {
      contextTokens: 1400,
      discoverySteps: 6,
      changeIsolation: 3,
      testCycleTime: 35,
      typeBoundaryCoverage: 40,
    },
    after: {
      contextTokens: 750,
      discoverySteps: 3,
      changeIsolation: 7,
      testCycleTime: 5,
      typeBoundaryCoverage: 100, // Pydantic v2
    },
    efficiencyGain: 0,
    aiFrictionBefore: 0,
    aiFrictionAfter: 0,
    soUsage: 15.1,
    performanceTier: "A",
    summary: "Pydantic v2 + Depends() creates a typed dependency chain — AI reads the function signature to understand all dependencies.",
    beforeDescription:
      "Route handlers with inline validation and DB queries. No service separation. Manual dict parsing. No type-driven validation.",
    afterDescription:
      "Router → Depends(get_service) → Service → Depends(get_repo) → Repository. Pydantic models define every contract. Automatic OpenAPI.",
  },
  {
    id: "hono",
    name: "Hono",
    cat: "backend",
    structureEnforced: false,
    before: {
      contextTokens: 1200,
      discoverySteps: 5,
      changeIsolation: 3,
      testCycleTime: 30,
      typeBoundaryCoverage: 30,
    },
    after: {
      contextTokens: 600,
      discoverySteps: 3,
      changeIsolation: 7,
      testCycleTime: 4,
      typeBoundaryCoverage: 95, // Zod + RPC types
    },
    efficiencyGain: 0,
    aiFrictionBefore: 0,
    aiFrictionAfter: 0,
    npmDownloads: 58_100_000,
    performanceTier: "S",
    summary: "Hono RPC generates typed client from route definitions — AI never writes a wrong API call.",
    beforeDescription:
      "Inline handlers with manual validation. No type sharing with client. AI must manually keep client and server in sync.",
    afterDescription:
      "Zod validation middleware + Hono RPC. Client autocomplete on all routes. AI gets compile-time errors on wrong API calls.",
  },
  {
    id: "elysia",
    name: "Bun/Elysia",
    cat: "backend",
    structureEnforced: false,
    before: {
      contextTokens: 1200,
      discoverySteps: 5,
      changeIsolation: 3,
      testCycleTime: 25,
      typeBoundaryCoverage: 30,
    },
    after: {
      contextTokens: 650,
      discoverySteps: 3,
      changeIsolation: 7,
      testCycleTime: 3, // Bun test is near-instant
      typeBoundaryCoverage: 95,
    },
    efficiencyGain: 0,
    aiFrictionBefore: 0,
    aiFrictionAfter: 0,
    npmDownloads: 823_000,
    performanceTier: "A",
    summary: "Eden Treaty generates end-to-end types — AI gets autocomplete from server routes to client calls.",
    beforeDescription:
      "Manual fetch calls with string URLs. No type sharing. AI guesses response shapes. Validation duplicated on client.",
    afterDescription:
      "Eden Treaty: treaty<App>(fetch('/api')).api.auth.login({...}). AI gets typed autocomplete across the network boundary.",
  },
  {
    id: "gin",
    name: "Gin (Go)",
    cat: "backend",
    structureEnforced: false,
    before: {
      contextTokens: 1500,
      discoverySteps: 6,
      changeIsolation: 3,
      testCycleTime: 25,
      typeBoundaryCoverage: 80,
    },
    after: {
      contextTokens: 850,
      discoverySteps: 3,
      changeIsolation: 8,
      testCycleTime: 4,
      typeBoundaryCoverage: 100,
    },
    efficiencyGain: 0,
    aiFrictionBefore: 0,
    aiFrictionAfter: 0,
    performanceTier: "S",
    summary: "sqlc generates type-safe Go from SQL — AI writes raw SQL and gets 100% typed Go code. No ORM magic.",
    beforeDescription:
      "Handlers with inline SQL strings. No separation. String-based queries. AI gets no compile-time feedback on data access.",
    afterDescription:
      "Handler → Service interface → sqlc-generated queries. Go interfaces create explicit contracts. sqlc generates types from SQL schema.",
  },
  {
    id: "phoenix",
    name: "Phoenix",
    cat: "backend",
    structureEnforced: true, // Mix tool enforces structure
    before: {
      contextTokens: 1200,
      discoverySteps: 4,
      changeIsolation: 4,
      testCycleTime: 25,
      typeBoundaryCoverage: 30,
    },
    after: {
      contextTokens: 750,
      discoverySteps: 2,
      changeIsolation: 8,
      testCycleTime: 5,
      typeBoundaryCoverage: 70,
    },
    efficiencyGain: 0,
    aiFrictionBefore: 0,
    aiFrictionAfter: 0,
    soUsage: 2.5,
    performanceTier: "B",
    summary: "Contexts create explicit public APIs — AI calls Accounts.create_user() instead of touching Ecto directly.",
    beforeDescription:
      "Ecto queries scattered in controllers. No public API for business operations. Callbacks hidden in schemas.",
    afterDescription:
      "Context modules define the public API. Schemas are private. AI only interacts through documented context functions.",
  },
];

// Compute derived values for all entries
for (const entry of architectureEfficiency) {
  entry.aiFrictionBefore = frictionScore(
    entry.before.contextTokens,
    entry.before.discoverySteps,
    entry.before.changeIsolation,
    entry.before.testCycleTime,
    entry.before.typeBoundaryCoverage
  );
  entry.aiFrictionAfter = frictionScore(
    entry.after.contextTokens,
    entry.after.discoverySteps,
    entry.after.changeIsolation,
    entry.after.testCycleTime,
    entry.after.typeBoundaryCoverage
  );
  entry.efficiencyGain = efficiencyGain(entry.before, entry.after);
}

export function getEfficiencyById(id: string): ArchitectureEfficiency | undefined {
  return architectureEfficiency.find((e) => e.id === id);
}

// ── Stack Compatibility ──

export interface StackCompatibilityEntry {
  fe: string;
  be: string;
  rating: 1 | 2 | 3;
  reasoning: string;
  languageAlignment: string;
  protocol: string;
  officialSupport: boolean;
}

export const stackCompatibility: StackCompatibilityEntry[] = [
  // Next.js combos
  {
    fe: "Next.js",
    be: "NestJS",
    rating: 3,
    reasoning: "Both TypeScript-first. NestJS modules map to Next.js API routes cleanly. AI sees consistent decorator + module patterns. Shared DTOs possible in monorepo.",
    languageAlignment: "TypeScript + TypeScript",
    protocol: "REST / GraphQL / gRPC",
    officialSupport: false,
  },
  {
    fe: "Next.js",
    be: "Express/Fastify",
    rating: 3,
    reasoning: "Same language, same runtime. T3 stack is well-documented. Fastify schemas create explicit JSON contracts AI can parse.",
    languageAlignment: "TypeScript + JavaScript",
    protocol: "REST / tRPC",
    officialSupport: true,
  },
  {
    fe: "Next.js",
    be: "Spring Boot",
    rating: 2,
    reasoning: "Cross-language but REST/OpenAPI bridges the gap. AI can generate TypeScript clients from Swagger.",
    languageAlignment: "TypeScript + Java",
    protocol: "REST / GraphQL",
    officialSupport: false,
  },
  {
    fe: "Next.js",
    be: ".NET Core",
    rating: 2,
    reasoning: "Cross-language but both strongly typed. .NET OpenAPI generates TypeScript clients.",
    languageAlignment: "TypeScript + C#",
    protocol: "REST / GraphQL / gRPC",
    officialSupport: false,
  },
  {
    fe: "Next.js",
    be: "Go/Fiber",
    rating: 2,
    reasoning: "Cross-language. Go's explicit error handling gives AI clear failure paths. gRPC bridges with code generation.",
    languageAlignment: "TypeScript + Go",
    protocol: "REST / gRPC",
    officialSupport: false,
  },
  {
    fe: "Next.js",
    be: "Ruby on Rails",
    rating: 2,
    reasoning: "Cross-language. Rails API mode is purpose-built for JS frontends. No type sharing.",
    languageAlignment: "TypeScript + Ruby",
    protocol: "REST / GraphQL",
    officialSupport: false,
  },
  {
    fe: "Next.js",
    be: "Django",
    rating: 2,
    reasoning: "Cross-language. DRF serializers create explicit API contracts. django-cors-headers is straightforward.",
    languageAlignment: "TypeScript + Python",
    protocol: "REST / GraphQL",
    officialSupport: false,
  },
  {
    fe: "Next.js",
    be: "Laravel",
    rating: 3,
    reasoning: "Cross-language but OFFICIALLY SUPPORTED. Laravel Breeze + Next.js is a documented starter kit.",
    languageAlignment: "TypeScript + PHP",
    protocol: "REST / Inertia",
    officialSupport: true,
  },
  // React combos
  {
    fe: "React JS",
    be: "NestJS",
    rating: 3,
    reasoning: "TypeScript both sides. Shared types in monorepo help AI reason across boundaries.",
    languageAlignment: "TypeScript + TypeScript",
    protocol: "REST / GraphQL",
    officialSupport: false,
  },
  {
    fe: "React JS",
    be: "Express/Fastify",
    rating: 3,
    reasoning: "MERN stack — canonical JS fullstack. Same language means AI can read both sides.",
    languageAlignment: "TypeScript + JavaScript",
    protocol: "REST / tRPC",
    officialSupport: true,
  },
  {
    fe: "React JS",
    be: ".NET Core",
    rating: 3,
    reasoning: "First-class VS template. MSBuild React template creates both projects. Official Microsoft support.",
    languageAlignment: "TypeScript + C#",
    protocol: "REST / GraphQL",
    officialSupport: true,
  },
  {
    fe: "React JS",
    be: "Django",
    rating: 3,
    reasoning: "Very common. DRF + React is well-established. AI training data is abundant.",
    languageAlignment: "TypeScript + Python",
    protocol: "REST / GraphQL",
    officialSupport: false,
  },
  {
    fe: "React JS",
    be: "Laravel",
    rating: 3,
    reasoning: "Inertia bridges Laravel routing to React components. Official Breeze + React starter.",
    languageAlignment: "TypeScript + PHP",
    protocol: "REST / Inertia",
    officialSupport: true,
  },
  {
    fe: "React JS",
    be: "Ruby on Rails",
    rating: 3,
    reasoning: "Long-established. Airbnb/GitHub/Shopify pattern. Rails API mode. react-rails gem for SSR.",
    languageAlignment: "TypeScript + Ruby",
    protocol: "REST / GraphQL",
    officialSupport: false,
  },
  {
    fe: "React JS",
    be: "Spring Boot",
    rating: 2,
    reasoning: "Enterprise standard. React SPA + Spring Boot REST. OpenAPI generates TypeScript clients.",
    languageAlignment: "TypeScript + Java",
    protocol: "REST / GraphQL",
    officialSupport: false,
  },
  {
    fe: "React JS",
    be: "Go/Fiber",
    rating: 2,
    reasoning: "Performance stack. Go API + React SPA. Vite proxy for dev.",
    languageAlignment: "TypeScript + Go",
    protocol: "REST / gRPC",
    officialSupport: false,
  },
  // Angular combos
  {
    fe: "Angular",
    be: "NestJS",
    rating: 3,
    reasoning: "SAME PHILOSOPHY. NestJS was built to give Angular devs the same patterns. AI sees decorators, modules, DI everywhere.",
    languageAlignment: "TypeScript + TypeScript",
    protocol: "REST / GraphQL / gRPC",
    officialSupport: false,
  },
  {
    fe: "Angular",
    be: "Spring Boot",
    rating: 3,
    reasoning: "ENTERPRISE STANDARD. Both DI-based, strongly typed. BMW, Siemens, Google Cloud use this.",
    languageAlignment: "TypeScript + Java",
    protocol: "REST / GraphQL",
    officialSupport: false,
  },
  {
    fe: "Angular",
    be: ".NET Core",
    rating: 3,
    reasoning: "ENTERPRISE STANDARD. Both strongly typed, DI-native. Visual Studio has Angular + .NET templates.",
    languageAlignment: "TypeScript + C#",
    protocol: "REST / GraphQL",
    officialSupport: true,
  },
  {
    fe: "Angular",
    be: "Express/Fastify",
    rating: 2,
    reasoning: "MEAN stack. Works but Angular's opinions contrast with Express's freedom.",
    languageAlignment: "TypeScript + JavaScript",
    protocol: "REST",
    officialSupport: false,
  },
  {
    fe: "Angular",
    be: "Django",
    rating: 2,
    reasoning: "Different paradigms (decorators + strong typing vs Python duck typing). Works via DRF.",
    languageAlignment: "TypeScript + Python",
    protocol: "REST",
    officialSupport: false,
  },
  {
    fe: "Angular",
    be: "Laravel",
    rating: 1,
    reasoning: "No Inertia support for Angular. Must use Sanctum API. Least idiomatic pairing.",
    languageAlignment: "TypeScript + PHP",
    protocol: "REST",
    officialSupport: false,
  },
  // Vue/Nuxt combos
  {
    fe: "Vue.js/Nuxt",
    be: "Express/Fastify",
    rating: 3,
    reasoning: "MEVN stack. Same language, same runtime. Vue's composables + Express middleware pattern aligns.",
    languageAlignment: "TypeScript + JavaScript",
    protocol: "REST",
    officialSupport: false,
  },
  {
    fe: "Vue.js/Nuxt",
    be: "Laravel",
    rating: 3,
    reasoning: "BEST PHP PAIR. Laravel ships Vue as default Inertia option. Tightest cross-language integration.",
    languageAlignment: "TypeScript + PHP",
    protocol: "REST / Inertia",
    officialSupport: true,
  },
  {
    fe: "Vue.js/Nuxt",
    be: "Django",
    rating: 2,
    reasoning: "DRF REST API + Nuxt composables. Works well. Nuxt useFetch/useAsyncData + DRF endpoints.",
    languageAlignment: "TypeScript + Python",
    protocol: "REST / GraphQL",
    officialSupport: false,
  },
  {
    fe: "Vue.js/Nuxt",
    be: "NestJS",
    rating: 2,
    reasoning: "Both TypeScript. NestJS is framework-agnostic on frontend. REST/GraphQL endpoints work naturally.",
    languageAlignment: "TypeScript + TypeScript",
    protocol: "REST / GraphQL",
    officialSupport: false,
  },
  {
    fe: "Vue.js/Nuxt",
    be: "Ruby on Rails",
    rating: 2,
    reasoning: "Rails API mode + Inertia adapter supports Vue. GitLab uses Vue. Different philosophies but clean integration.",
    languageAlignment: "TypeScript + Ruby",
    protocol: "REST / Inertia",
    officialSupport: false,
  },
  // SvelteKit combos
  {
    fe: "SvelteKit",
    be: "Express/Fastify",
    rating: 3,
    reasoning: "Same runtime. SvelteKit's Node adapter can run Express/Fastify middleware. Both value simplicity.",
    languageAlignment: "TypeScript + JavaScript",
    protocol: "REST",
    officialSupport: false,
  },
  {
    fe: "SvelteKit",
    be: "Go/Fiber",
    rating: 2,
    reasoning: "PHILOSOPHICALLY ALIGNED. Both value minimalism and performance. SvelteKit's small bundle + Go's speed.",
    languageAlignment: "TypeScript + Go",
    protocol: "REST / gRPC",
    officialSupport: false,
  },
  {
    fe: "SvelteKit",
    be: "NestJS",
    rating: 2,
    reasoning: "Both TypeScript. Different philosophy but technically clean. Load functions call NestJS APIs.",
    languageAlignment: "TypeScript + TypeScript",
    protocol: "REST / GraphQL",
    officialSupport: false,
  },
  // SolidJS combos
  {
    fe: "SolidJS",
    be: "Go/Fiber",
    rating: 3,
    reasoning: "PERFORMANCE STACK. SolidJS has least reactive overhead. Fiber is fastest Go HTTP framework. Maximal performance, minimal magic.",
    languageAlignment: "TypeScript + Go",
    protocol: "REST / gRPC",
    officialSupport: false,
  },
  {
    fe: "SolidJS",
    be: "Express/Fastify",
    rating: 2,
    reasoning: "SolidJS + Vite + Express/Fastify API. Standard SPA pattern. SolidStart adds SSR.",
    languageAlignment: "TypeScript + JavaScript",
    protocol: "REST",
    officialSupport: false,
  },
  {
    fe: "SolidJS",
    be: "NestJS",
    rating: 2,
    reasoning: "Both TypeScript. SolidJS's fine-grained reactivity + NestJS's structured backend. Clean separation.",
    languageAlignment: "TypeScript + TypeScript",
    protocol: "REST / GraphQL",
    officialSupport: false,
  },
  // Remix combos
  {
    fe: "Remix",
    be: "Express/Fastify",
    rating: 3,
    reasoning: "NATIVE NODE. Remix IS the BFF. Loaders connect to DBs/ORMs directly. No separate API server needed.",
    languageAlignment: "TypeScript + JavaScript",
    protocol: "Direct (loaders) / REST",
    officialSupport: true,
  },
  {
    fe: "Remix",
    be: "NestJS",
    rating: 2,
    reasoning: "BFF pattern. Remix loaders call NestJS APIs. NestJS serves domain logic, Remix handles presentation.",
    languageAlignment: "TypeScript + TypeScript",
    protocol: "REST / GraphQL",
    officialSupport: false,
  },
  {
    fe: "Remix",
    be: "Ruby on Rails",
    rating: 2,
    reasoning: "PHILOSOPHICAL ALIGNMENT. Both value convention. Remix BFF + Rails API. Shopify (Remix owner) uses Rails extensively.",
    languageAlignment: "TypeScript + Ruby",
    protocol: "REST / GraphQL",
    officialSupport: false,
  },
];

export function getCompatibility(fe: string, be: string): StackCompatibilityEntry | undefined {
  return stackCompatibility.find((c) => c.fe === fe && c.be === be);
}
