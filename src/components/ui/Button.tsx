import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "cta";
  size?: "sm" | "md" | "lg" | "xl";
  rounded?: "none" | "md" | "full";
  icon?: LucideIcon;
  className?: string;
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  rounded = "md",
  className = "",
  icon: Icon,
  disabled,
  type = "button",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-bold transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none";

  const variants = {
    primary: "bg-[#28a745] hover:bg-green-700 text-white focus:ring-green-500",
    secondary: "bg-official-blue hover:bg-blue-700 text-white focus:ring-blue-500",
    outline:
      "bg-white border-2 border-official-blue text-official-blue hover:bg-blue-50 focus:ring-blue-500",
    cta: "bg-official-red hover:opacity-90 text-white focus:ring-red-500",
  };

  const sizes = {
    sm: "text-sm py-1.5 px-3",
    md: "text-base py-2 px-4 md:py-3 md:px-6",
    lg: "text-lg py-3 px-8 md:py-4 md:px-10",
    xl: "text-xl py-4 px-10 md:py-5 md:px-12",
  };

  const roundness = {
    none: "rounded-none",
    md: "rounded-md",
    full: "rounded-full",
  };

  const disabledStyles = disabled ? "bg-gray-300 text-gray-500 hover:bg-gray-300 transform-none border-transparent" : "";

  // Manually combining classes
  const activeVariantStyle = disabled ? disabledStyles : variants[variant];
  
  const combinedStyles = [
    baseStyles,
    activeVariantStyle,
    sizes[size],
    roundness[rounded],
    className,
  ].filter(Boolean).join(" ");

  const content = (
    <>
      {Icon && <Icon size={size === "sm" ? 16 : 20} className="mr-2" />}
      {children}
    </>
  );

  if (href && !disabled) {
    return (
      <Link href={href} className={combinedStyles}>
        {content}
      </Link>
    );
  }

  // If href is present but disabled, render as button to support disabled state correctly
  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedStyles}
      disabled={disabled}
      {...props}
    >
      {content}
    </button>
  );
}
