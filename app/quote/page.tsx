import type { Metadata } from "next";
import { SectionLabel } from "@/components/SectionLabel";
import { QuoteForm } from "@/components/QuoteForm";
import { AnimatedSection } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Request a Quote",
  description:
    "Tell us about your organisation and we'll come back with a scoped recommendation and pricing within one working day.",
};

export default function QuotePage() {
  return (
    <>
      <section className="w-full py-24 px-8 lg:px-16 hero-grid-bg">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <SectionLabel className="mb-4 flex justify-center">Request a Quote</SectionLabel>
          </AnimatedSection>
          <AnimatedSection delay={0.06}>
            <h1 className="font-bebas text-[clamp(48px,7vw,80px)] tracking-[0.04em] text-white mb-4">
              Tell Us About Your Business
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-[17px] text-light leading-relaxed">
              Not every business fits neatly into a single tier. Tell us about your organisation
              and we'll come back to you with a scoped recommendation and pricing within one
              working day.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="w-full py-20 px-8 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <div className="bg-card border border-divider p-8 lg:p-10">
              <QuoteForm />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
