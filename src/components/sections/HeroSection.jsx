"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play, Download, ArrowRight } from "lucide-react";
import { AnimatedGrid } from "@/components/aceternity/AnimatedGrid";
import { TypingAnimation } from "@/components/aceternity/TypingAnimation";

const HeroSection = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
            <AnimatedGrid />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div className="text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <TypingAnimation
                                text="Modern Accounting for Glass Wholesalers"
                                className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6"
                            />

                            <p className="text-xl md:text-2xl text-gray-600 mb-8 font-medium">
                                Master Units • GST Invoices • Real-time Inventory
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <Button
                                    size="lg"
                                    className="bg-primary hover:bg-primary/90 text-white text-lg h-14 px-8 rounded-xl shadow-lg shadow-primary/25 gap-2 font-bold"
                                    onClick={() => window.open("https://play.google.com/store/apps/details?id=com.squareglass.app", "_blank")}
                                >
                                    <Download className="w-5 h-5" />
                                    Download Android App
                                </Button>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="text-lg h-14 px-8 rounded-xl border-2 hover:bg-gray-50 gap-2 font-semibold"
                                >
                                    <Play className="w-5 h-5 fill-current" />
                                    Watch Demo
                                </Button>
                            </div>

                            <motion.div
                                className="mt-8 flex items-center justify-center lg:justify-start gap-4 text-gray-500"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1, duration: 1 }}
                            >
                                <div className="flex -space-x-2">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200" />
                                    ))}
                                </div>
                                <span className="text-sm font-medium">Trusted by 500+ Wholesalers in India</span>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Phone Mockup */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, x: 50 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative flex justify-center lg:justify-end"
                    >
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="relative w-64 md:w-80 h-[500px] md:h-[600px] bg-gray-900 rounded-[3rem] border-8 border-gray-800 shadow-2xl overflow-hidden"
                        >
                            {/* Screen Content Placeholder */}
                            <div className="absolute inset-0 bg-primary/5 flex flex-col items-center justify-center p-6 text-center">
                                <div className="w-12 h-12 bg-primary rounded-xl mb-4 flex items-center justify-center">
                                    <span className="text-white font-bold">SQ</span>
                                </div>
                                <h3 className="text-gray-900 font-bold mb-2 text-xl">Square Glass App</h3>
                                <p className="text-gray-500 text-sm">GST Invoice Generated Successfully!</p>
                                <div className="w-full h-40 bg-white rounded-lg mt-6 border border-gray-100 shadow-sm" />
                                <div className="w-full h-20 bg-primary/10 rounded-lg mt-4" />
                            </div>

                            {/* Speaker & Camera */}
                            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-4 bg-gray-800 rounded-full" />
                        </motion.div>

                        {/* Decorative Elements */}
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/10 blur-[100px] rounded-full" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
