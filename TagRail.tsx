import React from "react";
import { TbZoomReset } from "react-icons/tb";

function cn(...classes: (string | false | undefined | null)[]) {
  return classes.filter(Boolean).join(" ");
}

interface TagRailProps {
  tags: string[];
  selectedTags: string[];
  onToggle: (tag: string) => void;
  onClear: () => void;
}

export default function TagRail({
  tags,
  selectedTags,
  onToggle,
  onClear,
}: TagRailProps) {
  const allSelected = selectedTags.length === 0; // All is active if no tag is selected

  return (
      <div
        className="w-full overflow-x-scroll rounded-full"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div className="flex gap-2 w-full pr-10 ">
          <button
            onClick={onClear}
            disabled={allSelected}
            className={cn(
              "rounded-full border-2 border-blue-600 px-4 py-2 text-xs transition-all duration-200 whitespace-nowrap",
              allSelected
                ? "bg-blue-600 text-black"
                : "bg-black hover:bg-blue-700 text-blue-600 hover:text-black"
            )}
          >
            # All
          </button>

          {tags.map((tag) => {
            const active = selectedTags.includes(tag);
            return (
              <button
                key={tag}
                onClick={() => onToggle(tag)}
                className={cn(
                  "rounded-full border-2 border-blue-600 px-4 text-xs transition text-nowrap py-2",
                  active
                    ? "bg-blue-600 text-black"
                    : "bg-black hover:bg-blue-700 text-blue-600 hover:text-black"
                )}
              >
                # {tag}
              </button>
            );
          })}
        </div>
      </div>
  );
}
