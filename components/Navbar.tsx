"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/career", label: "Career" },
    { href: "/current-openings", label: "Current Openings" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <nav className="bg-gradient-to-r from-white via-[#A020F0] to-[#ed12b7] text-white font-semibold shadow-lg z-20">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        <Link href="/" className="text-2xl font-bold flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Logo"
            width={100}
            height={50}
            priority
          />
        </Link>

        {/* Toggle Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-white focus:outline-none"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Nav Links */}
        <ul
          className={`absolute lg:static top-16 left-0 w-full lg:w-auto bg-white lg:bg-transparent 
            text-[#ed12b7] lg:text-white 
            shadow-md lg:shadow-none lg:flex lg:space-x-8 p-4 lg:p-0 transition-all duration-300 ${
              menuOpen ? "block" : "hidden"
            }`}
        >
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <li
                key={href}
                className={`p-2 text-base transition-colors duration-300
                  ${
                    isActive
                      ? "text-[#ed12b7] lg:text-white underline decoration-4 decoration-[#ed12b7] underline-offset-4"
                      : "text-[#222] hover:text-[#f3336b] lg:text-white lg:hover:text-[#f3336b] hover:underline hover:decoration-2 hover:underline-offset-4"
                  }`}
              >
                <Link href={href} onClick={() => setMenuOpen(false)}>
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
