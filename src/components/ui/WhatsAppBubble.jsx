"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { APP_LINKS } from "@/constants/links";

const WhatsAppBubble = () => {
    return (
        <motion.a
            href={APP_LINKS.WHATSAPP}
            target="_blank"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-8 right-8 z-[60] bg-green-500 text-white p-4 rounded-full shadow-2xl shadow-green-500/40 cursor-pointer flex items-center justify-center group"
        >
            <MessageCircle className="w-6 h-6" />
            <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-3 transition-all duration-300 font-bold whitespace-nowrap">
                Chat Support
            </span>
        </motion.a>
    );
};

export default WhatsAppBubble;
