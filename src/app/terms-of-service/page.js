"use client";

import React from "react";
import { motion } from "framer-motion";

const TermsOfService = () => {
    const sections = [
        {
            title: "1. Acceptance of Terms",
            content: "By accessing or using the Square Glass app and website, you agree to be bound by these Terms of Service and all applicable laws and regulations.",
        },
        {
            title: "2. Use License",
            content: "We grant you a personal, non-exclusive, non-transferable license to use the Square Glass app for your internal business operations. You may not reverse engineer or attempt to extract the source code of our software.",
        },
        {
            title: "3. User Accounts",
            content: "You are responsible for maintaining the confidentiality of your account credentials. You agree to notify us immediately of any unauthorized use of your account.",
        },
        {
            title: "4. Subscription and Payments",
            content: "Certain features of Square Glass may require a paid subscription. All fees are non-refundable except as required by law. We reserve the right to change our pricing upon reasonable notice.",
        },
        {
            title: "5. Data Ownership",
            content: "You retain all rights to the business data you input into the app. We claim no ownership over your business records, invoices, or customer lists.",
        },
        {
            title: "6. Limitation of Liability",
            content: "Square Glass shall not be liable for any indirect, incidental, or consequential damages arising out of your use or inability to use the software.",
        },
        {
            title: "7. Governing Law",
            content: "These terms are governed by and construed in accordance with the laws of India, without regard to its conflict of law principles.",
        },
        {
            title: "8. Changes to Terms",
            content: "We reserve the right to modify these terms at any time. We will notify users of any significant changes via the app or email.",
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
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-12">
                        Terms of Service
                    </h1>

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

export default TermsOfService;
