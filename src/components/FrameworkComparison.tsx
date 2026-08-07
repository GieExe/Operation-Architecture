"use client";

import { useState, useMemo } from "react";
import { frameworks } from "../data/frameworks";
import { getFrameworkScoreOrThrow } from "../data/framework-scores";
import { getBenchmark } from "../data/benchmark-data";
import { scoreDimensions } from "../data/scorecard-criteria";

const catLabel: Record<string, string> = {
  mobile: "Mobile",
  frontend: "Frontend",
  backend: "Backend",
  desktop: "Desktop",
};

const catColor: Record<string, string> = {
  mobile: "var(--rose)",
  frontend: "var(--blue)",
  backend: "var(--green)",
  desktop: "var(--purple)",
};

const perfTierColor: Record<string, string> = {
  S: "var(--green)",
  A: "var(--blue)",
  B: "var(--accent)",
  C: "var(--rose)",
};

const tierLabel: Record<string, string> = {
  S: "S — Elite",
  A: "A — Excellent",
  B: "B — Good",
  C: "C — Adequate",
};

export default function FrameworkComparison() {
  const [leftId, setLeftId] = useState(frameworks[0].id);
  const [rightId, setRightId] = useState(frameworks[7].id);

  const left = frameworks.find((f) => f.id === leftId)!;
  const right = frameworks.find((f) => f.id === rightId)!;

  const leftScore = getFrameworkScoreOrThrow(leftId);
  const rightScore = getFrameworkScoreOrThrow(rightId);

  const leftBench = getBenchmark(leftId);
  const rightBench = getBenchmark(rightId);

  const dimensions = scoreDimensions;

  function winner(a: number, b: number): "left" | "right" | "tie" {
    if (a > b) return "left";
    if (b > a) return "right";
    return "tie";
  }

  const leftWins = dimensions.filter(
    (d) => winner(leftScore.scores[d.id], rightScore.scores[d.id]) === "left"
  ).length;
  const rightWins = dimensions.filter(
    (d) => winner(leftScore.scores[d.id], rightScore.scores[d.id]) === "right"
  ).length;

  const allFws = useMemo(() => {
    const cats = ["mobile", "frontend", "backend", "desktop"];
    return cats.flatMap((cat) =>
      frameworks
        .filter((f) => f.cat === cat)
        .map((f) => ({ id: f.id, name: f.name, cat }))
    );
  }, []);

  return (
    <section className="compare-section" id="compare">
      <h2>Head-to-Head Framework Comparison</h2>
      <p className="section-desc">
        Compare any two frameworks side by side across architecture scores,
        performance benchmarks, and ecosystem metrics. Data sourced from Stack
        Overflow 2025, State of JS 2024, npm registry, and architectural
        analysis.
      </p>

      <div className="cmp-selectors">
        <div className="cmp-select-group">
          <select
            className="sc-select"
            value={leftId}
            onChange={(e) => setLeftId(e.target.value)}
          >
            {allFws.map((f) => (
              <option key={f.id} value={f.id}>
                [{catLabel[f.cat]}] {f.name}
              </option>
            ))}
          </select>
        </div>
        <span className="cmp-vs">vs</span>
        <div className="cmp-select-group">
          <select
            className="sc-select"
            value={rightId}
            onChange={(e) => setRightId(e.target.value)}
          >
            {allFws.map((f) => (
              <option key={f.id} value={f.id}>
                [{catLabel[f.cat]}] {f.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="cmp-result-bar">
        <div className="cmp-result-left">
          <span style={{ color: catColor[left.cat] }}>{left.name}</span>
          <span className="cmp-win-count">{leftWins} wins</span>
        </div>
        <div className="cmp-result-right">
          <span className="cmp-win-count">{rightWins} wins</span>
          <span style={{ color: catColor[right.cat] }}>{right.name}</span>
        </div>
      </div>

      <div className="cmp-table-wrap">
        <table className="cmp-table">
          <thead>
            <tr>
              <th>Dimension</th>
              <th style={{ color: catColor[left.cat] }}>{left.name}</th>
              <th style={{ color: catColor[right.cat] }}>{right.name}</th>
              <th>Winner</th>
            </tr>
          </thead>
          <tbody>
            {/* Architecture scores */}
            {dimensions.map((dim) => {
              const lv = leftScore.scores[dim.id];
              const rv = rightScore.scores[dim.id];
              const w = winner(lv, rv);
              return (
                <tr key={dim.id}>
                  <td className="cmp-dim-name">{dim.label}</td>
                  <td className={`cmp-val ${w === "left" ? "winner" : ""}`}>
                    {lv}
                  </td>
                  <td className={`cmp-val ${w === "right" ? "winner" : ""}`}>
                    {rv}
                  </td>
                  <td className="cmp-winner-cell">
                    {w === "tie" ? (
                      <span className="cmp-tie">—</span>
                    ) : (
                      <span
                        className="cmp-winner-label"
                        style={{
                          color:
                            w === "left"
                              ? catColor[left.cat]
                              : catColor[right.cat],
                        }}
                      >
                        {w === "left" ? left.name : right.name}
                      </span>
                    )}
                  </td>
                </tr>
              );
            })}

            {/* Benchmarks separator */}
            <tr className="cmp-sep">
              <td colSpan={4}>BENCHMARKS & ECOSYSTEM</td>
            </tr>

            {/* Perf tier */}
            <tr>
              <td className="cmp-dim-name">Performance Tier</td>
              <td
                className={`cmp-val ${winner(
                  ["S","A","B","C"].indexOf(leftBench?.perfTier ?? "C"),
                  ["S","A","B","C"].indexOf(rightBench?.perfTier ?? "C")
                ) === "right" ? "" : "winner"}`}
                style={{
                  color: perfTierColor[leftBench?.perfTier ?? "C"],
                }}
              >
                {leftBench ? tierLabel[leftBench.perfTier] : "—"}
              </td>
              <td
                className={`cmp-val ${winner(
                  ["S","A","B","C"].indexOf(leftBench?.perfTier ?? "C"),
                  ["S","A","B","C"].indexOf(rightBench?.perfTier ?? "C")
                ) === "left" ? "" : "winner"}`}
                style={{
                  color: perfTierColor[rightBench?.perfTier ?? "C"],
                }}
              >
                {rightBench ? tierLabel[rightBench.perfTier] : "—"}
              </td>
              <td className="cmp-winner-cell">
                {leftBench && rightBench
                  ? (["S","A","B","C"].indexOf(leftBench.perfTier) <
                    ["S","A","B","C"].indexOf(rightBench.perfTier)
                    ? left.name
                    : ["S","A","B","C"].indexOf(rightBench.perfTier) <
                      ["S","A","B","C"].indexOf(leftBench.perfTier)
                    ? right.name
                    : "—")
                  : "—"}
              </td>
            </tr>

            {/* npm downloads */}
            <tr>
              <td className="cmp-dim-name">npm Downloads/wk</td>
              {[leftBench, rightBench].map((b, i) => (
                <td
                  key={i}
                  className={`cmp-val ${
                    b?.npmDownloads
                      ? winner(
                          leftBench?.npmDownloads ?? 0,
                          rightBench?.npmDownloads ?? 0
                        ) === (i === 0 ? "left" : "right")
                        ? "winner"
                        : ""
                      : ""
                  }`}
                >
                  {b?.npmDownloads
                    ? `${(b.npmDownloads / 1_000_000).toFixed(1)}M`
                    : "—"}
                </td>
              ))}
              <td className="cmp-winner-cell">
                {leftBench?.npmDownloads && rightBench?.npmDownloads
                  ? winner(leftBench.npmDownloads, rightBench.npmDownloads) ===
                    "left"
                    ? left.name
                    : winner(
                        leftBench.npmDownloads,
                        rightBench.npmDownloads
                      ) === "right"
                    ? right.name
                    : "—"
                  : "—"}
              </td>
            </tr>

            {/* SO usage */}
            <tr>
              <td className="cmp-dim-name">SO Usage %</td>
              {[leftBench, rightBench].map((b, i) => (
                <td
                  key={i}
                  className={`cmp-val ${
                    b?.soUsagePct
                      ? winner(
                          leftBench?.soUsagePct ?? 0,
                          rightBench?.soUsagePct ?? 0
                        ) === (i === 0 ? "left" : "right")
                        ? "winner"
                        : ""
                      : ""
                  }`}
                >
                  {b?.soUsagePct ? `${b.soUsagePct}%` : "—"}
                </td>
              ))}
              <td className="cmp-winner-cell">
                {leftBench?.soUsagePct && rightBench?.soUsagePct
                  ? winner(leftBench.soUsagePct, rightBench.soUsagePct) ===
                    "left"
                    ? left.name
                    : winner(leftBench.soUsagePct, rightBench.soUsagePct) ===
                      "right"
                    ? right.name
                    : "—"
                  : "—"}
              </td>
            </tr>

            {/* Cold start */}
            <tr>
              <td className="cmp-dim-name">Cold Start (ms)</td>
              {[leftBench, rightBench].map((b, i) => (
                <td
                  key={i}
                  className={`cmp-val ${
                    b?.coldStartMs && leftBench?.coldStartMs && rightBench?.coldStartMs
                      ? winner(
                          rightBench.coldStartMs,
                          leftBench.coldStartMs
                        ) === (i === 0 ? "left" : "right")
                        ? "winner"
                        : ""
                      : ""
                  }`}
                >
                  {b?.coldStartMs ? `${b.coldStartMs}ms` : "—"}
                </td>
              ))}
              <td className="cmp-winner-cell">
                {leftBench?.coldStartMs && rightBench?.coldStartMs
                  ? leftBench.coldStartMs < rightBench.coldStartMs
                    ? left.name
                    : rightBench.coldStartMs < leftBench.coldStartMs
                    ? right.name
                    : "—"
                  : "—"}
              </td>
            </tr>

            {/* Bundle size */}
            <tr>
              <td className="cmp-dim-name">Bundle Size (KB gzip)</td>
              {[leftBench, rightBench].map((b, i) => (
                <td
                  key={i}
                  className={`cmp-val ${
                    b?.bundleKb && leftBench?.bundleKb && rightBench?.bundleKb
                      ? winner(
                          rightBench.bundleKb,
                          leftBench.bundleKb
                        ) === (i === 0 ? "left" : "right")
                        ? "winner"
                        : ""
                      : ""
                  }`}
                >
                  {b?.bundleKb ? `${b.bundleKb}` : "—"}
                </td>
              ))}
              <td className="cmp-winner-cell">
                {leftBench?.bundleKb && rightBench?.bundleKb
                  ? leftBench.bundleKb < rightBench.bundleKb
                    ? left.name
                    : rightBench.bundleKb < leftBench.bundleKb
                    ? right.name
                    : "—"
                  : "—"}
              </td>
            </tr>

            {/* Memory */}
            <tr>
              <td className="cmp-dim-name">Memory (MB idle)</td>
              {[leftBench, rightBench].map((b, i) => (
                <td
                  key={i}
                  className={`cmp-val ${
                    b?.memoryMb && leftBench?.memoryMb && rightBench?.memoryMb
                      ? winner(
                          rightBench.memoryMb,
                          leftBench.memoryMb
                        ) === (i === 0 ? "left" : "right")
                        ? "winner"
                        : ""
                      : ""
                  }`}
                >
                  {b?.memoryMb ? `${b.memoryMb}` : "—"}
                </td>
              ))}
              <td className="cmp-winner-cell">
                {leftBench?.memoryMb && rightBench?.memoryMb
                  ? leftBench.memoryMb < rightBench.memoryMb
                    ? left.name
                    : rightBench.memoryMb < leftBench.memoryMb
                    ? right.name
                    : "—"
                  : "—"}
              </td>
            </tr>

            {/* GitHub stars */}
            <tr>
              <td className="cmp-dim-name">GitHub Stars</td>
              {[leftBench, rightBench].map((b, i) => (
                <td
                  key={i}
                  className={`cmp-val ${
                    b?.stars
                      ? winner(
                          leftBench?.stars ?? 0,
                          rightBench?.stars ?? 0
                        ) === (i === 0 ? "left" : "right")
                        ? "winner"
                        : ""
                      : ""
                  }`}
                >
                  {b?.stars
                    ? `${(b.stars / 1000).toFixed(0)}K`
                    : "—"}
                </td>
              ))}
              <td className="cmp-winner-cell">
                {leftBench?.stars && rightBench?.stars
                  ? winner(leftBench.stars, rightBench.stars) === "left"
                    ? left.name
                    : winner(leftBench.stars, rightBench.stars) === "right"
                    ? right.name
                    : "—"
                  : "—"}
              </td>
            </tr>

            {/* SOJS Retention */}
            <tr>
              <td className="cmp-dim-name">Retention Rate</td>
              {[leftBench, rightBench].map((b, i) => (
                <td
                  key={i}
                  className={`cmp-val ${
                    b?.sojsRetention
                      ? winner(
                          leftBench?.sojsRetention ?? 0,
                          rightBench?.sojsRetention ?? 0
                        ) === (i === 0 ? "left" : "right")
                        ? "winner"
                        : ""
                      : ""
                  }`}
                >
                  {b?.sojsRetention ? `${b.sojsRetention}%` : "—"}
                </td>
              ))}
              <td className="cmp-winner-cell">
                {leftBench?.sojsRetention && rightBench?.sojsRetention
                  ? winner(leftBench.sojsRetention, rightBench.sojsRetention) ===
                    "left"
                    ? left.name
                    : winner(
                        leftBench.sojsRetention,
                        rightBench.sojsRetention
                      ) === "right"
                    ? right.name
                    : "—"
                  : "—"}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
