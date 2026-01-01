import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow bg-gray-50">
        {/* Hero Section */}
        <section className="bg-white py-16 md:py-24">
          <div className="app-container text-center max-w-3xl mx-auto">
            <span className="inline-block bg-official-blue/10 text-official-blue px-4 py-1 rounded-full text-sm font-bold mb-6">
              実家じまい・空き家相談
            </span>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-8">
              実家の片付け・処分・売却。<br className="hidden md:block" />
              面倒な手続きを、窓口ひとつで解決します。
            </h1>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              「実家じまい総合相談窓口」は、遺品整理から不動産売却まで、
              <br className="hidden md:inline" />
              独自の審査基準をクリアした地域の専門家と連携し、安全に完結させるための専門機関です。
            </p>
            
            <div className="bg-blue-50 p-8 rounded-xl border border-blue-100 inline-block w-full max-w-md shadow-sm">
              <p className="font-bold text-official-blue mb-4">
                まずはお住まいの地域を選択してください
              </p>
              <Link
                href="/chiba"
                className="w-full bg-official-blue hover:bg-blue-700 text-white font-bold py-5 px-6 rounded-lg shadow-md flex items-center justify-center transition-colors text-lg"
              >
                <MapPin className="mr-2" size={24} />
                千葉県 (Chiba) を選択
                <ArrowRight className="ml-auto" size={24} />
              </Link>
              <p className="text-xs text-gray-500 mt-3 text-left">
                ※現在は千葉県北西部（東葛エリア）の対応を強化しています。
              </p>
            </div>
          </div>
        </section>

        {/* Features/Trust Section */}
        <section className="py-16">
          <div className="app-container">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold">
                当窓口が選ばれる3つの理由
              </h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  ⚖️
                </div>
                <h4 className="font-bold text-lg mb-2">中立的なアドバイス</h4>
                <p className="text-gray-600 text-sm">
                  「売る」ありきではなく、「貸す」「管理する」など、お客様の状況に合わせた最適なプランを提案します。
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  📋
                </div>
                <h4 className="font-bold text-lg mb-2">ワンストップ解決</h4>
                <p className="text-gray-600 text-sm">
                  遺品整理、不動産、解体、相続手続き...それぞれの専門家への連絡・調整はすべて担当者が代行します。
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  💰
                </div>
                <h4 className="font-bold text-lg mb-2">費用の持ち出し0円</h4>
                <p className="text-gray-600 text-sm">
                   片付けや解体などの先行費用は、不動産の売却代金から精算が可能。（※物件状況による）
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
