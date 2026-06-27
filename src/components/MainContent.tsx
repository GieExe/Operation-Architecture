"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import FilterBar from "./FilterBar";
import FrameworkCard from "./FrameworkCard";
import { Framework } from "../data/frameworks";

interface MainContentProps {
  frameworks: Framework[];
}

function MainContentInner({ frameworks }: MainContentProps) {
  const searchParams = useSearchParams();
  const q = searchParams.get("q")?.toLowerCase().trim() || "";
  const activeCat = searchParams.get("cat") || "all";

  // Filter frameworks on the client based on query & category
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
  );
}

export default function MainContent({ frameworks }: MainContentProps) {
  return (
    <Suspense fallback={<div className="loading-placeholder">Loading...</div>}>
      <MainContentInner frameworks={frameworks} />
    </Suspense>
  );
}
