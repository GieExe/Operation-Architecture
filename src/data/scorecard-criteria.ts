export interface ScoreDimension {
  id: string;
  label: string;
  description: string;
  weight: number;
  lowLabel: string;
  highLabel: string;
}

export const scoreDimensions: ScoreDimension[] = [
  {
    id: "testability",
    label: "Testability",
    description: "How easily can unit, integration, and E2E tests be written? Considers built-in testing utilities, mocking support, and DI facilitating test isolation.",
    weight: 15,
    lowLabel: "Manual mocking required",
    highLabel: "Built-in test harness + DI mocking",
  },
  {
    id: "separation",
    label: "Separation of Concerns",
    description: "How cleanly does the architecture isolate domain logic from infrastructure, presentation, and data access? Measured by layer count and boundary enforcement.",
    weight: 15,
    lowLabel: "Logic mixed with UI/IO",
    highLabel: "Domain fully isolated via ports/adapters",
  },
  {
    id: "modularity",
    label: "Modularity",
    description: "How well does the pattern support feature-based organization, independent development, and team scaling? Higher scores mean clearer module boundaries.",
    weight: 12,
    lowLabel: "Monolithic file structure",
    highLabel: "Feature-based with clear contracts",
  },
  {
    id: "typeSafety",
    label: "Type Safety",
    description: "How much compile-time safety does the architecture provide? Considers language type system, shared types between layers, and API contract enforcement.",
    weight: 10,
    lowLabel: "Runtime-only validation",
    highLabel: "End-to-end compile-time types",
  },
  {
    id: "performance",
    label: "Runtime Performance",
    description: "Startup time, request throughput, bundle size, and rendering efficiency. Based on published benchmarks and architectural characteristics.",
    weight: 14,
    lowLabel: "Noticeable overhead",
    highLabel: "Near-native throughput",
  },
  {
    id: "learnability",
    label: "Learning Curve",
    description: "How quickly can a new team member become productive? Lower ceremony, better docs, and fewer concepts mean higher scores.",
    weight: 12,
    lowLabel: "Steep, many concepts",
    highLabel: "Gentle, well-documented",
  },
  {
    id: "scalability",
    label: "Team Scalability",
    description: "How well does the pattern scale as the team grows from 2 to 20+ developers? Considers merge conflict surface, independent deployability, and code ownership.",
    weight: 12,
    lowLabel: "Breaks down above 5 devs",
    highLabel: "Scales to 20+ devs smoothly",
  },
  {
    id: "ecosystem",
    label: "Ecosystem & Tooling",
    description: "Quality and maturity of testing tools, CI/CD integrations, monitoring, debugging, IDE support, and community packages available for the architecture pattern.",
    weight: 10,
    lowLabel: "Sparse tooling",
    highLabel: "Rich, mature ecosystem",
  },
];

export interface ArchitectureTierComparison {
  small: number;
  serious: number;
  improvement: number;
}

export type ScoreMap = Record<string, number>;
