import React from "react";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  theme = "light",
  className = "",
}: SectionHeaderProps) {
  const isDark = theme === "dark";

  return (
    <div
      className={`max-w-[620px] mb-8 md:mb-12 ${
        align === "center" ? "mx-auto text-center" : "text-left"
      } ${className}`}
    >
      {eyebrow && (
        <span
          className={`inline-block text-[11px] font-sans font-semibold uppercase tracking-[0.2em] mb-2.5 px-3 py-0.5 rounded-full border ${
            isDark
              ? "text-muted-marigold border-muted-marigold/30 bg-muted-marigold/10"
              : "text-terracotta border-terracotta/20 bg-terracotta/5"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-serif text-3xl sm:text-4xl lg:text-[42px] font-semibold leading-[1.15] mb-3 tracking-tight ${
          isDark ? "text-warm-ivory" : "text-deep-aubergine"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-sm sm:text-base leading-relaxed ${
            isDark ? "text-text-muted-dark" : "text-text-muted"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
