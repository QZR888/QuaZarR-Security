import type { Metadata } from "next";
import { Mail, Clock, Check } from "lucide-react";
import { SectionLabel } from "@/components/SectionLabel";
import { ContactForm } from "@/components/ContactForm";
import { AnimatedSection } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Contact — Book a Discovery Call",
  description:
    "Book a 20-minute discovery call with QuaZarR Security. We map your AI tool usage and tell you exactly where you stand. No obligation.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="w-full py-24 px-8 lg:px-16 hero-grid-bg">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <SectionLabel className="mb-4 flex justify-center">Get in Touch</SectionLabel>
          </AnimatedSection>
          <AnimatedSection delay={0.06}>
            <h1 className="font-bebas text-[clamp(48px,7vw,80px)] tracking-[0.04em] text-white mb-4">
              Book a Discovery Call
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-[17px] text-light leading-relaxed">
              20 minutes. We map your AI tool usage, data flows, and compliance position. You leave
              with clarity on where you stand and what to do next. No hard sell. No obligation.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="w-full py-20 px-8 lg:px-16">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: details */}
          <AnimatedSection>
            <div>
              <div className="flex flex-col gap-6 mb-12">
                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-red shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-muted mb-1">
                      Email
                    </p>
                    <a
                      href="mailto:hello@quazarrsecurity.com"
                      className="text-sm text-light hover:text-red transition-colors"
                    >
                      hello@quazarrsecurity.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-red shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-muted mb-1">
                      Response Time
                    </p>
                    <p className="text-sm text-light">Within one working day</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-divider pt-8">
                <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-muted mb-4">
                  What to Expect
                </p>
                <ul className="flex flex-col gap-3">
                  {[
                    "No technical knowledge required",
                    "No obligation to purchase",
                    "Clients typically identify immediate free actions on the call",
                    "20 minutes via video or phone",
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-red shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-sm text-light">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>

          {/* Right: form */}
          <AnimatedSection delay={0.1}>
            <div className="bg-card border border-divider p-8">
              <ContactForm />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
