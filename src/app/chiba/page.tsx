
import Link from 'next/link';
import { ArrowLeft, ChevronRight, MapPin } from 'lucide-react';

export const metadata = {
  title: '千葉県の対応エリア一覧 | 実家じまい総合相談窓口',
  description: '千葉県内の実家じまい・空き家相談対応エリア一覧。現在は東葛エリア（松戸市・柏市・流山市）を中心に受付中です。',
};

export default function ChibaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-white border-b border-gray-200 py-4">
        <div className="app-container flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-official-blue">
            実家じまい総合相談窓口
          </Link>
        </div>
      </header>

      <main className="flex-grow py-12">
        <div className="app-container max-w-4xl mx-auto">
          <div className="mb-8">
            <Link href="/" className="inline-flex items-center text-gray-500 hover:text-official-blue transition-colors mb-4">
              <ArrowLeft size={16} className="mr-1" />
              トップページに戻る
            </Link>
            <h1 className="text-2xl md:text-3xl font-bold mb-4">
              <span className="text-official-blue">千葉県</span> の対応エリア一覧
            </h1>
            <p className="text-gray-600">
              現在、以下のエリアにてサービスを提供しております。
              <br />
              順次拡大中ですので、その他のエリアの方はもう少々お待ちください。
            </p>
          </div>

          <div className="space-y-6">
            {/* Active Area: Tokatsu */}
            <Link 
              href="/chiba/tokatsu" 
              className="block bg-white border-2 border-official-blue rounded-xl p-6 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 bg-official-blue text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                受付中
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="bg-blue-100/50 p-3 rounded-full mr-4 group-hover:bg-blue-100 transition-colors">
                    <MapPin className="text-official-blue" size={24} />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-800 mb-1">
                      東葛エリア
                    </h2>
                    <p className="text-sm text-gray-600">
                      松戸市 / 柏市 / 流山市 / 我孫子市 / 野田市
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">即日対応可</span>
                      <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">出張費無料</span>
                    </div>
                  </div>
                </div>
                <div className="text-official-blue">
                   <ChevronRight size={24} />
                </div>
              </div>
            </Link>

            {/* Inactive Areas */}
            <div className="grid md:grid-cols-2 gap-4 opacity-70 grayscale">
              <div className="bg-white border border-gray-200 rounded-lg p-6 relative cursor-not-allowed">
                <div className="absolute top-0 right-0 bg-gray-200 text-gray-500 text-xs font-bold px-3 py-1 rounded-bl-lg">
                  準備中
                </div>
                <h3 className="font-bold text-gray-500 mb-1">葛南・ベイエリア</h3>
                <p className="text-xs text-gray-400">船橋市 / 市川市 / 浦安市 / 習志野市 他</p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6 relative cursor-not-allowed">
                <div className="absolute top-0 right-0 bg-gray-200 text-gray-500 text-xs font-bold px-3 py-1 rounded-bl-lg">
                  準備中
                </div>
                <h3 className="font-bold text-gray-500 mb-1">千葉エリア</h3>
                <p className="text-xs text-gray-400">千葉市全域</p>
              </div>

               <div className="bg-white border border-gray-200 rounded-lg p-6 relative cursor-not-allowed">
                <div className="absolute top-0 right-0 bg-gray-200 text-gray-500 text-xs font-bold px-3 py-1 rounded-bl-lg">
                  準備中
                </div>
                <h3 className="font-bold text-gray-500 mb-1">印旛エリア</h3>
                <p className="text-xs text-gray-400">成田市 / 佐倉市 / 印西市 他</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-gray-400 py-8 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} 実家じまい総合相談窓口</p>
      </footer>
    </div>
  );
}
