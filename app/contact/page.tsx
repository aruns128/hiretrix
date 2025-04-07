"use client";

import {
  Mail,
  MapPin,
  Clock,
  Phone,
  SendHorizonal,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  InstagramIcon,
} from "lucide-react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";

type FormData = {
  user_name: string;
  user_email: string;
  message: string;
};

export default function ContactUsPage() {
  const form = useRef<HTMLFormElement | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = () => {
    if (!form.current) return;

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => {
          alert("Message sent successfully!");
          reset();
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          console.error(error);
        }
      );
  };

  return (
    <section className="py-10 text-[#222424] min-h-[calc(100vh-128px)] flex items-center justify-center bg-[#f0f2f8]">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Section */}
        <div className="bg-white rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] p-6 md:p-10 mx-4 md:mx-0 flex flex-col justify-between fade-in-from-bottom">
          <div>
            <h2 className="text-3xl font-bold mb-4">Get In Touch With Us</h2>
            <p className="text-gray-600 mb-6 max-w-md">
              We value your experience – reach out anytime!
            </p>

            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <div className="bg-[#ed12b7] text-white p-2 rounded-lg">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="font-semibold">Phone Number</p>
                  <p>(234) 567-8912</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-[#A020F0] text-white p-2 rounded-lg">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="font-semibold">Email Address</p>
                  <p>info@hiretrix.com</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-[#9900FA] text-white p-2 rounded-lg">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="font-semibold">Our Location</p>
                  <div className="flex items-center gap-2">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg"
                      alt="India Flag"
                      className="w-6 h-4"
                    />
                    <p>Chennai, India</p>
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-[#ed12b7] text-white p-2 rounded-lg">
                  <Clock size={20} />
                </div>
                <div>
                  <p className="font-semibold">Business Hours</p>
                  <p>Mon - Fri: 09:00 am - 07:00 pm</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="mt-8">
            <p className="font-medium mb-3">Follow us:</p>
            <div className="flex gap-4">
              <a href="#" className="text-white bg-[#4267B2] p-2 rounded">
                <FacebookIcon size={18} />
              </a>
              <a href="#" className="text-white bg-[#1DA1F2] p-2 rounded">
                <TwitterIcon size={18} />
              </a>
              <a href="#" className="text-white bg-[#0077B5] p-2 rounded">
                <LinkedinIcon size={18} />
              </a>
              <a href="#" className="text-white bg-[#E1306C] p-2 rounded">
                <InstagramIcon size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Section (Form) */}
        <div className="bg-white rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] p-6 md:p-10 mx-4 md:mx-0 flex items-center fade-in-from-bottom">
          <form
            ref={form}
            onSubmit={handleSubmit(onSubmit)}
            className="w-full space-y-4"
          >
            <h2 className="text-2xl font-bold mb-4">Request a Quote</h2>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="w-full">
                <input
                  type="text"
                  placeholder="Name"
                  {...register("user_name", { required: "Name is required." })}
                  className="w-full px-4 py-2 border border-gray-300 rounded"
                />
                {errors.user_name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.user_name.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <input
                type="email"
                placeholder="Email Address"
                {...register("user_email", {
                  required: "Email is required.",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Email is invalid.",
                  },
                })}
                className="w-full px-4 py-2 border border-gray-300 rounded"
              />
              {errors.user_email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.user_email.message}
                </p>
              )}
            </div>

            <div>
              <textarea
                rows={4}
                placeholder="Message"
                {...register("message", { required: "Message is required." })}
                className="w-full px-4 py-2 border border-gray-300 rounded resize-none"
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="group bg-gradient-to-r from-[#0127fa] to-[#c309ec] hover:from-[#c309ec] hover:to-[#0127fa] text-white px-6 py-2.5 rounded-md font-medium shadow-md hover:opacity-90 transition flex items-center"
              >
                Send
                <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1 flex items-center">
                  <SendHorizonal size={18} />
                </span>
              </button>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
}
