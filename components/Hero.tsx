import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Play, Search, Bell, ChevronDown, Plus, ArrowRight } from 'lucide-react';
import DashboardMockup from './DashboardMockup';

/* 
   --------------------------------------------------------------------------------
   CRITICAL: DO NOT EDIT THIS COMPONENT.
   
   This Hero section has been finalized and locked by the user. 
   No further changes regarding spacing, text, gradients, or layout should be made 
   to this file under any circumstances unless explicitly overridden by a new 
   direct command to "unlock" it.
   --------------------------------------------------------------------------------
*/

const Hero: React.FC = () => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 1000], [0, 300]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <div className="relative pt-52 pb-20 overflow-hidden bg-gradient-mesh min-h-screen flex flex-col items-center">

            {/* Background Gradients */}
            <div className="absolute top-0 left-0 right-0 h-[600px] bg-gradient-to-b from-blue-50/50 to-transparent -z-10"></div>

            <div className="max-w-5xl mx-auto px-6 text-center z-10 mb-16">


                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-6xl md:text-8xl font-serif font-medium text-textMain leading-[0.9] tracking-tight mb-8"
                >
                    <span className="bg-clip-text text-transparent bg-gradient-to-b from-black to-gray-700">Relationship intelligence</span> <br />
                    <span className="italic text-gray-400">for modern law.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl text-textMuted max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    The CRM that thinks like a partner. Automate intake, organize cases, and predict outcomes with an OS designed for the future of legal practice.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link to="/onboarding">
                        <button className="h-12 px-8 bg-textMain text-white text-base font-medium rounded-full hover:scale-105 transition-transform shadow-xl shadow-black/10 flex items-center gap-2">
                            Get Started Free
                            <ArrowRightIcon />
                        </button>
                    </Link>
                    <button className="h-12 px-8 bg-white text-textMain border border-black/5 text-base font-medium rounded-full hover:bg-surface transition-colors flex items-center gap-2 shadow-sm">
                        <Play className="w-4 h-4 fill-textMain" />
                        Watch Demo
                    </button>
                </motion.div>
            </div>

            {/* UI Mockup - The "Product Shot" */}
            <motion.div
                style={{ y }}
                initial={{ opacity: 0, rotateX: 20, y: 100 }}
                animate={{ opacity: 1, rotateX: 0, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="w-full max-w-6xl px-4 perspective-1000"
            >
                <div className="relative bg-white rounded-xl border border-black/10 shadow-2xl overflow-hidden aspect-[16/10]">
                    <DashboardMockup />
                </div>
            </motion.div>
        </div>
    );
};

const ArrowRightIcon = () => (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 6H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 1L11 6L6 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)

export default Hero;