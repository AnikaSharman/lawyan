"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LampContainer } from '../components/ui/LampEffect';
import { OnboardingQuiz, OnboardingData } from '../components/onboarding/OnboardingQuiz';
import { SandboxPreview } from '../components/onboarding/SandboxPreview';
import { ShieldCheck, Sparkles } from 'lucide-react';

const OnboardingPage: React.FC = () => {
    const [quizData, setQuizData] = useState<Partial<OnboardingData>>({});
    const [isComplete, setIsComplete] = useState(false);

    const handleQuizUpdate = (data: Partial<OnboardingData>) => {
        setQuizData(data);
    };

    const handleComplete = () => {
        setIsComplete(true);
        // Here you would typically trigger the next phase (e.g. signup form or redirect)
    };

    return (
        <div className="min-h-screen bg-slate-950 font-sans overflow-hidden">
            {/* Background elements */}
            <div className="fixed inset-0 z-0">
                <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-900/10 blur-[120px] rounded-full mix-blend-screen" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-indigo-900/10 blur-[120px] rounded-full mix-blend-screen" />
            </div>

            <div className="relative z-10 flex flex-col md:flex-row h-screen">

                {/* Left Side: Quiz & Narrative */}
                <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-20 relative">
                    <div className="mb-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-center gap-2 text-blue-500 mb-4"
                        >
                            <Sparkles className="w-5 h-5" />
                            <span className="text-sm font-bold tracking-widest uppercase">AI Configuration</span>
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-serif text-white mb-4"
                        >
                            Let's build your <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Legal OS.</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-slate-400 text-lg max-w-md"
                        >
                            Answer 3 quick questions to generate your personalized workspace. No credit card required.
                        </motion.p>
                    </div>

                    {!isComplete ? (
                        <OnboardingQuiz onUpdate={handleQuizUpdate} onComplete={handleComplete} />
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-green-500/10 border border-green-500/20 p-6 rounded-xl flex items-center gap-4"
                        >
                            <div className="bg-green-500/20 p-3 rounded-full">
                                <ShieldCheck className="w-8 h-8 text-green-400" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white">Blueprint Ready</h3>
                                <p className="text-green-200/80 mb-4">Your workspace has been configured.</p>
                                <button className="bg-green-500 text-black font-bold py-2 px-6 rounded-full hover:bg-green-400 transition-colors">
                                    Enter Workspace
                                </button>
                            </div>
                        </motion.div>
                    )}
                </div>

                {/* Right Side: Live Preview (Lamp Effect Container) */}
                <div className="hidden md:flex w-1/2 bg-slate-900 border-l border-white/5 relative items-center justify-center overflow-hidden">
                    {/* Reuse Lamp logic simplified or just purely centered preview */}
                    <div className="absolute inset-0 bg-slate-950">
                        <LampContainer className="min-h-screen pt-0 w-full">
                            <motion.div
                                initial={{ opacity: 0.5, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: 0.3,
                                    duration: 0.8,
                                    ease: "easeInOut",
                                }}
                                className="relative w-[600px] h-[400px] -mt-20"
                            >
                                <SandboxPreview data={quizData} />
                            </motion.div>
                        </LampContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OnboardingPage;
