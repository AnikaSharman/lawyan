"use client";

import React, { useRef, useEffect } from "react";
import { cn } from "../../lib/utils";

interface VideoBackgroundProps {
    src: string;
    poster?: string;
    className?: string;
    overlayClassName?: string;
    opacity?: number;
    playbackRate?: number;
}

export const VideoBackground: React.FC<VideoBackgroundProps> = ({
    src,
    poster,
    className,
    overlayClassName,
    opacity = 1,
    playbackRate = 1,
}) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = playbackRate;
        }
    }, [playbackRate]);

    return (
        <div className={cn("absolute inset-0 overflow-hidden -z-10", className)}>
            <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                poster={poster}
                className="absolute inset-0 w-full h-full object-cover"
                style={{ opacity }}
            >
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className={cn("absolute inset-0 bg-black/50", overlayClassName)} />
        </div>
    );
};
