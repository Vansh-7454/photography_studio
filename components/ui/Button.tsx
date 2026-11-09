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
    "inline-flex items-center justify-center font-sans font-semibold rounded-input text-center transition-all duration-150 focus-visible:ring-2 focus-visible:ring-marigold focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none min-h-[48px]";

  const variantStyles = {
    primary:
      "bg-sindoor-red text-white hover:bg-sindoor-dark shadow-sm active:translate-y-[1px]",
    secondary:
      "bg-royal-indigo text-warm-ivory hover:bg-royal-indigo-dark shadow-sm active:translate-y-[1px]",
    outline:
      "border border-border-subtle bg-transparent text-royal-indigo hover:bg-royal-indigo/5 active:translate-y-[1px]",
    marigold:
      "bg-marigold text-royal-indigo hover:bg-marigold-light shadow-sm active:translate-y-[1px]",
  };

  const sizeStyles = {
    sm: "h-[44px] px-5 text-sm",
    default: "h-[50px] px-7 text-base",
    lg: "h-[54px] px-9 text-lg",
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

