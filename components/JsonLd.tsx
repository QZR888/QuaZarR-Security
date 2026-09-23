export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://quazarrsecurity.com/#organization",
        name: "QuaZarR Security",
        url: "https://quazarrsecurity.com",
        logo: "https://quazarrsecurity.com/favicon.ico",
        description:
          "AI risk assessments for UK SMBs in recruitment, legal, finance, HR, and accountancy. Structured assessments across the frameworks relevant to your sector and tier. Delivered in 5-7 working days.",
        email: "hello@quazarrsecurity.com",
        areaServed: "GB",
        knowsAbout: [
          "AI Risk Assessment",
          "EU AI Act Compliance",
          "GDPR Compliance",
          "NIST AI RMF",
          "OWASP LLM Top 10 (2026)",
          "AI Governance",
          "UK DUAA 2025",
        ],
        founder: [
          {
            "@type": "Person",
            name: "Rowan Money",
            jobTitle: "CEO",
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://quazarrsecurity.com/#website",
        url: "https://quazarrsecurity.com",
        name: "QuaZarR Security",
        publisher: { "@id": "https://quazarrsecurity.com/#organization" },
      },
      {
        "@type": "Service",
        name: "Basic AI Risk Assessment",
        provider: { "@id": "https://quazarrsecurity.com/#organization" },
        description:
          "A structured AI risk assessment for UK SMBs. Key compliance gaps identified across the frameworks that matter, with a clear remediation roadmap in 5-7 working days.",
        offers: {
          "@type": "Offer",
          price: "900",
          priceCurrency: "GBP",
        },
        url: "https://quazarrsecurity.com/basic-assessment",
      },
      {
        "@type": "Service",
        name: "Full AI Risk Review",
        provider: { "@id": "https://quazarrsecurity.com/#organization" },
        description:
          "Board-ready AI risk review. Everything in Basic expanded to full depth, plus DPA review and Staff AI Usage Policy. 7-10 working days.",
        offers: {
          "@type": "Offer",
          price: "2500",
          priceCurrency: "GBP",
        },
        url: "https://quazarrsecurity.com/full-assessment",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
