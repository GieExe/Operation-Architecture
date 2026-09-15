"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useMemo } from "react";
import FilterBar from "./FilterBar";
import FrameworkCard from "./FrameworkCard";
import { Framework } from "../data/frameworks";

interface MainContentProps {
  frameworks: Framework[];
}

const CAT_LABELS: Record<string, string> = {
  mobile: "mobile iOS Android cross-platform",
  frontend: "frontend web UI client SSR SPA",
  backend: "backend server API microservices ORM DB",
  fullstack: "fullstack web API frontend backend monorepo",
  desktop: "desktop Windows GUI cross-platform",
  ai: "ai agent LLM vector RAG orchestration prompt",
};

function extractPlainText(html: string): string {
  return html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

function MainContentInner({ frameworks }: MainContentProps) {
  const searchParams = useSearchParams();
  const q = searchParams.get("q")?.toLowerCase().trim() || "";
  const activeCat = searchParams.get("cat") || "all";

  // Pre-build indexed search strings per framework using useMemo for sub-millisecond search across all architecture blocks
  const indexedFrameworks = useMemo(() => {
    return frameworks.map((fw) => {
      const blocksText = fw.blocks
        .map((b) => `${b.title} ${extractPlainText(b.contentHtml)}`)
        .join(" ");
      const categoryExtra = CAT_LABELS[fw.cat] || "";
      const searchBlob = `${fw.name} ${fw.id} ${fw.archBadge} ${fw.cat} ${categoryExtra} ${blocksText}`.toLowerCase();

      return {
        framework: fw,
        searchBlob,
      };
    });
  }, [frameworks]);

  // Tokenize search query and match all tokens against indexed searchBlob
  const filteredFrameworks = useMemo(() => {
    if (!q) {
      return indexedFrameworks
        .filter((item) => activeCat === "all" || item.framework.cat === activeCat)
        .map((item) => item.framework);
    }

    const tokens = q.split(/\s+/).filter(Boolean);

    return indexedFrameworks
      .filter((item) => {
        const matchesCat = activeCat === "all" || item.framework.cat === activeCat;
        if (!matchesCat) return false;

        return tokens.every((token) => item.searchBlob.includes(token));
      })
      .map((item) => item.framework);
  }, [indexedFrameworks, q, activeCat]);

  const mobileFws = filteredFrameworks.filter((f) => f.cat === "mobile");
  const frontendFws = filteredFrameworks.filter((f) => f.cat === "frontend");
  const backendFws = filteredFrameworks.filter((f) => f.cat === "backend");
  const fullstackFws = filteredFrameworks.filter((f) => f.cat === "fullstack");
  const desktopFws = filteredFrameworks.filter((f) => f.cat === "desktop");
  const aiFws = filteredFrameworks.filter((f) => f.cat === "ai");

  const totalCount = filteredFrameworks.length;

  return (
    <div className="content-container" id="frameworks">
      <FilterBar activeCat={activeCat} searchQuery={q} />

      {q ? (
        <div
          style={{
            margin: "20px 60px 0",
            padding: "12px 20px",
            background: "var(--bg-surface)",
            border: "1px solid var(--border)",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: "13px",
            color: "var(--text-secondary)",
          }}
        >
          <div>
            Showing <strong style={{ color: "var(--accent)" }}>{totalCount}</strong>{" "}
            {totalCount === 1 ? "framework" : "frameworks"} matching &quot;{q}&quot;
            {activeCat !== "all" ? (
              <span> in <strong style={{ color: "var(--text-primary)" }}>{activeCat}</strong></span>
            ) : null}
          </div>
        </div>
      ) : null}

      {totalCount === 0 ? (
        <div style={{ padding: "60px 0", textAlign: "center", color: "var(--text-secondary)" }}>
          <h3>{`No frameworks found matching "${q}"`}</h3>
          <p style={{ marginTop: "8px", fontSize: "14px", color: "var(--text-muted)" }}>
            Try adjusting your search query or switching category filters.
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

          {/* FULLSTACK */}
          {fullstackFws.length > 0 && (
            <>
              <div className="section-header cat-section" data-cat="fullstack">
                <h2>Fullstack Architectures</h2>
                <p className="section-desc">
                  Cross-layer combinations pairing UI frameworks with dedicated API backends for production-grade separation of concerns.
                </p>
              </div>
              <div className="frameworks-grid cat-section" data-cat="fullstack">
                {fullstackFws.map((fw) => (
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

          {/* AI AGENT */}
          {aiFws.length > 0 && (
            <>
              <div className="section-header cat-section" data-cat="ai">
                <h2>AI Agent Architectures</h2>
                <p className="section-desc">
                  Production patterns for LLM-powered agents: tool augmentation, RAG pipelines, multi-agent orchestration, and vector data stores.
                </p>
              </div>
              <div className="frameworks-grid cat-section" data-cat="ai">
                {aiFws.map((fw) => (
                  <FrameworkCard key={fw.id} framework={fw} />
                ))}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default function MainContent({ frameworks }: MainContentProps) {
  return (
    <Suspense fallback={<div className="loading-placeholder">Loading...</div>}>
      <MainContentInner frameworks={frameworks} />
    </Suspense>
  );
}
