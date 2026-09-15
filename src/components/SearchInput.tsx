"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useTransition, useEffect, useRef, useState } from "react";

export default function SearchInput() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();
  const inputRef = useRef<HTMLInputElement>(null);
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);

  const q = searchParams.get("q") || "";
  const [inputValue, setInputValue] = useState(q);

  // Sync internal input state when URL search parameter changes externally (e.g. Esc key or category switch)
  useEffect(() => {
    setInputValue(q);
  }, [q]);

  const updateUrlQuery = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set("q", value);
    } else {
      params.delete("q");
    }

    startTransition(() => {
      router.replace(`/?${params.toString()}`);
    });
  };

  const handleInputChange = (value: string) => {
    setInputValue(value);

    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    // Debounce router replace for high efficiency during fast typing
    debounceTimerRef.current = setTimeout(() => {
      updateUrlQuery(value);
    }, 150);
  };

  const handleClear = () => {
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }
    setInputValue("");
    if (inputRef.current) {
      inputRef.current.focus();
    }
    updateUrlQuery("");
  };

  return (
    <div style={{ position: "relative", width: "100%", display: "flex", alignItems: "center" }}>
      <input
        ref={inputRef}
        type="text"
        id="searchInput"
        value={inputValue}
        onChange={(e) => handleInputChange(e.target.value)}
        placeholder="Search frameworks..."
        className={isPending ? "searching" : ""}
      />
      {inputValue ? (
        <button
          type="button"
          onClick={handleClear}
          title="Clear search"
          aria-label="Clear search"
          style={{
            position: "absolute",
            right: "28px",
            background: "none",
            border: "none",
            color: "var(--text-dim)",
            cursor: "pointer",
            padding: "2px 4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "4px",
            fontSize: "12px",
          }}
        >
          ✕
        </button>
      ) : null}
    </div>
  );
}
