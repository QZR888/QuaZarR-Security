import { Check, X, Minus } from "lucide-react";

interface Row {
  feature: string;
  enterprise: string;
  generalist: string;
  quazarr: string;
}

const rows: Row[] = [
  {
    feature: "OWASP LLM Top 10 assessment",
    enterprise: "yes",
    generalist: "rarely",
    quazarr: "every",
  },
  {
    feature: "EU AI Act classification",
    enterprise: "yes",
    generalist: "unlikely",
    quazarr: "every",
  },
  {
    feature: "DUAA 2025 ADM compliance",
    enterprise: "sometimes",
    generalist: "no",
    quazarr: "every",
  },
  {
    feature: "NIST AI RMF assessment",
    enterprise: "yes",
    generalist: "no",
    quazarr: "every",
  },
  {
    feature: "GRC posture scoring",
    enterprise: "yes",
    generalist: "no",
    quazarr: "every",
  },
  {
    feature: "Staff AI Policy included",
    enterprise: "extra",
    generalist: "no",
    quazarr: "full",
  },
  {
    feature: "Dual expert sign-off",
    enterprise: "yes",
    generalist: "no",
    quazarr: "every",
  },
  {
    feature: "SMB-appropriate pricing",
    enterprise: "price",
    generalist: "scope",
    quazarr: "price-quazarr",
  },
  {
    feature: "Turnaround within 1 week",
    enterprise: "weeks",
    generalist: "possibly",
    quazarr: "every",
  },
];

function Cell({ value }: { value: string }) {
  if (value === "yes" || value === "every")
    return (
      <span className="flex items-center justify-center">
        <Check className="w-4 h-4 text-red" aria-label="Yes" />
        {value === "every" && (
          <span className="ml-1 text-xs text-light hidden sm:inline">Every engagement</span>
        )}
      </span>
    );
  if (value === "no")
    return (
      <span className="flex items-center justify-center">
        <X className="w-4 h-4 text-subtle" aria-label="No" />
      </span>
    );
  if (value === "rarely" || value === "unlikely" || value === "sometimes")
    return <span className="text-xs text-muted capitalize">{value}</span>;
  if (value === "extra") return <span className="text-xs text-muted">Extra cost</span>;
  if (value === "full") return <span className="text-xs text-gold">Full Review</span>;
  if (value === "price") return <span className="text-xs text-muted">£15k–50k+</span>;
  if (value === "price-quazarr") return <span className="text-xs text-red font-bold">From £750</span>;
  if (value === "scope") return <span className="text-xs text-muted">Limited scope</span>;
  if (value === "weeks") return <span className="text-xs text-muted">Weeks–months</span>;
  if (value === "possibly") return <span className="text-xs text-muted">Possibly</span>;
  return <span className="text-xs text-muted">{value}</span>;
}

export function ComparisonTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-divider">
            <th className="text-left px-4 py-3 text-[10px] font-bold uppercase tracking-[0.1em] text-muted w-1/3 sm:w-auto">
              What You Need
            </th>
            <th className="px-4 py-3 text-[10px] font-bold uppercase tracking-[0.1em] text-muted text-center">
              Enterprise
            </th>
            <th className="px-4 py-3 text-[10px] font-bold uppercase tracking-[0.1em] text-muted text-center">
              Generalist IT
            </th>
            <th className="px-4 py-3 text-[10px] font-bold uppercase tracking-[0.1em] text-red text-center">
              QuaZarR Security
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={row.feature}
              className={`border-b border-divider ${i % 2 === 0 ? "bg-card" : "bg-surface"}`}
            >
              <td className="px-4 py-3 text-light text-sm">{row.feature}</td>
              <td className="px-4 py-3 text-center">
                <Cell value={row.enterprise} />
              </td>
              <td className="px-4 py-3 text-center">
                <Cell value={row.generalist} />
              </td>
              <td className="px-4 py-3 text-center bg-[rgba(204,0,0,0.04)]">
                <Cell value={row.quazarr} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
