import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gastouderopvang De Binkskes - Liefdevolle kinderopvang in Berg aan de Maas",
  description: "Gastouderopvang De Binkskes biedt veilige, liefdevolle opvang voor kinderen van 0-4 jaar. Geregistreerd bij LRK en aangesloten bij Gastouderbureau Villa Nana.",
  keywords: "gastouderopvang, kinderopvang, Berg aan de Maas, De Binkskes, Vivian Lotz, Villa Nana",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body className={`${inter.className} antialiased`}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
