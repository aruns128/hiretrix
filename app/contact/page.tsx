"use client";
import { useState } from "react";
import { motion } from "framer-motion";

type FormData = {
    name: string;
    email: string;
    message: string;
};

type Errors = {
    name?: string;
    email?: string;
    message?: string;
};

export default function ContactUsPage() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        message: "",
    });

    const [errors, setErrors] = useState<Errors>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const validate = (): boolean => {
        const newErrors: Errors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Name is required.";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email is invalid.";
        }

        if (!formData.message.trim()) {
            newErrors.message = "Message is required.";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (validate()) {
            // Handle form submission (e.g., send data to an API or email)
            alert("Form submitted successfully!");
            setFormData({ name: "", email: "", message: "" });
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
                    Contact Us
                </motion.h1>
                <div
                    className="absolute inset-0 bg-cover bg-no-repeat bg-center opacity-20"
                    style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?business')" }}
                ></div>
            </div>

            {/* Contact Details */}
            <motion.div
  className="mb-16 text-center"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
>
  <h2 className="text-3xl font-bold mb-6">We value your experience – reach out anytime!</h2>
  <p className="text-lg mb-6">We're happy to help!</p>

  {/* Contact Details Section */}
  <div className="flex flex-col sm:flex-row justify-center sm:items-start items-center sm:space-x-12 space-y-6 sm:space-y-0 mb-8">
    {/* Location Section with Flag */}
    <div className="flex flex-col items-center sm:items-start space-y-3">
      <p className="font-semibold">Location:</p>
      <div className="flex justify-center items-center">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg"
          alt="India Flag"
          className="w-8 h-5"
        />
      </div>
      <p className="font-semibold">Chennai, India</p>
    </div>

    {/* Email Section */}
    <div className="flex flex-col items-center sm:items-start space-y-3">
      <p className="font-semibold">Email:</p>
      <p className="text-lg">info@hiretrix.com</p>
    </div>

    {/* Business Hours Section */}
    <div className="flex flex-col items-center sm:items-start space-y-3">
      <p className="font-semibold">Business Hours:</p>
      <p className="text-lg">Mon - Fri: 09:00 am - 07:00 pm</p>
      <p className="text-lg">Sat - Sun: Closed</p>
    </div>
  </div>
</motion.div>




            {/* Contact Us Form */}
            <motion.div
                className="bg-white p-8 rounded-lg shadow-xl max-w-3xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            >
                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label htmlFor="name" className="block text-lg font-semibold">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9900FA] focus:border-transparent"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        {errors.name && <p className="text-red-600 text-sm mt-2">{errors.name}</p>}
                    </div>

                    <div className="mb-6">
                        <label htmlFor="email" className="block text-lg font-semibold">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9900FA] focus:border-transparent"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && <p className="text-red-600 text-sm mt-2">{errors.email}</p>}
                    </div>

                    <div className="mb-6">
                        <label htmlFor="message" className="block text-lg font-semibold">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9900FA] focus:border-transparent"
                            value={formData.message}
                            onChange={handleChange}
                        />
                        {errors.message && <p className="text-red-600 text-sm mt-2">{errors.message}</p>}
                    </div>

                    <div className="text-right">
                        <button
                            type="submit"
                            className="px-3 py-1 bg-[#9900FA] text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-all"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </motion.div>
        </div>
    );
}
