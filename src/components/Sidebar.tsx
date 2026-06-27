import Link from "next/link";
import { frameworks } from "../data/frameworks";

export default function Sidebar() {
  const mobileFws = frameworks.filter((f) => f.cat === "mobile");
  const frontendFws = frameworks.filter((f) => f.cat === "frontend");
  const backendFws = frameworks.filter((f) => f.cat === "backend");
  const desktopFws = frameworks.filter((f) => f.cat === "desktop");

  const getCleanName = (name: string) => {
    if (name === "Next.js (React)") return "Next.js";
    if (name === "Vue.js / Nuxt 3") return "Vue / Nuxt";
    if (name === "Svelte / SvelteKit") return "SvelteKit";
    if (name === "Kotlin / Jetpack Compose") return "Kotlin / Compose";
    if (name === "Swift / SwiftUI") return "Swift / SwiftUI";
    if (name === "Express / Fastify") return "Express / Fastify";
    if (name === "Go / Fiber") return "Go / Fiber";
    if (name === ".NET Core (ASP.NET)") return ".NET Core";
    return name;
  };

  return (
    <nav className="sidebar" id="sidebar">
      <div className="sidebar-section">
        <div className="sidebar-label">Overview</div>
        <Link className="sidebar-item active" href="/">
          <span className="cat-dot" style={{ background: "var(--accent)" }}></span> Home
        </Link>
        <Link className="sidebar-item" href="#matrix">
          <span className="cat-dot" style={{ background: "var(--purple)" }}></span>
          Comparison Matrix
        </Link>
      </div>

      <div className="sidebar-section">
        <div className="sidebar-label">Mobile</div>
        {mobileFws.map((fw) => (
          <Link key={fw.id} className="sidebar-item" href={`/?cat=mobile#${fw.id}`}>
            <span className="cat-dot mobile"></span>
            {getCleanName(fw.name)}
          </Link>
        ))}
      </div>

      <div className="sidebar-section">
        <div className="sidebar-label">Frontend</div>
        {frontendFws.map((fw) => (
          <Link key={fw.id} className="sidebar-item" href={`/?cat=frontend#${fw.id}`}>
            <span className="cat-dot frontend"></span>
            {getCleanName(fw.name)}
          </Link>
        ))}
      </div>

      <div className="sidebar-section">
        <div className="sidebar-label">Backend</div>
        {backendFws.map((fw) => (
          <Link key={fw.id} className="sidebar-item" href={`/?cat=backend#${fw.id}`}>
            <span className="cat-dot backend"></span>
            {getCleanName(fw.name)}
          </Link>
        ))}
      </div>

      {desktopFws.length > 0 && (
        <div className="sidebar-section">
          <div className="sidebar-label">Desktop</div>
          {desktopFws.map((fw) => (
            <Link key={fw.id} className="sidebar-item" href={`/?cat=desktop#${fw.id}`}>
              <span className="cat-dot desktop"></span>
              {getCleanName(fw.name)}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
