import React from 'react';
import { motion } from 'framer-motion';
import { StickyScroll } from '../components/StickyScroll';
import { InfiniteMovingCards } from '../components/InfiniteMovingCards';
import { SpotlightCard } from '../components/SpotlightCard';

const content = [
    {
        title: "LawYan Suite",
        description:
            "Strengthen your legal practice with the CRM expertise of Lawyer AI. Transform the client-attorney relationship with a comprehensive set of tools meticulously crafted for legal practices.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                <img src="/images/dashboard_mockup.png" className="w-full h-full object-cover opacity-80" alt="LawYan Suite" />
            </div>
        ),
    },
    {
        title: "LawYan Grow",
        description:
            "Elevate your legal practice with seamless client intake. Reshape the landscape of client management by optimizing workflows and enhancing overall efficiency through automated intake processes.",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <div className="w-full h-full bg-slate-900 flex items-center justify-center border border-slate-700 rounded-md">
                    <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">Intake Pipeline</span>
                </div>
            </div>
        ),
    },
    {
        title: "LawYan Manage",
        description:
            "An all-in-one CRM software with AI support for managing your legal practices. We optimize custom interactions, organizing cases, and gaining actionable insights.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
                <div className="w-full h-full bg-slate-900 flex items-center justify-center border border-slate-700 rounded-md relative overflow-hidden">
                    <div className="absolute inset-0 bg-blue-500/10 blur-3xl" />
                    <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 z-10">AI CRM</span>
                </div>
            </div>
        ),
    },
];

const testimonials = [
    { quote: "Seamless Integration", name: "Google Workspace", title: "Integration" },
    { quote: "Secure Communications", name: "Outlook", title: "Email" },
    { quote: "Document Management", name: "Dropbox", title: "Storage" },
    { quote: "Financials", name: "QuickBooks", title: "Accounting" },
    { quote: "Scheduling", name: "Calendly", title: "Productivity" },
];

const ProductsPage: React.FC = () => {
    return (
        <div className="pt-32 min-h-screen bg-bgMain text-textMain font-sans pb-20">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-24">
                    <h1 className="text-5xl md:text-7xl font-serif font-medium mb-8">
                        A complete <span className="italic text-gray-500">operating system</span>
                    </h1>
                    <p className="text-xl text-textMuted max-w-2xl mx-auto">
                        Everything you need to run a modern legal practice, integrated into one seamless experience.
                    </p>
                </motion.div>

                {/* Sticky Scroll Section */}
                <div className="mb-40">
                    <StickyScroll content={content} />
                </div>

                {/* Spotlight Cards Feature Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-40 max-w-6xl mx-auto">
                    <SpotlightCard className="p-8 h-64 flex flex-col justify-center">
                        <h3 className="text-2xl font-serif mb-4 text-white">Analytics</h3>
                        <p className="text-textMuted">Real-time insights into your firm's performance and case metrics.</p>
                    </SpotlightCard>
                    <SpotlightCard className="p-8 h-64 flex flex-col justify-center">
                        <h3 className="text-2xl font-serif mb-4 text-white">Automation</h3>
                        <p className="text-textMuted">Save hours on repetitive tasks with intelligent workflow automation.</p>
                    </SpotlightCard>
                    <SpotlightCard className="p-8 h-64 flex flex-col justify-center">
                        <h3 className="text-2xl font-serif mb-4 text-white">Security</h3>
                        <p className="text-textMuted">Bank-grade encryption keeping your client data safe and compliant.</p>
                    </SpotlightCard>
                </div>

                {/* App Directory Marquee */}
                <div className="space-y-12">
                    <div className="text-center">
                        <h2 className="text-3xl font-serif mb-4">App Directory</h2>
                        <p className="text-lg text-textMuted max-w-2xl mx-auto">
                            Connect with the tools you already use to create a bespoke operating system.
                        </p>
                    </div>
                    <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
                </div>

            </div>
        </div>
    );
};

export default ProductsPage;
