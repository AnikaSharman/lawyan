import React from 'react';
import { Globe, Zap, Shield, Cpu } from 'lucide-react';
import { CONTENT } from '../constants';

const BentoGrid = () => {
    return (
        <section className="py-32 bg-white relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-serif font-medium text-textMain mb-6">A complete operating system</h2>
                    <p className="text-lg text-textMuted">Everything you need to run a modern legal practice, integrated into one seamless experience.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">

                    {/* Large Card - Suite */}
                    <div className="md:col-span-2 relative group overflow-hidden rounded-3xl bg-surface border border-black/5 shadow-card hover:shadow-card-hover transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="p-10 relative z-10 flex flex-col h-full">
                            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6">
                                <Globe className="w-6 h-6 text-accent-primary" />
                            </div>
                            <h3 className="text-2xl font-semibold mb-3">{CONTENT.suite.title}</h3>
                            <p className="text-textMuted max-w-md">{CONTENT.suite.description}</p>

                            <div className="mt-auto pt-8">
                                <div className="w-full h-48 bg-white rounded-t-xl shadow-lg border border-black/5 overflow-hidden relative">
                                    <img src="/lawyan-suite.png" className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105" alt="LawYan Suite Dashboard" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tall Card - Grow */}
                    <div className="md:col-span-1 md:row-span-2 relative group overflow-hidden rounded-3xl bg-textMain text-white shadow-2xl hover:-translate-y-1 transition-transform duration-500">
                        <div className="absolute top-0 right-0 p-32 bg-accent-primary/20 blur-[100px] rounded-full"></div>
                        <div className="p-10 flex flex-col h-full relative z-10">
                            <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center mb-6">
                                <Zap className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-2xl font-semibold mb-3">{CONTENT.grow.title}</h3>
                            <p className="text-gray-400 mb-8">{CONTENT.grow.description}</p>

                            <div className="mt-auto flex-1 bg-white/5 rounded-xl border border-white/10 overflow-hidden backdrop-blur-sm relative group-hover:border-white/20 transition-colors">
                                <img src="/lawyan-grow.png" className="absolute inset-0 w-full h-full object-cover opacity-90" alt="LawYan Grow Pipeline" />
                            </div>
                        </div>
                    </div>

                    {/* Medium Card - Manage */}
                    <div className="md:col-span-1 relative group overflow-hidden rounded-3xl bg-surface border border-black/5 shadow-card hover:shadow-card-hover transition-all duration-500">
                        <div className="p-8 flex flex-col h-full">
                            <div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center mb-4">
                                <Shield className="w-5 h-5 text-accent-primary" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{CONTENT.manage.title}</h3>
                            <p className="text-sm text-textMuted">{CONTENT.manage.description}</p>
                            <div className="mt-8 flex-1 bg-white border border-black/5 rounded-lg shadow-sm overflow-hidden relative group-hover:border-accent-primary/20 transition-colors">
                                <img src="/lawyan-manage.png" className="w-full h-full object-cover object-top opacity-90 transition-transform duration-700 group-hover:scale-105" alt="LawYan Manage CRM" />
                            </div>
                        </div>
                    </div>

                    {/* Medium Card - Apps */}
                    <div className="md:col-span-1 relative group overflow-hidden rounded-3xl bg-surface border border-black/5 shadow-card hover:shadow-card-hover transition-all duration-500">
                        <div className="p-8 flex flex-col h-full">
                            <div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center mb-4">
                                <Cpu className="w-5 h-5 text-accent-primary" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{CONTENT.apps.title}</h3>
                            <p className="text-sm text-textMuted">{CONTENT.apps.description}</p>
                            <div className="mt-8 flex-1 bg-white border border-black/5 rounded-lg shadow-sm overflow-hidden relative group-hover:border-accent-primary/20 transition-colors">
                                <img src="/lawyan-apps.png" className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105" alt="LawYan App Directory" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default BentoGrid;
