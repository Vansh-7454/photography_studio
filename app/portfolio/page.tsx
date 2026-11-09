"use client";

import React, { useState } from "react";
import { siteContent } from "@/content/site";
import { SmartImage } from "@/components/ui/SmartImage";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ArrowRight, Sparkles, MapPin } from "lucide-react";

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Celebrations");

  const filteredItems =
    selectedCategory === "All Celebrations"
      ? siteContent.portfolioItems
      : siteContent.portfolioItems.filter(
          (item) => item.category === selectedCategory
        );

  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-ivory-surface py-16 md:py-20 border-b border-border-subtle">
        <div className="site-container max-w-4xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-sindoor-red mb-3 block">
            Visual Anthology
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-royal-indigo mb-6 leading-tight">
            Curated Indian Wedding Portfolio
          </h1>
          <p className="text-base sm:text-lg text-text-muted leading-relaxed max-w-2xl mx-auto">
            A celebration of authentic ritual grandeur, intimate family glances, and regal heritage across North India, Rajasthan, and beyond.
          </p>
        </div>
      </section>

      {/* Portfolio Gallery Section */}
      <section className="section-padding bg-warm-ivory">
        <div className="site-container">
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
            {siteContent.portfolioCategories.map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-150 focus-visible:ring-2 focus-visible:ring-marigold ${
                    isSelected
                      ? "bg-royal-indigo text-warm-ivory shadow-sm"
                      : "bg-ivory-surface text-royal-indigo border border-border-subtle hover:bg-warm-ivory"
                  }`}
                  aria-pressed={isSelected}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Dynamic Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group flex flex-col bg-ivory-surface rounded-card overflow-hidden border border-border-subtle shadow-card hover:shadow-raised transition-all"
              >
                <div className="relative overflow-hidden">
                  <SmartImage
                    src={item.image.src}
                    alt={item.image.alt}
                    aspectRatio="4/5"
                    rounded="none"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-royal-indigo-dark/80 backdrop-blur-sm text-warm-ivory text-[10px] font-bold uppercase tracking-wider">
                    {item.category}
                  </div>
                </div>

                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-sindoor-red font-semibold mb-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{item.location}</span>
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-royal-indigo mb-1 group-hover:text-sindoor-red transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-text-muted">
                      {item.couple}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-border-subtle flex items-center justify-between text-xs text-royal-indigo font-semibold">
                    <span className="text-text-muted">Archival Print Available</span>
                    <span className="text-marigold group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <p className="text-text-muted text-base">
                No imagery found under this category filter.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Featured Monographs Showcase */}
      <section className="section-padding bg-ivory-surface border-t border-border-subtle">
        <div className="site-container">
          <SectionHeader
            eyebrow="Complete Nuptial Monographs"
            title="Stories Told Across Multiple Days"
            description="Explore our extended multi-day wedding documentary monographs, featuring the full narrative arc from Ganesh Puja to the sunrise Bidaai."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {siteContent.featuredStories.map((story) => (
              <div
                key={story.id}
                className="p-6 rounded-card bg-warm-ivory border border-border-subtle flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-peacock-teal block mb-1">
                    {story.season}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-royal-indigo mb-2">
                    {story.couple}
                  </h3>
                  <p className="text-xs text-sindoor-red font-semibold mb-4">
                    {story.location}
                  </p>
                  <p className="text-xs sm:text-sm text-text-muted leading-relaxed mb-6">
                    {story.summary}
                  </p>
                  <div className="space-y-2 mb-6">
                    {story.highlights.map((h) => (
                      <div key={h} className="text-xs text-text-muted flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-marigold shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button href="/contact" variant="outline" className="w-full">
                  Request Similar Coverage
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-16 bg-royal-indigo-dark text-warm-ivory border-t border-border-dark text-center">
        <div className="site-container max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
            Love What You See?
          </h2>
          <p className="text-text-muted-dark text-sm sm:text-base mb-8">
            Let us capture your wedding with the same depth, soul, and timeless artistic precision.
          </p>
          <Button href="/contact" variant="primary" size="lg">
            Inquire for Availability
          </Button>
        </div>
      </section>
    </div>
  );
}

