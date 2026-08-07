"use client";

import { useState, useMemo } from "react";
import { architectureEfficiency } from "../data/ai-metrics";

const CAT_COLORS: Record<string, string> = {
  mobile: "var(--rose)",
  frontend: "var(--blue)",
  backend: "var(--green)",
  desktop: "var(--purple)",
};

const CAT_LABELS: Record<string, string> = {
  mobile: "Mobile",
  frontend: "Frontend",
  backend: "Backend",
  desktop: "Desktop",
};

const METRICS = [
  { key: "contextTokens" as const, label: "Context", unit: "tokens", invert: true, icon: "M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7" },
  { key: "discoverySteps" as const, label: "Discovery", unit: "steps", invert: true, icon: "M22 12h-4l-3 9L9 3l-3 9H2" },
  { key: "changeIsolation" as const, label: "Isolation", unit: "/10", invert: false, icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" },
  { key: "testCycleTime" as const, label: "Test Speed", unit: "sec", invert: true, icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" },
  { key: "typeBoundaryCoverage" as const, label: "Type Safety", unit: "%", invert: false, icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
];

function MetricBar({ value, max, color }: { value: number; max: number; color: string }) {
  const pct = Math.min((value / max) * 100, 100);
  return (
    <div className="ba-metric-bar">
      <div className="ba-metric-fill" style={{ width: `${pct}%`, background: color }} />
    </div>
  );
}

function ImpactBadge({ gain, enforced }: { gain: number; enforced: boolean }) {
  if (enforced && gain < 20) {
    return <span className="ba-impact-tag native">Built-in Architecture</span>;
  }
  if (gain >= 50) return <span className="ba-impact-tag high">High Impact +{gain}%</span>;
  if (gain >= 30) return <span className="ba-impact-tag medium">Medium Impact +{gain}%</span>;
  return <span className="ba-impact-tag low">+{gain}% gain</span>;
}

export default function ArchitectureScorecard() {
  const [selectedCat, setSelectedCat] = useState<string>("all");
  const [sortBy, setSortBy] = useState<"efficiencyGain" | "aiFrictionAfter">("efficiencyGain");
  const [expanded, setExpanded] = useState<string | null>(null);
  const [showMethodology, setShowMethodology] = useState(false);

  const filtered = useMemo(() => {
    const list = selectedCat === "all" ? [...architectureEfficiency] : architectureEfficiency.filter((m) => m.cat === selectedCat);
    list.sort((a, b) => (sortBy === "efficiencyGain" ? b.efficiencyGain - a.efficiencyGain : a.aiFrictionAfter - b.aiFrictionAfter));
    return list;
  }, [selectedCat, sortBy]);

  return (
    <section className="scorecard-section" id="scorecard">
      <div className="section-head" style={{ marginBottom: 24 }}>
        <span className="section-line" />
        <div>
          <h2>Before/After Architecture Efficiency</h2>
          <p className="section-desc">
            Measurable impact of structured architecture on AI agent performance. Every metric is derived from observable architectural properties.
          </p>
        </div>
      </div>

      <div className="scorecard-controls">
        <div className="scorecard-filters">
          {(["all", "frontend", "backend", "mobile", "desktop"] as const).map((cat) => (
            <button key={cat} className={`scorecard-pill${selectedCat === cat ? " active" : ""}`} onClick={() => setSelectedCat(cat)}>
              {cat === "all" ? "All" : CAT_LABELS[cat]}
            </button>
          ))}
        </div>
        <div className="scorecard-sort-group">
          <button
            className={`scorecard-pill${sortBy === "efficiencyGain" ? " active" : ""}`}
            onClick={() => setSortBy("efficiencyGain")}
          >
            By Impact
          </button>
          <button
            className={`scorecard-pill${sortBy === "aiFrictionAfter" ? " active" : ""}`}
            onClick={() => setSortBy("aiFrictionAfter")}
          >
            Best AI Score
          </button>
          <button className="methodology-toggle" onClick={() => setShowMethodology(!showMethodology)}>
            {showMethodology ? "Hide Methodology" : "Methodology"}
          </button>
        </div>
      </div>

      {showMethodology && (
        <div className="methodology-panel">
          <div className="methodology-grid">
            <div className="methodology-item">
              <strong>Context Tokens</strong>
              <p>files-per-feature &times; avg-lines-per-file &times; 1.5 tokens/line. Based on directory structure blueprints. Research: &quot;Lost in the Middle&quot; (Liu et al., 2023).</p>
            </div>
            <div className="methodology-item">
              <strong>Discovery Steps</strong>
              <p>Directory depth + files in target directory. SWE-bench analysis: top agents spend ~40% of time on file discovery in unfamiliar repos.</p>
            </div>
            <div className="methodology-item">
              <strong>Change Isolation</strong>
              <p>1-10 scale. &lt;4 = cascading changes. &ge;8 = contained to 1-2 files. Derived from coupling patterns of the architecture.</p>
            </div>
            <div className="methodology-item">
              <strong>Test Cycle Time</strong>
              <p>Estimated seconds to run relevant tests. SWE-bench: test verification is the primary gating factor for AI task completion.</p>
            </div>
            <div className="methodology-item">
              <strong>Type Coverage</strong>
              <p>% of module interfaces carrying type info. Microsoft Research (2024): typed codebases reduce AI hallucination by ~40%.</p>
            </div>
            <div className="methodology-item">
              <strong>AI Friction Score</strong>
              <p>Composite 0-100 (lower = better). Weighted sum of normalized metrics. Each contributes up to 20 points.</p>
            </div>
          </div>
        </div>
      )}

      <div className="scorecard-grid">
        {filtered.map((entry) => {
          const isOpen = expanded === entry.id;
          const frictionDrop = entry.aiFrictionBefore - entry.aiFrictionAfter;
          const maxTokens = 2600;

          return (
            <div key={entry.id} className={`ba-card${isOpen ? " open" : ""}`}>
              <div className="ba-card-header" onClick={() => setExpanded(isOpen ? null : entry.id)}>
                <div className="ba-card-main">
                  <div className="ba-card-info">
                    <span className="ba-cat-dot" style={{ background: CAT_COLORS[entry.cat] }} />
                    <span className="ba-name">{entry.name}</span>
                    <span className="ba-cat-tag" style={{ color: CAT_COLORS[entry.cat], borderColor: CAT_COLORS[entry.cat] + "33" }}>{CAT_LABELS[entry.cat]}</span>
                    <ImpactBadge gain={entry.efficiencyGain} enforced={entry.structureEnforced} />
                  </div>
                  <div className="ba-card-friction">
                    <div className="ba-friction-block before">
                      <div className="ba-friction-num" style={{ color: "var(--rose)" }}>{entry.aiFrictionBefore}</div>
                      <div className="ba-friction-sub">before</div>
                    </div>
                    <div className="ba-friction-arrow">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2">
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                      <span className="ba-friction-drop-badge">-{frictionDrop}</span>
                    </div>
                    <div className="ba-friction-block after">
                      <div className="ba-friction-num" style={{ color: entry.aiFrictionAfter <= 30 ? "var(--green)" : "var(--accent)" }}>{entry.aiFrictionAfter}</div>
                      <div className="ba-friction-sub">after</div>
                    </div>
                  </div>
                  <div className="ba-card-meters">
                    <div className="ba-meter-row">
                      <span className="ba-meter-label">Context</span>
                      <MetricBar value={2600 - entry.after.contextTokens} max={maxTokens} color="var(--blue)" />
                      <span className="ba-meter-val">{entry.after.contextTokens} tok</span>
                    </div>
                    <div className="ba-meter-row">
                      <span className="ba-meter-label">Type Cov.</span>
                      <MetricBar value={entry.after.typeBoundaryCoverage} max={100} color="var(--green)" />
                      <span className="ba-meter-val">{entry.after.typeBoundaryCoverage}%</span>
                    </div>
                  </div>
                  <div className="ba-card-toggle">
                    <svg className={`ba-expand-icon${isOpen ? " rotated" : ""}`} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </div>
                <p className="ba-summary">{entry.summary}</p>
              </div>

              {isOpen && (
                <div className="ba-card-body">
                  <div className="ba-body-grid">
                    <div className="ba-comparison-table-wrap">
                      <table className="ba-comparison-table">
                        <thead>
                          <tr>
                            <th></th>
                            <th className="ba-before-col">Ad-hoc</th>
                            <th className="ba-after-col">Architected</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          {METRICS.map((m) => {
                            const beforeVal = entry.before[m.key];
                            const afterVal = entry.after[m.key];
                            const diff = afterVal - beforeVal;
                            const improved = m.invert ? diff < 0 : diff > 0;
                            const pctChange = beforeVal > 0 ? Math.round(Math.abs(diff / beforeVal) * 100) : 0;
                            return (
                              <tr key={m.key}>
                                <td className="ba-metric-name" title="">
                                  <svg className="ba-metric-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d={m.icon} />
                                  </svg>
                                  {m.label}
                                </td>
                                <td className="ba-before-col">{beforeVal.toLocaleString()}{m.unit === "%" ? "%" : ` ${m.unit}`}</td>
                                <td className="ba-after-col">{afterVal.toLocaleString()}{m.unit === "%" ? "%" : ` ${m.unit}`}</td>
                                <td>
                                  {pctChange > 0 && (
                                    <span className={`ba-delta ${improved ? "improved" : "worse"}`}>
                                      {improved ? "-" : "+"}{pctChange}%
                                    </span>
                                  )}
                                  {pctChange === 0 && <span className="ba-delta neutral">--</span>}
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                    <div className="ba-descriptions">
                      <div className="ba-desc before">
                        <div className="ba-desc-label">Before Architecture</div>
                        <p>{entry.beforeDescription}</p>
                      </div>
                      <div className="ba-desc after">
                        <div className="ba-desc-label">After Architecture</div>
                        <p>{entry.afterDescription}</p>
                      </div>
                    </div>
                  </div>
                  <div className="ba-market-meta">
                    {entry.soUsage != null && <span className="ba-market-chip">SO Survey {entry.soUsage}% usage</span>}
                    {entry.npmDownloads != null && (
                      <span className="ba-market-chip">
                        npm {entry.npmDownloads >= 1_000_000 ? `${(entry.npmDownloads / 1_000_000).toFixed(1)}M/w` : `${(entry.npmDownloads / 1000).toFixed(0)}K/w`}
                      </span>
                    )}
                    {entry.retention != null && <span className="ba-market-chip">retention {entry.retention}%</span>}
                    {entry.performanceTier && <span className="ba-market-chip">perf tier {entry.performanceTier}</span>}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
