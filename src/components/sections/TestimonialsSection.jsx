"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const testimonials = [
    {
        name: "Rajesh Kumar",
        role: "Owner, Rajesh Glass House",
        content: "Square Glass changed how we do business. The master unit system is a life safer. We save at least 2 hours every day on calculations.",
        location: "Delhi",
    },
    {
        name: "Amit Sharma",
        role: "Managing Director, Glass Pro India",
        content: "The GST invoicing is so simple that even my junior staff can generate professional bills now. Highly recommended for any wholesaler.",
        location: "Mumbai",
    },
    {
        name: "Priya Singh",
        role: "Founding Partner, Shine Aluminum",
        content: "Mobile-first design is what we needed. I can check our stock levels right from the shop floor. Very fast and easy to use.",
        location: "Gurgaon",
    },
];

const TestimonialsSection = () => {
    return (
        <section className="py-24 bg-gray-50/50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-gray-900 mb-4"
                    >
                        Trusted by Industry Leaders
                    </motion.h2>
                    <div className="flex justify-center gap-1 mb-8">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <Star key={i} className="w-6 h-6 fill-accent text-accent" />
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="h-full border-none shadow-xl shadow-gray-200/50 bg-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <Quote size={80} className="text-primary" />
                                </div>
                                <CardContent className="pt-10 pb-8 px-8">
                                    <p className="text-gray-700 italic text-lg leading-relaxed mb-8 relative z-10">
                                        "{t.content}"
                                    </p>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                                            {t.name.charAt(0)}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">{t.name}</h4>
                                            <p className="text-sm text-gray-500">{t.role} • {t.location}</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
