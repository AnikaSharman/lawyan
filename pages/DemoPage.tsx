import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const DemoPage: React.FC = () => {
    return (
        <div className="pt-32 pb-20 min-h-screen bg-bgMain text-textMain flex items-center justify-center font-sans">
            <div className="max-w-xl w-full mx-auto px-6">
                <div className="bg-surface rounded-3xl p-10 shadow-card border border-black/5">
                    <h1 className="text-3xl font-serif font-medium mb-2">Request a Demo</h1>
                    <p className="text-textMuted mb-8 text-lg">Experience LawYan Suite in action and see how we can transform your firm.</p>

                    <form className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-textMain mb-2">First Name</label>
                                <input type="text" className="w-full px-4 py-3 bg-white border border-transparent rounded-xl focus:border-accent-primary outline-none transition-all" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-textMain mb-2">Last Name</label>
                                <input type="text" className="w-full px-4 py-3 bg-white border border-transparent rounded-xl focus:border-accent-primary outline-none transition-all" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-textMain mb-2">Work Email</label>
                            <input type="email" className="w-full px-4 py-3 bg-white border border-transparent rounded-xl focus:border-accent-primary outline-none transition-all" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-textMain mb-2">Firm Size</label>
                            <select className="w-full px-4 py-3 bg-white border border-transparent rounded-xl focus:border-accent-primary outline-none transition-all appearance-none cursor-pointer">
                                <option>Solo Practice</option>
                                <option>2-10 Attorneys</option>
                                <option>11-50 Attorneys</option>
                                <option>50+ Attorneys</option>
                            </select>
                        </div>
                        <button type="button" className="w-full py-4 bg-textMain text-white rounded-full font-medium flex items-center justify-center gap-2 hover:bg-black transition-colors shadow-lg">
                            Schedule Demo
                            <ArrowRight size={18} />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default DemoPage;
