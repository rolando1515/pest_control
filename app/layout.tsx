import Footer from "@/components/shared/Footer/Footer";
import TopHeader from "@/components/shared/Header/TopHeader";
import BottomHeader from "@/components/shared/HeaderLower/BottomHeader";
import type { Metadata } from "next";
import { PT_Serif } from "next/font/google";
import "./globals.css";

const inter = PT_Serif({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pest Control",
  description: "TERMITECK We are your Pest Control Solution.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="overflow-x-hidden">
          <TopHeader />
          <BottomHeader />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
