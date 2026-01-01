import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="app-container flex justify-between items-center h-16 md:h-20">
        <Link href="/" className="text-lg md:text-xl font-bold text-official-blue leading-tight hover:opacity-80 transition-opacity">
          千葉・東葛<br className="md:hidden" />
          <span className="text-black">実家じまい総合相談窓口</span>
        </Link>
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
