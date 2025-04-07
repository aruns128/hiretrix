"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";

const WhoWeAreSection = () => {
    const [experience, setExperience] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const router = useRouter();

    // Observer for scroll into view
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                }
            },
            {
                root: null,
                rootMargin: "0px",
                threshold: 0.2, // Lower threshold for mobile
            }
        );

        const currentRef = sectionRef.current;

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [hasAnimated]);

    // Count up animation
    useEffect(() => {
        if (hasAnimated) {
            let current = 0;
            const interval = setInterval(() => {
                current += 1;
                setExperience(current);
                if (current >= 20) clearInterval(interval);
            }, 50);
        }
    }, [hasAnimated]);

    return (
        <section className="bg-[#f4fbfd] py-24 px-4" ref={sectionRef} id="who-we-are">
            <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center gap-14 md:gap-24">
                {/* Left side */}
                <div className="relative w-full md:w-1/2 flex justify-center items-start md:items-center fade-in-from-bottom" style={{ animationDelay: "0.2s", animationFillMode: "both" }}>
                    <div className="absolute bottom-[-40px] right-[-10px] bg-gradient-to-r from-[#0127fa] to-[#c309ec] hover:from-[#c309ec] hover:to-[#0127fa] text-white text-center px-6 py-4 rounded-xl text-sm font-semibold shadow-xl z-50">
                        <div className="text-3xl font-bold">{experience}+</div>
                        <div className="text-sm">Years Experience</div>
                    </div>

                    <div
                        className="relative z-10 bg-gradient-to-r from-[#4f46e5] to-[#9900FA] p-[6px] rounded-xl"
                        style={{ boxShadow: "10px 0px 20px rgba(0, 0, 0, 0.2)" }}
                    >
                        <div className="rounded-lg overflow-hidden">
                            <Image
                                src="/business.webp"
                                alt="Team"
                                width={520}
                                height={350}
                                className="object-cover w-full h-auto rounded-lg"
                            />
                        </div>
                    </div>

                    {/* Overlapping smaller image */}
                    <div
                        className="absolute bottom-[-40px] left-[-30px] bg-gradient-to-r from-[#4f46e5] to-[#7c3aed] p-[4px] rounded-xl z-20"
                        style={{ boxShadow: "-10px 0px 20px rgba(0, 0, 0, 0.2)" }}
                    >
                        <div className="bg-white rounded-lg overflow-hidden">
                            <Image
                                src="/office.jpg"
                                alt="Office"
                                width={220}
                                height={190}
                                className="object-cover max-sm:h-[120px] max-sm:w-[140px] rounded-lg"
                            />
                        </div>
                    </div>
                </div>

                {/* Right side */}
                <div className="w-full md:w-1/2">
                    <h4 className="text-lg font-semibold mb-3 bg-gradient-to-r from-[#0127fa] to-[#c309ec] bg-clip-text text-transparent w-fit fade-in-from-bottom">
                        Who We Are!
                    </h4>

                    <h2 className="text-4xl font-bold leading-tight mb-5 text-gray-900 fade-in-from-bottom">
                        Our reliable efficient <br />
                        recruitment agency
                    </h2>
                    <p className="text-gray-600 mb-6 text-base leading-relaxed fade-in-from-bottom">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                        has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                        took a galley of type and scrambled it to make a type
                    </p>

                    <ul className="space-y-4 mb-10 text-[15px] text-gray-700 fade-in-from-bottom">
                        {[
                            "There are many variations of passages of Lorem Ipsum available",
                            "All the Lorem Ipsum generators on the Internet tend to repeat",
                            "The standard chunk of Lorem Ipsum used since the 1500s",
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                                <CheckCircle className="text-blue-600 mt-[2px]" size={20} />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="flex">
                        <button
                            onClick={() => router.push("/about")}
                            className="bg-gradient-to-r from-[#0127fa] to-[#c309ec] hover:from-[#c309ec] hover:to-[#0127fa] text-white px-6 py-2.5 rounded-md font-medium shadow-md hover:opacity-90 transition fade-in-from-bottom"
                        >
                            Read More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhoWeAreSection;
