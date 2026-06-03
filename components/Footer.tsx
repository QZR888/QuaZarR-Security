import Link from "next/link";
import { Mail, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer
      className="mt-auto w-full"
      style={{ background: "#141414", borderTop: "2px solid #cc0000" }}
    >
      <div className="w-full px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-baseline gap-3 mb-3">
              <span className="font-sans font-black text-[22px] leading-none text-red tracking-tight">
                QuaZarR
              </span>
              <span className="font-sans font-semibold text-[13px] leading-none text-white uppercase tracking-[0.12em]">
                Security
              </span>
            </div>
            <p className="text-sm text-muted">AI Cybersecurity for UK SMBs.</p>
          </div>

          {/* Nav */}
          <nav aria-label="Footer navigation">
            <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-muted mb-4">
              Navigation
            </p>
            <ul className="flex flex-col gap-2">
              {[
                { href: "/services", label: "Services" },
                { href: "/free-report", label: "Free Report" },
                { href: "/insights", label: "Insights" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-muted hover:text-light transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-muted mb-4">
              Contact
            </p>
            <a
              href="mailto:hello@quazarrsecurity.com"
              className="flex items-center gap-2 text-sm text-light hover:text-red transition-colors mb-4"
            >
              <Mail className="w-4 h-4 shrink-0" aria-hidden="true" />
              hello@quazarrsecurity.com
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-[0.1em] text-red border border-red px-4 py-2 hover:bg-red hover:text-white transition-colors"
            >
              Book a discovery call
              <ArrowUpRight className="w-3 h-3" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="border-t border-divider pt-8">
          <p className="text-xs text-muted mb-3">
            &copy; 2026 QuaZarR Security. All rights reserved.
          </p>
          <p className="text-[11px] text-subtle leading-relaxed">
            AI risk assessments mapped against OWASP LLM Top 10, EU AI Act, NIST AI RMF,
            NIST CSF 2.0, GRC, UK GDPR, DUAA 2025, and MITRE ATLAS.
          </p>
        </div>
      </div>
    </footer>
  );
}
