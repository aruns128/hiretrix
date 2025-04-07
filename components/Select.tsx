"use client";
import { useState } from "react";
import { ChevronDown, Check } from "lucide-react";

const jobTypes = ["All", "Full Time", "Part Time", "Contract", "Freelance"];

export default function GradientSelect({ selected, setSelected }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full">
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-2 bg-gradient-to-r from-[#0127fa] to-[#c309ec] text-white rounded-xl shadow-lg font-medium transition-all duration-300 focus:outline-none"
      >
        {selected}
        <ChevronDown
          className={`w-4 h-4 transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown Options */}
      {isOpen && (
        <div className="absolute mt-2 w-full bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 z-20">
          {jobTypes.map((type, i) => (
            <div
              key={i}
              onClick={() => {
                setSelected(type);
                setIsOpen(false);
              }}
              className={`px-4 py-2 text-sm cursor-pointer flex justify-between items-center hover:bg-gradient-to-r from-[#0127fa] to-[#c309ec] hover:text-white ${
                selected === type
                  ? "bg-gradient-to-r from-[#0127fa] to-[#c309ec] text-white"
                  : "text-gray-800"
              }`}
            >
              {type}
              {selected === type && <Check size={16} />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
