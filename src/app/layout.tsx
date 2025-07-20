import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { ReactNode } from "react";
import ReduxProvider from "@/redux/redux-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Discover History Through Art",
  description: "Explore the world through art and history.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ReduxProvider>
          <div className="fixed top-6 right-6 flex gap-3 z-50 font-[Transcity]">
            <Link href="/about" className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
              About
            </Link>
            <Link href="/profile" className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
              Profile
            </Link>
            <Link
              href="/"
              className="fixed top-6 left-6 z-50 bg-black text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800 transition">
              Home
            </Link>
            <Link
              href="/party"
              className="fixed top-6 left-24 z-50 bg-black text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800 transition">
              Party
            </Link>
            <Link
              href="/journey"
              className="fixed top-6 left-44 z-50 bg-black text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800 transition">
              Journey
            </Link>
          </div>
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
