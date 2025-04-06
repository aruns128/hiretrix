"use client";

import {
  UserCheck,
  UserCog,
  Laptop,
  Smartphone,
  Briefcase,
  Paintbrush,
  Send,
  HeadsetIcon
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "End to End Recruitment Services",
    description:
      "At HireTrix, we offer end-to-end recruitment services, ensuring that we find the right talent for your company at every stage of the hiring process. From crafting job descriptions to screening candidates, we handle it all with precision.",
    icon: <UserCheck className="text-3xl" />,
    iconBg: "from-[#6D28D9] to-[#C084FC]", // purple gradient
  },
  {
    title: "Full Time, Temporary & Contract Staffing",
    description:
      "HireTrix offers staffing solutions for full-time, temporary, and contract positions, giving you the flexibility to scale your workforce based on your business needs.",
    icon: <UserCog className="text-3xl" />,
    iconBg: "from-[#EA580C] to-[#F97316]", // orange gradient
  },
  {
    title: "Training & Placement Services",
    description:
      "We provide training and placement services to enhance the skills of candidates, ensuring that they are job-ready and equipped to meet the demands of your organization.",
    icon: <Briefcase className="text-3xl" />,
    iconBg: "from-[#059669] to-[#34D399]", // green gradient
  },
  {
    title: "Mobile App Development",
    description:
      "Our team of experts creates intuitive and user-friendly mobile applications tailored to your business needs. We focus on providing seamless and impactful mobile experiences.",
    icon: <Smartphone className="text-3xl" />,
    iconBg: "from-[#2563EB] to-[#60A5FA]", // blue gradient
  },
  {
    title: "Web Development",
    description:
      "We offer customized web development services to help businesses create websites that are not only visually appealing but also functionally robust.",
    icon: <Laptop className="text-3xl" />,
    iconBg: "from-[#9333EA] to-[#D946EF]", // violet-pink gradient
  },
  {
    title: "UI & UX Design Services",
    description:
      "Our UI & UX design services focus on creating visually appealing and user-friendly interfaces that provide exceptional user experiences.",
    icon: <Paintbrush className="text-3xl" />,
    iconBg: "from-[#DC2626] to-[#F87171]", // red gradient
  },
];


export default function ServicesPage() {
  return (
    <div className="bg-[#0f0f3e] text-white py-12 px-6 min-h-[calc(100vh-64px-64px)]">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-5xl font-extrabold mb-4">Our Services</h1>
        <p className="text-lg max-w-3xl mx-auto">
          Welcome to HireTrix, your trusted partner for comprehensive recruitment solutions. At HireTrix, we recognize the importance of securing the right talent to drive your company's success. Leveraging our expertise, we skillfully navigate the talent landscape to identify, engage, and onboard top-tier candidates who will elevate your organization to new levels of achievement.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {services.map((card, index) => (
          <div
            key={index}
            className={`${index % 2 === 0 ? "fade-in-from-right" : "fade-in-from-left"
              } bg-white rounded-2xl p-6 text-center transition duration-300 ease-in-out hover:shadow-xl group hover:bg-gradient-to-br hover:from-[#ffffff] hover:via-[#ed12b7] hover:to-[#A020F0] hover:text-white`}
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
          <button className="group bg-gradient-to-r from-[#ed12b7] via-[#A020F0] to-[#9900FA] hover:opacity-90 transition-all duration-300 text-white px-6 py-3 rounded-md text-sm font-medium flex items-center gap-2 overflow-hidden">
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
