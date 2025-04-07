"use client";

import {
  UserCheck,
  Briefcase,
  HeadsetIcon,
  Banknote,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

import {
 
} from "lucide-react";

const services = [
  {
    title: "Recruitment and Staffing",
    description:
      "At HireTrix, we offer end-to-end recruitment services, ensuring that we find the right talent for your company at every stage of the hiring process. From crafting job descriptions to screening candidates, we handle it all with precision.",
    icon: <UserCheck className="text-3xl" />,
    iconBg: "from-[#6D28D9] to-[#C084FC]", // purple gradient
  },
  {
    title: "Training & Placement Services",
    description:
      "We provide skill-based training and job placement support for freshers and experienced professionals. Our programs ensure candidates are industry-ready and matched to relevant opportunities.",
    icon: <Briefcase className="text-3xl" />,
    iconBg: "from-[#059669] to-[#34D399]", // green gradient
  },
  {
    title: "Payroll Services",
    description:
      "Our payroll services are designed to simplify salary processing, tax calculations, and compliance. We handle accurate and timely disbursement while maintaining confidentiality and legal adherence.",
    icon: <Banknote className="text-3xl" />,
    iconBg: "from-[#0EA5E9] to-[#38BDF8]", // cyan gradient
  },
  {
    title: "POSH Training",
    description:
      "HireTrix conducts Prevention of Sexual Harassment (POSH) training programs that promote a respectful and safe workplace. Our expert-led sessions ensure awareness and compliance with legal guidelines.",
    icon: <ShieldCheck className="text-3xl" />,
    iconBg: "from-[#F43F5E] to-[#FB7185]", // rose gradient
  },
];



export default function ServicesPage() {
  return (
    <div className="text-black py-12 px-6 min-h-[calc(100vh-64px-64px)]">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-5xl font-extrabold mb-4 fade-in-from-bottom">HR Services</h1>
        <p className="text-lg max-w-3xl mx-auto fade-in-from-bottom">
        HireTrix offers comprehensive HR services designed to streamline your human resource functions. From Recruitment and Staffing to Training & Placement, Payroll Management, and POSH Training — we ensure your organization runs smoothly with a skilled, compliant, and motivated workforce.
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
