"use client";

import LocationsSection from "@/components/Locations";
import StatsSection from "@/components/Stats";
import WhoWeAreSection from "@/components/WhoWeAre";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();

  const handleExploreClick = () => {
    router.push("/services/hr");
  };

  return (
    <>
    <section
      className="relative overflow-hidden grow bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/hero_bg.jpeg')" }}
    >
      <div className="absolute inset-0 bg-linear-to-r from-[#1c41fd]/75 to-[#ffffff00]/100 z-0" />
      <div className="relative z-10 w-full max-w-screen-xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between min-h-[calc(100vh-64px-64px)]">
        <div className="max-w-xl w-full md:w-1/2 mb-10 md:mb-0 flex flex-col justify-center text-white">
        <h1
            className="text-4xl md:text-5xl font-bold leading-tight mb-4 fade-in-from-bottom"
            style={{ animationDelay: "0.1s", animationFillMode: "both" }}
          >
            BEST INNOVATIVE <br /> SOLUTION
          </h1>

          <p className="text-gray-200 mb-8 text-lg fade-in-from-bottom font-semibold"  style={{ animationDelay: "0.2s", animationFillMode: "both" }}>
            YOUR MOST TRUSTED TECHNOLOGY PARTNERS
          </p>
          <div className="flex items-center gap-4 fade-in-from-bottom" style={{ animationDelay: "0.3s", animationFillMode: "both" }}>
            <button
              onClick={handleExploreClick}
              className="group bg-gradient-to-r from-[#0127fa] to-[#c309ec] hover:from-[#c309ec] hover:to-[#0127fa] text-white font-semibold px-7 py-3.5 rounded-[10px] shadow-[0px_3px_10px_rgba(75,75,75,0.36)] border-none transition-all duration-500"
            >
              Explore More{" "}
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-2 ml-2">
                &gt;
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
    <WhoWeAreSection/>
    <StatsSection/>
    <LocationsSection/>
    </>
  );
};

export default Hero;
