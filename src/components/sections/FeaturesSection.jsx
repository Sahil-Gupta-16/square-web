"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Ruler,
    Layers,
    FileText,
    BarChart3,
    Smartphone,
    Cpu,
    CheckCircle2
} from "lucide-react";
import { PolarGrid } from "@/components/aceternity/PolarGrid";

const featureList = [
    {
        title: "Custom Unit System",
        description: "Built-in support for Master Units (1/16 inch). No more manual conversions needed.",
        icon: Ruler,
        color: "bg-blue-500",
    },
    {
        title: "Multi-Category Support",
        description: "Manage Glass, Aluminum, Hardware, and more with specialized input fields.",
        icon: Layers,
        color: "bg-green-500",
    },
    {
        title: "Smart GST Invoicing",
        description: "Generate professional GST compliant invoices in seconds. Mobile-ready PDF export.",
        icon: FileText,
        color: "bg-purple-500",
    },
    {
        title: "Real-time Tracking",
        description: "Monitor stock levels across categories. Automatic deduction on sales.",
        icon: BarChart3,
        color: "bg-orange-500",
    },
    {
        title: "Mobile-First Design",
        description: "Optimized for shop floor use. Fast, responsive, and works flawlessly on any phone.",
        icon: Smartphone,
        color: "bg-red-500",
    },
    {
        title: "Advanced Analytics",
        description: "Get insights into your best-selling products and monthly revenue growth.",
        icon: Cpu,
        color: "bg-teal-500",
    },
];

const FeaturesSection = () => {
    return (
        <section id="features" className="py-24 relative overflow-hidden bg-gray-50/50">
            <PolarGrid />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6"
                    >
                        <CheckCircle2 className="w-4 h-4" />
                        <span>EXCLUSIVELY FOR GLASS WHOLESALERS</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-gray-900 mb-4"
                    >
                        Everything you need to scale
                    </motion.h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Experience the power of a tool that actually speaks your language.
                        From master units to GST, we've got you covered.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featureList.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg shadow-gray-200/20 group transition-all duration-300"
                        >
                            <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-6 text-white shadow-lg ${feature.color}/30 group-hover:rotate-6 transition-transform`}>
                                <feature.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
