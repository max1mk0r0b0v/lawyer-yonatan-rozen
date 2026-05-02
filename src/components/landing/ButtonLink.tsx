import Link from "next/link";
import { type AnchorHTMLAttributes, type ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

const variants = {
  primary:
    "bg-[linear-gradient(135deg,#f4d7a1,#b47a2e)] text-[#111820] shadow-[0_18px_45px_rgba(180,122,46,0.24)] hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(180,122,46,0.34)]",
  secondary:
    "border border-white/15 bg-white/8 text-stone-50 shadow-[0_14px_35px_rgba(0,0,0,0.18)] backdrop-blur hover:-translate-y-1 hover:border-[#e7c98f]/45 hover:bg-white/14",
  ghost:
    "text-stone-100/78 underline-offset-8 hover:text-white hover:underline",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonLinkProps) {
  const baseClass =
    variant === "ghost"
      ? "group inline-flex items-center justify-center rounded-full px-2 py-2 text-sm font-semibold transition duration-300 max-sm:active:scale-[0.98]"
      : "group inline-flex min-h-12 items-center justify-center rounded-sm px-8 py-3.5 text-sm font-bold tracking-wide transition duration-300 ease-out focus:outline-none focus:ring-4 focus:ring-[#d4af72]/30 max-sm:active:scale-[0.98] sm:text-base";

  return (
    <Link className={`${baseClass} ${variants[variant]} ${className}`} href={href} {...props}>
      <span className="transition duration-300 group-hover:scale-[1.02]">{children}</span>
    </Link>
  );
}
