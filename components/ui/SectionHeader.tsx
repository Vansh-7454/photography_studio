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
      className={`max-w-[640px] mb-12 md:mb-16 ${
        align === "center" ? "mx-auto text-center" : "text-left"
      } ${className}`}
    >
      {eyebrow && (
        <span
          className={`inline-block text-[11px] md:text-xs font-sans font-bold uppercase tracking-[0.2em] mb-3 px-3 py-1 rounded-full border ${
            isDark
              ? "text-marigold border-marigold/30 bg-marigold/10"
              : "text-sindoor-red border-sindoor-red/20 bg-sindoor-red/5"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.15] mb-4 ${
          isDark ? "text-warm-ivory" : "text-royal-indigo"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-base sm:text-lg leading-relaxed ${
            isDark ? "text-text-muted-dark" : "text-text-muted"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

