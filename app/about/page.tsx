"use client";

import { motion } from "framer-motion";

export default function Page() {
  return (
    <div className="bg-gradient-to-r min-h-screen text-[#222424] py-12 px-6 cursor-pointer">
      {/* Header Animation */}
      <motion.h1
        className="text-5xl font-extrabold text-center drop-shadow-lg mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        About Us
      </motion.h1>

      {/* About Section */}
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
      >
        <motion.div
          className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out hover:scale-105"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
        >
          <h2 className="text-3xl font-semibold mb-4">About HireTrix</h2>
          <p className="text-lg opacity-80">
            HireTrix is a growing people talent provider in the private sector, offering extensive expertise in delivering talent and organizational development services across a wide range of industries. We achieve this by carefully selecting and presenting well-trained professionals to meet our clients' expectations.
          </p>
        </motion.div>

        <motion.div
          className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out hover:scale-105"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.9 }}
        >
          <h2 className="text-3xl font-semibold mb-4">Our Expertise</h2>
          <p className="text-lg opacity-80">
            Our skilled specialists excel in fostering strong client relationships, ensuring maximum satisfaction through rigorous quality control. With a team of experts from various fields, we maintain close collaboration while consistently upholding service excellence, even when faced with a wide range of challenges.
          </p>
        </motion.div>
      </motion.div>

      {/* Expertise Section */}
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 max-w-4xl mx-auto hover:scale-105"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
      >
        <motion.div
          className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out hover:scale-105"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
        >
          <h2 className="text-3xl font-semibold mb-4">Client Satisfaction</h2>
          <p className="text-lg opacity-80">
            At HireTrix, we are committed to understanding the needs of our clients, providing tailored recruitment services that help them achieve their business goals. Our dedication to quality and excellence has earned us the trust of leading organizations.
          </p>
        </motion.div>

        <motion.div
          className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out hover:scale-105"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1.2 }}
        >
          <h2 className="text-3xl font-semibold mb-4">Our Team</h2>
          <p className="text-lg opacity-80">
            We pride ourselves on having a diverse team of professionals who work collaboratively to deliver exceptional results. Each team member brings a wealth of experience and expertise, ensuring that we are always ready to meet the evolving needs of our clients.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
