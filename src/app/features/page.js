"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Ruler,
    Layers,
    FileText,
    BarChart3,
    Smartphone,
    ShieldCheck,
    CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const detailedFeatures = [
    {
        title: "Revolutionary Unit System",
        description: "Our proprietary calculation engine handles Master Units (1/16 inch) natively. No more rounding errors or manual conversions. Just enter the dimensions and the app does the rest.",
        icon: Ruler,
        color: "bg-blue-500",
        details: ["Native 1/16\" support", "Automatic SUT calculation", "Imperial & Metric switching"],
    },
    {
        title: "Multi-Category Inventory",
        description: "Whether you're selling float glass, mirror, aluminum sections, or hardware fittings, Square Glass handles it all with specialized templates for each category.",
        icon: Layers,
        color: "bg-green-500",
        details: ["Glass & Mirror", "Aluminum Sections", "Hardware Fittings", "Custom Categories"],
    },
    {
        title: "GST-Ready Billing",
        description: "Generate beautiful, professional invoices that are fully compliant with Indian GST laws. Export as PDF and share directly via WhatsApp with one tap.",
        icon: FileText,
        color: "bg-purple-500",
        details: ["Instant PDF Generation", "WhatsApp Sharing", "Automatic Tax Calculation"],
    },
    {
        title: "Real-time Stock Management",
        description: "Never run out of stock again. Get instant alerts when your inventory levels are low. Track movements across multiple storage locations.",
        icon: BarChart3,
        color: "bg-orange-500",
        details: ["Low Stock Alerts", "In/Out History", "Multi-Warehouse Support"],
    },
];

const FeaturesPage = () => {
    return (
        <div className="pt-32 pb-24 bg-white min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-24">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6"
                    >
                        Powerful Features for <span className="text-primary">Modern Wholesalers</span>
                    </motion.h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Every tool in Square Glass is meticulously designed to solve the real-world
                        bottlenecks in the glass and aluminum industry.
                    </p>
                </div>

                <div className="space-y-32">
                    {detailedFeatures.map((feature, index) => (
                        <div key={index} className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-16 items-center`}>
                            <motion.div
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="flex-1"
                            >
                                <div className={`w-16 h-16 rounded-[2rem] ${feature.color} flex items-center justify-center text-white mb-8 shadow-2xl`}>
                                    <feature.icon className="w-8 h-8" />
                                </div>
                                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">{feature.title}</h2>
                                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                    {feature.description}
                                </p>
                                <ul className="space-y-4">
                                    {feature.details.map((detail, dIndex) => (
                                        <li key={dIndex} className="flex items-center gap-3 text-lg font-medium text-gray-700">
                                            <CheckCircle2 className="text-primary w-6 h-6" />
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="flex-1 w-full"
                            >
                                <div className="aspect-[4/3] bg-gray-50 rounded-[3rem] border border-gray-100 shadow-inner flex items-center justify-center relative group overflow-hidden">
                                    <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                                    <feature.icon className="w-32 h-32 text-primary opacity-20 group-hover:scale-110 transition-transform duration-500" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="bg-white/80 backdrop-blur-md px-8 py-4 rounded-2xl shadow-xl border border-white/50">
                                            <span className="font-bold text-gray-900">Feature Demo Loading...</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-32 p-12 md:p-24 rounded-[4rem] bg-gray-900 text-white text-center"
                >
                    <h2 className="text-3xl md:text-6xl font-extrabold mb-8">
                        Experience the difference today.
                    </h2>
                    <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                        Take the first step towards a more efficient, error-free, and profitable
                        glass business. Download the app now.
                    </p>
                    <div className="flex justify-center">
                        <Link href="https://play.google.com/store/apps/details?id=com.squareglass.app" target="_blank">
                            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-xl h-16 px-12 rounded-2xl font-bold">
                                Go to Play Store
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default FeaturesPage;
