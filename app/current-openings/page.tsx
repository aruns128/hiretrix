
"use client";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { useState } from "react";

type Job = {
  id: number;
  title: string;
  description: string;
  datePosted: string;
};

const getDateRanges = () => {
  const today = new Date();
  const lastWeek = new Date(today);
  lastWeek.setDate(today.getDate() - 7);

  const lastMonth = new Date(today);
  lastMonth.setMonth(today.getMonth() - 1);

  const latestDate = today.toISOString().split("T")[0];
  const lastWeekDate = lastWeek.toISOString().split("T")[0];
  const lastMonthDate = lastMonth.toISOString().split("T")[0];

  return {
    latestDate,
    lastWeekDate,
    lastMonthDate,
  };
};

export default function JobsPage() {
  const { latestDate, lastWeekDate, lastMonthDate } = getDateRanges();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filterDate, setFilterDate] = useState<string>('All');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  const jobs: Job[] = [
    {
      id: 1,
      title: "Software Engineer",
      description: "Looking for a skilled Software Engineer to join our team and work on cutting-edge technologies.",
      datePosted: "2025-03-15",
    },
    {
      id: 2,
      title: "UI/UX Designer",
      description: "We are looking for a creative and innovative UI/UX Designer to design beautiful user interfaces.",
      datePosted: "2025-03-10",
    },
    {
      id: 3,
      title: "Full Stack Developer",
      description: "Join our team as a Full Stack Developer and work on both frontend and backend technologies.",
      datePosted: "2025-03-20",
    },
    {
      id: 4,
      title: "Product Manager",
      description: "We are hiring a Product Manager to oversee the development of our next-generation products.",
      datePosted: "2025-02-25",
    },
  ];

  const filteredJobs = jobs.filter((job) =>
    (filterDate === 'All' ||
      (filterDate === 'Latest' && job.datePosted >= latestDate) ||
      (filterDate === 'Last Week' && job.datePosted >= lastWeekDate) ||
      (filterDate === 'Last Month' && job.datePosted >= lastMonthDate)
    ) &&
    (job.title.toLowerCase().includes(searchQuery.toLowerCase()) || job.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const openModal = (job: Job): void => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const closeModal = (): void => {
    setIsModalOpen(false);
    setSelectedJob(null);
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
          Current Openings
        </motion.h1>
        <div className="absolute inset-0 bg-cover bg-no-repeat bg-center opacity-20" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?business')" }}></div>
      </div>

      {/* Search and Filter */}
      <motion.div
        className="mb-8 flex flex-col md:flex-row justify-between items-center max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
      >
        {/* Search Input */}
        <div className="flex items-center w-auto space-x-4 mb-4 md:mb-0">
          <input
            type="text"
            placeholder="Search jobs..."
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9900FA] focus:border-transparent text-sm"
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
          />
        </div>

        {/* Dropdown for Date Filter */}
        <div className="w-auto ml-2 ">
          <select
            onChange={(e) => setFilterDate(e.target.value)}
            value={filterDate}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9900FA] focus:border-transparent text-sm"
          >
            <option value="All" className="text-sm text-[#222424]">All</option>
            <option value="Latest" className="text-sm text-[#222424]">Latest</option>
            <option value="Last Week" className="text-sm text-[#222424]">Last Week</option>
            <option value="Last Month" className="text-sm text-[#222424]">Last Month</option>
          </select>
        </div>
      </motion.div>


      {/* Job Listings */}
      <motion.div
        className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
      >
        {filteredJobs.length === 0 ? (
          <div className="col-span-3 text-center text-xl font-semibold text-gray-600">
            No jobs available
          </div>
        ) : (
          filteredJobs.map((job) => (
            <motion.div
              key={job.id}
              className="service-card bg-white text-[#222424] p-8 rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl hover:bg-[#f3f3f3] cursor-pointer"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.9 }}
            >
              <Briefcase className="text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-4">{job.title}</h3>
              <p className="text-lg opacity-80">{job.description}</p>
              <div className="text-right">

              <button
                onClick={() => openModal(job)}
                 className="px-3 py-1 bg-[#9900FA] text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-all"
              >
                View Details
              </button>
              </div>
             
            </motion.div>
          ))
        )}
      </motion.div>

      {/* Modal */}
      {isModalOpen && selectedJob && (
        <div className="fixed inset-0 flex items-center justify-center z-50  bg-opacity-50 backdrop-blur">
          <motion.div
            className="bg-white p-8 rounded-lg shadow-xl w-11/12 md:w-1/2 min-w-[300px] min-h-[250px]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">{selectedJob.title}</h2>
              <button onClick={closeModal} className="text-xl text-gray-600 hover:text-gray-900">
                &times;
              </button>
            </div>
            <p className="text-lg mb-4">{selectedJob.description}</p>
            <div className="text-right">
              <button   className="px-3 py-1 bg-[#9900FA] text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-all">
                Apply Now
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
