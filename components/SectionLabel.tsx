interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <p
      className={`text-[11px] font-bold uppercase tracking-[0.12em] text-red font-sans ${className}`}
    >
      {children}
    </p>
  );
}
