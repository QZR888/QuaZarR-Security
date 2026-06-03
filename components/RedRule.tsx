interface RedRuleProps {
  className?: string;
}

export function RedRule({ className = "" }: RedRuleProps) {
  return <div className={`red-rule ${className}`} aria-hidden="true" />;
}
