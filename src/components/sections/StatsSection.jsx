"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";

const Counter = ({ value, suffix = "", prefix = "" }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    const spring = useSpring(0, {
        mass: 1,
        stiffness: 100,
        damping: 30,
    });

    const display = useTransform(spring, (current) =>
        prefix + Math.round(current).toLocaleString() + suffix
    );

    useEffect(() => {
        if (inView) {
            spring.set(value);
        }
    }, [inView, value, spring]);

    return <motion.span ref={ref}>{display}</motion.span>;
};

const StatsSection = () => {
    const stats = [
        { label: "Hours Saved Daily", value: 3, suffix: "+" },
        { label: "Fewer Manual Errors", value: 90, suffix: "%" },
        { label: "Faster Invoicing", value: 5, suffix: "x" },
        { label: "Active Users", value: 500, suffix: "+" },
    ];

    return (
        <section className="py-20 bg-primary text-white overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-4xl md:text-6xl font-extrabold mb-2">
                                <Counter value={stat.value} suffix={stat.suffix} />
                            </div>
                            <div className="text-primary-foreground/80 font-medium text-sm md:text-base uppercase tracking-wider">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-1/2 h-full bg-white/20 skew-x-12 translate-x-full transition-transform duration-1000" />
            </div>
        </section>
    );
};

export default StatsSection;
