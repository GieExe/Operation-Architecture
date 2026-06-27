"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ClientScript() {
  const router = useRouter();

  useEffect(() => {
    // Menu toggle (Mobile sidebar)
    const menuToggle = document.querySelector(".menu-toggle");
    const sidebar = document.querySelector(".sidebar");
    const handleMenuToggle = () => {
      sidebar?.classList.toggle("open");
    };
    menuToggle?.addEventListener("click", handleMenuToggle);

    // Keyboard shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      const searchInput = document.getElementById("searchInput") as HTMLInputElement | null;
      if (
        e.key === "/" &&
        !["INPUT", "TEXTAREA"].includes(document.activeElement?.tagName || "")
      ) {
        e.preventDefault();
        searchInput?.focus();
      }
      if (e.key === "Escape") {
        if (searchInput) {
          searchInput.blur();
          searchInput.value = "";
        }
        // Redirect to clear URL parameters
        router.replace("/");
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    // Scroll spy for sidebar
    const sidebarItems = document.querySelectorAll(".sidebar-item");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            sidebarItems.forEach((item) => {
              const href = item.getAttribute("href") || "";
              item.classList.toggle(
                "active",
                href === `#${id}` || href.includes(`#${id}`)
              );
            });
          }
        });
      },
      { rootMargin: "-100px 0px -60% 0px", threshold: 0 }
    );

    document.querySelectorAll(".fw-card[id], section[id]").forEach((el) => {
      observer.observe(el);
    });

    return () => {
      menuToggle?.removeEventListener("click", handleMenuToggle);
      document.removeEventListener("keydown", handleKeyDown);
      observer.disconnect();
    };
  }, [router]);

  return null;
}
