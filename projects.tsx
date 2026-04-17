"use client";

import React, { useEffect, useMemo, useState, useCallback } from "react";
import { projects } from "@/data/sections/projects";
import ProjectCard from "@/components/Projects/ProjectCard";
import Controls from "@/components/Projects/Controls";
import EmptyState from "../../components/Projects/EmptyState";
import TagRail from "@/components/Projects/TagRail";
import { motion } from "framer-motion";

// ---------------------------------------------
// Types
// ---------------------------------------------
type Complexity = "beginner" | "intermediate" | "advanced" | "expert";

export interface Project {
  id: string;
  title: string;
  blurb: string;
  tags: string[];
  tech: string[];
  stars: number;
  updatedAt: string;
  thumbnail: string;
  live: string;
  repo?: string;
  complexity?: Complexity;
}

// ---------------------------------------------
// Constants
// ---------------------------------------------
const ALL_TECH = [...new Set(projects.flatMap((p) => p.tech))].sort();
const ALL_TAGS = [...new Set(projects.flatMap((p) => p.tags))].sort();

const COMPLEXITY_ORDER: Record<Complexity, number> = {
  beginner: 0,
  intermediate: 1,
  advanced: 2,
  expert: 3,
};

// ---------------------------------------------
// Component
// ---------------------------------------------
export default function ProjectsPage() {
  const [query, setQuery] = useState("");
  const [selectedTech, setSelectedTech] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sort, setSort] = useState<"featured" | "stars" | "recent" | "complexity">(
    "featured"
  );
  const [view, setView] = useState<"grid" | "list">("grid");

  const resetFilters = useCallback(() => {
    setQuery("");
    setSelectedTech([]);
    setSelectedTags([]);
  }, []);

  // Keyboard shortcut for search focus
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "/") {
        const el = document.getElementById("project-search") as HTMLInputElement | null;
        if (el) {
          e.preventDefault();
          el.focus();
        }
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  // Filter + sort projects
  const filteredProjects = useMemo(() => {
    let out = [...projects];

    if (query.trim()) {
      const q = query.toLowerCase();
      out = out.filter((p) =>
        [p.title, p.blurb, ...p.tags, ...p.tech].some((x) =>
          x.toLowerCase().includes(q)
        )
      );
    }

    if (selectedTech.length) {
      out = out.filter((p) => selectedTech.every((t) => p.tech.includes(t)));
    }

    if (selectedTags.length) {
      out = out.filter((p) => selectedTags.every((t) => p.tags.includes(t)));
    }

    switch (sort) {
      case "stars":
        out.sort((a, b) => b.stars - a.stars);
        break;
      case "recent":
        out.sort((a, b) => +new Date(b.updatedAt) - +new Date(a.updatedAt));
        break;
      case "complexity":
        out.sort(
          (a, b) =>
            COMPLEXITY_ORDER[b.complexity as Complexity] -
            COMPLEXITY_ORDER[a.complexity as Complexity]
        );
        break;
      // featured keeps original order
    }

    return out;
  }, [query, selectedTech, selectedTags, sort]);

  return (
    <div className="min-h-screen overflow-hidden w-[100vw]">
      <section className="mx-auto w-full max-w-7xl flex justify-center items-center flex-col">
        {/* Filters Section      */}
        <div className="sticky top-4 z-20 mt-4 w-[98vw] grid grid-cols-12 gap-2 sm:gap-4 border-2 border-blue-600 bg-black overflow-visible rounded-2xl py-2 items-center">
          {/* Controls Section */}
          <div className="col-span-10 md:col-span-5">
            <Controls
              query={query}
              setQuery={setQuery}
              sort={sort}
              setSort={setSort}
              view={view}
              setView={setView}
              selectedTech={selectedTech}
              setSelectedTech={setSelectedTech}
              onReset={resetFilters}
            />
          </div>

          {/* Desktop TagRail */}
          <div className="hidden md:block md:col-span-6">
            <TagRail
              tags={ALL_TAGS}
              selectedTags={selectedTags}
              onToggle={React.useCallback(
                (tag: string) =>
                  setSelectedTags((prev) =>
                    prev.includes(tag)
                      ? prev.filter((t) => t !== tag)
                      : [...prev, tag]
                  ),
                []
              )}
              onClear={resetFilters}
            />
          </div>

          {/* Reset Button */}
          <div className="right-0 h-full flex justify-center items-center px-4 rounded-l-full bg-blue-600 col-span-2 md:col-span-1">
            <button
              onClick={resetFilters}
              className="text-sm text-black flex justify-center items-center gap-2"
            >
              Reset
            </button>
          </div>

          {/* Mobile TagRail */}
          <div className="w-full flex md:hidden col-span-12 px-2">
            <TagRail
              tags={ALL_TAGS}
              selectedTags={selectedTags}
              onToggle={React.useCallback(
                (tag: string) =>
                  setSelectedTags((prev) =>
                    prev.includes(tag)
                      ? prev.filter((t) => t !== tag)
                      : [...prev, tag]
                  ),
                []
              )}
              onClear={resetFilters}
            />
          </div>
        </div>

        {/* Projects Section */}
        {filteredProjects.length > 0 ? (
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 z-10"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {filteredProjects.map((item) => (
              <motion.div
                key={item.id}
                className="w-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <ProjectCard project={item} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <EmptyState onReset={resetFilters} />
        )}
      </section>
    </div>
  );
}
