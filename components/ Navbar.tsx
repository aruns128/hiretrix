"use client"

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
        { href: "/contact", label: "Contact Us" }
    ];

    return (
        <nav className="bg-slate-50 text-[#222424] font-bold p-4 shadow-md z-10">
            <div className="container mx-auto flex justify-between items-center">
                <span className="text-2xl font-bold">
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        width={100}
                        height={50}
                    />
                </span>
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden p-2 rounded-md text-gray-900 hover:bg-gray-200 transition"
                >
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
                <ul
                    className={`absolute md:static top-16 left-0 w-full md:w-auto bg-slate-50 md:bg-transparent shadow-md md:shadow-none md:flex md:space-x-6 p-4 md:p-0 transition-all duration-300 ${menuOpen ? "block" : "hidden"}`}
                >
                    {navLinks.map(({ href, label }) => (
                        <li key={href} className={`p-2 ${pathname === href ? "text-[#ed12b7] underline" : "hover:text-[#ed12b7]"}`}>
                            <Link href={href}>{label}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
