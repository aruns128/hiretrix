import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Footer from "@/components/Footer";
import Navbar from "@/components/ Navbar";
import { Head } from "next/document";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hiretrix",
  description: "HireTrix Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
          {/* Add the favicon link */}
          <link rel="icon" href="/logo.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full`}
      >
        {/* Main Layout */}
        <div className="flex flex-col min-h-screen">
          {/* Navbar */}
          <Navbar />
          
          {/* Main content area */}
          <main className="flex-1">{children}</main>

          {/* Footer */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
