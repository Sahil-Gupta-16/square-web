"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Target, Rocket, Award, Sparkles, Quote, Heart } from "lucide-react";

const AboutPage = () => {
    const values = [
        {
            title: "Mission",
            description: "To empower every glass wholesaler in India with modern, easy-to-use digital tools that simplify their daily operations.",
            icon: Target,
            color: "bg-blue-500",
        },
        {
            title: "Vision",
            description: "ToBe the gold standard for accounting and inventory management software in the traditional manufacturing and wholesale sectors.",
            icon: Rocket,
            color: "bg-purple-500",
        },
        {
            title: "Our Team",
            description: "Founded by computer science students who understand both the power of technology and the unique needs of local businesses.",
            icon: Users,
            color: "bg-orange-500",
        },
        {
            title: "Quality First",
            description: "We believe in building software that is fast, reliable, and secure. Performance is at the heart of everything we do.",
            icon: Award,
            color: "bg-green-500",
        },
    ];

    return (
        <div className="pt-32 pb-24 bg-white min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6"
                    >
                        Our Story: Building for the <span className="text-primary">Whole Industry</span>
                    </motion.h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Karobaar ERP started with a simple observation: wholesalers were struggling
                        with complex calculations and generic accounting tools. We decided to change that.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
                    {values.map((value, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300"
                        >
                            <div className={`w-14 h-14 rounded-2xl ${value.color} flex items-center justify-center text-white mb-6 shadow-lg shadow-gray-200`}>
                                <value.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {value.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="bg-gradient-to-br from-primary to-blue-900 rounded-[3rem] p-8 md:p-16 text-white grid grid-cols-1 lg:grid-cols-12 gap-12 items-center shadow-2xl shadow-primary/20 relative overflow-hidden">
                    {/* Decorative Background Blobs */}
                    <div className="absolute -top-12 -right-12 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

                    {/* Left content (Founder's Note) */}
                    <div className="lg:col-span-7 space-y-6 relative z-10">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-blue-200 text-sm font-semibold border border-white/10">
                            <Sparkles className="w-4 h-4 text-blue-300" />
                            <span>Founder's Note</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
                            Designed by Developers,<br />
                            <span className="text-blue-300">Built for Wholesalers</span>
                        </h2>
                        <div className="space-y-4 text-lg text-primary-foreground/90 leading-relaxed font-light">
                            <p>
                                As developers, we realized that traditional wholesale businesses were left behind by modern software. We saw shop owners struggling with manual registers and rigid, outdated ERPs that didn't fit their unique workflows.
                            </p>
                            <p>
                                That's why we built Karobaar ERP—not just as an accounting tool, but as a growth partner. We designed it from the ground up to be simple, lightning-fast, and mobile-first, ensuring you can manage your entire business seamlessly, right from the palm of your hand.
                            </p>
                        </div>

                        {/* Signature Block */}
                        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-xl font-bold font-serif italic text-blue-200 border border-white/20">
                                    VY
                                </div>
                                <div>
                                    <h4 className="font-bold text-xl text-white">Vinayak Yadav</h4>
                                    <p className="text-xs text-blue-300 uppercase tracking-widest font-semibold">Founder, Karobaar ERP</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="text-center bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/10 min-w-[100px]">
                                    <div className="text-2xl font-bold">500+</div>
                                    <div className="text-[10px] text-blue-200 uppercase tracking-wider font-semibold">Shops Scaled</div>
                                </div>
                                <div className="text-center bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/10 min-w-[100px]">
                                    <div className="text-2xl font-bold">1M+</div>
                                    <div className="text-[10px] text-blue-200 uppercase tracking-wider font-semibold">Invoices Saved</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right column (Premium Vision Card) */}
                    <div className="lg:col-span-5 relative z-10 w-full flex justify-center">
                        <div className="relative w-full max-w-sm">
                            {/* Soft light reflection backplate */}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-[2.5rem] blur-xl opacity-30 transform rotate-3" />
                            
                            <div className="relative bg-white/5 backdrop-blur-xl border border-white/15 p-8 rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col justify-between min-h-[350px]">
                                {/* Quote mark watermark */}
                                <Quote className="absolute -top-4 -right-4 w-32 h-32 text-white/5 rotate-12 pointer-events-none" />

                                <div className="space-y-6">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-400" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                        <div className="w-3 h-3 rounded-full bg-green-400" />
                                    </div>

                                    <div className="relative">
                                        <Quote className="w-8 h-8 text-blue-300/40 mb-3" />
                                        <p className="text-blue-50/90 italic leading-relaxed text-base font-light">
                                            "Our goal is to bring the power of modern technology to every corner of the traditional wholesale market. We spent months standing in noisy warehouses to understand the real-world challenges, making sure our tools solve actual problems."
                                        </p>
                                    </div>
                                </div>

                                <div className="pt-6 mt-6 border-t border-white/10 flex flex-wrap gap-2">
                                    <span className="text-xs bg-white/10 text-blue-200 px-3 py-1.5 rounded-full font-semibold border border-white/5">
                                        🇮🇳 100% Indian-Built
                                    </span>
                                    <span className="text-xs bg-white/10 text-blue-200 px-3 py-1.5 rounded-full font-semibold border border-white/5">
                                        💻 Developer-First
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
