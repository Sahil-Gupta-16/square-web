"use client";

import React from "react";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
    const sections = [
        {
            title: "1. Introduction",
            content: "Square Glass is committed to protecting your privacy. This policy explains how we collect, use, and protect your data in compliance with the Digital Personal Data Protection (DPDP) Act 2023 of India.",
        },
        {
            title: "2. Data Collected",
            content: "We collect personal information such as your name, email address, phone number, and business type. This information is collected directly from you when you register on our app or contact us through our website.",
        },
        {
            title: "3. Purpose of Collection",
            content: "The data collected is used strictly for lead generation, providing app support, improving our services, and communicating important updates related to the Square Glass app.",
        },
        {
            title: "4. User Rights",
            content: "Under the DPDP Act 2023, you have the right to access your data, request corrections, and request the deletion of your personal information from our systems at any time.",
        },
        {
            title: "5. Storage and Retention",
            content: "Your data is stored on secure Vercel and cloud servers. We retain your personal data for a maximum of 2 years after your last interaction with our services, unless a longer retention period is required by law.",
        },
        {
            title: "6. Third-Party Sharing",
            content: "We do not sell your data. We share only necessary information with trusted third-party services like Google Analytics (for usage tracking) and Resend/SendGrid (for email communication).",
        },
        {
            title: "7. Security Measures",
            content: "We implement robust security measures including HTTPS encryption, rate limiting, and regular security audits to ensure your data is protected against unauthorized access.",
        },
        {
            title: "8. Grievance Officer",
            content: "If you have any concerns or grievances regarding your data, please contact our Grievance Officer at: hello@squareglass.app",
        },
        {
            title: "9. Last Updated",
            content: "This Privacy Policy was last updated on February 3, 2026.",
        },
    ];

    return (
        <div className="pt-32 pb-24 bg-white min-h-screen">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                        Privacy Policy
                    </h1>
                    <p className="text-gray-500 mb-12 py-2 px-4 bg-gray-50 rounded-lg inline-block text-sm font-medium">
                        DPDP Act 2023 Compliant
                    </p>

                    <div className="space-y-12">
                        {sections.map((section, index) => (
                            <div key={index} className="border-b border-gray-100 pb-8 last:border-none">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    {section.content}
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
