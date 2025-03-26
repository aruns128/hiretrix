"use client";

import { motion } from "framer-motion";
import { 
  UserCheck, 
  UserCog, 
  Laptop, 
  Smartphone, 
  Briefcase, 
  Paintbrush 
} from "lucide-react"; // Importing Lucide icons
import Link from "next/link";

export default function ServicesPage() {
  return (
    <div className="min-h-screen text-[#222424] py-12 px-6">
      {/* Header Section with Background Illustration */}
      <div className="relative mb-16">
        <motion.h1
          className="text-5xl font-extrabold text-center drop-shadow-lg z-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Our Services
        </motion.h1>
        <div className="absolute inset-0 bg-cover bg-no-repeat bg-center opacity-20" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?business')" }}></div>
      </div>

      {/* Services Introduction */}
      <motion.div
        className="mt-8 text-center max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
      >
        <p className="text-lg">
          Welcome to HireTrix, your trusted partner for comprehensive recruitment solutions. At HireTrix, we recognize the importance of securing the right talent to drive your company's success. Leveraging our expertise, we skillfully navigate the talent landscape to identify, engage, and onboard top-tier candidates who will elevate your organization to new levels of achievement.
        </p>
      </motion.div>

      {/* Services List */}
      <motion.div
        className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
      >
        <motion.div
          className="service-card bg-white text-[#222424] p-8 rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl hover:bg-[#f3f3f3] cursor-pointer flex flex-col items-center justify-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.9 }}
        >
          <UserCheck className="text-4xl mb-4" />
          <h3 className="text-xl font-semibold mb-4 text-center">End to End Recruitment Services</h3>
          <p className="text-lg opacity-80 text-center">
            At HireTrix, we offer end-to-end recruitment services, ensuring that we find the right talent for your company at every stage of the hiring process. From crafting job descriptions to screening candidates, we handle it all with precision.
          </p>
        </motion.div>

        <motion.div
          className="service-card bg-white text-[#222424] p-8 rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl hover:bg-[#f3f3f3] cursor-pointer flex flex-col items-center justify-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 1.2 }}
        >
          <UserCog className="text-4xl mb-4" />
          <h3 className="text-xl font-semibold mb-4 text-center">Full Time, Temporary & Contract Staffing</h3>
          <p className="text-lg opacity-80 text-center">
            HireTrix offers staffing solutions for full-time, temporary, and contract positions, giving you the flexibility to scale your workforce based on your business needs.
          </p>
        </motion.div>

        <motion.div
          className="service-card bg-white text-[#222424] p-8 rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl hover:bg-[#f3f3f3] cursor-pointer flex flex-col items-center justify-center text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 1.5 }}
        >
          <Briefcase className="text-4xl mb-4"/>
          <h3 className="text-xl font-semibold mb-4 text-center">Training & Placement Services</h3>
          <p className="text-lg opacity-80 text-center">
            We provide training and placement services to enhance the skills of candidates, ensuring that they are job-ready and equipped to meet the demands of your organization.
          </p>
        </motion.div>

        <motion.div
          className="service-card bg-white text-[#222424] p-8 rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl hover:bg-[#f3f3f3] cursor-pointer flex flex-col items-center justify-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 1.8 }}
        >
          <Smartphone className="text-4xl mb-4" />
          <h3 className="text-xl font-semibold mb-4 text-center">Mobile App Development</h3>
          <p className="text-lg opacity-80 text-center">
            Our team of experts creates intuitive and user-friendly mobile applications tailored to your business needs. We focus on providing seamless and impactful mobile experiences.
          </p>
        </motion.div>

        <motion.div
          className="service-card bg-white text-[#222424] p-8 rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl hover:bg-[#f3f3f3] cursor-pointer flex flex-col items-center justify-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 2.1 }}
        >
          <Laptop className="text-4xl mb-4" />
          <h3 className="text-xl font-semibold mb-4 text-center">Web Development</h3>
          <p className="text-lg opacity-80 text-center">
            We offer customized web development services to help businesses create websites that are not only visually appealing but also functionally robust.
          </p>
        </motion.div>

        <motion.div
          className="service-card bg-white text-[#222424] p-8 rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl hover:bg-[#f3f3f3] cursor-pointer flex flex-col items-center justify-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 2.4 }}
        >
          <Paintbrush className="text-4xl mb-4" />
          <h3 className="text-xl font-semibold mb-4 text-center">UI & UX Design Services</h3>
          <p className="text-lg opacity-80 text-center">
            Our UI & UX design services focus on creating visually appealing and user-friendly interfaces that provide exceptional user experiences.
          </p>
        </motion.div>
      </motion.div>

      {/* Contact Button */}
      <div className="mt-12 text-center">
        <Link href="/contact">
          <motion.button
           className="px-3 py-1 bg-[#9900FA] text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-all"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 3 }}
          >
            Contact Us
          </motion.button>
        </Link>
      </div>
    </div>
  );
}
