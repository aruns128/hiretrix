"use client";

import { useState } from "react";
import { motion } from "framer-motion";

// Type definitions for form data and error states
interface FormData {
  fullName: string;
  email: string;
  resume: File | null;
  coverLetter: string;
}

interface FormErrors {
  fullName: string;
  email: string;
  resume: string;
}

export default function Page() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    resume: null,
    coverLetter: "",
  });

  const [errors, setErrors] = useState<FormErrors>({
    fullName: "",
    email: "",
    resume: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : null,
    });
  };

  const validateForm = (): boolean => {
    let valid = true;
    const newErrors: FormErrors = { fullName: "", email: "", resume: "" };

    if (!formData.fullName) {
      newErrors.fullName = "Full name is required.";
      valid = false;
    }

    if (!formData.email) {
      newErrors.email = "Email is required.";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email.";
      valid = false;
    }

    if (!formData.resume) {
      newErrors.resume = "Resume is required.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      // Handle form submission (e.g., send the form data to the server)
      console.log("Form submitted successfully", formData);
    }
  };

  return (
    <div className="min-h-screen text-[#222424] py-12 px-6">
      {/* Header Section */}
      <div className="relative mb-16">
        <motion.h1
          className="text-5xl font-extrabold text-center drop-shadow-lg z-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Join Our Team
        </motion.h1>
        <div className="absolute inset-0 bg-cover bg-no-repeat bg-center opacity-20" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?work,office')" }}></div>
      </div>

      {/* Career Introduction */}
      <motion.div
        className="mt-8 text-center max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
      >
        <p className="text-lg opacity-80">
          At HireTrix, we’re always on the lookout for talented individuals to join our dynamic team. We offer a range of opportunities across various departments and roles. Whether you're an experienced professional or just starting your career, we have the perfect position for you.
        </p>
        <p className="mt-4 text-lg opacity-80">
          Browse through the available roles and apply by filling out the form below with your details and resume.
        </p>
      </motion.div>

      {/* Application Form Section */}
      <motion.div
        className="mt-12 max-w-3xl mx-auto bg-slate-50 p-8 rounded-xl shadow-lg text-[#222424] font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 1 }}
      >
        <h2 className="text-2xl font-semibold text-center mb-6">Apply Now</h2>
        <p className="text-center text-lg opacity-80 mb-6">
          Fill out the form below and upload your resume to apply for the position that suits your skills and experience.
        </p>

        {/* Form for submitting details */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col">
              <label htmlFor="fullName" className="text-lg font-semibold text-[#222424]">
                Full Name
              </label>
              <input
                id="fullName"
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                className={`px-4 py-3 border rounded-lg text-lg focus:outline-none ${errors.fullName ? "border-red-500 bg-red-50" : "border-[#e0e0e0] focus:ring-[#9900FA]"}`}
              />
              {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-lg font-semibold text-[#222424]">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                className={`px-4 py-3 border rounded-lg text-lg focus:outline-none ${errors.email ? "border-red-500 bg-red-50" : "border-[#e0e0e0] focus:ring-[#9900FA]"}`}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>

            <div className="flex flex-col">
              <label htmlFor="resume" className="text-lg font-semibold text-[#222424]">
                Upload Resume
              </label>
              <input
                id="resume"
                type="file"
                name="resume"
                accept=".pdf, .doc, .docx"
                onChange={handleFileChange}
                className={`px-4 py-3 border rounded-lg text-lg focus:outline-none ${errors.resume ? "border-red-500 bg-red-50" : "border-[#e0e0e0] focus:ring-[#9900FA]"}`}
              />
              {errors.resume && <p className="text-red-500 text-sm">{errors.resume}</p>}
            </div>

            <div className="flex flex-col">
              <label htmlFor="coverLetter" className="text-lg font-semibold text-[#222424]">
                Cover Letter (Optional)
              </label>
              <textarea
                id="coverLetter"
                name="coverLetter"
                rows={5}
                value={formData.coverLetter}
                onChange={handleChange}
                placeholder="Write a cover letter (optional)"
                className="px-4 py-3 border rounded-lg text-lg focus:outline-none border-[#e0e0e0] focus:ring-[#9900FA]"
              ></textarea>
            </div>

            <div className="text-right">
              <motion.button
                type="submit"
             className="px-3 py-1 bg-[#9900FA] text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-all"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 1.3 }}
              >
                Submit Application
              </motion.button>
              
            </div>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
