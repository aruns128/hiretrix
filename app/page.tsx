import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="bg-[#0f0f3e] text-white relative overflow-hidden grow">
      <div className="w-full max-w-screen-xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center md:items-stretch justify-between min-h-[calc(100vh-64px-64px)]">

        {/* Left Text Section */}
        <div className="max-w-xl z-10 w-full md:w-1/2 mb-10 md:mb-0 flex flex-col justify-center" style={{ animationDelay: "0.2s", animationFillMode: "both" }}>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 fade-in-from-left">
            BEST INNOVATIVE <br /> SOLUTION
          </h1>
          <p
            className="text-gray-300 mb-8 text-lg fade-in-from-left"
            style={{ animationDelay: "0.2s", animationFillMode: "both" }}
          >
            YOUR MOST TRUSTED TECHNOLOGY PARTNERS
          </p>
          <div className="flex items-center gap-6 fade-in-from-left" style={{ animationDelay: "0.2s", animationFillMode: "both" }}>
            <button className="group bg-gradient-to-r from-[#ed12b7] via-[#A020F0] to-[#9900FA] hover:opacity-90 transition-all duration-300 text-white px-6 py-3 rounded-md text-sm font-medium flex items-center gap-2 overflow-hidden">
              Explore More
              <span className="inline-block transform transition-transform duration-300 group-hover:translate-x-2">
                {'>'}
              </span>
            </button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="w-full md:w-1/2 flex justify-center items-center fade-in-from-right" style={{ animationDelay: "0.2s", animationFillMode: "both" }}>
          <div className="relative w-full h-64 sm:h-80 md:h-[400px] lg:h-[500px] xl:h-[600px]">
            <Image
              src="/landing_page_1.png"
              alt="Hero Image"
              fill
              className="object-contain rounded-lg"
              priority
            />
          </div>
        </div>



      </div>
    </section>
  );
};

export default HeroSection;
