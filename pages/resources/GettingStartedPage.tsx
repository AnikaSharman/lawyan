import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const GettingStartedPage = () => {
    const steps = [
        {
            title: "Day 1: Connection & Sync",
            description: "Securely connect your email (Outlook/Gmail) and document storage (OneDrive/NetDocs). LawYan's ingestion engine begins indexing your past 5 years of case data to build your firm's unique knowledge graph.",
            badge: "2 Hours"
        },
        {
            title: "Day 1: Team Invitation",
            description: "Invite your partners and associates. Set granular permission levels. LawYan auto-provisions accounts based on your active directory, ensuring appropriate access controls from minute one.",
            badge: "30 Minutes"
        },
        {
            title: "Day 2: Workflow Configuration",
            description: "Choose from our library of 'Gold Standard' workflows for Litigation, Corporate M&A, or IP Prosecution. Customize trigger points: 'When a new client email arrives with Subject: NDA, draft response X.'",
            badge: "4 Hours"
        },
        {
            title: "Day 2: The First Victory",
            description: "Run your first automated intake. Watch as LawYan captures the lead, creates the matter, generates the engagement letter, and sends it for signature—all while you are in court.",
            badge: "Instant"
        }
    ];

    return (
        <div className="pt-32 pb-20 min-h-screen bg-bgMain text-textMain font-sans">
            <div className="max-w-4xl mx-auto px-6">
                <div className="mb-8">
                    <Link to="/resources" className="inline-flex items-center text-slate-500 hover:text-blue-600 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Resources
                    </Link>
                </div>
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Zero to Hero: Launching LawYan</h1>
                    <p className="text-xl text-slate-500 max-w-2xl mx-auto">
                        A practical guide to transforming your practice in under 24 hours. No IT degree required.
                    </p>
                </div>

                <div className="relative border-l border-slate-200 ml-3 md:ml-6 space-y-12 pb-12">
                    {steps.map((step, index) => (
                        <div key={index} className="relative pl-8 md:pl-12">
                            <div className="absolute -left-[5px] top-2 h-3 w-3 rounded-full bg-blue-500 border-4 border-white shadow-sm" />

                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                                <h3 className="text-2xl font-bold text-slate-900">{step.title}</h3>
                                <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded mt-2 md:mt-0 w-fit">
                                    {step.badge}
                                </span>
                            </div>
                            <p className="text-lg text-slate-600 leading-relaxed bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 bg-slate-900 text-white rounded-3xl p-10 text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to start the clock?</h2>
                    <p className="text-slate-300 mb-8 max-w-xl mx-auto">Join the 500+ firms that have switched to LawYan this month.</p>
                    <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-full transition-colors">
                        Start Free Trial
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GettingStartedPage;
