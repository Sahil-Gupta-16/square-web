"use client";

import React from "react";
import { motion } from "framer-motion";

export const AnimatedGrid = () => {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `linear-gradient(to right, #80808012 1px, transparent 1px), linear-gradient(to bottom, #80808012 1px, transparent 1px)`,
                    backgroundSize: "40px 40px",
                }}
            />

            {/* Animated dots or squares */}
            <div className="absolute inset-0">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-primary/20 rounded-full"
                        initial={{
                            x: Math.random() * 100 + "%",
                            y: Math.random() * 100 + "%",
                            opacity: 0.1
                        }}
                        animate={{
                            y: [null, Math.random() * 100 + "%"],
                            opacity: [0.1, 0.4, 0.1]
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />
                ))}
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-white/50 to-white pt-20" />
        </div>
    );
};
