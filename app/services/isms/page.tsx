"use client";

import {
    HeadsetIcon,
    FileCheck2,
    AlertTriangle,
    FileText,
    ClipboardCheck,
    GraduationCap,
} from "lucide-react";
import Link from "next/link";

import {

} from "lucide-react";

const services = [
    {
        title: "Awareness & Training Programs",
        description:
          "We conduct engaging training sessions to build employee awareness about information security practices, phishing prevention, and data handling.",
        icon: <GraduationCap className="text-3xl" />,
        iconBg: "from-[#F43F5E] to-[#FB7185]", // rose gradient
      },
    {
      title: "ISO 27001 Implementation",
      description:
        "We guide your organization through ISO 27001 implementation — from gap analysis and documentation to internal audits — ensuring a certified and secure ISMS framework.",
      icon: <FileCheck2 className="text-3xl" />,
      iconBg: "from-[#0EA5E9] to-[#38BDF8]", // cyan gradient
    },
    {
      title: "Risk Assessment & Treatment",
      description:
        "HireTrix helps identify, analyze, and mitigate potential information security risks using a structured approach aligned with ISO 27001 requirements.",
      icon: <AlertTriangle className="text-3xl" />,
      iconBg: "from-[#F59E0B] to-[#FBBF24]", // amber gradient
    },
    {
      title: "Policy & Procedure Development",
      description:
        "We help you create strong security policies and procedures covering access control, asset management, incident response, and more.",
      icon: <FileText className="text-3xl" />,
      iconBg: "from-[#6D28D9] to-[#C084FC]", // purple gradient
    },
   
  ];
  



export default function ServicesPage() {
    return (
        <div className="text-black py-12 px-6 min-h-[calc(100vh-64px-64px)]">
            {/* Header */}
            <div className="text-center mb-10">
                <h1 className="text-5xl font-extrabold mb-4 fade-in-from-bottom">ISMS - Information Security Management System</h1>
                <p className="text-lg max-w-3xl mx-auto fade-in-from-bottom">
                    At HireTrix, our ISMS services help organizations establish and maintain a systematic approach to managing sensitive company information, ensuring confidentiality, integrity, and availability. We assist in implementing ISO 27001 standards, risk assessments, and continuous compliance practices tailored to your industry.
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
