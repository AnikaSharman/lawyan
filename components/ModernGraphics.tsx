
import React from "react";

export const FuturisticBrain = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
        <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
        <circle cx="12" cy="12" r="3" className="stroke-blue-500" />
        <path d="M12 9v6" className="stroke-blue-400" />
        <path d="M9 12h6" className="stroke-blue-400" />
    </svg>
);

export const DynamicFlag = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
        <line x1="4" y1="22" x2="4" y2="15" />
        <path d="M6 13l2-2" className="stroke-blue-500" />
        <path d="M16 5l2 2" className="stroke-blue-500" />
    </svg>
);

export const GrowthChart = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M3 3v18h18" />
        <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
        <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" className="stroke-blue-500 blur-sm opacity-50" strokeWidth="3" />
        <circle cx="18.7" cy="8" r="2" className="fill-blue-500 stroke-none" />
    </svg>
);

export const EthicsScale = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M12 3v19" />
        <path d="M5 10h14" />
        <path d="M5 10a4 4 0 0 1-4 4h8a4 4 0 0 1-4-4z" />
        <path d="M19 10a4 4 0 0 1-4 4h8a4 4 0 0 1-4-4z" />
        <circle cx="12" cy="7" r="1.5" className="fill-blue-500 stroke-none" />
    </svg>
);
