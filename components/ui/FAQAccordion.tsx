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
    <div className="flex flex-col gap-3.5 max-w-3xl mx-auto">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={item.question}
            className={`rounded-card border transition-colors ${
              isDark
                ? "bg-deep-aubergine/60 border-border-dark"
                : "bg-white border-border-subtle"
            }`}
          >
            <button
              type="button"
              onClick={() => toggle(index)}
              className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 focus-visible:ring-2 focus-visible:ring-terracotta rounded-card"
              aria-expanded={isOpen}
            >
              <div className="flex flex-col items-start gap-0.5">
                <span
                  className={`text-[9.5px] font-sans font-bold uppercase tracking-widest ${
                    isDark ? "text-muted-marigold" : "text-terracotta"
                  }`}
                >
                  {item.category}
                </span>
                <span
                  className={`font-serif text-base sm:text-lg font-semibold leading-snug ${
                    isDark ? "text-warm-ivory" : "text-deep-aubergine"
                  }`}
                >
                  {item.question}
                </span>
              </div>
              <ChevronDown
                className={`w-4 h-4 shrink-0 transition-transform duration-150 ${
                  isOpen ? "rotate-180 text-terracotta" : isDark ? "text-text-muted-dark" : "text-text-muted"
                }`}
                aria-hidden="true"
              />
            </button>

            {isOpen && (
              <div
                className={`px-5 pb-5 pt-1 text-xs sm:text-sm leading-relaxed border-t ${
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
