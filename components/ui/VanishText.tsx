"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../lib/utils";

export const VanishText = ({
    text,
    className,
}: {
    text: string;
    className?: string;
}) => {
    const [letters, setLetters] = useState<string[]>([]);

    useEffect(() => {
        setLetters(text.split(""));
    }, [text]);

    return (
        <div className={cn("inline-flex overflow-hidden", className)}>
            <AnimatePresence mode="wait">
                {letters.map((letter, i) => (
                    <motion.span
                        key={i}
                        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                        transition={{
                            duration: 0.5,
                            delay: i * 0.05,
                            ease: "easeOut",
                        }}
                        className="inline-block"
                    >
                        {letter === " " ? "\u00A0" : letter}
                    </motion.span>
                ))}
            </AnimatePresence>
        </div>
    );
};
