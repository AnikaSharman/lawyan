"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { cn } from '../../lib/utils';

export type OnboardingData = {
    firmSize: string;
    practiceArea: string;
    goal: string;
};

interface OnboardingQuizProps {
    onUpdate: (data: Partial<OnboardingData>) => void;
    onComplete: () => void;
}

const steps = [
    {
        id: 'firmSize',
        question: "How large is your firm?",
        options: [
            { label: "Solo Practitioner", value: "1" },
            { label: "Small Firm (2-10)", value: "2-10" },
            { label: "Mid-Sized (11-50)", value: "11-50" },
            { label: "Large Firm (50+)", value: "50+" },
        ]
    },
    {
        id: 'practiceArea',
        question: "What is your primary focus?",
        options: [
            { label: "Litigation", value: "Litigation" },
            { label: "Corporate", value: "Corporate" },
            { label: "Family Law", value: "Family Law" },
            { label: "Real Estate", value: "Real Estate" },
            { label: "Intellectual Property", value: "IP" },
        ]
    },
    {
        id: 'goal',
        question: "What's your biggest bottleneck?",
        options: [
            { label: "Client Intake", value: "intake" },
            { label: "Document Review", value: "docs" },
            { label: "Billing & Invoicing", value: "billing" },
            { label: "Case Organization", value: "organization" },
        ]
    }
];

export const OnboardingQuiz: React.FC<OnboardingQuizProps> = ({ onUpdate, onComplete }) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [selections, setSelections] = useState<Partial<OnboardingData>>({});

    const handleSelect = (value: string) => {
        const stepId = steps[currentStep].id;
        const newSelections = { ...selections, [stepId]: value };
        setSelections(newSelections);
        onUpdate(newSelections);

        if (currentStep < steps.length - 1) {
            setTimeout(() => setCurrentStep(currentStep + 1), 400); // Slight delay for visual feedback
        } else {
            setTimeout(() => onComplete(), 400);
        }
    };

    const stepData = steps[currentStep];

    return (
        <div className="w-full max-w-md mx-auto">
            <AnimatePresence mode='wait'>
                <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                >
                    <h2 className="text-2xl font-serif text-white mb-6 leading-tight">
                        {stepData.question}
                    </h2>
                    <div className="space-y-3">
                        {stepData.options.map((option) => (
                            <button
                                key={option.value}
                                onClick={() => handleSelect(option.value)}
                                className={cn(
                                    "w-full text-left px-6 py-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-200 flex items-center justify-between group",
                                    selections[stepData.id as keyof OnboardingData] === option.value && "bg-blue-600/20 border-blue-500/50"
                                )}
                            >
                                <span className={cn("text-slate-300 group-hover:text-white transition-colors", selections[stepData.id as keyof OnboardingData] === option.value && "text-blue-200")}>
                                    {option.label}
                                </span>
                                {selections[stepData.id as keyof OnboardingData] === option.value && (
                                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                                        <Check className="w-5 h-5 text-blue-400" />
                                    </motion.div>
                                )}
                            </button>
                        ))}
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Progress Indicators */}
            <div className="flex gap-2 mt-8 justify-center">
                {steps.map((_, i) => (
                    <div
                        key={i}
                        className={cn(
                            "h-1 rounded-full transition-all duration-300",
                            i === currentStep ? "w-8 bg-blue-500" : "w-2 bg-white/20",
                            i < currentStep && "bg-blue-900"
                        )}
                    />
                ))}
            </div>
        </div>
    );
};
