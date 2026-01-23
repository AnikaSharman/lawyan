"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

export const BackgroundBeams = ({ className }: { className?: string }) => {
    const beamsRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = beamsRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Core configuration
        const beams = [
            { x: 100, y: 0, width: 200, speed: 0.5, opacity: 0.2 },
            { x: 400, y: 0, width: 150, speed: 1, opacity: 0.3 },
            { x: 700, y: 0, width: 300, speed: 0.8, opacity: 0.15 },
            { x: 1000, y: 0, width: 100, speed: 1.5, opacity: 0.25 },
        ];

        // Animation loop would go here - simplifying for immediate visual structure
        // ideally using a loop to draw gradients that move

        let animationFrameId: number;

        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Dark background
            // ctx.fillStyle = "#09090b"; 
            // ctx.fillRect(0, 0, canvas.width, canvas.height);

            beams.forEach((beam) => {
                // animate y or x
                // draw gradient
            });

            // animationFrameId = requestAnimationFrame(render);
        };

        // render();

        return () => {
            // cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div
            className={cn(
                "absolute inset-0 z-0 bg-neutral-950 flex flex-col items-center justify-center overflow-hidden",
                className
            )}
        >
            {/* Abstract Gradient Background for simpler robust implementation */}
            <div className="absolute inset-0 bg-neutral-950 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none opacity-40">
                <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-blue-900/20 blur-[100px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-indigo-900/20 blur-[100px]" />
            </div>
        </div>
    );
};
