import Image from 'next/image';
import Link from 'next/link';
import { Phone, CheckCircle, Home, FileText, MapPin, ChevronRight, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: '千葉・東葛 実家じまい総合相談窓口 | 松戸・柏・流山・野田・我孫子的空き家相談',
  description: '千葉県東葛エリア（松戸・柏・流山）専門。実家の片付けから売却まで、窓口ひとつで解決。残置物そのままでOK、持ち出し資金0円で対応可能です。',
};

export default function TokatsuPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header areaName="千葉・東葛" />

      <main className="flex-grow">
        {/* Breadcrumbs REMOVED for optimization */}

        {/* 2. Hero Section */}
        <section className="relative bg-blue-50">
          <div className="app-container py-24 md:py-32 flex flex-col items-center text-center">
            <div className="max-w-4xl">
              <div className="inline-block bg-white text-official-navy font-bold px-3 py-1 rounded-full border border-blue-200 mb-6 text-sm md:text-base shadow-sm">
                千葉・東葛エリア（松戸・柏・流山・野田・我孫子）専門
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-official-black leading-tight mb-8">
                片付け・整理は一切不要。<br />
                そのままの状態<span className="text-official-navy">「まるごと」</span>で<br />
                お話しください。
              </h1>
              <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                「実家が散らかっていて恥ずかしい...」<br />
                そんな心配はいりません。実家の片付けから売却・解体まで、<br className="hidden md:inline" />
                私たち認定専門家が連携してすべて手配します。
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:0123-456-789"
                  className="bg-white border-2 border-official-navy text-official-navy font-bold py-4 px-6 rounded-none shadow-sm hover:bg-blue-50 transition-colors flex items-center justify-center"
                >
                    <Phone className="mr-2" size={24} />
                    <span className="text-lg">0123-456-789</span>
                </a>
                <a 
                  href="#contact" 
                  className="bg-official-red text-white font-bold py-4 px-8 rounded-none shadow-lg text-center hover:opacity-90 transition-opacity flex items-center justify-center text-lg"
                >
                  無料・現地調査を依頼する
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 3. The "3 Reliefs" (Why Us) */}
        <section className="py-16 bg-white">
          <div className="app-container">
             <div className="text-center mb-10">
               <span className="text-official-navy font-bold tracking-widest uppercase text-sm">Features</span>
               <h2 className="text-2xl md:text-3xl font-bold mt-2">当窓口の「3つの安心」</h2>
               <div className="w-16 h-1 bg-official-navy mx-auto mt-4 rounded-full"></div>
             </div>

             {/* Icons Image */}
             <div className="flex justify-center mb-12">
                <div className="relative w-full max-w-2xl h-32 md:h-40">
                  <Image 
                    src="/trust_icons.png" 
                    alt="信頼の証" 
                    fill 
                    className="object-contain"
                  />
                </div>
             </div>

             <div className="grid md:grid-cols-3 gap-8 md:gap-12">
               {/* Relief 1: Disposal Image Insertion */}
               <div className="bg-gray-50 rounded-xl p-0 border border-gray-100 shadow-sm relative overflow-hidden flex flex-col">
                 <div className="relative h-48 w-full bg-gray-200">
                    <Image 
                      src="/cluttered_room.png" 
                      alt="片付け・処分の様子" 
                      fill 
                      className="object-cover"
                    />
                 </div>
                 <div className="p-8">
                   <h3 className="text-xl font-bold mb-4 flex items-center">
                     <Home className="mr-2 text-official-navy" /> 残置物そのままOK
                   </h3>
                   <p className="text-gray-600 leading-relaxed text-base">
                     「ゴミ屋敷状態で恥ずかしい」なんて思わないでください。分別も運び出しも一切不要。
                     ありのままの状態でお見せいただければ、あとはプロが適正に処理します。
                   </p>
                 </div>
               </div>

                {/* Relief 2 */}
                <div className="bg-gray-50 rounded-xl p-0 border border-gray-100 shadow-sm relative overflow-hidden flex flex-col">
                 <div className="relative h-48 w-full bg-gray-200">
                    <Image 
                      src="/relief_concept.png" 
                      alt="費用負担の軽減" 
                      fill 
                      className="object-cover"
                    />
                 </div>
                 <div className="p-8">
                   <h3 className="text-xl font-bold mb-4 flex items-center">
                     <span className="text-official-navy mr-2 font-bold">¥0</span> 持ち出し現金0円
                   </h3>
                   <p className="text-gray-600 leading-relaxed text-base">
                     実家の解体費用や片付け費用は、売却した代金から後払いで精算可能な「立替プラン」をご用意。
                     手元の年金や貯金を切り崩す必要はありません。（※要審査）
                   </p>
                 </div>
               </div>

                {/* Relief 3 */}
                <div className="bg-gray-50 rounded-xl p-0 border border-gray-100 shadow-sm relative overflow-hidden flex flex-col">
                 <div className="relative h-48 w-full bg-gray-200 flex items-center justify-center">
                    <div className="bg-white p-4 rounded-full shadow-lg">
                       <CheckCircle size={48} className="text-official-navy" />
                    </div>
                 </div>
                 <div className="p-8">
                   <h3 className="text-xl font-bold mb-4">専任担当制</h3>
                   <p className="text-gray-600 leading-relaxed text-base">
                     行政への手続き、司法書士、不動産業者、解体業者...。
                     これらをすべて当窓口の「専任担当者」が一本化して調整します。何度も同じ説明をする必要はありません。
                   </p>
                 </div>
               </div>
             </div>
          </div>
        </section>

        {/* 4. Local Trust */}
        <section className="py-16 bg-gray-600 text-white relative overflow-hidden">
           {/* <div className="absolute inset-0 opacity-10 bg-[url('/pattern.png')]"></div> Pattern placeholder */}
           <div className="app-container relative z-10 grid md:grid-cols-2 gap-12 items-center">
             <div>
               <h2 className="text-2xl md:text-3xl font-bold mb-6">
                 東葛エリア専門だからこそ、<br />
                 <span className="text-yellow-400">「地の利」</span>を熟知しています。
               </h2>
               <p className="leading-relaxed opacity-90 mb-6 text-lg">
                 私たちは松戸・柏・流山に拠点を置く地域密着の相談所です。
                 たとえば、国道6号線や16号線の慢性的な渋滞事情も考慮した上で、
                 もっとも効率的で近隣に迷惑をかけない作業スケジュールを組みます。
               </p>
               <ul className="space-y-4">
                 <li className="flex items-center">
                   <MapPin className="text-yellow-400 mr-3 flex-shrink-0" />
                   <span>狭い路地での2tトラック進入可否も即時判断</span>
                 </li>
                 <li className="flex items-center">
                   <MapPin className="text-yellow-400 mr-3 flex-shrink-0" />
                   <span>松戸・柏エリア独自のゴミ分別ルールに完全準拠</span>
                 </li>
                 <li className="flex items-center">
                   <MapPin className="text-yellow-400 mr-3 flex-shrink-0" />
                   <span>地元の優良解体業者との直接提携でコストダウン</span>
                 </li>
               </ul>
             </div>
             <div className="space-y-4">
               {/* Local Staff Image */}
               <div className="bg-white p-2 rounded-lg shadow-lg rotate-1 transform">
                  <div className="relative h-64 w-full rounded overflow-hidden">
                    <Image
                      src="/local_staff.png"
                      alt="地域密着の担当スタッフ"
                      fill
                      className="object-cover"
                    />
                  </div>
               </div>
               {/* Map Image */}
               <div className="bg-white p-2 rounded-lg shadow-lg -rotate-1 transform">
                  <div className="relative h-48 w-full rounded overflow-hidden">
                    <Image
                      src="/tokatsu_map.png"
                      alt="東葛エリアマップ"
                      fill
                      className="object-contain"
                    />
                  </div>
               </div>
             </div>
           </div>
        </section>

        {/* 5. Process */}
        <section className="py-16 bg-white">
          <div className="app-container max-w-4xl mx-auto">
            <h2 className="text-center text-2xl md:text-3xl font-bold mb-12">解決までの流れ</h2>
            
            <div className="space-y-8 mb-12">
              {/* Step 1 */}
              <div className="flex md:items-start flex-col md:flex-row gap-6">
                 <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-official-blue text-white font-bold text-2xl shadow-md">
                   1
                 </div>
                 <div className="flex-grow pt-2">
                   <h3 className="text-xl font-bold mb-2">無料相談</h3>
                   <p className="text-gray-600">
                     お電話またはフォームからご連絡ください。「まだ売ると決めていない」段階でも構いません。
                     おおよその住所と現状（空き家期間など）をお聞きします。
                   </p>
                 </div>
              </div>

               {/* Step 2 */}
               <div className="flex md:items-start flex-col md:flex-row gap-6">
                 <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-official-blue text-white font-bold text-2xl shadow-md">
                   2
                 </div>
                 <div className="flex-grow pt-2">
                   <h3 className="text-xl font-bold mb-2">現地調査（立会不要も可）</h3>
                   <p className="text-gray-600">
                     専門スタッフが現地を確認します。遠方にお住まいの場合は、鍵をお預かりしての調査も可能です。
                     近隣の方に知られないよう配慮して行います。
                   </p>
                 </div>
              </div>

               {/* Step 3 */}
               <div className="flex md:items-start flex-col md:flex-row gap-6">
                 <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-official-blue text-white font-bold text-2xl shadow-md">
                   3
                 </div>
                 <div className="flex-grow pt-2">
                   <h3 className="text-xl font-bold mb-2">プラン提示・実務開始</h3>
                   <p className="text-gray-600">
                     「片付け＋売却」「解体して更地渡し」など、手残り金額が最大になるプランをご提案します。
                     ご納得いただければ、面倒な作業はすべて代行します。
                   </p>
                 </div>
              </div>
            </div>

            {/* Clean Room Image */}
            <div className="relative h-64 md:h-80 w-full rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/clean_room.png"
                  alt="片付け後のきれいな部屋"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <p className="text-white font-bold text-2xl md:text-3xl tracking-widest text-shadow">
                    「肩の荷が下りました」
                  </p>
                </div>
            </div>
          </div>
        </section>

        {/* 6. CTA / Operator */}
        <section id="contact" className="py-16 bg-blue-50">
          <div className="app-container max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden md:flex">
              <div className="md:w-1/2 relative h-64 md:h-auto">
                 <Image 
                    src="/operator.png" 
                    alt="笑顔で電話対応するスタッフ"
                    fill
                    className="object-cover"
                 />
              </div>
              <div className="md:w-1/2 p-8 md:p-12">
                <h2 className="text-2xl font-bold mb-4">お気軽にご相談ください</h2>

                <p className="text-gray-600 mb-6 text-sm">
                  「こんなこと聞いてもいいのかな？」という些細なことでも大歓迎です。
                  強引な勧誘は一切ございません。
                </p>
                
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6 text-center">
                  <p className="text-sm font-bold text-gray-500 mb-1">お電話でのご相談（通話無料）</p>
                  <a href="tel:0123-456-789" className="block text-3xl font-bold text-official-blue hover:opacity-80 transition-opacity">
                    0123-456-789
                  </a>
                  <p className="text-xs text-gray-400 mt-2">受付時間 9:00〜18:00（まずは相談員に繋がります）</p>
                </div>
                
                 <button className="w-full bg-official-red hover:opacity-90 text-white font-bold py-4 px-6 rounded-lg shadow-md transition-opacity flex items-center justify-center text-lg">
                   <FileText className="mr-2" />
                   WEB相談予約フォーム (24時間)
                   <ArrowRight className="ml-2" size={20} />
                 </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
