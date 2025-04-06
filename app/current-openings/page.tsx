"use client"
import { useState } from "react";
import { Briefcase, Clock, Locate, LocateFixed, LocateIcon, MapPin, Search, SendHorizonal, TypeOutline } from "lucide-react";

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

  const jobTypes = ["All", ...new Set(jobs.map((job) => job.type))];

  return (
    <div className="bg-[#0f0f3e] text-white py-16 px-6 min-h-[calc(100vh-128px)]">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Join Our Team</h2>
        <p className="text-lg text-gray-300">
          We're always looking for talented individuals to join our mission.
        </p>
      </div>


      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
        <div className="flex items-center w-full sm:w-1/2 bg-white rounded-xl overflow-hidden shadow">
          <Search className="ml-3 text-gray-600" />
          <input
            type="text"
            placeholder="Search jobs..."
            className="w-full px-4 py-2 text-black focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="w-full sm:w-1/3 px-4 py-2 bg-white text-black rounded-xl shadow"
        >
          {jobTypes.map((type, i) => (
            <option key={i} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      {/* Job Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 max-w-7xl mx-auto">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job, index) => (
            <div className="relative group" key={index}>
              <div
                className="bg-white text-[#222424] rounded-2xl p-6 shadow-md flex flex-col justify-between h-full group-hover:opacity-40 transition-all"
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <Briefcase size={26} color="#ed12b7" />
                  <h3 className="text-lg font-semibold">{job.title}</h3>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center">
                  <p className="text-sm text-gray-600 mb-3">{job.description}</p>
                  <div className="text-sm font-medium mb-1 flex gap-0.5 items-center">
                    <div className=" text-white p-2">
                      <MapPin size={16} color="#A020F0" />
                    </div> Location: <span className="text-[#f3336b]">{job.location}</span>
                  </div>
                  <div className="text-sm font-medium flex gap-0.5 items-center">
                    <div className="text-white p-2">
                      <Clock size={16} color="#A020F0" />
                    </div>
                    Type: <span className="text-[#f3336b]">{job.type}</span>
                  </div>

                </div>
              </div>

              {/* Apply Button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-[#ed12b7] via-[#A020F0] to-[#9900FA] text-white px-4 py-2 rounded-md text-sm font-semibold flex gap-2 items-center shadow-lg"
                >
                  Apply Now
                  <SendHorizonal size={18} />
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-300">
            No job openings match your criteria.
          </div>
        )}

      </div>
    </div>
  );
}
