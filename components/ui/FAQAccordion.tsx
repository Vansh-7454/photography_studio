"use client";

import React, { useState } from "react";
import { FAQItem } from "@/content/site";
import { ChevronDown } from "lucide-react";

interface FAQAccordionProps {
  items: FAQItem[];
  theme?: "light" | "dark";
}

export function FAQAccordion({ items, theme = "light" }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const isDark = theme === "dark";

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-4 max-w-3xl mx-auto">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={item.question}
            className={`rounded-card border transition-colors ${
              isDark
                ? "bg-royal-indigo/60 border-border-dark"
                : "bg-ivory-surface border-border-subtle"
            }`}
          >
            <button
              type="button"
              onClick={() => toggle(index)}
              className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 focus-visible:ring-2 focus-visible:ring-marigold rounded-card"
              aria-expanded={isOpen}
            >
              <div className="flex flex-col items-start gap-1">
                <span
                  className={`text-[10px] font-sans font-bold uppercase tracking-widest ${
                    isDark ? "text-marigold" : "text-sindoor-red"
                  }`}
                >
                  {item.category}
                </span>
                <span
                  className={`font-serif text-lg md:text-xl font-bold leading-snug ${
                    isDark ? "text-warm-ivory" : "text-royal-indigo"
                  }`}
                >
                  {item.question}
                </span>
              </div>
              <ChevronDown
                className={`w-5 h-5 shrink-0 transition-transform duration-150 ${
                  isOpen ? "rotate-180 text-marigold" : isDark ? "text-text-muted-dark" : "text-text-muted"
                }`}
                aria-hidden="true"
              />
            </button>

            {isOpen && (
              <div
                className={`px-6 pb-6 pt-2 text-sm sm:text-base leading-relaxed border-t ${
                  isDark
                    ? "border-border-dark/60 text-text-muted-dark"
                    : "border-border-subtle/60 text-text-muted"
                }`}
              >
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

