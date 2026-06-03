export interface Insight {
  id: string;
  title: string;
  excerpt: string;
  topic: string;
  date: string;
  author: "Rowan Money";
  linkedinUrl: string;
}

export const insights: Insight[] = [
  {
    id: "1",
    title: "Shadow AI Is The Compliance Risk Nobody Is Talking About",
    excerpt:
      "Your staff are using AI tools you haven't authorised, on data you're legally responsible for, with no audit trail and no governance. This is active GDPR exposure.",
    topic: "Shadow AI",
    date: "2026-05-28",
    author: "Rowan Money",
    linkedinUrl: "https://www.linkedin.com/in/quazarr",
  },
  {
    id: "2",
    title: "The ICO Is Coming For AI — What UK SMBs Need To Know",
    excerpt:
      "ICO enforcement trends are shifting toward AI-related GDPR violations. The enforcement actions already issued signal what's coming for businesses that haven't acted.",
    topic: "ICO Enforcement",
    date: "2026-05-21",
    author: "Rowan Money",
    linkedinUrl: "https://www.linkedin.com/in/quazarr",
  },
  {
    id: "3",
    title: "The EU AI Act Is In Force. Many UK SMBs Don't Know It Applies To Them.",
    excerpt:
      "If your business uses AI tools produced by EU companies, or processes EU data subjects, the EU AI Act applies to you. The knowledge gap here is enormous.",
    topic: "EU AI Act",
    date: "2026-05-14",
    author: "Rowan Money",
    linkedinUrl: "https://www.linkedin.com/in/quazarr",
  },
  {
    id: "4",
    title: "Your AI Vendor Doesn't Have A DPA With You. That's A Problem.",
    excerpt:
      "Using any AI tool to process personal data without a valid Data Processing Agreement in place is a direct breach of Article 28 UK GDPR. Check your stack today.",
    topic: "GDPR",
    date: "2026-05-07",
    author: "Rowan Money",
    linkedinUrl: "https://www.linkedin.com/in/quazarr",
  },
  {
    id: "5",
    title: "OWASP LLM Top 10: What Every Business Using AI Needs To Understand",
    excerpt:
      "OWASP published the definitive framework for LLM security vulnerabilities. If your business uses any AI tool, you're exposed to at least four of the ten categories.",
    topic: "OWASP",
    date: "2026-04-30",
    author: "Rowan Money",
    linkedinUrl: "https://www.linkedin.com/in/quazarr",
  },
  {
    id: "6",
    title: "DUAA 2025: The UK's New AI Law That Many Consultancies Aren't Assessing Against",
    excerpt:
      "The Data Use and Access Act 2025 introduces new automated decision-making obligations that most compliance frameworks haven't been updated to address. Ours has.",
    topic: "DUAA 2025",
    date: "2026-04-23",
    author: "Rowan Money",
    linkedinUrl: "https://www.linkedin.com/in/quazarr",
  },
];
