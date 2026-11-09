"use client";

import React, { useState } from "react";
import { siteContent, JournalArticle } from "@/content/site";
import { SmartImage } from "@/components/ui/SmartImage";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { BookOpen, Clock, Calendar, X, ArrowRight, CheckCircle2 } from "lucide-react";

export default function JournalPage() {
  const [activeArticle, setActiveArticle] = useState<JournalArticle | null>(null);

  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-ivory-surface py-16 md:py-20 border-b border-border-subtle">
        <div className="site-container max-w-4xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-sindoor-red mb-3 block">
            Atelier Rangrez Monograph
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-royal-indigo mb-6 leading-tight">
            The Wedding Journal
          </h1>
          <p className="text-base sm:text-lg text-text-muted leading-relaxed max-w-2xl mx-auto">
            Essays, lighting guides, ritual nuances, and philosophical reflections on documenting the sacred poetry of Indian matrimony.
          </p>
        </div>
      </section>

      {/* Main Magazine Layout */}
      <section className="section-padding bg-warm-ivory">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {siteContent.journalArticles.map((article) => (
              <article
                key={article.id}
                className="group flex flex-col bg-ivory-surface rounded-card overflow-hidden border border-border-subtle shadow-card hover:shadow-raised transition-all"
              >
                <div
                  className="cursor-pointer relative overflow-hidden"
                  onClick={() => setActiveArticle(article)}
                >
                  <SmartImage
                    src={article.image.src}
                    alt={article.image.alt}
                    aspectRatio="16/9"
                    rounded="none"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-royal-indigo-dark/85 backdrop-blur-sm text-warm-ivory text-[10px] font-bold uppercase tracking-wider">
                    {article.category}
                  </div>
                </div>

                <div className="p-8 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center gap-3 text-xs text-text-muted font-medium mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-sindoor-red" />
                        <span>{article.publishedDate}</span>
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-marigold" />
                        <span>{article.readTime}</span>
                      </span>
                    </div>

                    <h2
                      onClick={() => setActiveArticle(article)}
                      className="font-serif text-2xl font-bold text-royal-indigo mb-3 group-hover:text-sindoor-red transition-colors cursor-pointer leading-snug"
                    >
                      {article.title}
                    </h2>

                    <p className="text-sm text-text-muted leading-relaxed mb-6">
                      {article.summary}
                    </p>

                    <div className="space-y-2 mb-6 p-4 rounded-xl bg-warm-ivory border border-border-subtle">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-royal-indigo block mb-1">
                        Key Insights:
                      </span>
                      {article.keyPoints.map((point) => (
                        <div key={point} className="flex items-start gap-2 text-xs text-text-muted">
                          <CheckCircle2 className="w-3.5 h-3.5 text-peacock-teal shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setActiveArticle(article)}
                    className="w-full py-3 rounded-input border border-border-subtle text-xs font-bold text-royal-indigo hover:bg-warm-ivory transition-colors flex items-center justify-center gap-1.5 focus-visible:ring-2 focus-visible:ring-marigold"
                  >
                    <span>Read Full Editorial Essay</span>
                    <ArrowRight className="w-3.5 h-3.5 text-sindoor-red" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Expanded Article Modal (Preserves 7 Strict Routes, No Extra Subpages) */}
      {activeArticle && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={activeArticle.title}
        >
          <div className="bg-ivory-surface rounded-hero max-w-3xl w-full p-8 sm:p-10 border border-border-subtle relative max-h-[90vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setActiveArticle(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-royal-indigo hover:bg-warm-ivory focus-visible:ring-2 focus-visible:ring-marigold"
              aria-label="Close article"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-bold uppercase tracking-widest text-sindoor-red block mb-2">
              {activeArticle.category} • {activeArticle.publishedDate}
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-royal-indigo mb-4 leading-tight">
              {activeArticle.title}
            </h2>

            <div className="rounded-card overflow-hidden mb-6 aspect-video">
              <SmartImage
                src={activeArticle.image.src}
                alt={activeArticle.image.alt}
                aspectRatio="16/9"
                rounded="none"
              />
            </div>

            <div className="prose max-w-none text-text-muted text-sm sm:text-base leading-relaxed space-y-4 mb-8">
              <p className="text-lg font-serif italic text-royal-indigo border-l-2 border-sindoor-red pl-4">
                &ldquo;{activeArticle.summary}&rdquo;
              </p>
              <p>
                When planning an Indian wedding, the collision between ancient muhurat schedules and aesthetic visual light is often a couple&apos;s greatest challenge. The sacred fire (Agni), the floral mandap, and the intricate zardozi embroideries demand thoughtful, unhurried exposure.
              </p>
              <h3 className="font-serif text-xl font-bold text-royal-indigo pt-2">
                Essential Takeaways for Couples &amp; Families:
              </h3>
              <ul className="space-y-2 text-sm text-text-muted">
                {activeArticle.keyPoints.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-sindoor-red shrink-0 mt-2" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <p>
                Our philosophy at Atelier Rangrez has always been rooted in collaboration. By discussing your ceremony flow with both the family elders and the panditji in advance, we create space for genuine emotion to flourish without rush.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-border-subtle">
              <Button href="/contact" variant="primary" className="flex-1" onClick={() => setActiveArticle(null)}>
                Discuss With Our Editorial Team
              </Button>
              <Button onClick={() => setActiveArticle(null)} variant="outline" className="flex-1">
                Close Article
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* CTA Band */}
      <section className="py-16 bg-royal-indigo-dark text-warm-ivory border-t border-border-dark text-center">
        <div className="site-container max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
            Have Questions About Your Wedding Schedule?
          </h2>
          <p className="text-text-muted-dark text-sm sm:text-base mb-8">
            Schedule an informal tea and consultation at our Civil Lines studio in Meerut or a private video call.
          </p>
          <Button href="/contact" variant="marigold" size="lg">
            Schedule Consultation Call
          </Button>
        </div>
      </section>
    </div>
  );
}

