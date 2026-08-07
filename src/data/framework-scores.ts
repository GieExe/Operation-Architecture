import type { ArchitectureTierComparison, ScoreMap } from "./scorecard-criteria";

export interface FrameworkScoreEntry {
  id: string;
  scores: ScoreMap;
  tierComparison: ArchitectureTierComparison;
}

export const frameworkScores: FrameworkScoreEntry[] = [
  // ── MOBILE ──
  {
    id: "react-native",
    scores: {
      testability: 72, separation: 65, modularity: 78, typeSafety: 68,
      performance: 70, learnability: 68, scalability: 76, ecosystem: 82,
    },
    tierComparison: { small: 48, serious: 77, improvement: 60 },
  },
  {
    id: "flutter",
    scores: {
      testability: 80, separation: 72, modularity: 76, typeSafety: 85,
      performance: 88, learnability: 58, scalability: 74, ecosystem: 76,
    },
    tierComparison: { small: 52, serious: 80, improvement: 54 },
  },
  {
    id: "swift",
    scores: {
      testability: 78, separation: 70, modularity: 74, typeSafety: 90,
      performance: 92, learnability: 60, scalability: 78, ecosystem: 80,
    },
    tierComparison: { small: 50, serious: 81, improvement: 62 },
  },
  {
    id: "android",
    scores: {
      testability: 76, separation: 74, modularity: 80, typeSafety: 88,
      performance: 86, learnability: 52, scalability: 82, ecosystem: 84,
    },
    tierComparison: { small: 49, serious: 82, improvement: 67 },
  },
  {
    id: "ionic",
    scores: {
      testability: 56, separation: 52, modularity: 54, typeSafety: 58,
      performance: 45, learnability: 74, scalability: 50, ecosystem: 60,
    },
    tierComparison: { small: 42, serious: 55, improvement: 31 },
  },
  {
    id: "dotnet-maui",
    scores: {
      testability: 74, separation: 68, modularity: 72, typeSafety: 86,
      performance: 65, learnability: 56, scalability: 70, ecosystem: 68,
    },
    tierComparison: { small: 46, serious: 72, improvement: 57 },
  },

  // ── FRONTEND ──
  {
    id: "nextjs",
    scores: {
      testability: 76, separation: 80, modularity: 82, typeSafety: 84,
      performance: 80, learnability: 62, scalability: 84, ecosystem: 90,
    },
    tierComparison: { small: 56, serious: 86, improvement: 54 },
  },
  {
    id: "react",
    scores: {
      testability: 72, separation: 62, modularity: 66, typeSafety: 70,
      performance: 72, learnability: 74, scalability: 68, ecosystem: 92,
    },
    tierComparison: { small: 50, serious: 72, improvement: 44 },
  },
  {
    id: "angular",
    scores: {
      testability: 82, separation: 78, modularity: 86, typeSafety: 88,
      performance: 66, learnability: 44, scalability: 88, ecosystem: 86,
    },
    tierComparison: { small: 48, serious: 84, improvement: 75 },
  },
  {
    id: "vue",
    scores: {
      testability: 70, separation: 64, modularity: 72, typeSafety: 60,
      performance: 82, learnability: 82, scalability: 72, ecosystem: 78,
    },
    tierComparison: { small: 54, serious: 74, improvement: 37 },
  },
  {
    id: "svelte",
    scores: {
      testability: 68, separation: 62, modularity: 70, typeSafety: 56,
      performance: 94, learnability: 86, scalability: 66, ecosystem: 62,
    },
    tierComparison: { small: 50, serious: 70, improvement: 40 },
  },
  {
    id: "solidjs",
    scores: {
      testability: 64, separation: 60, modularity: 64, typeSafety: 68,
      performance: 96, learnability: 76, scalability: 60, ecosystem: 50,
    },
    tierComparison: { small: 46, serious: 64, improvement: 39 },
  },
  {
    id: "remix",
    scores: {
      testability: 70, separation: 74, modularity: 76, typeSafety: 78,
      performance: 78, learnability: 70, scalability: 74, ecosystem: 66,
    },
    tierComparison: { small: 52, serious: 76, improvement: 46 },
  },

  // ── BACKEND ──
  {
    id: "nestjs",
    scores: {
      testability: 92, separation: 90, modularity: 94, typeSafety: 86,
      performance: 62, learnability: 46, scalability: 92, ecosystem: 84,
    },
    tierComparison: { small: 42, serious: 90, improvement: 114 },
  },
  {
    id: "spring-boot",
    scores: {
      testability: 88, separation: 86, modularity: 90, typeSafety: 90,
      performance: 72, learnability: 44, scalability: 92, ecosystem: 90,
    },
    tierComparison: { small: 44, serious: 89, improvement: 102 },
  },
  {
    id: "dotnet-core",
    scores: {
      testability: 86, separation: 84, modularity: 88, typeSafety: 92,
      performance: 84, learnability: 52, scalability: 90, ecosystem: 88,
    },
    tierComparison: { small: 46, serious: 88, improvement: 91 },
  },
  {
    id: "express",
    scores: {
      testability: 50, separation: 40, modularity: 42, typeSafety: 36,
      performance: 68, learnability: 90, scalability: 38, ecosystem: 86,
    },
    tierComparison: { small: 38, serious: 52, improvement: 37 },
  },
  {
    id: "go-fiber",
    scores: {
      testability: 70, separation: 62, modularity: 66, typeSafety: 76,
      performance: 94, learnability: 68, scalability: 72, ecosystem: 64,
    },
    tierComparison: { small: 48, serious: 72, improvement: 50 },
  },
  {
    id: "rails",
    scores: {
      testability: 74, separation: 56, modularity: 54, typeSafety: 34,
      performance: 50, learnability: 84, scalability: 58, ecosystem: 82,
    },
    tierComparison: { small: 46, serious: 62, improvement: 35 },
  },
  {
    id: "django",
    scores: {
      testability: 72, separation: 62, modularity: 58, typeSafety: 30,
      performance: 52, learnability: 80, scalability: 62, ecosystem: 78,
    },
    tierComparison: { small: 44, serious: 64, improvement: 45 },
  },
  {
    id: "laravel",
    scores: {
      testability: 72, separation: 58, modularity: 56, typeSafety: 32,
      performance: 48, learnability: 82, scalability: 60, ecosystem: 84,
    },
    tierComparison: { small: 44, serious: 64, improvement: 45 },
  },

  // ── DESKTOP ──
  {
    id: "dotnet-wpf",
    scores: {
      testability: 80, separation: 76, modularity: 82, typeSafety: 90,
      performance: 88, learnability: 48, scalability: 80, ecosystem: 76,
    },
    tierComparison: { small: 46, serious: 80, improvement: 74 },
  },
  {
    id: "electron",
    scores: {
      testability: 64, separation: 58, modularity: 60, typeSafety: 62,
      performance: 44, learnability: 72, scalability: 56, ecosystem: 74,
    },
    tierComparison: { small: 44, serious: 60, improvement: 36 },
  },
];

export function getFrameworkScore(id: string): FrameworkScoreEntry | undefined {
  return frameworkScores.find((f) => f.id === id);
}

export function getFrameworkScoreOrThrow(id: string): FrameworkScoreEntry {
  const entry = getFrameworkScore(id);
  if (!entry) throw new Error(`Framework score not found: ${id}`);
  return entry;
}
