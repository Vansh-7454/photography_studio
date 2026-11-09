import React from "react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "marigold";
  size?: "default" | "sm" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  external?: boolean;
}

export function Button({
  children,
  href,
  variant = "primary",
  size = "default",
  className = "",
  onClick,
  type = "button",
  disabled = false,
  external = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-sans font-semibold rounded-input text-center transition-all duration-150 focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none min-h-[46px]";

  const variantStyles = {
    primary:
      "bg-terracotta text-white hover:bg-terracotta-dark shadow-subtle active:translate-y-[1px]",
    secondary:
      "bg-deep-aubergine text-warm-ivory hover:bg-aubergine-dark shadow-subtle active:translate-y-[1px]",
    outline:
      "border border-border-subtle bg-transparent text-deep-aubergine hover:bg-white active:translate-y-[1px]",
    marigold:
      "bg-muted-marigold text-deep-aubergine hover:bg-muted-marigold/90 shadow-subtle active:translate-y-[1px]",
  };

  const sizeStyles = {
    sm: "h-[42px] px-4 text-xs tracking-wide",
    default: "h-[48px] px-6 text-sm tracking-wide",
    lg: "h-[52px] px-8 text-base tracking-wide",
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    if (external || href.startsWith("tel:") || href.startsWith("https://wa.me") || href.startsWith("http")) {
      return (
        <a
          href={href}
          className={combinedStyles}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={combinedStyles}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
