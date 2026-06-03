import type { Metadata } from "next";
import { SectionLabel } from "@/components/SectionLabel";
import { QuestionnaireForm } from "@/components/QuestionnaireForm";
import { AnimatedSection } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Free AI Risk Report",
  description:
    "In under 3 minutes, map your AI exposure across data, compliance, and governance. Receive a personalised risk summary and immediate actions you can take today.",
  openGraph: {
    title: "Free AI Risk Report — QuaZarR Security",
    description: "Map your AI exposure in 3 minutes. Personalised risk summary. Free.",
  },
};

export default function FreeReportPage() {
  return (
    <>
      <section className="w-full py-24 px-8 lg:px-16 hero-grid-bg">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <SectionLabel className="mb-4 flex justify-center">Free AI Risk Report</SectionLabel>
          </AnimatedSection>
          <AnimatedSection delay={0.06}>
            <h1 className="font-bebas text-[clamp(48px,7vw,80px)] tracking-[0.04em] text-white mb-4">
              How Exposed Is Your Business?
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-[17px] text-light leading-relaxed">
              In under 3 minutes, our risk questionnaire will map your current AI exposure across
              data, compliance, and governance. You'll receive a personalised summary of your risk
              areas — plus immediate actions you can take today.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="w-full py-16 px-8 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <QuestionnaireForm />
        </div>
      </section>
    </>
  );
}
