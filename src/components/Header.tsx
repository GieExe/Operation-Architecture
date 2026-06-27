import { Suspense } from "react";
import SearchInput from "./SearchInput";

export default function Header() {
  return (
    <header className="header">
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <button className="menu-toggle">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        </button>
        <div className="header-logo">
          Architectura<span className="dot">.</span>
        </div>
        <span className="header-meta">2026 Edition</span>
      </div>
      <div className="search-box">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.35-4.35" />
        </svg>
        <Suspense fallback={<input type="text" id="searchInput" placeholder="Search frameworks..." disabled />}>
          <SearchInput />
        </Suspense>
        <span className="search-kbd">/</span>
      </div>
    </header>
  );
}
