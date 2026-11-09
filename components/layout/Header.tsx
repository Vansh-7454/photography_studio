"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteContent } from "@/content/site";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { Menu, X, Phone, MessageSquare } from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <header className="sticky top-0 z-40 h-[68px] md:h-[72px] bg-warm-ivory/95 backdrop-blur-md border-b border-border-subtle transition-colors">
        <div className="site-container h-full flex items-center justify-between">
          {/* Logo */}
          <Logo variant="full" theme="dark" />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Main Navigation">
            {siteContent.navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-[13px] font-semibold tracking-wide transition-colors relative py-1 ${
                    isActive
                      ? "text-terracotta font-bold"
                      : "text-deep-aubergine hover:text-terracotta"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-terracotta rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right CTAs Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={siteContent.contact.phoneHref}
              className="flex items-center gap-2 text-xs font-semibold text-deep-aubergine hover:text-terracotta transition-colors px-2 py-1"
              aria-label={`Call Rangrez at ${siteContent.contact.phoneDisplay}`}
            >
              <Phone className="w-3.5 h-3.5 text-terracotta" />
              <span>{siteContent.contact.phoneDisplay}</span>
            </a>
            <Button href="/contact" size="sm" variant="primary">
              Book Dates
            </Button>
          </div>

          {/* Mobile Menu Actions */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={siteContent.contact.whatsappHref}
              className="p-2 text-soft-sage hover:text-deep-aubergine rounded-full"
              aria-label="WhatsApp Studio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageSquare className="w-5 h-5" />
            </a>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-deep-aubergine hover:text-terracotta rounded-lg focus-visible:ring-2 focus-visible:ring-terracotta"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isOpen && (
        <div
          className="fixed inset-0 top-[68px] z-50 bg-aubergine-dark text-warm-ivory lg:hidden flex flex-col p-6 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Menu"
        >
          <div className="flex flex-col gap-4 py-4 border-b border-border-dark">
            {siteContent.navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`font-serif text-2xl tracking-wide transition-colors ${
                    isActive
                      ? "text-muted-marigold font-bold pl-2 border-l-2 border-muted-marigold"
                      : "text-warm-ivory hover:text-muted-marigold"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="flex flex-col gap-4 mt-6">
            <span className="text-xs text-text-muted-dark tracking-wider uppercase font-semibold">
              Civil Lines Studio • Meerut
            </span>
            <a
              href={siteContent.contact.phoneHref}
              className="flex items-center gap-3 text-sm text-warm-ivory font-semibold"
            >
              <Phone className="w-4 h-4 text-muted-marigold" />
              <span>{siteContent.contact.phoneDisplay}</span>
            </a>
            <a
              href={siteContent.contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-warm-ivory font-semibold"
            >
              <MessageSquare className="w-4 h-4 text-soft-sage" />
              <span>Direct WhatsApp Inquiry</span>
            </a>

            <div className="pt-2">
              <Button href="/contact" variant="primary" className="w-full">
                Check Availability
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
