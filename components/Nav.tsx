"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/services", label: "Services" },
  { href: "/basic-assessment", label: "Basic Assessment" },
  { href: "/full-assessment", label: "Full Assessment" },
  { href: "/retainer", label: "Retainer" },
  { href: "/insights", label: "Insights" },
  { href: "/about", label: "About" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-shadow ${
          scrolled ? "shadow-[0_4px_40px_rgba(0,0,0,0.95)]" : ""
        }`}
        style={{ background: "#0a0a0a", borderBottom: "1px solid #cc0000" }}
      >
        <nav className="w-full px-8 lg:px-12 h-[72px] flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="hover:opacity-80 transition-opacity shrink-0 flex items-baseline gap-3"
            aria-label="QuaZarR Security — home"
          >
            <span className="font-sans font-black text-[28px] leading-none text-red tracking-tight">
              QuaZarR
            </span>
            <span className="font-sans font-semibold text-[16px] leading-none text-white uppercase tracking-[0.12em]">
              Security
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="nav-link text-[11px] font-bold uppercase tracking-[0.1em] text-muted hover:text-light transition-colors"
                data-active={pathname === href ? "true" : undefined}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/free-report"
              className="text-[11px] font-bold uppercase tracking-[0.1em] border border-red text-red px-4 py-2 hover:bg-red hover:text-white transition-colors"
            >
              Free Report
            </Link>
            <Link
              href="/contact"
              className="text-[11px] font-bold uppercase tracking-[0.1em] bg-red text-white px-4 py-2 hover:bg-red-dark transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Mobile burger */}
          <button
            className="lg:hidden p-2 text-muted hover:text-white transition-colors"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </header>

      {/* Mobile drawer */}
      {open && (
        <div
          className="fixed inset-0 z-40 lg:hidden"
          style={{ top: "72px", background: "#0a0a0a" }}
        >
          <nav className="flex flex-col px-8 py-6 gap-0">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="py-4 text-sm font-bold uppercase tracking-[0.1em] text-muted hover:text-white border-b border-divider transition-colors"
                data-active={pathname === href ? "true" : undefined}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/free-report"
              className="mt-6 py-3 text-center text-sm font-bold uppercase tracking-[0.1em] border border-red text-red hover:bg-red hover:text-white transition-colors"
            >
              Free Report
            </Link>
            <Link
              href="/contact"
              className="mt-3 py-3 text-center text-sm font-bold uppercase tracking-[0.1em] bg-red text-white hover:bg-red-dark transition-colors"
            >
              Book a Discovery Call
            </Link>
          </nav>
        </div>
      )}

      <div className="h-[72px]" aria-hidden="true" />
    </>
  );
}
