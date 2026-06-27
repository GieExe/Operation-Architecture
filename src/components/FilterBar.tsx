import Link from "next/link";

interface FilterBarProps {
  activeCat: string;
  searchQuery?: string;
}

export default function FilterBar({ activeCat, searchQuery }: FilterBarProps) {
  const getHref = (cat: string) => {
    const params = new URLSearchParams();
    if (cat !== "all") params.set("cat", cat);
    if (searchQuery) params.set("q", searchQuery);
    const queryStr = params.toString();
    return queryStr ? `/?${queryStr}` : "/";
  };

  return (
    <div className="filter-bar">
      <Link
        href={getHref("all")}
        className={`filter-btn ${activeCat === "all" ? "active" : ""}`}
      >
        All Frameworks
      </Link>
      <Link
        href={getHref("mobile")}
        className={`filter-btn ${activeCat === "mobile" ? "active" : ""}`}
      >
        Mobile
      </Link>
      <Link
        href={getHref("frontend")}
        className={`filter-btn ${activeCat === "frontend" ? "active" : ""}`}
      >
        Frontend
      </Link>
      <Link
        href={getHref("backend")}
        className={`filter-btn ${activeCat === "backend" ? "active" : ""}`}
      >
        Backend
      </Link>
      <Link
        href={getHref("desktop")}
        className={`filter-btn ${activeCat === "desktop" ? "active" : ""}`}
      >
        Desktop
      </Link>
    </div>
  );
}
