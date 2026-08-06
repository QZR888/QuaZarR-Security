import type { Metadata } from "next";
import Link from "next/link";
import { SectionLabel } from "@/components/SectionLabel";
import { RedRule } from "@/components/RedRule";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  alternates: { canonical: "https://quazarrsecurity.com/retainer" },
  title: "Retainer — Ongoing AI Risk Support",
  description:
    "Quarterly reassessments, new AI tool vetting, policy maintenance, and incident response support. Your AI risk doesn't stand still — your protection shouldn't either.",
  openGraph: {
    url: "https://quazarrsecurity.com/retainer",
    title: "Retainer — QuaZarR Security",
    description: "Ongoing AI risk management for UK SMBs. Quarterly reassessments, policy updates, incident support.",
  },
};

const retainerItems = [
  {
    number: "01",
    title: "Quarterly AI Risk Reassessment",
    body: "Every quarter, we reassess your AI risk posture against your standing risk register, capturing new tools, workflow changes, and regulatory developments. You always know where you stand.",
  },
  {
    number: "02",
    title: "AI Tool Vetting Before Adoption",
    body: "Before your team adopts any new AI tool, we vet it first: DPA availability, training settings, data residency, EU AI Act classification, and sector-specific red flags. You receive a clear approved, conditional, or rejected verdict within 2 working days. Up to 3 vettings per quarter included; additional vettings at £95 each.",
  },
  {
    number: "03",
    title: "Policy Maintenance",
    body: "Your Staff AI Usage Policy and governance documentation are updated within 10 working days of any regulatory change relevant to your business. You are never left operating under outdated documentation.",
  },
  {
    number: "04",
    title: "Written Regulatory Alerts",
    body: "We monitor the OWASP LLM Top 10, NIST AI RMF, EU AI Act guidance, ICO enforcement trends, and MITRE ATLAS. When something relevant to your business changes, you receive a written alert with recommended actions. When OWASP published the 2026 edition on 3 August 2026 and renumbered eight of the ten entries, our templates were migrated and verified against it.",
  },
  {
    number: "05",
    title: "Advisory Hours",
    body: "2 advisory hours included per quarter for questions, scenario reviews, or policy guidance. Available by email, call, or video. Same-working-day response to any request received before 2pm.",
  },
  {
    number: "06",
    title: "Incident Response Support",
    body: "If an AI-related data incident, security concern, or regulatory enquiry arises, we engage the same working day. The first 2 hours of incident response advisory are included in your retainer.",
  },
];

export default function RetainerPage() {
  return (
    <>
      <section className="w-full py-24 px-8 lg:px-16 hero-grid-bg">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <SectionLabel className="mb-4 flex justify-center">Ongoing Support</SectionLabel>
          </AnimatedSection>
          <AnimatedSection delay={0.06}>
            <h1 className="font-bebas text-[clamp(36px,5.5vw,64px)] tracking-[0.04em] text-white leading-[1] mb-6">
              Your AI Risk Doesn't Stand Still.
              <br />
              <span className="text-red">Your Protection Shouldn't Either.</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-[17px] text-light leading-relaxed">
              AI adoption inside businesses accelerates quarterly. New tools get adopted without
              approval. Staff change. Legislation updates. A single assessment gives you a
              snapshot — a retainer keeps your compliance posture current as everything around it
              evolves.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <RedRule />

      <section className="w-full py-24 px-12 lg:px-20">
        <div className="w-full">
          <AnimatedSection className="mb-12">
            <SectionLabel>What the Retainer Covers</SectionLabel>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {retainerItems.map(({ number, title, body }) => (
              <StaggerItem key={number}>
                <div className="card-accent bg-card p-6 h-full">
                  <p className="font-bebas text-4xl text-red tracking-wide mb-3">{number}</p>
                  <h3 className="text-sm font-bold uppercase tracking-[0.06em] text-white mb-3">
                    {title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">{body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <RedRule className="mb-16" />

          {/* Pricing section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedSection>
              <SectionLabel className="mb-4">Retainer Pricing</SectionLabel>
              <p className="font-bebas text-5xl text-red tracking-wide leading-none mb-3">£395<span className="text-2xl text-muted ml-2 tracking-normal font-sans font-normal">/ month</span></p>
              <p className="text-sm text-muted mb-6">Billed monthly. Minimum 12-month term.</p>
              <p className="text-sm text-light leading-relaxed mb-4">
                All retainer clients complete a full Basic or Full Assessment as their onboarding
                engagement before the retainer begins.
              </p>
              <p className="text-xs text-subtle leading-relaxed">
                QuaZarR Security provides risk assessment and guidance, not legal advice.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="border border-red bg-card p-8">
                <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-red mb-4">
                  Get Started
                </p>
                <p className="text-light leading-relaxed mb-6">
                  Book a discovery call. We'll review your current assessment or start from
                  scratch and confirm the retainer scope before anything begins.
                </p>
                <div className="flex flex-col gap-3">
                  <Link
                    href="/contact"
                    className="inline-block bg-red text-white text-xs font-bold uppercase tracking-[0.12em] px-6 py-3 hover:bg-red-dark transition-colors text-center"
                  >
                    Book a Discovery Call
                  </Link>
                  <Link
                    href="/quote"
                    className="inline-block border border-red text-red text-xs font-bold uppercase tracking-[0.12em] px-6 py-3 hover:bg-red hover:text-white transition-colors text-center"
                  >
                    Request a Quote
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
