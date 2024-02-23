import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import SessionProvider from "./components/auth/SessionProvider";

const noto_sans_jp = Noto_Sans_JP({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "karakuri-web",
  description: "謎解き×webの新感覚脱出ゲーム",
  openGraph: {
    title: "karakuri-web",
    description: "謎解き×webの新感覚脱出ゲーム",
    url: `${process.env.NEXT_PUBLIC_URL}`,
    siteName: "karakuri-web",
    images: [
      {
        width: "1200",
        height: "630",
        url:  `${process.env.NEXT_PUBLIC_URL}/images/ogps/karakuri-web_ogp.png`
      }
    ],
    locale: "jp",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <SessionProvider>
        <body className={noto_sans_jp.className}>{children}</body>
      </SessionProvider>
    </html>
  );
}
