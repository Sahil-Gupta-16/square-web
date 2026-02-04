"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "What unit systems are supported?",
        answer: "Square Glass is specially designed for the glass industry. It fully supports Master Units (1/16 inch), SUT units, and metric systems. You can switch between them seamlessly.",
    },
    {
        question: "Is the app GST compliant?",
        answer: "Yes, absolutely. You can generate professional GST-compliant invoices in seconds. The app handles SGST, CGST, and IGST calculations automatically based on your business location.",
    },
    {
        question: "Does it work offline?",
        answer: "Yes! Square Glass is built with a local-first architecture. You can create invoices, manage stock, and perform all core business tasks without an active internet connection. Data syncs automatically once you go online.",
    },
    {
        question: "Is it available for both Android and iOS?",
        answer: "Currently, our primary focus is the Android platform as it's most widely used by wholesalers. An iOS version is in our development pipeline and will be released later this year.",
    },
    {
        question: "Can I migrate my existing data?",
        answer: "Yes, we provide easy data migration tools. You can import your existing product catalogs and customer lists directly from Excel or CSV files.",
    },
    {
        question: "Is my data secure?",
        answer: "Your security is our priority. All data is end-to-end encrypted. We perform daily cloud backups to ensure you never lose your business records, even if you lose your phone.",
    },
    {
        question: "Can multiple employees use it?",
        answer: "Yes, the app supports multi-user logins with role-based access control. You can see which employee generated which invoice in real-time.",
    },
    {
        question: "How much does it cost?",
        answer: "We offer a free trial to get you started. Professional plans for growing wholesalers start at very affordable monthly rates. Contact us for a custom quote based on your volume.",
    },
];

const FAQSection = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-gray-900 mb-4"
                    >
                        Frequently Asked Questions
                    </motion.h2>
                    <p className="text-xl text-gray-600">
                        Everything you need to know about Square Glass and how it can help your business.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="border rounded-2xl px-6 py-2 border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                            >
                                <AccordionTrigger className="text-left text-lg font-bold hover:no-underline text-gray-900">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600 text-base leading-relaxed">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </motion.div>
            </div>
        </section>
    );
};

export default FAQSection;
