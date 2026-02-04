"use client";

import React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

const DemoSection = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-gray-900 mb-4"
                    >
                        See Square Glass in Action
                    </motion.h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Experience the simplicity of modern accounting.
                        Watch how easy it is to manage your glass business from your phone.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative max-w-4xl mx-auto rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/20 aspect-video bg-gray-900 group cursor-pointer"
                >
                    {/* Placeholder for Video */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-gray-900 via-gray-900/40 to-primary/20 flex flex-col items-center justify-center p-12 text-center">
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-8 group-hover:bg-primary group-hover:border-primary transition-all duration-300"
                        >
                            <Play className="w-8 h-8 md:w-12 md:h-12 text-white fill-current" />
                        </motion.div>
                        <h3 className="text-white text-2xl md:text-3xl font-bold mb-4 opacity-80 group-hover:opacity-100 transition-opacity">
                            Watch 60s App Tour
                        </h3>
                        <p className="text-gray-400 max-w-md mx-auto">
                            Learn how to create invoices, track stock, and manage units in under a minute.
                        </p>
                    </div>

                    {/* Decorative overlay */}
                    <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/0 transition-colors pointer-events-none" />
                </motion.div>
            </div>
        </section>
    );
};

export default DemoSection;
