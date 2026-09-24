import { buildMetadata } from "@/lib/metadata";
import Image from "next/image";
import Link from "next/link";
import { SectionLabel } from "@/components/SectionLabel";
import { RedRule } from "@/components/RedRule";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

export const metadata = buildMetadata({
  title: "About the Founder",
  description:
    "QuaZarR Security is a solo AI risk and compliance consultancy for UK SMBs, founded by Rowan Money to make rigorous assessments affordable for smaller firms.",
  path: "/about",
});

const founders = [
  {
    name: "Rowan Money",
    role: "CEO",
    sub: "Founder · Assessment Delivery · Client Engagement",
    bio: [
      "Rowan founded QuaZarR Security and runs every engagement personally. His background spans entrepreneurship, digital product development, and brand building, which is why the reports are written to be acted on by a business owner rather than interpreted by a legal team.",
      "The person on your discovery call is the person who writes your report. No account managers, no handoffs, no junior analysts learning on your engagement. He handles the full journey: initial scoping, the assessment itself, the risk register, the remediation roadmap, and the delivery walkthrough.",
      "At enterprise consultancies you rarely meet whoever does the actual work. Here every finding traces back to one person who can explain it, defend it, and help you act on it.",
    ],
  },
];

const pillars = [
  {
    title: "The Gap Was Obvious",
    body: "Enterprise AI security consultancies price UK SMBs out of the market. Generalist IT consultants lack the framework depth. We built the product that fills that gap: comprehensive, current, and priced for the businesses that actually need it.",
  },
  {
    title: "Founder-Led By Design",
    body: "One person runs the discovery call, does the assessment, and writes the report. That is not a limitation, it is the control. Every finding traces back to someone who can explain and defend it.",
  },
  {
    title: "Current By Construction",
    body: "Competitors are still assessing against frameworks that predate the EU AI Act and the Data (Use and Access) Act 2025. We built our assessment methodology to incorporate the most current legislative landscape from day one.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="w-full py-24 px-8 lg:px-16 hero-grid-bg">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <SectionLabel className="mb-6 flex justify-center">The Founder</SectionLabel>
            <div className="flex justify-center mb-6">
              <Image
                src="/og-image.png"
                alt="QuaZarR Security"
                width={120}
                height={120}
                className="rounded-sm"
                priority
              />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.06}>
            {/* DM Sans heading to preserve QuaZarR mixed-case */}
            <h1 className="font-sans font-black text-[clamp(40px,6vw,72px)] tracking-tight text-white mb-6 leading-none">
              <span className="text-red">QuaZarR</span> Security
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-[17px] text-light leading-relaxed">
              QuaZarR Security was founded on a direct observation: UK SMBs are exposed to
              unprecedented AI-related compliance risk, and the consultancies equipped to address
              it either price them out or talk past them. We built the solution: a comprehensive,
              multi-framework AI risk assessment designed specifically for the businesses that
              need it most.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <RedRule />

      {/* Founder */}
      <section className="w-full py-24 px-8 lg:px-16">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 gap-8 mb-24">
            {founders.map(({ name, role, sub, bio }, i) => (
              <AnimatedSection key={name} delay={i * 0.08}>
                <div
                  className="bg-card p-8 h-full"
                  style={{ borderTop: "2px solid #cc0000" }}
                >
                  <SectionLabel className="mb-2">{role}</SectionLabel>
                  <h2 className="font-bebas text-4xl tracking-wide text-white mb-1">{name}</h2>
                  <p className="text-xs text-muted mb-6">{sub}</p>
                  {bio.map((para, j) => (
                    <p key={j} className="text-sm text-light leading-relaxed mb-3 last:mb-0">
                      {para}
                    </p>
                  ))}
                </div>
              </AnimatedSection>
            ))}
          </div>

          <RedRule className="mb-20" />

          {/* Mission */}
          <div className="text-center mb-12">
            <AnimatedSection className="mb-4">
              <SectionLabel className="flex justify-center">Why We Built This</SectionLabel>
            </AnimatedSection>
            <AnimatedSection>
              <h2 className="font-bebas text-[clamp(36px,5vw,56px)] tracking-[0.04em] text-white">
                Purpose-Built for the Gap
              </h2>
            </AnimatedSection>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {pillars.map(({ title, body }) => (
              <StaggerItem key={title}>
                <div className="bg-card border border-divider p-6 h-full">
                  <h3 className="text-sm font-bold uppercase tracking-[0.06em] text-white mb-3">
                    {title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">{body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <div className="text-center">
            <AnimatedSection>
              <Link
                href="/contact"
                className="inline-block bg-red text-white text-xs font-bold uppercase tracking-[0.12em] px-8 py-4 hover:bg-red-dark transition-colors"
              >
                Work with Us
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
