import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";

interface HeaderProps {
  areaName?: string;
}

export default function Header({ areaName }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="app-container flex justify-between items-center h-16 md:h-20">
        {areaName ? (
          <Link href="/chiba/tokatsu" className="inline-flex flex-col md:flex-row md:items-baseline font-bold leading-tight select-none group">
            <span className="text-blue-600 mr-0 md:mr-2 text-sm md:text-xl tracking-wider">
              {areaName}
            </span>
            <span className="text-slate-800 text-lg md:text-xl tracking-widest group-hover:opacity-70 transition-opacity">
              実家じまい総合相談窓口
            </span>
          </Link>
        ) : (
          <Link href="/" className="inline-block select-none group">
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-[#0b3668] tracking-widest leading-none group-hover:opacity-80 transition-opacity whitespace-nowrap">
              実家じまい総合相談窓口
            </h1>
          </Link>
        )}
        <div className="flex items-center gap-4">
          <div className="hidden md:block text-right">
            <p className="text-xs text-gray-500 font-bold">専用ダイヤル</p>
            <p className="text-xl font-bold text-official-blue tracking-wider">0123-456-789</p>
            <p className="text-xs text-gray-400">受付 9:00-18:00 (土曜可)</p>
          </div>
          <a
            href="tel:0123-456-789"
            className="bg-official-green hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md shadow flex items-center md:hidden transition-colors"
          >
            <Phone size={18} className="mr-1" />
            相談無料
          </a>
          <a
            href="#contact"
            className="hidden md:flex bg-official-green hover:bg-green-700 text-white font-bold py-3 px-6 rounded-md shadow items-center transition-colors"
          >
            無料相談予約
            <ArrowRight size={18} className="ml-2" />
          </a>
        </div>
      </div>
    </header>
  );
}
