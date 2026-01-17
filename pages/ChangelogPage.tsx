import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Tag } from 'lucide-react';
import { CHANGELOG } from '../constants';

const ChangelogPage = () => {
    return (
        <div className="bg-white min-h-screen pt-32 pb-24">
            <div className="max-w-4xl mx-auto px-6">
                {/* Header */}
                <div className="mb-20">
                    <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="inline-block px-3 py-1 bg-surface border border-black/5 rounded-full text-xs font-mono mb-6 text-textMuted"
                    >
                        RELEASE NOTES
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-serif font-medium text-textMain mb-6"
                    >
                        Changelog
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-textMuted"
                    >
                        Stay up to date with the latest improvements and feature releases.
                    </motion.p>
                </div>

                {/* Timeline */}
                <div className="space-y-16 border-l border-gray-100 ml-3 md:ml-0 pl-8 md:pl-0">
                    {CHANGELOG.map((release, index) => (
                        <motion.div
                            key={release.version}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative md:grid md:grid-cols-4 md:gap-10"
                        >
                            {/* Marker dot for mobile */}
                            <div className="absolute -left-[37px] top-2 w-4 h-4 rounded-full bg-white border-4 border-accent-primary md:hidden"></div>

                            {/* Meta Column */}
                            <div className="md:text-right mb-4 md:mb-0">
                                <div className="text-sm font-mono text-accent-primary font-medium mb-1">{release.version}</div>
                                <div className="text-sm text-textMuted flex items-center md:justify-end gap-2">
                                    <Calendar className="w-3 h-3" />
                                    {release.date}
                                </div>
                            </div>

                            {/* Content Column */}
                            <div className="md:col-span-3 pb-12 border-b border-gray-50 last:border-0 md:pl-10 relative">
                                {/* Marker dot for desktop */}
                                <div className="hidden md:block absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-accent-primary ring-4 ring-white"></div>

                                <div className="flex items-center gap-3 mb-4">
                                    <h2 className="text-2xl font-semibold text-textMain">{release.title}</h2>
                                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide
                                        ${release.type === 'Major' ? 'bg-indigo-100 text-indigo-700' :
                                            release.type === 'Feature' ? 'bg-emerald-100 text-emerald-700' :
                                                release.type === 'Improvement' ? 'bg-blue-100 text-blue-700' :
                                                    'bg-gray-100 text-gray-600'}`}>
                                        {release.type}
                                    </span>
                                </div>

                                <ul className="space-y-3">
                                    {release.changes.map((change, i) => (
                                        <li key={i} className="flex items-start gap-3 text-textMuted leading-relaxed">
                                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-300 flex-shrink-0"></div>
                                            <span>{change}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ChangelogPage;
