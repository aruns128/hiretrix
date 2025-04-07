"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required("Full name is required"),
  phone: yup.string().required("Phone number is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  role: yup.string(),
  expectedCtc: yup.string(),
  social: yup.string().url("Enter a valid URL"),
  currentCtc: yup.string(),
  github: yup.string().url("Enter a valid URL"),
});

export default function DreamJobForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log("Form Data:", data);
    alert("Form submitted successfully!");
    reset(); // Reset form after submission
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          {...register("name")}
          type="text"
          className={`mt-1 w-full border ${
            errors.name ? "border-red-500" : "border-gray-300"
          } rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#c309ec]`}
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Phone Number <span className="text-red-500">*</span>
        </label>
        <input
          {...register("phone")}
          type="tel"
          className={`mt-1 w-full border ${
            errors.phone ? "border-red-500" : "border-gray-300"
          } rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#c309ec]`}
        />
        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Email Address <span className="text-red-500">*</span></label>
        <input
          {...register("email")}
          type="email"
          className={`mt-1 w-full border ${
            errors.email ? "border-red-500" : "border-gray-300"
          } rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#c309ec]`}
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Your Dream Role</label>
        <input
          {...register("role")}
          type="text"
          className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#c309ec]"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Expected CTC</label>
        <input
          {...register("expectedCtc")}
          type="text"
          className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#c309ec]"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Social Profile</label>
        <input
          {...register("social")}
          type="url"
          placeholder="LinkedIn / Twitter / Other"
          className={`mt-1 w-full border ${
            errors.social ? "border-red-500" : "border-gray-300"
          } rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#c309ec]`}
        />
        {errors.social && <p className="text-red-500 text-sm mt-1">{errors.social.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Current CTC</label>
        <input
          {...register("currentCtc")}
          type="text"
          className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#c309ec]"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">GitHub Link</label>
        <input
          {...register("github")}
          type="url"
          className={`mt-1 w-full border ${
            errors.github ? "border-red-500" : "border-gray-300"
          } rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#c309ec]`}
        />
        {errors.github && <p className="text-red-500 text-sm mt-1">{errors.github.message}</p>}
      </div>

      {/* Submit */}
      <div className="md:col-span-2 mt-6 text-center">
        <button
          type="submit"
          className="bg-gradient-to-r from-[#ed12b7] via-[#A020F0] to-[#9900FA] text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
