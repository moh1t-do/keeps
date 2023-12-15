import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ContextProvider from "@/lib/ContextProvider";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mondy India Assignment",
  description: "Assignment by Mondy India Pvt Ltd",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContextProvider>
          <div className="mx-auto flex h-screen w-full gap-4 max-w-6xl flex-col justify-between px-8">
            <Navbar />
            {children}
            <Footer />
          </div>
        </ContextProvider>
      </body>
    </html>
  );
}
