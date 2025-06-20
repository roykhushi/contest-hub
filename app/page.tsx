"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { FilterPanel } from "@/components/filter-panel";
import { ContestGrid } from "@/components/contest-grid";
import { LoadingState } from "@/components/loading-state";
import { ErrorState } from "@/components/error-state";
import { useFilters } from "@/hooks/use-filter";
import { Github, Globe, Linkedin } from "lucide-react";
import Link from "next/link";
import type { Contest } from "@/types/contest.types";

export default function HomePage() {
  const [showFilters, setShowFilters] = useState(false);
  const { filters, updateFilter, clearFilters, getFilteredContests } =
    useFilters();
  const [contests, setContests] = useState<Contest[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchContests = async () => {
    setLoading(true);
    setError(false);
    try {
      const res = await fetch("/api/clist");
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();
      setContests(data);
    } catch (e) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContests();
  }, []);

  const filteredContests = getFilteredContests(contests);

  return (
    <div className="min-h-screen bg-background">
      <Header onToggleFilters={() => setShowFilters(!showFilters)} />

      <main className="container mx-auto px-4 py-8">
        <HeroSection />

        <div className="flex flex-col lg:flex-row gap-8 mt-12">
          <div
            className={`lg:w-80 ${showFilters ? "block" : "hidden lg:block"}`}
          >
            <FilterPanel
              filters={filters}
              onUpdateFilter={updateFilter}
              onClearFilters={clearFilters}
              contestCount={filteredContests.length}
            />
          </div>
          <div className="flex-1">
            {loading && <LoadingState />}
            {error && <ErrorState onRetry={fetchContests} />}
            {!loading && !error && <ContestGrid contests={filteredContests} />}
          </div>
        </div>
      </main>

      <footer className="mx-auto px-4 py-4 border ">
        <p className="text-xs flex items-center justify-center">
          Made with 💙 by Khushi Roy
        </p>
        <div className="flex items-center justify-center mt-2 gap-2">
          <Link href="https://github.com/roykhushi" target="_blank">
            <Github className="size-4 cursor-pointer" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/khushi-roy-a98273224"
            target="_blank"
          >
            <Linkedin className="size-4 cursor-pointer" />
          </Link>
          <Link href="https://khushiroy.xyz/" target="_blank">
            <Globe className="size-4 cursor-pointer" />
          </Link>
        </div>
      </footer>
    </div>
  );
}
