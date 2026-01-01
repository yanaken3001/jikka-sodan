import Link from "next/link";
import Image from "next/image";
import { MapPin, ArrowRight, FileText, HelpCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow bg-gray-50">
        {/* Hero Section: The Portal */}
        <section className="bg-white pt-24 pb-16 md:pt-32 md:pb-24">
          <div className="app-container grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Copy */}
            <div className="order-2 md:order-1">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8 text-official-black tracking-wide">
                実家の整理、<br />
                手続き、売却。<br />
                <span className="text-official-navy">窓口はひとつです。</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed font-normal">
                「どこから手をつければいいかわからない」<br />
                そんな悩みを持つ方のための、<br />
                地域専門家と連携した実家じまい専門窓口です。
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/chiba" 
                  className="bg-official-red hover:opacity-90 text-white font-bold py-4 px-8 rounded-none shadow-sm flex items-center justify-center text-lg transition-all"
                >
                  エリアを選択して相談
                  <ArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
            {/* Right: Abstract Visual */}
            <div className="order-1 md:order-2 relative h-[300px] md:h-[500px] w-full bg-gray-100">
               <Image 
                 src="/hero_new.png" 
                 alt="新しい生活の始まり" 
                 fill 
                 className="object-cover grayscale-[20%]"
                 priority
               />
            </div>
          </div>
        </section>

        {/* Features/Trust Section */}
        {/* Navigation Cards */}
        <section className="bg-official-gray py-20">
          <div className="app-container">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center tracking-widest">
              目的から探す
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
               {/* Card 1: Chiba Hub */}
               <Link href="/chiba" className="group bg-white p-8 md:p-12 border border-gray-200 hover:border-official-navy transition-colors block h-full">
                 <div className="w-12 h-12 bg-official-navy text-white flex items-center justify-center mb-6">
                   <MapPin size={24} />
                 </div>
                 <h3 className="text-xl font-bold mb-4 group-hover:text-official-navy">千葉県にお住まいの方</h3>
                 <p className="text-gray-600 text-sm">柏市、松戸市、流山市など、東葛エリアを中心とした地域ごとの相談窓口をご案内します。</p>
               </Link>

               {/* Card 2: Process */}
               <div className="bg-white p-8 md:p-12 border border-gray-200 h-full opacity-60 cursor-not-allowed">
                 <div className="w-12 h-12 bg-gray-300 text-white flex items-center justify-center mb-6">
                   <FileText size={24} />
                 </div>
                 <h3 className="text-xl font-bold mb-4">手続きの流れ</h3>
                 <p className="text-gray-600 text-sm">相談から解決までの具体的なステップをご説明します。（準備中）</p>
               </div>

               {/* Card 3: FAQ */}
               <div className="bg-white p-8 md:p-12 border border-gray-200 h-full opacity-60 cursor-not-allowed">
                  <div className="w-12 h-12 bg-gray-300 text-white flex items-center justify-center mb-6">
                   {/* Import HelpCircle if needed, or use generic icon */}
                   <span className="text-xl font-bold">?</span>
                 </div>
                 <h3 className="text-xl font-bold mb-4">よくある質問</h3>
                 <p className="text-gray-600 text-sm">費用や期間など、皆様から寄せられる質問にお答えします。（準備中）</p>
               </div>
            </div>
          </div>
        </section>

        {/* Trust Section (Simplified) */}
        <section className="py-24 bg-white">
          <div className="app-container max-w-4xl mx-auto text-center">
               <h2 className="text-2xl font-bold mb-8">私たちは「地域の基準」で運営されています</h2>
               <p className="text-lg text-gray-700 leading-loose mb-12">
                 無理な勧誘や、不明瞭な追加請求は一切行いません。<br />
                 地域の専門家や法務機関と連携し、<br />
                 安全かつ透明性の高いサービスを提供することをお約束します。
               </p>
               <div className="h-px w-24 bg-gray-300 mx-auto"></div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
