"use client";

import {
  Users,
  Handshake,
  Settings,
  ShieldCheck,
  Brain,
  Globe2,
} from "lucide-react";

export default function Page() {
  const cardData = [
    {
      title: "About HireTrix",
      icon: <Users size={28} />,
      text: "HireTrix is a growing people talent provider in the private sector, offering expertise in talent and organizational development.",
      iconBg: "from-pink-500 to-red-500",
    },
    {
      title: "Client Satisfaction",
      icon: <Handshake size={28} />,
      text: "We provide tailored recruitment services that help our clients achieve their goals through quality and dedication.",
      iconBg: "from-yellow-500 to-orange-500",
    },
    {
      title: "Our Expertise",
      icon: <Settings size={28} />,
      text: "Our team excels in building client trust through collaboration, quality checks, and domain knowledge.",
      iconBg: "from-green-500 to-emerald-600",
    },
    {
      title: "Trust & Reliability",
      icon: <ShieldCheck size={28} />,
      text: "We deliver consistent, high-quality service, earning the trust of clients across various sectors.",
      iconBg: "from-blue-500 to-indigo-600",
    },
    {
      title: "Innovative Solutions",
      icon: <Brain size={28} />,
      text: "We approach every challenge with creativity and provide modern solutions tailored to your needs.",
      iconBg: "from-purple-500 to-pink-500",
    },
    {
      title: "Global Reach",
      icon: <Globe2 size={28} />,
      text: "Our network and services extend globally, providing scalable solutions beyond boundaries.",
      iconBg: "from-cyan-500 to-blue-400",
    },
  ];

  return (
    <div className="bg-[#f4fbfd] py-12 px-6 min-h-[calc(100vh-64px-64px)] shadow-inner">
      <h1 className="text-5xl font-extrabold text-center drop-shadow-lg mb-12 text-black">
        About Us
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {cardData.map((card, index) => (
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
            <h2 className="text-gray-700 group-hover:text-white text-2xl font-semibold mb-2 group-hover:font-extrabold transition-colors">
              {card.title}
            </h2>
            {/* Fix: Lock line-height and prevent hover-stretching */}
            <p className="text-gray-700 group-hover:text-white transition-colors duration-300 leading-relaxed min-h-[96px]">
              {card.text}
            </p>
          </div>

        ))}
      </div>
    </div>
  );
}
