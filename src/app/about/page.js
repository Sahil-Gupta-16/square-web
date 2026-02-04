"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Target, Rocket, Award } from "lucide-react";

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
                        Our Story: Building for the <span className="text-primary">Glass Industry</span>
                    </motion.h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Square Glass started with a simple observation: glass wholesalers were struggling
                        with complex unit conversions and generic accounting tools. We decided to change that.
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

                <div className="bg-primary rounded-[3rem] p-8 md:p-16 text-white grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Designed by Developers, Built for Wholesale</h2>
                        <p className="text-xl text-primary-foreground/90 leading-relaxed mb-8">
                            We spent months visiting glass shops and warehouses to understand the real-world
                            challenges of inventory management. Every feature in Square Glass is a direct
                            response to those conversations.
                        </p>
                        <div className="flex gap-4">
                            <div className="text-center bg-white/10 backdrop-blur-md p-4 rounded-2xl min-w-[100px]">
                                <div className="text-3xl font-bold">500+</div>
                                <div className="text-xs text-primary-foreground/70 uppercase tracking-wider">Shops</div>
                            </div>
                            <div className="text-center bg-white/10 backdrop-blur-md p-4 rounded-2xl min-w-[100px]">
                                <div className="text-3xl font-bold">1M+</div>
                                <div className="text-xs text-primary-foreground/70 uppercase tracking-wider">Invoices</div>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="aspect-square bg-white rounded-3xl overflow-hidden shadow-2xl">
                            {/* Founder Image Placeholder */}
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                                <Users size={100} className="text-gray-300" />
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-black/60 backdrop-blur-md">
                                <p className="text-white font-bold text-xl">Founder's Note</p>
                                <p className="text-gray-300 text-sm italic">"Our goal is to bring the efficiency of modern tech to every corner of the traditional wholesale market."</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
