"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Rocket, Bell, ArrowLeft, MessageCircle } from "lucide-react";
import Link from "next/link";
import { AnimatedGrid } from "@/components/aceternity/AnimatedGrid";

const ComingSoonPage = () => {
    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-20">
            <AnimatedGrid />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-8">
                        <Rocket className="w-4 h-4 animate-bounce" />
                        <span>PREPARING FOR TAKEOFF</span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-5xl md:text-8xl font-extrabold text-gray-900 mb-8 tracking-tight">
                        कारोbaar is <br />
                        <span className="text-primary italic">Coming Soon</span>
                    </h1>

                    {/* Subheadline */}
                    <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
                        We're putting the final touches on the most powerful accounting tool
                        for wholesalers. Get ready to transform your business.
                    </p>

                    {/* Progress Visual */}
                    <div className="relative w-full max-w-md mx-auto h-2 bg-gray-100 rounded-full mb-16 overflow-hidden">
                        <motion.div
                            className="absolute inset-y-0 left-0 bg-primary"
                            initial={{ width: "0%" }}
                            animate={{ width: "85%" }}
                            transition={{ duration: 2, delay: 0.5, ease: "circOut" }}
                        />
                        <div className="absolute -right-1 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-400">85% Done</div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <Link href="/contact">
                            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-xl h-16 px-10 rounded-2xl shadow-2xl shadow-primary/20 gap-3 font-bold">
                                <Bell className="w-6 h-6" />
                                Notify Me on Launch
                            </Button>
                        </Link>

                        <Link href="/">
                            <Button variant="outline" size="lg" className="text-xl h-16 px-10 rounded-2xl border-2 hover:bg-gray-50 gap-3 font-bold">
                                <ArrowLeft className="w-6 h-6" />
                                Back to Home
                            </Button>
                        </Link>
                    </div>

                    {/* Footer Support */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                        className="mt-20 pt-12 border-t border-gray-100"
                    >
                        <p className="text-gray-500 font-medium mb-4">Have questions in the meantime?</p>
                        <Link href="https://wa.me/918303807051" target="_blank" className="inline-flex items-center gap-2 text-green-600 font-bold hover:text-green-700 transition-colors">
                            <MessageCircle className="w-5 h-5" />
                            Chat with us on WhatsApp
                        </Link>
                    </motion.div>
                </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/5 blur-[100px] rounded-full animate-pulse" />
            <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-secondary/5 blur-[100px] rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
    );
};

export default ComingSoonPage;
