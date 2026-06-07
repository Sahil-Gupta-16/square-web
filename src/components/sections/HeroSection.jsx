"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play, Download, ArrowRight } from "lucide-react";
import { AnimatedGrid } from "@/components/aceternity/AnimatedGrid";
import { TypingAnimation } from "@/components/aceternity/TypingAnimation";
import { APP_LINKS } from "@/constants/links";

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
                                text="Modern Accounting for Wholesalers with Karobaar ERP"
                                className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6"
                            />

                            <p className="text-xl md:text-2xl text-gray-600 mb-8 font-medium">
                                Master Units • Professional Invoicing • Real-time Inventory
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <Button
                                    size="lg"
                                    className="bg-primary hover:bg-primary/90 text-white text-lg h-14 px-8 rounded-xl shadow-lg shadow-primary/25 gap-2 font-bold"
                                    onClick={() => window.open(APP_LINKS.PLAY_STORE, "_blank")}
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
                            className="relative w-64 md:w-80 h-125 md:h-150 bg-gray-900 rounded-[3rem] border-8 border-gray-800 shadow-2xl overflow-hidden"
                        >
                            {/* Screen Content Mockup */}
                            <div className="absolute inset-0 bg-gray-50 flex flex-col">
                                {/* App Header */}
                                <div className="bg-primary px-5 pt-12 pb-4 rounded-b-3xl shadow-lg relative z-10">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
                                                <span className="text-primary font-bold text-lg">KB</span>
                                            </div>
                                            <div>
                                                <h3 className="text-white font-bold text-lg leading-tight">Karobaar ERP</h3>
                                                <p className="text-primary-foreground/80 text-xs">Glass Wholesalers</p>
                                            </div>
                                        </div>
                                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" /></svg>
                                        </div>
                                    </div>
                                </div>

                                {/* Scrollable Body */}
                                <div className="flex-1 p-5 overflow-hidden flex flex-col gap-4">
                                    {/* Stats Row */}
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100">
                                            <p className="text-gray-500 text-xs font-medium mb-1">Today's Sales</p>
                                            <p className="text-gray-900 font-extrabold text-lg">₹ 45,200</p>
                                        </div>
                                        <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100">
                                            <p className="text-gray-500 text-xs font-medium mb-1">To Collect</p>
                                            <p className="text-red-500 font-extrabold text-lg">₹ 12,850</p>
                                        </div>
                                    </div>

                                    {/* Recent Invoice Card */}
                                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 relative overflow-hidden">
                                        <div className="absolute top-0 right-0 bg-green-100 text-green-700 text-[10px] px-3 py-1 font-bold rounded-bl-xl">PAID</div>
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold text-xs">RM</div>
                                            <div>
                                                <p className="text-gray-900 font-bold text-sm">Rahul Merchants</p>
                                                <p className="text-gray-400 text-xs">Inv #KB-1042</p>
                                            </div>
                                        </div>
                                        <div className="flex justify-between items-end mt-4 pt-3 border-t border-gray-50">
                                            <p className="text-gray-400 text-xs">12 items • Tax Included</p>
                                            <p className="text-gray-900 font-bold text-base">₹ 8,450</p>
                                        </div>
                                    </div>

                                    {/* Quick Actions */}
                                    <div className="mt-auto bg-gray-900 text-white rounded-2xl p-4 shadow-xl flex justify-between items-center">
                                        <div>
                                            <p className="font-bold text-sm mb-1">Create Invoice</p>
                                            <p className="text-gray-400 text-xs">Generate bills in 10s</p>
                                        </div>
                                        <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                                        </div>
                                    </div>
                                </div>
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
