/**
 * Benchmark Runner — Architecture Impact Measurement
 *
 * Measures the current project across key dimensions to establish a baseline,
 * then tracks changes over time as architecture evolves.
 *
 * Usage: node scripts/benchmark.js [--json]
 *   --json  Output machine-readable JSON instead of formatted report
 *
 * Metrics collected:
 *   1. Build time (ms) — `next build` duration
 *   2. Output size (KB) — `out/` directory total size
 *   3. HTML files count + total size
 *   4. JS files count + total size
 *   5. CSS files count + total size
 *   6. Lines of code — total across src/ and scripts/
 *   7. File count — total files in src/ and components/
 *   8. Lint time (ms) — `next lint` duration
 *   9. Dev server startup time (ms) — `next dev` until ready
 */

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const { performance } = require("perf_hooks");

const ROOT = path.resolve(__dirname, "..");
const OUT_DIR = path.join(ROOT, "out");
const SRC_DIR = path.join(ROOT, "src");
const RESULTS_FILE = path.join(ROOT, "benchmarks", "results.json");

function formatMs(ms) {
  if (ms < 1000) return `${Math.round(ms)}ms`;
  return `${(ms / 1000).toFixed(2)}s`;
}

function formatKB(bytes) {
  return `${(bytes / 1024).toFixed(1)} KB`;
}

function dirSize(dirPath) {
  if (!fs.existsSync(dirPath)) return 0;
  let total = 0;
  function walk(d) {
    for (const entry of fs.readdirSync(d, { withFileTypes: true })) {
      const fp = path.join(d, entry.name);
      if (entry.isDirectory()) walk(fp);
      else if (entry.isFile()) total += fs.statSync(fp).size;
    }
  }
  walk(dirPath);
  return total;
}

function countFiles(dirPath, ext) {
  if (!fs.existsSync(dirPath)) return 0;
  let count = 0;
  function walk(d) {
    for (const entry of fs.readdirSync(d, { withFileTypes: true })) {
      const fp = path.join(d, entry.name);
      if (entry.isDirectory()) walk(fp);
      else if (!ext || fp.endsWith(ext)) count++;
    }
  }
  walk(dirPath);
  return count;
}

function dirSizeByExt(dirPath, ext) {
  if (!fs.existsSync(dirPath)) return 0;
  let total = 0;
  function walk(d) {
    for (const entry of fs.readdirSync(d, { withFileTypes: true })) {
      const fp = path.join(d, entry.name);
      if (entry.isDirectory()) walk(fp);
      else if (fp.endsWith(ext)) total += fs.statSync(fp).size;
    }
  }
  walk(dirPath);
  return total;
}

function countLines(dirPath, extensions) {
  if (!fs.existsSync(dirPath)) return 0;
  let total = 0;
  function walk(d) {
    for (const entry of fs.readdirSync(d, { withFileTypes: true })) {
      const fp = path.join(d, entry.name);
      if (entry.name === "node_modules" || entry.name === ".next" || entry.name === "out") continue;
      if (entry.isDirectory()) walk(fp);
      else if (extensions.some((e) => fp.endsWith(e))) {
        try {
          total += fs.readFileSync(fp, "utf-8").split("\n").length;
        } catch {
          /* skip unreadable */
        }
      }
    }
  }
  walk(dirPath);
  return total;
}

function timeCommand(label, cmd) {
  process.stdout.write(`  ${label}... `);
  const start = performance.now();
  try {
    execSync(cmd, { cwd: ROOT, stdio: "pipe", timeout: 120_000 });
    const elapsed = performance.now() - start;
    console.log(formatMs(elapsed));
    return { success: true, ms: Math.round(elapsed) };
  } catch (err) {
    const elapsed = performance.now() - start;
    console.log(`FAILED (${formatMs(elapsed)})`);
    return { success: false, ms: Math.round(elapsed), error: err.message };
  }
}

