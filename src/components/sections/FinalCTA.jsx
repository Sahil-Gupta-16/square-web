"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight, MessageSquare } from "lucide-react";
import Link from "next/link";

const FinalCTA = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background with brand colors */}
            <div className="absolute inset-0 bg-primary transform -skew-y-3 origin-right scale-110" />

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">
                        Ready to transform your glass business?
                    </h2>
                    <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 max-w-2xl mx-auto font-medium">
                        Join 500+ wholesalers who are saving time and reducing errors with Square Glass.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <Button
                            size="lg"
                            className="bg-white text-primary hover:bg-gray-100 text-xl h-16 px-10 rounded-2xl shadow-2xl shadow-black/20 gap-3 font-bold w-full sm:w-auto"
                            onClick={() => window.open("https://play.google.com/store/apps/details?id=com.squareglass.app", "_blank")}
                        >
                            <Download className="w-6 h-6" />
                            Get it on Play Store
                        </Button>

                        <Link href="/contact">
                            <Button
                                variant="outline"
                                size="lg"
                                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary text-xl h-16 px-10 rounded-2xl gap-3 font-bold w-full sm:w-auto transition-all duration-300"
                            >
                                <MessageSquare className="w-6 h-6" />
                                Contact Sales
                            </Button>
                        </Link>
                    </div>

                    <p className="mt-8 text-primary-foreground/70 text-sm font-medium tracking-wide border-t border-primary-foreground/20 pt-8 inline-block">
                        NO CREDIT CARD REQUIRED • FREE UPDATES • 24/7 SUPPORT
                    </p>
                </motion.div>
            </div>

            {/* Decorative Circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -ml-32 -mb-32" />
        </section>
    );
};

export default FinalCTA;
