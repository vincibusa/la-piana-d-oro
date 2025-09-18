import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "La Piana d'Oro | Associazione Culturale Bagheria - Valorizzazione Territorio Siciliano",
  description: "La Piana d'Oro è un'associazione ETS che valorizza Bagheria attraverso progetti di rigenerazione urbana, eventi culturali e promozione dei prodotti tipici siciliani come lo sfincione bianco.",
  keywords: "Bagheria, associazione culturale, territorio siciliano, sfincione bianco, rigenerazione urbana, prodotti tipici, destinazione del gusto, Sicilia, tradizioni",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
