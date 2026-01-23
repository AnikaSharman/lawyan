import React from 'react';
import { motion } from 'framer-motion';

const ProductsPage: React.FC = () => {
    return (
        <div className="pt-32 px-6 min-h-screen bg-bgMain text-textMain font-sans">
            <div className="max-w-4xl mx-auto space-y-24 pb-20">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
                    <h1 className="text-5xl font-serif mb-6">Our Products</h1>
                    <p className="text-xl text-textMuted max-w-2xl mx-auto">
                        Comprehensive solutions tailored for the modern legal landscape.
                    </p>
                </motion.div>

                {/* LawYan Suite */}
                <section className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-serif mb-4">LawYan Suite</h2>
                        <p className="text-lg text-textMuted leading-relaxed">
                            Strengthen your legal practice with the CRM expertise of Lawyer AI.
                            Transform the client-attorney relationship with a comprehensive set of tools meticulously crafted for legal practices.
                        </p>
                    </div>
                    <div className="bg-surface rounded-xl p-8 aspect-video flex items-center justify-center border border-black/5">
                        <span className="text-textMuted">Image: LawYan Suite</span>
                    </div>
                </section>

                {/* LawYan Grow */}
                <section className="grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
                    <div className="md:order-2">
                        <h2 className="text-3xl font-serif mb-4">LawYan Grow</h2>
                        <p className="text-lg text-textMuted leading-relaxed">
                            Elevate your legal practice with seamless client intake.
                            Reshape the landscape of client management by optimizing workflows and enhancing overall efficiency through automated intake processes.
                        </p>
                    </div>
                    <div className="bg-surface rounded-xl p-8 aspect-video flex items-center justify-center border border-black/5">
                        <span className="text-textMuted">Image: LawYan Grow</span>
                    </div>
                </section>

                {/* LawYan Manage */}
                <section className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-serif mb-4">LawYan Manage</h2>
                        <p className="text-lg text-textMuted leading-relaxed">
                            An all-in-one CRM software with AI support for managing your legal practices.
                            We optimize custom interactions, organizing cases, and gaining actionable insights.
                        </p>
                    </div>
                    <div className="bg-surface rounded-xl p-8 aspect-video flex items-center justify-center border border-black/5">
                        <span className="text-textMuted">Image: LawYan Manage</span>
                    </div>
                </section>

                {/* App Directory */}
                <section className="grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
                    <div className="md:order-2">
                        <h2 className="text-3xl font-serif mb-4">App Directory</h2>
                        <p className="text-lg text-textMuted leading-relaxed">
                            Navigate your trusted AI CRM SaaS solution.
                            Connect with the tools you already use to create a bespoke operating system.
                        </p>
                    </div>
                    <div className="bg-surface rounded-xl p-8 aspect-video flex items-center justify-center border border-black/5">
                        <span className="text-textMuted">Image: App Directory</span>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ProductsPage;