function main() {
  const jsonMode = process.argv.includes("--json");
  const timestamp = new Date().toISOString();

  if (!jsonMode) {
    console.log("\n╔══════════════════════════════════════╗");
    console.log("║   ARCHITECTURE BENCHMARK RUNNER     ║");
    console.log("╚══════════════════════════════════════╝\n");
    console.log(`Timestamp: ${timestamp}`);
    console.log(`Project:   ${ROOT}\n`);
    console.log("─".repeat(40));
  }

  // ── BUILD ──
  if (!jsonMode) console.log("\n[BUILD]");
  const build = timeCommand("Building", "npx next build 2>&1");

  // ── OUTPUT ANALYSIS ──
  if (!jsonMode) console.log("\n[OUTPUT ANALYSIS]");
  const outSize = dirSize(OUT_DIR);
  const htmlCount = countFiles(OUT_DIR, ".html");
  const htmlSize = dirSizeByExt(OUT_DIR, ".html");
  const jsCount = countFiles(OUT_DIR, ".js");
  const jsSize = dirSizeByExt(OUT_DIR, ".js");
  const cssCount = countFiles(OUT_DIR, ".css");
  const cssSize = dirSizeByExt(OUT_DIR, ".css");
  const assetFiles = countFiles(OUT_DIR);

  if (!jsonMode) {
    console.log(`  Output size:     ${formatKB(outSize)}`);
    console.log(`  HTML files:      ${htmlCount} (${formatKB(htmlSize)})`);
    console.log(`  JS files:        ${jsCount} (${formatKB(jsSize)})`);
    console.log(`  CSS files:       ${cssCount} (${formatKB(cssSize)})`);
    console.log(`  Total files:     ${assetFiles}`);
  }

  // ── SOURCE ANALYSIS ──
  if (!jsonMode) console.log("\n[SOURCE ANALYSIS]");
  const srcLines = countLines(SRC_DIR, [".ts", ".tsx", ".css"]);
  const scriptLines = countLines(path.join(ROOT, "scripts"), [".js", ".ts"]);
  const srcFiles = countFiles(SRC_DIR);

  if (!jsonMode) {
    console.log(`  Lines of code:   ${srcLines.toLocaleString()} (src/)`);
    console.log(`  Scripts LOC:     ${scriptLines.toLocaleString()} (scripts/)`);
    console.log(`  Source files:    ${srcFiles} (src/)`);
  }

  // ── LINT ──
  if (!jsonMode) console.log("\n[LINT]");
  const lint = timeCommand("Linting  ", "npx next lint 2>&1");

  // ── COMPILE ──
  if (!jsonMode) console.log("\n[TYPE CHECK]");
  const typecheck = timeCommand("TypeCheck", "npx tsc --noEmit 2>&1");

  // ── RESULTS ──
  const results = {
    timestamp,
    project: "operation-architecture",
    build: {
      success: build.success,
      timeMs: build.ms,
      error: build.error || null,
    },
    output: {
      totalSizeBytes: outSize,
      totalSizeKB: Math.round(outSize / 1024),
      htmlFiles: htmlCount,
      htmlSizeKB: Math.round(htmlSize / 1024),
      jsFiles: jsCount,
      jsSizeKB: Math.round(jsSize / 1024),
      cssFiles: cssCount,
      cssSizeKB: Math.round(cssSize / 1024),
      totalFiles: assetFiles,
    },
    source: {
      linesOfCode: srcLines,
      scriptLines,
      sourceFiles: srcFiles,
    },
    lint: {
      success: lint.success,
      timeMs: lint.ms,
      error: lint.error || null,
    },
    typecheck: {
      success: typecheck.success,
      timeMs: typecheck.ms,
      error: typecheck.error || null,
    },
  };

  // Ensure benchmarks dir exists
  const benchDir = path.dirname(RESULTS_FILE);
  if (!fs.existsSync(benchDir)) fs.mkdirSync(benchDir, { recursive: true });

  // Save
  fs.writeFileSync(RESULTS_FILE, JSON.stringify(results, null, 2));
  if (!jsonMode) console.log(`\nResults saved to ${RESULTS_FILE}`);

  // ── SCORE ──
  const buildScore = build.success ? Math.max(0, 100 - build.ms / 500) : 0;
  const sizeScore = Math.max(0, 100 - outSize / 10240);
  const lintScore = lint.success ? Math.max(0, 100 - lint.ms / 200) : 0;
  const overall = Math.round((buildScore + sizeScore + lintScore) / 3);

  if (jsonMode) {
    console.log(JSON.stringify({ ...results, scores: { buildScore: Math.round(buildScore), sizeScore: Math.round(sizeScore), lintScore: Math.round(lintScore), overall } }));
  } else {
    console.log("\n─".repeat(40));
    console.log("\n[ARCHITECTURE HEALTH SCORE]");
    console.log(`  Build Speed:    ${Math.round(buildScore)}/100`);
    console.log(`  Output Size:    ${Math.round(sizeScore)}/100`);
    console.log(`  Lint Speed:     ${Math.round(lintScore)}/100`);
    console.log(`  ─────────────────────`);
    console.log(`  OVERALL:        ${overall}/100`);
    console.log("\nHigher = better. Track this over time as architecture evolves.\n");
  }
}

main();
