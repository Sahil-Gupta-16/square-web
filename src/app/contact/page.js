"use client";

import React from "react";
import { motion } from "framer-motion";
import ContactForm from "@/components/forms/ContactForm";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactPage = () => {
    return (
        <div className="pt-32 pb-24 bg-gray-50/50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6">
                                Let's Build Something <span className="text-primary">Great Together</span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                                Whether you have a question about features, pricing, or need a custom demo,
                                our team is ready to help your glass business scale.
                            </p>

                            <div className="space-y-8 mb-12">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-white shadow-md flex items-center justify-center text-primary shrink-0">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-1">Email Us</h4>
                                        <p className="text-gray-600">hello@squareglass.app</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-white shadow-md flex items-center justify-center text-primary shrink-0">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-1">Call Us</h4>
                                        <p className="text-gray-600">+91-XXXXX-XXXXX</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-white shadow-md flex items-center justify-center text-primary shrink-0">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-1">Visit Us</h4>
                                        <p className="text-gray-600">DLF Phase 3, Gurgaon, Haryana, India</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-8 rounded-[2.5rem] bg-secondary/10 border border-secondary/20">
                                <h4 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                    <MessageCircle className="text-secondary" />
                                    WhatsApp Support
                                </h4>
                                <p className="text-gray-600 mb-6">
                                    Need immediate help? Chat with our support team directly on WhatsApp.
                                </p>
                                <Button className="bg-secondary hover:bg-secondary/90 text-white font-bold h-12 rounded-xl px-8">
                                    Chat Now
                                </Button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <ContactForm />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
