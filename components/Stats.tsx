"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
    { label: "Job Vacancy", value: 450, suffix: "+" },
    { label: "People Hired", value: 750, suffix: "+" },
    { label: "Satisfied User", value: 100, suffix: "%" },
    { label: "Expert Team", value: 45, suffix: "+" },
];

const StatsSection = () => {
    const [hasAnimated, setHasAnimated] = useState(false);
    const [counts, setCounts] = useState(stats.map(() => 0));
    const sectionRef = useRef<HTMLDivElement | null>(null);

    // Scroll observer
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                }
            },
            { threshold: 0.5 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [hasAnimated]);

    // Animate numbers
    useEffect(() => {
        if (hasAnimated) {
            const intervals = stats.map((stat, i) => {
                let current = 0;
                const step = Math.ceil(stat.value / 50);
                return setInterval(() => {
                    current += step;
                    if (current >= stat.value) {
                        current = stat.value;
                        clearInterval(intervals[i]);
                    }
                    setCounts(prev => {
                        const updated = [...prev];
                        updated[i] = current;
                        return updated;
                    });
                }, 30);
            });

            return () => intervals.forEach(clearInterval);
        }
    }, [hasAnimated]);

    return (
        <section
            ref={sectionRef}
            className="w-full py-12 bg-gradient-to-r from-blue-600 via-blue-500 to-fuchsia-600 text-white"
        >
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {stats.map((stat, idx) => (
                    <div key={idx} className={`${idx % 2 === 0 ? "fade-in-from-right" : "fade-in-from-left"}`}>
                        <h3 className="text-4xl font-bold">
                            {counts[idx]}
                            {stat.suffix}
                        </h3>
                        <p className="text-sm mt-1">{stat.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default StatsSection;
