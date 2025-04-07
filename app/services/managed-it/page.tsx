"use client";

import {
  HeadsetIcon,
  ShieldCheck,
  Headphones,
  Network,
  CloudCog,
} from "lucide-react";
import Link from "next/link";

import {
 
} from "lucide-react";

const services = [
 
  {
    title: "Remote IT Helpdesk",
    description:
      "Our remote IT helpdesk quickly resolves user issues, software glitches, and configuration problems with efficient ticket-based support.",
    icon: <Headphones className="text-3xl" />,
    iconBg: "from-[#16A34A] to-[#4ADE80]", // green gradient
  },
  {
    title: "Network Management",
    description:
      "We handle the setup, configuration, and maintenance of secure and efficient networks, ensuring seamless connectivity across all locations.",
    icon: <Network className="text-3xl" />,
    iconBg: "from-[#F59E0B] to-[#FBBF24]", // amber gradient
  },
  {
    title: "Cybersecurity Services",
    description:
      "Protect your systems and data with our robust cybersecurity solutions, including firewall management, threat detection, and vulnerability assessments.",
    icon: <ShieldCheck className="text-3xl" />,
    iconBg: "from-[#DC2626] to-[#F87171]", // red gradient
  },
  {
    title: "Cloud Infrastructure Management",
    description:
      "HireTrix manages your cloud infrastructure, ensuring scalability, cost-efficiency, and security across platforms like AWS, Azure, and Google Cloud.",
    icon: <CloudCog className="text-3xl" />,
    iconBg: "from-[#8B5CF6] to-[#A78BFA]", // purple gradient
  },
];



export default function ServicesPage() {
  return (
    <div className="text-black py-12 px-6 min-h-[calc(100vh-64px-64px)]">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-5xl font-extrabold mb-4 fade-in-from-bottom">Managed IT Support</h1>
        <p className="text-lg max-w-3xl mx-auto fade-in-from-bottom">
        HireTrix provides end-to-end Managed IT Support services to help businesses stay focused on their core operations. Our expert team handles everything from system monitoring, IT infrastructure management, to proactive issue resolution—ensuring high uptime, enhanced security, and optimal performance across your digital assets.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {services.map((card, index) => (
          <div
            key={index}
            className={`${index % 2 === 0 ? "fade-in-from-right" : "fade-in-from-left"
            } bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out border border-gray-100 group hover:bg-linear-to-b from-[#4f46e5] to-[#ae48ee]  hover:text-white`}

           >
            <div className="flex justify-center mb-4">
              <div
                className={`w-16 h-16 rounded-full bg-gradient-to-tr ${card.iconBg} flex items-center justify-center text-white text-2xl shadow-md`}
              >
                {card.icon}
              </div>
            </div>
            <h2 className="text-gray-700 group-hover:text-white  text-2xl font-semibold mb-2 group-hover:font-extrabold transition-colors">
              {card.title}
            </h2>
            {/* Fix: Lock line-height and prevent hover-stretching */}
            <p className="text-gray-700 group-hover:text-white transition-colors duration-300 leading-relaxed min-h-[96px]">
              {card.description}
            </p>
          </div>

        ))}
      </div>

      <div className="mt-12 text-center flex items-center justify-center">
      <Link href="/contact">
          <button className="group bg-gradient-to-r from-[#0127fa] to-[#c309ec] hover:from-[#c309ec] hover:to-[#0127fa] hover:opacity-90 transition-all duration-300 text-white px-6 py-3 rounded-md text-sm font-medium flex items-center gap-2 overflow-hidden">
            Contact Us
            <span className="inline-block transform transition-transform duration-300 group-hover:translate-x-1">
              <HeadsetIcon className="w-4 h-4" />
            </span>

          </button>
        </Link>
      </div>
    </div>
  );
}
