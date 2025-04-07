"use client";

import Link from "next/link";
import { HeadsetIcon } from "lucide-react";

export default function AiToolPage() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-64px-64px)] bg-gradient-to-br from-[#0127fa] to-[#c309ec] text-white text-center px-6">
      <div className="max-w-xl">
        <h1 className="text-5xl font-extrabold mb-6 animate-bounce">🚧 Coming Soon 🚧</h1>
        <p className="text-lg mb-8">
          We are working hard to bring you the best product. Stay tuned for exciting updates on <strong className="text-2xl">SAGI</strong> and more!
        </p>
        <div className="flex items-center justify-center">
        <Link href="/contact">
        <button className="group bg-white text-[#0127fa] hover:bg-opacity-90 transition-all duration-300 px-6 py-3 rounded-md text-sm font-medium flex items-center gap-2">
          Contact Us
          <span className="inline-block transform transition-transform duration-300 group-hover:translate-x-1">
            <HeadsetIcon className="w-4 h-4" />
          </span>
        </button>
      </Link>
      </div>
      </div>
    </div>
  );
}
