import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  icon?: LucideIcon;
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  icon: Icon,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-bold rounded-md transition-colors shadow-md";
  
  const variants = {
    primary: "bg-official-green hover:bg-green-700 text-white",
    secondary: "bg-official-blue hover:bg-blue-700 text-white",
    outline: "bg-white border-2 border-official-blue text-official-blue hover:bg-blue-50",
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

  const content = (
    <>
      {Icon && <Icon size={20} className="mr-2" />}
      {children}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedStyles}>
      {content}
    </button>
  );
}
