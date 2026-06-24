// app/layout.tsx

import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "AFS Yangın",
  description: "Yangın söndürme cihazları, yangın güvenlik hizmetleri ve yangın söndürme sistemleri.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}