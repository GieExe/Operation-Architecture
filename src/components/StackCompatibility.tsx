"use client";

import { useState, useMemo } from "react";
import { stackCompatibility } from "../data/ai-metrics";

const FE_FRAMEWORKS = ["Next.js", "React JS", "Angular", "Vue.js/Nuxt", "SvelteKit", "SolidJS", "Remix"];
const BE_FRAMEWORKS = ["NestJS", "Spring Boot", ".NET Core", "Express/Fastify", "Go/Fiber", "Ruby on Rails", "Django", "Laravel"];

const FE_COLORS: Record<string, string> = {
  "Next.js": "var(--cyan)",
  "React JS": "var(--blue)",
  "Angular": "#ef4444",
  "Vue.js/Nuxt": "#10b981",
  "SvelteKit": "#f97316",
  "SolidJS": "#6366f1",
  "Remix": "var(--accent)",
};

const BE_COLORS: Record<string, string> = {
  "NestJS": "#ef4444",
  "Spring Boot": "#10b981",
  ".NET Core": "#8b5cf6",
  "Express/Fastify": "var(--green)",
  "Go/Fiber": "#06b6d4",
  "Ruby on Rails": "#ef4444",
  "Django": "#0ea5e9",
  "Laravel": "#f97316",
};

const RATING_LABELS: Record<number, string> = {
  3: "Excellent — Official support or documented pattern",
  2: "Good — Well-established, works cleanly",
  1: "Functional — Possible but minimal ecosystem support",
};

export default function StackCompatibility() {
  const [selectedFE, setSelectedFE] = useState<string | null>(null);
  const [selectedBE, setSelectedBE] = useState<string | null>(null);
  const [activeCell, setActiveCell] = useState<{ fe: string; be: string } | null>(null);

  const compatMap = useMemo(() => {
    const map: Record<string, Record<string, (typeof stackCompatibility)[0] | undefined>> = {};
    for (const c of stackCompatibility) {
      if (!map[c.fe]) map[c.fe] = {};
      map[c.fe][c.be] = c;
    }
    return map;
  }, []);

  const active = activeCell ? compatMap[activeCell.fe]?.[activeCell.be] : null;

  const isHighlighted = (fe: string, be: string) => {
    if (activeCell?.fe === fe && activeCell?.be === be) return false;
    return selectedFE === fe || selectedBE === be;
  };

  return (
    <section className="compat-section" id="compatibility">
      <div className="section-head" style={{ marginBottom: 24 }}>
        <span className="section-line" />
        <div>
          <h2>Stack Compatibility for AI Agents</h2>
          <p className="section-desc">
            When AI agents work across a frontend and backend, do the patterns align? Click any cell to see compatibility details.
          </p>
        </div>
      </div>

      <div className="compat-body">
        <div className="compat-table-shell">
          <div className="compat-table-scroll">
            <table className="compat-matrix">
              <thead>
                <tr>
                  <th className="compat-corner"></th>
                  {BE_FRAMEWORKS.map((be) => (
                    <th
                      key={be}
                      className={`compat-th${selectedBE === be ? " selected" : ""}`}
                      onClick={() => setSelectedBE(selectedBE === be ? null : be)}
                    >
                      <span className="compat-th-dot" style={{ background: BE_COLORS[be] }} />
                      <span className="compat-th-label" style={{ color: BE_COLORS[be] }}>{be}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {FE_FRAMEWORKS.map((fe) => (
                  <tr key={fe}>
                    <td
                      className={`compat-fe-name${selectedFE === fe ? " selected" : ""}`}
                      onClick={() => setSelectedFE(selectedFE === fe ? null : fe)}
                    >
                      <span className="compat-fe-dot" style={{ background: FE_COLORS[fe] }} />
                      <span>{fe}</span>
                    </td>
                    {BE_FRAMEWORKS.map((be) => {
                      const compat = compatMap[fe]?.[be];
                      const rating = compat?.rating ?? 0;
                      const isActive = activeCell?.fe === fe && activeCell?.be === be;
                      const highlighted = isHighlighted(fe, be);

                      return (
                        <td
                          key={be}
                          className={`compat-cell${isActive ? " active" : ""}${highlighted ? " highlighted" : ""} rating-${rating}`}
                          onClick={() => {
                            if (isActive) {
                              setActiveCell(null);
                            } else {
                              setActiveCell({ fe, be });
                            }
                          }}
                        >
                          {rating > 0 ? (
                            <span className="compat-dots">
                              <span className={`compat-dot a${rating >= 1 ? "" : " off"}`} />
                              <span className={`compat-dot b${rating >= 2 ? "" : " off"}`} />
                              <span className={`compat-dot c${rating >= 3 ? "" : " off"}`} />
                            </span>
                          ) : (
                            <span className="compat-none">&mdash;</span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {active && activeCell && (
          <div className="compat-detail">
            <button className="compat-detail-close" onClick={() => setActiveCell(null)} aria-label="Close">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
            <div className="compat-detail-header">
              <span className="compat-pair-fe" style={{ color: FE_COLORS[activeCell!.fe] }}>{activeCell!.fe}</span>
              <span className="compat-pair-sep">&harr;</span>
              <span className="compat-pair-be" style={{ color: BE_COLORS[activeCell!.be] }}>{activeCell!.be}</span>
            </div>
            <div className="compat-rating-badge">
              <span className="compat-dots large">
                <span className={`compat-dot a${active.rating >= 1 ? "" : " off"}`} />
                <span className={`compat-dot b${active.rating >= 2 ? "" : " off"}`} />
                <span className={`compat-dot c${active.rating >= 3 ? "" : " off"}`} />
              </span>
              <span className="compat-rating-label">{RATING_LABELS[active.rating]}</span>
            </div>
            <p className="compat-detail-reasoning">{active.reasoning}</p>
            <div className="compat-detail-meta">
              <div className="compat-meta-item">
                <span className="compat-meta-label">Language</span>
                <span className="compat-meta-val">{active.languageAlignment}</span>
              </div>
              <div className="compat-meta-item">
                <span className="compat-meta-label">Protocol</span>
                <span className="compat-meta-val">{active.protocol}</span>
              </div>
              <div className="compat-meta-item">
                <span className="compat-meta-label">Official Support</span>
                <span className={`compat-meta-val${active.officialSupport ? " yes" : ""}`}>
                  {active.officialSupport ? "Yes" : "No"}
                </span>
              </div>
            </div>
          </div>
        )}

        {!active && (
          <div className="compat-detail compat-placeholder">
            <div className="compat-placeholder-content">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.4">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M3 9h18M9 3v18" />
              </svg>
              <p>Click any cell to see stack compatibility details</p>
              <p className="compat-placeholder-sub">Click row or column headers to filter</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
