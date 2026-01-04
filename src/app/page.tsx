import Link from "next/link";
import Image from "next/image";
import { MapPin, ArrowRight, FileText, HelpCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow bg-white">
        {/* Hero Section: The Portal (Centered, No Image) */}
        <section className="pt-32 pb-24 md:pt-48 md:pb-32">
          <div className="app-container max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-10 text-official-black tracking-wide">
              実家の整理、<br />
              手続き、売却。<br />
              <span className="text-official-navy">窓口はひとつです。</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-16 leading-relaxed font-normal">
              「どこから手をつければいいかわからない」<br />
              そんな悩みを持つ方のための、<br />
              地域専門家と連携した実家じまい専門窓口です。
            </p>
            <div className="flex justify-center">
              <Button 
                href="/chiba" 
                variant="cta"
                size="xl"
                rounded="none"
                icon={ArrowRight}
              >
                エリアを選択して相談
              </Button>
            </div>
          </div>
        </section>

        {/* Introduction / Concept (Simple Text Only) */}
        <section className="py-24 bg-gray-50">
          <div className="app-container max-w-3xl mx-auto text-center">
             <h2 className="text-2xl font-bold mb-10 tracking-widest text-official-navy">「公的な安心」を、すべての方に。</h2>
             <p className="text-lg text-gray-700 leading-loose">
               私たちは、行政や自治体ではありませんが、<br />
               それらと同等の「規律」と「倫理観」を持って運営されています。<br /><br />
               無理な営業活動は一切行わず、<br />
               お客様の利益を最優先に考えることをお約束します。
             </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
