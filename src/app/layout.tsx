import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from '@/components/header/Header';
import Image from "next/image";
import logo from "../../public/images/logo.svg";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Notion prototype"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <div id="notice">
          <Image
            src={logo}
            alt="Notion logo"
          />
          <h3>This prototype is currently only configured for screens wider than 1000px</h3>
        </div>
      </body>
    </html>
  );
}
