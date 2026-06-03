import type { Metadata } from "next";
import Link from "next/link";
import { SectionLabel } from "@/components/SectionLabel";
import { RedRule } from "@/components/RedRule";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Retainer — Ongoing AI Risk Support",
  description:
    "Quarterly reassessments, new AI tool vetting, policy maintenance, and incident response support. Your AI risk doesn't stand still — your protection shouldn't either.",
  openGraph: {
    title: "Retainer — QuaZarR Security",
    description: "Ongoing AI risk management for UK SMBs. Quarterly reassessments, policy updates, incident support.",
  },
};

const retainerItems = [
  {
    number: "01",
    title: "Quarterly AI Risk Reassessment",
    body: "Every three months, we conduct a full reassessment of your AI risk posture — capturing new tools, workflow changes, staff AI usage shifts, and any new regulatory developments. You always know where you stand.",
  },
  {
    number: "02",
    title: "New AI Tool Vetting",
    body: "Before your business adopts any new AI tool, we review it against all relevant frameworks and provide a written recommendation. No more unvetted AI going live with your client data.",
  },
  {
    number: "03",
    title: "Policy Maintenance & Updates",
    body: "As UK legislation evolves — DUAA 2025 is already in force; more is coming — we update your Staff AI Usage Policy and governance documentation to remain compliant. You receive updated versions as standards change.",
  },
  {
    number: "04",
    title: "Incident Response Support",
    body: "In the event of an AI-related data incident, security concern, or regulatory enquiry, we provide immediate advisory support — helping you understand your obligations, draft your response, and mitigate exposure.",
  },
  {
    number: "05",
    title: "Framework Monitoring",
    body: "We track updates to OWASP LLM Top 10, NIST AI RMF, EU AI Act guidance, UK ICO enforcement trends, and MITRE ATLAS. Anything relevant to your business is flagged with recommended actions.",
  },
  {
    number: "06",
    title: "Priority Access",
    body: "Retainer clients receive priority response times (same working day) and dedicated access to both our CEO and CTO — no waiting for a slot, no re-explaining your context.",
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
              <p className="text-light leading-relaxed mb-4">
                Retainer pricing is scoped to the size of your business, your AI tool footprint,
                and the level of ongoing support required. We don't publish a flat fee because
                your business isn't flat.
              </p>
              <p className="text-sm text-muted leading-relaxed">
                All retainer clients receive a full Basic or Full Assessment as their onboarding
                engagement before the retainer begins.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="border border-red bg-card p-8">
                <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-red mb-4">
                  Request a Proposal
                </p>
                <p className="text-light leading-relaxed mb-6">
                  We'll review your existing assessment — or conduct a discovery call if you don't
                  have one — and come back within two working days with a fully scoped retainer
                  proposal including pricing.
                </p>
                <Link
                  href="/quote"
                  className="inline-block bg-red text-white text-xs font-bold uppercase tracking-[0.12em] px-6 py-3 hover:bg-red-dark transition-colors"
                >
                  Request a Retainer Proposal
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
