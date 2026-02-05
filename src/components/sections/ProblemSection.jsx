"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Clock, Calculator, AlertTriangle } from "lucide-react";

const ProblemSection = () => {
    const problems = [
        {
            title: "Daily Time Waste",
            description: "Manual calculations of glass dimensions and master units waste 3+ hours every single day.",
            icon: Clock,
            color: "bg-orange-100 text-orange-600",
        },
        {
            title: "Unit Complexity",
            description: "Generic accounting apps don't understand SUT or master units (1/16 inch), leading to massive confusion.",
            icon: Calculator,
            color: "bg-blue-100 text-primary",
        },
        {
            title: "Costly Errors",
            description: "Inventory miscounts and invoicing errors cost wholesalers thousands of rupees every month.",
            icon: AlertTriangle,
            color: "bg-red-100 text-red-600",
        },
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-gray-900 mb-4"
                    >
                        Stop Losing Money to Old Methods
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-600 max-w-3xl mx-auto"
                    >
                        The wholesale industry has unique needs that standard software simply ignores.
                        We built कारोbaar to solve these specific headaches.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {problems.map((problem, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="cursor-pointer"
                        >
                            <Card className="h-full border-none shadow-xl shadow-gray-100/50 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300">
                                <CardHeader>
                                    <div className={`w-14 h-14 rounded-2xl ${problem.color} flex items-center justify-center mb-4`}>
                                        <problem.icon className="w-7 h-7" />
                                    </div>
                                    <CardTitle className="text-2xl font-bold">{problem.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 leading-relaxed text-lg">
                                        {problem.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Decorative background shape */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary/5 blur-[100px] rounded-full -ml-32" />
        </section>
    );
};

export default ProblemSection;
