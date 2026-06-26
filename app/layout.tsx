// app/layout.tsx

import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageLoader from "@/components/PageLoader";

export const metadata: Metadata = {
  title: "AFS Yangın",
  description:
    "Yangın söndürme cihazları, yangın güvenlik hizmetleri ve yangın söndürme sistemleri.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>
        <PageLoader />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}