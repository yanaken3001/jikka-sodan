import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 py-4">
        <div className="app-container flex justify-between items-center">
          <h1 className="text-xl font-bold text-official-blue">
            実家じまい総合相談窓口
          </h1>
          <a
            href="tel:0123-456-789"
            className="text-sm font-bold text-gray-600 hover:text-official-blue md:hidden"
          >
            お電話で相談
          </a>
        </div>
      </header>

      <main className="flex-grow bg-gray-50">
        {/* Hero Section */}
        <section className="bg-white py-16 md:py-24">
          <div className="app-container text-center max-w-3xl mx-auto">
            <span className="inline-block bg-official-blue/10 text-official-blue px-4 py-1 rounded-full text-sm font-bold mb-6">
              全国対応・公的支援機関連携
            </span>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-8">
              実家の処分・整理、<br />
              どこに相談すればいいか<br className="md:hidden" />迷っていませんか？
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              「実家じまい総合相談窓口」は、空き家整理から不動産売却まで、
              <br className="hidden md:inline" />
              自治体や専門家と連携し、窓口ひとつで解決する公的な相談機関です。
            </p>
            
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 inline-block w-full max-w-md">
              <p className="font-bold text-official-blue mb-4">
                まずはお住まいの地域を選択してください
              </p>
              <Link
                href="/chiba"
                className="w-full bg-official-blue hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-md shadow-md flex items-center justify-center transition-colors"
              >
                <MapPin className="mr-2" size={20} />
                千葉県（Chiba）
                <ArrowRight className="ml-auto" size={20} />
              </Link>
              <p className="text-xs text-gray-500 mt-2 text-left">
                ※現在は千葉県エリア、特に東葛地域（松戸・柏・流山）の対応を強化しています。
              </p>
            </div>
          </div>
        </section>

        {/* Features/Trust Section */}
        <section className="py-16">
          <div className="app-container">
            <h3 className="text-center text-2xl font-bold mb-12">
              当窓口が選ばれる3つの理由
            </h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  🏛️
                </div>
                <h4 className="font-bold text-lg mb-2">公的機関のような安心感</h4>
                <p className="text-gray-600 text-sm">
                  無理な営業は一切なし。市役所の窓口のように、中立的な立場でお話を伺います。
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  📋
                </div>
                <h4 className="font-bold text-lg mb-2">ワンストップ解決</h4>
                <p className="text-gray-600 text-sm">
                  片付け業者、不動産屋、解体業者...あちこちに電話する必要はありません。
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  💰
                </div>
                <h4 className="font-bold text-lg mb-2">費用の持ち出し0円</h4>
                <p className="text-gray-600 text-sm">
                  売却益からの精算プランをご用意。手元の現金を減らさずに実家じまいが可能です。
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-gray-400 py-8 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} 実家じまい総合相談窓口</p>
      </footer>
    </div>
  );
}
