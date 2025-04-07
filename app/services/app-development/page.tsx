"use client";

import Link from "next/link";

import {
    Smartphone,
    Laptop,
    Paintbrush,
    HeadsetIcon,
  } from "lucide-react";
  
  const services = [
    {
      title: "Mobile App Development",
      description:
        "Our team builds responsive and intuitive mobile apps that cater to both Android and iOS platforms. We focus on delivering a seamless user experience aligned with your business goals.",
      icon: <Smartphone className="text-3xl" />,
      iconBg: "from-[#2563EB] to-[#60A5FA]", // blue gradient
    },
    {
      title: "Web Development",
      description:
        "We create modern, scalable, and secure web applications tailored to your business needs. Our team ensures your website is not only attractive but also functionally robust.",
      icon: <Laptop className="text-3xl" />,
      iconBg: "from-[#9333EA] to-[#D946EF]", // violet-pink gradient
    },
    {
      title: "UI/UX Design Services",
      description:
        "We deliver visually stunning and user-centric UI/UX designs that enhance usability and engagement. Our process ensures your app or site feels intuitive and delightful to users.",
      icon: <Paintbrush className="text-3xl" />,
      iconBg: "from-[#DC2626] to-[#F87171]", // red gradient
    },
  ];
  




export default function ServicesPage() {
  return (
    <div className="text-black py-12 px-6 min-h-[calc(100vh-64px-64px)]">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-5xl font-extrabold mb-4 fade-in-from-bottom">App Development Services</h1>
        <p className="text-lg max-w-3xl mx-auto fade-in-from-bottom">
        At HireTrix, we specialize in delivering end-to-end app development services that include Mobile App Development, Web Development, and UI/UX Design. Our expert team ensures each digital solution is crafted with precision, innovation, and user-centric design to empower your business across all digital platforms.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
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
