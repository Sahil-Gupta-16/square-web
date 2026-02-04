"use client";

import React from "react";
import { motion } from "framer-motion";

export const PolarGrid = () => {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-20">
            <div className="absolute inset-x-0 top-0 h-[500px] bg-gradient-to-b from-primary/10 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute border border-primary/30 rounded-full"
                        initial={{ width: 0, height: 0, opacity: 0 }}
                        animate={{
                            width: (i + 1) * 200,
                            height: (i + 1) * 200,
                            opacity: 0.1
                        }}
                        transition={{
                            duration: 2,
                            delay: i * 0.2,
                            ease: "easeOut"
                        }}
                    />
                ))}
            </div>
        </div>
    );
};
