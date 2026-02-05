"use client";

import React from "react";
import { motion } from "framer-motion";
import { UserPlus, Settings, TrendingUp } from "lucide-react";

const steps = [
    {
        title: "Join Early Access",
        description: "Be the first to know when कारोbaar launches in your region and get exclusive early-bird benefits.",
        icon: UserPlus,
        color: "bg-blue-500",
    },
    {
        title: "Free Onboarding",
        description: "Our experts will help you digitize your inventory and configure master units for your business.",
        icon: Settings,
        color: "bg-purple-500",
    },
    {
        title: "Scale Seamlessly",
        description: "Switch from paper registers to error-free digital accounting and watch your efficiency grow.",
        icon: TrendingUp,
        color: "bg-green-500",
    },
];

const ProcessSection = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-gray-900 mb-4"
                    >
                        Your Path to Digital Success
                    </motion.h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        We're making the transition to digital accounting as smooth as possible for every wholesaler.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                    {/* Connection Line (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 z-0" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative z-10 flex flex-col items-center text-center group cursor-pointer"
                        >
                            <div className={`w-20 h-20 rounded-[2rem] ${step.color} flex items-center justify-center text-white mb-6 shadow-xl shadow-gray-200 transition-transform group-hover:scale-110 duration-300`}>
                                <step.icon className="w-10 h-10" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;
