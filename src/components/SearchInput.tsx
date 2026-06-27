"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useTransition, useEffect, useRef } from "react";

export default function SearchInput() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();
  const inputRef = useRef<HTMLInputElement>(null);

  const q = searchParams.get("q") || "";

  const handleSearch = (value: string) => {
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

  // Sync state if search parameter is changed externally (e.g. Esc key or reset)
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = q;
    }
  }, [q]);

  return (
    <input
      ref={inputRef}
      type="text"
      id="searchInput"
      defaultValue={q}
      onChange={(e) => handleSearch(e.target.value)}
      placeholder="Search frameworks..."
      className={isPending ? "searching" : ""}
    />
  );
}
