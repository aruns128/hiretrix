"use client";
import { useState } from "react";
import {
  Briefcase,
  Clock,
  MapPin,
  Search,
  SendHorizonal,
} from "lucide-react";
import GradientSelect from "@/components/Select";
import DreamJobForm from "@/components/DreamJob";

const jobs = [
  {
    title: "Frontend Developer",
    location: "Chennai, India",
    type: "Full Time",
    description: "We're looking for a React developer who can create high-quality interfaces.",
  },
  {
    title: "Backend Engineer",
    location: "Remote",
    type: "Contract",
    description: "Join our backend team to build scalable APIs and microservices in Node.js.",
  },
  {
    title: "UI/UX Designer",
    location: "Bangalore, India",
    type: "Full Time",
    description: "Create beautiful and functional designs with Figma and Tailwind CSS.",
  },
  {
    title: "DevOps Engineer",
    location: "Mumbai, India",
    type: "Full Time",
    description: "Manage CI/CD pipelines, cloud deployments, and infrastructure automation.",
  },
  {
    title: "Mobile App Developer",
    location: "Remote",
    type: "Part Time",
    description: "Build beautiful mobile apps using React Native or Flutter.",
  },
  {
    title: "Data Scientist",
    location: "Delhi, India",
    type: "Full Time",
    description: "Work with big data, ML models, and analytics pipelines.",
  },
  {
    title: "Product Manager",
    location: "Remote",
    type: "Full Time",
    description: "Own the roadmap, work with teams and shape our product vision.",
  },
  {
    title: "QA Engineer",
    location: "Pune, India",
    type: "Contract",
    description: "Test features, write test cases, and ensure software quality.",
  },
  {
    title: "Tech Support",
    location: "Chennai, India",
    type: "Full Time",
    description: "Help our customers with technical issues and troubleshooting.",
  },
  {
    title: "Content Writer",
    location: "Remote",
    type: "Freelance",
    description: "Write clear, engaging content for our platform and blogs.",
  },
];

export default function JobOpenings() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("All");

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesType = filterType === "All" || job.type === filterType;

    return matchesSearch && matchesType;
  });

  return (
    <div className="text-black py-16 px-6 min-h-[calc(100vh-128px)] fade-in-from-bottom">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Join Our Team</h2>
        <p className="text-lg text-black">
          We're always looking for talented individuals to join our mission.
        </p>
      </div>

      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
        {/* Search Box */}
        <div className="flex items-center w-full sm:w-2/3 bg-gray-100 rounded-xl overflow-hidden px-3 py-2">
          <Search className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search jobs..."
            className="w-full bg-transparent text-black placeholder-gray-500 focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Filter Dropdown */}
        <div className="w-full sm:w-1/3">
          <GradientSelect selected={filterType} setSelected={setFilterType} />
        </div>
      </div>

      {/* Job Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 max-w-7xl mx-auto">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job, index) => (
            <div className="relative group transition-transform transform hover:scale-105" key={index}>
              <div className="bg-white text-[#222424] rounded-2xl p-6 shadow-md flex flex-col justify-between h-full group-hover:bg-gradient-to-b from-[#4f46e5] to-[#ae48ee] group-hover:text-white transition-all duration-300">
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <Briefcase size={26} className="text-[#ed12b7] group-hover:text-white" />
                  <h3 className="text-lg font-semibold">{job.title}</h3>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center">
                  <p className="text-sm mb-3">{job.description}</p>
                  <div className="text-sm font-medium mb-1 flex gap-1 items-center">
                    <MapPin size={16} className="text-[#A020F0]" />
                    Location: <span className="text-[#f3336b] group-hover:text-white">{job.location}</span>
                  </div>
                  <div className="text-sm font-medium flex gap-1 items-center">
                    <Clock size={16} className="text-[#A020F0]" />
                    Type: <span className="text-[#f3336b] group-hover:text-white">{job.type}</span>
                  </div>
                </div>
              </div>

              {/* Apply Icon Button */}
              <button
                type="button"
                title="Apply Now"
                className="absolute bottom-3 right-3 bg-gradient-to-r from-[#ed12b7] via-[#A020F0] to-[#9900FA] text-white p-2 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
              >
                <SendHorizonal size={18} />
              </button>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-black">
            No job openings match your criteria.
          </div>
        )}
      </div>

      {/* Dream Job Form */}
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-12 fade-in-from-bottom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">
            DON'T SEE YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0127fa] to-[#ed12b7]">DREAM JOB?</span>
          </h2>
          <p className="mt-2 text-gray-500">Send us your information and we'll let you know if something comes up.</p>
        </div>

        <DreamJobForm/>
      </div>
    </div>
  );
}
