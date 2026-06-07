"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { APP_LINKS } from "@/constants/links";
import Link from "next/link";

const ContactPage = () => {
    const contactMethods = [
        {
            title: "Email Us",
            description: "Drop us a line and we'll get back to you within 24 hours.",
            value: "gandhivatechnologies@gmail.com",
            href: "mailto:gandhivatechnologies@gmail.com",
            icon: Mail,
            color: "text-blue-500",
            bg: "bg-blue-50",
            actionText: "Send Email"
        },
        {
            title: "Call Us",
            description: "Talk to us directly for any support or enterprise inquiries.",
            value: "+91 83038 07051",
            href: "tel:+918303807051",
            icon: Phone,
            color: "text-primary",
            bg: "bg-primary/5",
            actionText: "Call Now"
        },
        {
            title: "WhatsApp Chat",
            description: "Get instant support and message our team in real-time.",
            value: "WhatsApp Support",
            href: APP_LINKS.WHATSAPP,
            icon: MessageCircle,
            color: "text-green-500",
            bg: "bg-green-50",
            actionText: "Start Chat"
        }
    ];

    return (
        <div className="pt-32 pb-24 bg-gradient-to-b from-gray-50 to-white min-h-screen">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6"
                    >
                        Get in <span className="text-primary">Touch</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
                    >
                        Have questions about features, pricing, or need help setting up?
                        Our team is ready to help your business scale with Karobaar ERP.
                    </motion.p>
                </div>

                {/* Contact Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {contactMethods.map((method, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                            whileHover={{ y: -8, transition: { duration: 0.2 } }}
                            className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-100/50 flex flex-col justify-between"
                        >
                            <div>
                                <div className={`w-14 h-14 rounded-2xl ${method.bg} ${method.color} flex items-center justify-center mb-6`}>
                                    <method.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{method.title}</h3>
                                <p className="text-gray-500 text-sm mb-6 leading-relaxed">{method.description}</p>
                                <p className="text-gray-900 font-bold mb-8 break-all">{method.value}</p>
                            </div>
                            <Link href={method.href} target="_blank">
                                <Button className={`w-full py-6 rounded-2xl font-bold shadow-md ${
                                    method.title === "WhatsApp Chat" 
                                        ? "bg-green-500 hover:bg-green-600 shadow-green-100" 
                                        : "bg-primary hover:bg-primary/90 shadow-primary/10"
                                }`}>
                                    {method.actionText}
                                </Button>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ContactPage;