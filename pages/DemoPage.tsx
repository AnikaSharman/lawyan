import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { VideoBackground } from '../components/ui/VideoBackground';

const DemoPage: React.FC = () => {
    return (
        <div className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-slate-950">
            <VideoBackground
                src="https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-code-at-night-40348-large.mp4"
                opacity={0.2}
                overlayClassName="bg-slate-950/80"
            />
            <div className="relative z-10 flex items-center justify-center h-full">
                <div className="max-w-xl w-full mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white/90 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-white/20"
                    >
                        <h1 className="text-3xl font-serif font-medium mb-2 text-slate-900">Request a Demo</h1>
                        <p className="text-slate-600 mb-8 text-lg">Experience LawYan Suite in action and see how we can transform your firm.</p>

                        <form className="space-y-6">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                                    <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                                    <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Work Email</label>
                                <input type="email" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Firm Size</label>
                                <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all appearance-none cursor-pointer">
                                    <option>Solo Practice</option>
                                    <option>2-10 Attorneys</option>
                                    <option>11-50 Attorneys</option>
                                    <option>50+ Attorneys</option>
                                </select>
                            </div>
                            <button type="button" className="w-full py-4 bg-blue-600 text-white rounded-full font-medium flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20">
                                Schedule Demo
                                <ArrowRight size={18} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default DemoPage;
