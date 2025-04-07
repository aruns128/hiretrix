// "use client";

// import { MoveRightIcon } from "lucide-react";
// import { useState } from "react";

// interface FormData {
//   fullName: string;
//   email: string;
//   resume: File | null;
//   coverLetter: string;
// }

// interface FormErrors {
//   fullName: string;
//   email: string;
//   resume: string;
// }

// export default function CareersPage() {
//   const [formData, setFormData] = useState<FormData>({
//     fullName: "",
//     email: "",
//     resume: null,
//     coverLetter: "",
//   });

//   const [errors, setErrors] = useState<FormErrors>({
//     fullName: "",
//     email: "",
//     resume: "",
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, files } = e.target;
//     setFormData({ ...formData, [name]: files?.[0] ?? null });
//   };

//   const validateForm = (): boolean => {
//     let valid = true;
//     const newErrors: FormErrors = { fullName: "", email: "", resume: "" };

//     if (!formData.fullName.trim()) {
//       newErrors.fullName = "Full name is required.";
//       valid = false;
//     }

//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required.";
//       valid = false;
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = "Please enter a valid email.";
//       valid = false;
//     }

//     if (!formData.resume) {
//       newErrors.resume = "Resume is required.";
//       valid = false;
//     }

//     setErrors(newErrors);
//     return valid;
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     if (validateForm()) {
//       console.log("Submitted:", formData);
//       alert("Application submitted successfully!");

//       setFormData({
//         fullName: "",
//         email: "",
//         resume: null,
//         coverLetter: "",
//       });
//       setErrors({ fullName: "", email: "", resume: "" });
//     }
//   };

//   return (
//     <section className="py-10 px-4 text-[#222424] min-h-[calc(100vh-128px)] items-center justify-center flex">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
//         {/* Left Section */}
//         <div className="rounded-xl shadow-md p-6 md:p-10 flex flex-col justify-between">
//           <div className="flex items-center justify-center flex-col font-bold">
//             <h2 className="text-3xl font-bold mb-4 text-[#f9fbff]">Join Our Team</h2>
//             <p className="text-[#f9fbff] mb-6">
//               At HireTrix, we're always on the lookout for talented individuals
//               to join our dynamic team. We offer a range of opportunities across
//               various departments and roles.
//             </p>
//             <ul className="list-disc ml-6 text-[#f9fbff] space-y-2">
//               <li>Innovative and collaborative environment</li>
//               <li>Opportunities for growth and advancement</li>
//               <li>Supportive leadership and team culture</li>
//             </ul>
//             <p className="mt-4 text-[#f9fbff]">
//               Whether you're an experienced professional or just starting out,
//               we encourage you to apply!
//             </p>
//           </div>
//         </div>

//         {/* Right Section (Form) */}
//         <div className="bg-[#f9fbff] rounded-xl shadow-md p-6 md:p-10 flex items-center">
//           <form className="w-full space-y-4" onSubmit={handleSubmit}>
//             <h2 className="text-2xl font-bold mb-4">Apply Now</h2>

//             <div>
//               <input
//                 type="text"
//                 name="fullName"
//                 placeholder="Full Name"
//                 value={formData.fullName}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 border border-gray-300 rounded"
//               />
//               {errors.fullName && (
//                 <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
//               )}
//             </div>

//             <div>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email Address"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 border border-gray-300 rounded"
//               />
//               {errors.email && (
//                 <p className="text-red-500 text-sm mt-1">{errors.email}</p>
//               )}
//             </div>

//             <div>
//               <input
//                 type="file"
//                 name="resume"
//                 accept=".pdf,.doc,.docx"
//                 onChange={handleFileChange}
//                 className="w-full border border-gray-300 px-4 py-2 rounded"
//               />
//               {errors.resume && (
//                 <p className="text-red-500 text-sm mt-1">{errors.resume}</p>
//               )}
//             </div>

//             <div>
//               <textarea
//                 name="coverLetter"
//                 rows={4}
//                 placeholder="Cover Letter (optional)"
//                 value={formData.coverLetter}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 border border-gray-300 rounded resize-none"
//               />
//             </div>

//             <div className="flex justify-end">

//               <button type="submit" className="group bg-gradient-to-r from-[#ed12b7] via-[#A020F0] to-[#9900FA] hover:opacity-90 transition-all duration-300 text-white px-6 py-3 rounded-md text-sm font-medium flex items-center gap-2 overflow-hidden">
//                 Submit
//                 <span className="inline-block transform transition-transform duration-300 group-hover:translate-x-1">
//                   <MoveRightIcon className="w-4 h-4" />
//                 </span>

//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }


const CareerPage = () => {
  return (<section className="relative h-[450px] w-full overflow-hidden">
    {/* Background Image */}
    <div className="absolute inset-0">
      <img
        src="/office.jpg" // ✅ Replace with your actual image path
        alt="Office"
        className="w-full h-full object-cover"
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-[#1c41fd]/75 to-[#ffffff00]/100"></div>
    </div>

    {/* Content */}
    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4  fade-in-from-bottom">
      <h2 className="text-3xl md:text-5xl font-bold mb-4">JOIN THE TEAM</h2>
      <p className="text-sm md:text-lg max-w-2xl mb-6">
        We love young, passionate professionals who aren’t afraid to learn and push their boundaries to achieve something meaningful!
      </p>

      <a
        href="/current-openings"
        className="bg-gradient-to-r from-[#0127fa] to-[#c309ec] hover:from-[#c309ec] hover:to-[#0127fa] text-white px-6 py-2.5 rounded-md font-medium shadow-md hover:opacity-90 transition fade-in-from-bottom"
      >
        View our current openings
      </a>
    </div>
  </section>
  )
}

export default CareerPage;