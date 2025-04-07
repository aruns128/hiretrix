"use client";
import Link from 'next/link';
import {
    Facebook,
    Twitter,
    Linkedin,
    Instagram,
    Mail,
    MapPin,
    Phone,
    Clock,
    Send
} from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#0b1c2c] text-white py-12 px-4">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
                {/* Brand */}
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 bg-gradient-to-r from-[#0127fa] to-[#c309ec] rounded-full flex items-center justify-center text-white font-bold text-lg">
                            H
                        </div>
                        <h1 className="text-xl font-semibold">HireTrix</h1>
                    </div>
                    <p className="text-sm text-gray-300 leading-relaxed">
                        We're a full-stack digital marketing studio based in the center of New York City.
                        From strategy to implementation, we're here to help make your brand shine.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-4 capitalize">Quick Links</h3>
                    <ul className="space-y-3 text-sm text-gray-300">
                        <li>
                            <Link href="/" className="hover:underline hover:text-white">&gt; Home</Link>
                        </li>
                        <li>
                            <Link href="/about" className="hover:underline hover:text-white">&gt; About Us</Link>
                        </li>
                        <li>
                            <Link href="/services/hr" className="hover:underline hover:text-white">&gt; Services</Link>
                        </li>
                        <li>
                            <Link href="/products/aitool" className="hover:underline hover:text-white">&gt; Products</Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:underline hover:text-white">&gt; Contact Us</Link>
                        </li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-lg font-semibold mb-4 capitalize">Contact Info</h3>
                    <ul className="space-y-3 text-sm text-gray-300">
                        <li className="flex items-start gap-2">
                            <MapPin className="mt-1 text-[#8aa2b1]" size={18} />
                            <span>Chennai, India</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <Mail className="text-[#8aa2b1]" size={18} />
                            <span>infor@hiretrix.com</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <Phone className="text-[#8aa2b1]" size={18} />
                            <span>(234) 567-8912</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <Clock className="text-[#8aa2b1]" size={18} />
                            <span>Mon - Fri: 09:00 am - 07:00 pm</span>
                        </li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h3 className="text-lg font-semibold mb-4 capitalize">Join Our Newsletter</h3>
                    <p className="text-sm text-gray-300 mb-4">
                        Sign up for our newsletter to enjoy free marketing tips, inspirations, and more.
                    </p>
                    <div className="flex">
                        <input
                            type="email"
                            placeholder="Email"
                            className="rounded-l-md px-4 py-2 text-black text-sm outline-none w-full bg-white"
                        />
                        <button className="bg-gradient-to-r from-[#0127fa] to-[#c309ec] px-4 rounded-r-md text-white">
                            <Send size={20} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            {/* Bottom Bar */}
            <div className="border-t border-gray-700 mt-10 pt-6">
                <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                    <p>&copy; {new Date().getFullYear()} HireTrix. All rights reserved.</p>
                    <div className="flex items-center gap-4 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white"><Facebook size={18} /></a>
                        <a href="#" className="hover:text-white"><Twitter size={18} /></a>
                        <a href="#" className="hover:text-white"><Linkedin size={18} /></a>
                        <a href="#" className="hover:text-white"><Instagram size={18} /></a>
                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
