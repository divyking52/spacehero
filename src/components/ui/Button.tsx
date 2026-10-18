import { Link } from "react-router-dom";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "amber" | "ghost";

type Props = {
  children: ReactNode;
  href?: string;
  to?: string;
  onClick?: () => void;
  variant?: Variant;
  className?: string;
  type?: "button" | "submit";
  external?: boolean;
};

const styles: Record<Variant, string> = {
  primary:
    "bg-blue text-white hover:bg-blue/90 shadow-[0_0_32px_rgba(59,130,246,0.25)]",
  secondary:
    "bg-transparent border border-border text-text hover:border-blue/60",
  amber:
    "bg-amber text-canvas hover:bg-amber/90 shadow-[0_0_32px_rgba(245,158,11,0.25)]",
  ghost: "bg-white/5 text-text hover:bg-white/10 border border-transparent",
};

export function Button({
  children,
  href,
  to,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
  external,
}: Props) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold tracking-tight transition-all duration-300 ${styles[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={cls} onClick={onClick}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={cls}
        onClick={onClick}
        {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={cls} onClick={onClick}>
      {children}
    </button>
  );
}
