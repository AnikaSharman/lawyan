"use client";
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart3, Users, FileText, CheckCircle2, AlertCircle } from 'lucide-react';
import { cn } from '../../lib/utils';
import { OnboardingData } from './OnboardingQuiz';

interface SandboxPreviewProps {
    data: Partial<OnboardingData>;
}

export const SandboxPreview: React.FC<SandboxPreviewProps> = ({ data }) => {
    // Derived state for the "Ghost Dashboard"
    const firmName = data.firmSize === "1" ? "My Legal Practice" : "Firm Dashboard";
    const activeCases = data.firmSize === "50+" ? 142 : data.firmSize === "11-50" ? 48 : 12;

    // Dynamic chart color based on practice area (just for fun/visual feedback)
    const accentColor =
        data.practiceArea === "Corporate" ? "text-indigo-400" :
            data.practiceArea === "Litigation" ? "text-red-400" :
                "text-blue-400";

    const bgAccent =
        data.practiceArea === "Corporate" ? "bg-indigo-500/10 border-indigo-500/20" :
            data.practiceArea === "Litigation" ? "bg-red-500/10 border-red-500/20" :
                "bg-blue-500/10 border-blue-500/20";

    return (
        <div className="w-full h-full bg-slate-950/80 backdrop-blur-md rounded-xl border border-white/10 overflow-hidden flex flex-col shadow-2xl relative">
            {/* Overlay for "Construction Mode" if data is incomplete */}
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/80 via-transparent to-transparent pointer-events-none z-20" />

            {/* Top Bar */}
            <div className="h-14 border-b border-white/10 flex items-center px-6 justify-between bg-white/5">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="text-xs text-slate-500 font-mono">LAWYAN OS v2.4</div>
            </div>

            {/* Dashboard Content */}
            <div className="p-6 grid grid-cols-3 gap-6 opacity-80 scale-95 transition-all duration-700">
                {/* Stat Cards */}
                <div className="col-span-3 grid grid-cols-3 gap-4">
                    <motion.div layout className="bg-white/5 border border-white/10 p-4 rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                            <Users className="w-4 h-4 text-slate-400" />
                            <span className="text-xs text-green-400">+12%</span>
                        </div>
                        <div className="text-2xl font-bold text-white mb-1">{activeCases}</div>
                        <div className="text-[10px] text-slate-400 uppercase tracking-wider">Active Cases</div>
                    </motion.div>

                    <motion.div layout className={cn("border p-4 rounded-lg transition-colors duration-500", bgAccent)}>
                        <div className="flex justify-between items-start mb-2">
                            <AlertCircle className={cn("w-4 h-4", accentColor)} />
                            <span className="text-xs text-slate-400">Now</span>
                        </div>
                        <div className="text-lg font-medium text-white mb-1">{data.goal === 'intake' ? 'Client Intake' : 'Tasks Due'}</div>
                        <div className="text-[10px] text-slate-400 uppercase tracking-wider">
                            {data.goal ? 'Priority Focus' : 'Pending Action'}
                        </div>
                    </motion.div>

                    <motion.div layout className="bg-white/5 border border-white/10 p-4 rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                            <BarChart3 className="w-4 h-4 text-slate-400" />
                        </div>
                        <div className="text-2xl font-bold text-white mb-1">$42k</div>
                        <div className="text-[10px] text-slate-400 uppercase tracking-wider">Revenue (Est)</div>
                    </motion.div>
                </div>

                {/* Main Area */}
                <div className="col-span-2 bg-white/5 border border-white/10 rounded-lg h-48 p-4 relative overflow-hidden">
                    <div className="text-xs text-slate-400 mb-4 uppercase tracking-wider">Case Timeline</div>
                    <div className="flex items-end gap-2 h-32 w-full mt-2">
                        {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                            <div key={i} className="flex-1 bg-white/10 hover:bg-white/20 rounded-t-sm transition-all" style={{ height: `${h}%` }} />
                        ))}
                    </div>
                </div>

                {/* Sidebar List */}
                <div className="col-span-1 bg-white/5 border border-white/10 rounded-lg h-48 p-4">
                    <div className="text-xs text-slate-400 mb-4 uppercase tracking-wider">Recent Activity</div>
                    <div className="space-y-3">
                        {[1, 2, 3].map((_, i) => (
                            <div key={i} className="flex gap-3 items-center">
                                <div className="w-8 h-8 rounded-full bg-white/10" />
                                <div className="space-y-1">
                                    <div className="h-2 w-12 bg-white/20 rounded" />
                                    <div className="h-1.5 w-8 bg-white/10 rounded" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Live Configurator Label */}
            <div className="absolute bottom-4 right-6 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-[10px] text-white/80 font-mono">CONFIGURING: {data.practiceArea || 'WAITING...'}</span>
            </div>
        </div>
    );
};
