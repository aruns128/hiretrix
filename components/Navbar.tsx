"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpenLabel, setDropdownOpenLabel] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest("nav")) {
        setDropdownOpenLabel(null);
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { label: "Services", isDropdown: true },
    { label: "Products", isDropdown: true },
    { href: "/career", label: "Career" },
    { href: "/contact", label: "Contact Us" },
  ];

  const serviceLinks = [
    { href: "/services/hr", label: "HR Services" },
    { href: "/services/app-development", label: "App Development Service" },
    { href: "/services/managed-it", label: "Managed IT Support" },
    { href: "/services/isms", label: "ISMS" },
  ];

  const productLinks = [
    { href: "/products/aitool", label: "AI Tool" },
    { href: "/products/hrmstool", label: "HRMS Tool" },
  ];

  return (
    <nav className="text-black font-semibold shadow-lg z-20 bg-[#F1F8FB] sticky top-0">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold flex items-center gap-2">
          <Image src="/logo.png" alt="Logo" width={200} height={100} priority />
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-[#0045ff] focus:outline-none"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navigation */}
        <ul
          className={`absolute lg:static top-20 left-0 w-full lg:w-auto bg-white lg:bg-transparent 
          text-black shadow-md lg:shadow-none lg:flex lg:items-center lg:space-x-8 p-4 lg:p-0 transition-all duration-300 
          ${menuOpen ? "block" : "hidden"}`}
        >
          {navLinks.map(({ href, label, isDropdown }) => {
            let isActive = false;

            if (href) {
              isActive = pathname === href;
            } else if (label === "Services") {
              isActive = pathname.startsWith("/services");
            } else if (label === "Products") {
              isActive = pathname.startsWith("/products");
            }

            if (isDropdown) {
              const dropdownItems = label === "Services" ? serviceLinks : productLinks;

              return (
                <li key={label} className="relative px-2 py-1">
                  <button
                    onClick={() =>
                      setDropdownOpenLabel(dropdownOpenLabel === label ? null : label)
                    }
                    className={`flex items-center gap-1 text-base transition-colors duration-300 ${isActive ? "text-[#0045ff]" : "hover:text-[#f3336b]"
                      }`}
                  >
                    {label}
                    <ChevronDown size={14} />
                  </button>

                  {dropdownOpenLabel === label && (
                    <ul className="absolute top-full left-0 mt-2 w-60 bg-white border border-gray-200 rounded-md shadow-md z-50">
                      {dropdownItems.map(({ href, label }) => (
                        <li key={href}>
                          <Link
                            href={href}
                            onClick={() => {
                              setMenuOpen(false);
                              setDropdownOpenLabel(null);
                            }}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gradient-to-r from-[#0127fa] to-[#c309ec] hover:text-white rounded-sm"
                          >
                            {label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            } else {
              return (
                <li
                  key={href}
                  className={`px-2 py-1 text-base transition-colors duration-300 ${isActive ? "text-[#0045ff]" : "hover:text-[#f3336b]"
                    }`}
                >
                  {href ? (
                    <Link
                      href={href}
                      onClick={() => {
                        setMenuOpen(false);
                        setDropdownOpenLabel(null);
                      }}
                    >
                      {label}
                    </Link>
                  ) : (
                    <span className="cursor-default">{label}</span>
                  )}

                </li>
              );
            }
          })}
        </ul>
      </div>
    </nav>
  );
}
