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

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Handle escape key to close menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Lock body scroll when mobile menu is open
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
      <header className="sticky top-0 z-40 h-16 md:h-[72px] bg-warm-ivory/95 backdrop-blur-md border-b border-border-subtle transition-colors">
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
                  className={`text-sm font-semibold tracking-wide transition-colors relative py-1 ${
                    isActive
                      ? "text-sindoor-red font-bold"
                      : "text-royal-indigo hover:text-sindoor-red"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-sindoor-red rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right CTAs Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={siteContent.contact.phoneHref}
              className="flex items-center gap-2 text-xs font-semibold text-royal-indigo hover:text-sindoor-red transition-colors px-2 py-1"
              aria-label={`Call Rangrez at ${siteContent.contact.phoneDisplay}`}
            >
              <Phone className="w-3.5 h-3.5 text-sindoor-red" />
              <span>{siteContent.contact.phoneDisplay}</span>
            </a>
            <Button href="/contact" size="sm" variant="primary">
              Book Dates
            </Button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={siteContent.contact.whatsappHref}
              className="p-2 text-peacock-teal hover:text-royal-indigo rounded-full"
              aria-label="WhatsApp Us"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageSquare className="w-5 h-5" />
            </a>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-royal-indigo hover:text-sindoor-red rounded-lg focus-visible:ring-2 focus-visible:ring-marigold"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (Zero heavy animation, instant clean toggle) */}
      {isOpen && (
        <div
          className="fixed inset-0 top-16 z-50 bg-royal-indigo-dark text-warm-ivory lg:hidden flex flex-col p-6 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
        >
          <div className="flex flex-col gap-5 py-4 border-b border-border-dark">
            {siteContent.navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`font-serif text-2xl tracking-wide transition-colors ${
                    isActive ? "text-marigold font-bold pl-2 border-l-2 border-marigold" : "text-warm-ivory hover:text-marigold"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="flex flex-col gap-4 mt-6">
            <div className="text-xs text-text-muted-dark tracking-wider uppercase">
              Meerut Studio &amp; Bookings
            </div>
            <a
              href={siteContent.contact.phoneHref}
              className="flex items-center gap-3 text-sm text-warm-ivory font-semibold"
            >
              <Phone className="w-4 h-4 text-marigold" />
              <span>{siteContent.contact.phoneDisplay}</span>
            </a>
            <a
              href={siteContent.contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-warm-ivory font-semibold"
            >
              <MessageSquare className="w-4 h-4 text-peacock-teal" />
              <span>Direct WhatsApp Inquiry</span>
            </a>

            <div className="pt-2">
              <Button href="/contact" variant="primary" className="w-full">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

