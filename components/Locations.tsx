"use client";

import Image from "next/image";

const locations = [
    {
        name: "India",
        code: "location_1.webp",
        description: "Contrary to popular belief, Lorem Ipsum is not simply random",
    },
    {
        name: "United States",
        code: "location_2.webp",
        description: "Contrary to popular belief, Lorem Ipsum is not simply random",
    },
    {
        name: "Canada",
        code: "location_3.webp",
        description: "Contrary to popular belief, Lorem Ipsum is not simply random",
    },


];

const LocationsSection = () => {
    return (
        <section className="w-full bg-[#f4fbff] py-16 px-4">
            <div className="max-w-6xl mx-auto text-center">
                <div className="text-3xl font-semibold mb-3 bg-gradient-to-r from-[#0127fa] to-[#c309ec] bg-clip-text text-transparent fade-in-from-bottom text-center w-full">We Serve Overseas</div>
                <h2 className="text-3xl md:text-4xl font-bold mb-10 fade-in-from-bottom">We Are Service Worldwide</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 fade-in-from-bottom">
                    {locations.map((location, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105 duration-300"
                        >
                            <img
                                src={`/${location.code}`}
                                alt={location.name}
                                className="w-full object-fit"
                                loading="lazy"
                            />

                            <div className="p-4">
                                <h3 className="text-lg font-bold mb-2">{location.name}</h3>
                                <p className="text-gray-600 text-sm">{location.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LocationsSection;
