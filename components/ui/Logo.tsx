import React from "react";
import Link from "next/link";

interface LogoProps {
  variant?: "full" | "icon";
  theme?: "dark" | "light" | "current";
  className?: string;
}

export function Logo({ variant = "full", theme = "current", className = "" }: LogoProps) {
  const isLight = theme === "light";
  const isDark = theme === "dark";

  const primaryColor = isLight ? "#F8F2E8" : isDark ? "#202447" : "currentColor";
  const secondaryColor = isLight ? "#B2ACA3" : isDark ? "#635F58" : "currentColor";
  const accentColor = "#C94B3B"; // Sindoor Red
  const goldColor = "#E6A83A"; // Marigold

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3.5 focus-visible:ring-2 focus-visible:ring-marigold rounded-md transition-opacity hover:opacity-90 ${className}`}
      aria-label="RANGREZ — Wedding Stories & Films Home"
    >
      {/* Icon Mark: Geometric Royal Arch with Optical Lens & Aperture */}
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-9 h-9 md:w-10 md:h-10 shrink-0"
        aria-hidden="true"
      >
        <path
          d="M50 8C32 8 20 22 20 40V82C20 86.4183 23.5817 90 28 90H72C76.4183 90 80 86.4183 80 82V40C80 22 68 8 50 8Z"
          stroke={primaryColor}
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path
          d="M50 16C50 16 34 26 34 42C34 50.8366 41.1634 58 50 58C58.8366 58 66 50.8366 66 42C66 26 50 16 50 16Z"
          stroke={primaryColor}
          strokeWidth="3"
        />
        <circle cx="50" cy="42" r="7" stroke={primaryColor} strokeWidth="3" />
        <path d="M42 66H58M50 66V82M44 82H56" stroke={primaryColor} strokeWidth="3.5" strokeLinecap="round" />
        <circle cx="50" cy="28" r="2.5" fill={accentColor} />
        <circle cx="50" cy="42" r="3" fill={goldColor} />
      </svg>

      {variant === "full" && (
        <div className="flex flex-col leading-none">
          <span
            className="font-serif font-bold text-xl md:text-2xl tracking-[0.16em]"
            style={{ color: primaryColor }}
          >
            RANGREZ
          </span>
          <span
            className="text-[9px] md:text-[10px] font-sans font-semibold tracking-[0.24em] mt-1"
            style={{ color: secondaryColor }}
          >
            WEDDING STORIES &amp; FILMS
          </span>
        </div>
      )}
    </Link>
  );
}

