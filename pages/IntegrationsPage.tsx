import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, MessageSquare, Video, Briefcase, Folder, Clock, CreditCard, DollarSign } from 'lucide-react';
import { INTEGRATIONS } from '../constants';

// Helper to map string icon names to Lucide components
const IconMap: Record<string, React.ElementType> = {
    Mail, MessageSquare, Video, Briefcase, Folder, Clock, CreditCard, DollarSign
};

const IntegrationsPage = () => {
    return (
        <div className="bg-white min-h-screen pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-serif font-medium text-textMain mb-6"
                    >
                        Connect your entire practice
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-textMuted"
                    >
                        LawYan integrates with the tools you already use, creating a unified operating system for your firm.
                    </motion.p>
                </div>

                {/* Categories */}
                <div className="space-y-16">
                    {INTEGRATIONS.map((category, catIndex) => (
                        <div key={category.category}>
                            <h2 className="text-2xl font-serif font-medium text-textMain mb-8 border-b border-gray-100 pb-4">
                                {category.category}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {category.items.map((item, index) => {
                                    const Icon = IconMap[item.icon] || Folder;
                                    return (
                                        <motion.div
                                            key={item.name}
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.05 }}
                                            viewport={{ once: true }}
                                            className="group bg-surface hover:bg-white border border-transparent hover:border-black/5 rounded-2xl p-8 hover:shadow-card-hover transition-all duration-300"
                                        >
                                            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                                <Icon className="w-6 h-6 text-accent-primary" />
                                            </div>
                                            <h3 className="text-xl font-semibold text-textMain mb-2">{item.name}</h3>
                                            <p className="text-textMuted mb-6">{item.description}</p>
                                            <button className="flex items-center text-sm font-medium text-accent-primary group-hover:gap-2 transition-all">
                                                Learn more <ArrowRight className="w-4 h-4 ml-1" />
                                            </button>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Missing Integration CTA */}
                <div className="mt-24 bg-textMain rounded-3xl p-12 text-center text-white relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-3xl font-serif font-medium mb-4">Don't see your favorite tool?</h2>
                        <p className="text-white/70 mb-8 max-w-xl mx-auto">
                            We are constantly adding new integrations. Let us know what you need, and we'll prioritize it.
                        </p>
                        <button className="bg-white text-textMain px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
                            Request an Integration
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IntegrationsPage;
