import { cn } from "../lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";

export const HoverEffect = ({
    items,
    className,
}: {
    items: {
        title: string;
        description: string;
        link: string;
        icon?: React.ReactNode;
    }[];
    className?: string;
}) => {
    let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10",
                className
            )}
        >
            {items.map((item, idx) => (
                <Link
                    to={item.link}
                    key={item.title}
                    className="relative group block p-2 h-full w-full"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                className="absolute inset-0 h-full w-full bg-blue-100 dark:bg-blue-900/[0.2] block rounded-3xl"
                                layoutId="hoverBackground"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: { duration: 0.15 },
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: { duration: 0.15, delay: 0.2 },
                                }}
                            />
                        )}
                    </AnimatePresence>
                    <div className="rounded-2xl h-full w-full p-6 overflow-hidden bg-white border border-slate-200 group-hover:border-blue-500 relative z-20 transition-all duration-200 group-hover:shadow-xl group-hover:-translate-y-1">
                        <div className="relative z-50">
                            <div className="p-0">
                                <div className="w-10 h-10 mb-4 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
                                    {item.icon}
                                </div>
                                <h4 className={cn("text-slate-900 font-bold tracking-tight mt-4 text-2xl")}>
                                    {item.title}
                                </h4>
                                <p
                                    className={cn(
                                        "mt-4 text-slate-600 tracking-wide leading-relaxed text-sm"
                                    )}
                                >
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};
