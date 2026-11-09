"use client";

import React, { useState } from "react";
import Image from "next/image";

interface SmartImageProps {
  src: string;
  alt: string;
  aspectRatio?: "4/5" | "4/3" | "16/9" | "21/9" | "1/1";
  focalPoint?: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
  rounded?: "none" | "card" | "hero";
  caption?: string;
}

export function SmartImage({
  src,
  alt,
  aspectRatio = "4/5",
  focalPoint = "center",
  priority = false,
  className = "",
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  rounded = "card",
  caption,
}: SmartImageProps) {
  const [hasError, setHasError] = useState(false);

  // Aspect ratio classes
  const ratioStyles: Record<string, string> = {
    "4/5": "aspect-[4/5]",
    "4/3": "aspect-[4/3]",
    "16/9": "aspect-[16/9]",
    "21/9": "aspect-[21/9]",
    "1/1": "aspect-square",
  };

  const radiusStyles: Record<string, string> = {
    none: "rounded-none",
    card: "rounded-card", // 16px
    hero: "rounded-hero", // 24px
  };

  return (
    <figure className={`relative overflow-hidden bg-royal-indigo/5 border border-border-subtle ${ratioStyles[aspectRatio] || "aspect-[4/5]"} ${radiusStyles[rounded]} ${className}`}>
      {!hasError ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          style={{ objectFit: "cover", objectPosition: focalPoint }}
          onError={() => setHasError(true)}
          className="transition-transform duration-700 ease-out hover:scale-105"
        />
      ) : (
        /* Editorial Fallback Graphic */
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-gradient-to-br from-royal-indigo to-royal-indigo-dark text-warm-ivory text-center">
          <svg className="w-12 h-12 mb-3 text-marigold opacity-80" viewBox="0 0 100 100" fill="none">
            <rect x="15" y="25" width="70" height="55" rx="8" stroke="currentColor" strokeWidth="3" />
            <circle cx="50" cy="52" r="16" stroke="currentColor" strokeWidth="3" />
            <circle cx="50" cy="52" r="6" fill="#C94B3B" />
            <path d="M35 25V18C35 15.79 36.79 14 39 14H61C63.21 14 65 15.79 65 18V25" stroke="currentColor" strokeWidth="3" />
          </svg>
          <span className="font-serif text-lg font-semibold tracking-wide text-warm-ivory">Rangrez Atelier Image</span>
          <span className="text-xs text-marigold-light/80 mt-1 max-w-[240px] line-clamp-2">{alt}</span>
        </div>
      )}

      {/* Subtle royal tint overlay (6-8%) to harmonize varied lighting into a unified signature look */}
      <div className="absolute inset-0 pointer-events-none bg-royal-indigo/8 mix-blend-multiply" />
      
      {/* Delicate inner border for luxury framing */}
      <div className="absolute inset-0 pointer-events-none border border-black/5" />

      {caption && (
        <figcaption className="sr-only">{caption}</figcaption>
      )}
    </figure>
  );
}

