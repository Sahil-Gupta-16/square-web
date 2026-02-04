"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const TypingAnimation = ({ text, className }) => {
    const [displayedText, setDisplayedText] = useState("");
    const [i, setI] = useState(0);

    useEffect(() => {
        const typingEffect = setInterval(() => {
            if (i < text.length) {
                setDisplayedText((prevState) => prevState + text.charAt(i));
                setI(i + 1);
            } else {
                clearInterval(typingEffect);
            }
        }, 100);

        return () => {
            clearInterval(typingEffect);
        };
    }, [i, text]);

    return (
        <h1 className={className}>
            {displayedText}
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                className="inline-block w-[2px] h-[1em] bg-primary ml-1 align-middle"
            />
        </h1>
    );
};
