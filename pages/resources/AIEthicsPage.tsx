import React from "react";
import { StickyScroll } from "../../components/StickyScroll";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const AIEthicsPage = () => {
    const content = [
        {
            title: "Transparency & Explainability",
            description: "Black box AI is unacceptable in law. Every LawYan recommendation comes with a citation trail. We don't just tell you 'Win Probability: 70%'; we show you the 40 similar cases and specific judicial opinions that drive that prediction.",
            content: (
                <div className="h-full w-full bg-slate-950 flex items-center justify-center p-8 text-white rounded-md">
                    <div className="space-y-4 w-full">
                        <div className="h-4 bg-slate-800 rounded w-3/4 animate-pulse"></div>
                        <div className="h-4 bg-slate-800 rounded w-1/2 animate-pulse"></div>
                        <div className="h-32 bg-slate-900 rounded border border-slate-800 p-4">
                            <div className="text-xs text-blue-400 mb-2">Source: Reynolds v. State (2024)</div>
                            <div className="text-sm text-slate-400">"The court holds that reliance on algorithmic..."</div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            title: "Bias Mitigation",
            description: "Historical data contains historical prejudices. LawYan employs 'Counterfactual Fairness' testing, actively simulating demographic swaps to ensure our models do not replicate or amplify systemic bias in sentencing or lending recommendations.",
            content: (
                <div className="h-full w-full bg-white flex items-center justify-center text-slate-900 rounded-md border border-slate-200">
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600">A</div>
                        <div className="h-1 w-16 bg-slate-200"></div>
                        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center font-bold text-green-600">B</div>
                    </div>
                </div>
            )
        },
        {
            title: "Data Sovereignty",
            description: "Your client data never trains our public models. LawYan uses a 'Federated Learning' approach where insights are aggregated without raw data ever leaving your firm's secure enclave. You own your weights.",
            content: (
                <div className="h-full w-full bg-gradient-to-br from-blue-900 to-slate-900 flex items-center justify-center text-white rounded-md">
                    <div className="text-center">
                        <div className="text-4xl mb-2">🔒</div>
                        <div className="font-mono text-sm">ENCLAVE_SECURE</div>
                    </div>
                </div>
            )
        },
    ];

    return (
        <div className="pt-32 min-h-screen bg-bgMain text-textMain font-sans">
            <div className="max-w-7xl mx-auto px-6 mb-20">
                <div className="mb-8">
                    <Link to="/resources" className="inline-flex items-center text-slate-500 hover:text-blue-600 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Resources
                    </Link>
                </div>
                <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-center">The Black Box Problem</h1>
                <p className="text-xl text-slate-500 max-w-2xl mx-auto text-center">
                    Ensuring accountability, transparency, and fairness in the age of autonomous legal agents.
                </p>
            </div>

            <StickyScroll content={content} />
        </div>
    );
};

export default AIEthicsPage;
