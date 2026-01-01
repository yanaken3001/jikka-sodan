import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "実家じまい総合相談窓口",
  description:
    "千葉県・東葛エリアの実家じまい・空き家相談なら公的で安心な当窓口へ。片付け不要、手出し0円で解決します。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${notoSansJP.variable} antialiased text-text-main bg-background`}
      >
        {children}
      </body>
    </html>
  );
}
