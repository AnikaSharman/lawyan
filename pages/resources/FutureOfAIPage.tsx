import React from "react";
import { TracingBeam } from "../../components/TracingBeam";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const FutureOfAIPage = () => {
    return (
        <div className="pt-32 pb-20 min-h-screen bg-bgMain text-textMain font-sans relative">
            <div className="max-w-7xl mx-auto px-6 mb-8">
                <Link to="/resources" className="inline-flex items-center text-slate-500 hover:text-blue-600 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Resources
                </Link>
            </div>
            <TracingBeam className="px-6">
                <div className="max-w-2xl mx-auto antialiased pt-4 relative">
                    <div className="mb-10">
                        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">The Architecture of Legal Intelligence: 2026 Trends</h1>
                        <p className="text-xl text-slate-500">
                            A whitepaper on how autonomous agents and generative models are reshaping the practice of law.
                        </p>
                    </div>

                    <div className="prose prose-lg prose-slate dark:prose-invert">
                        <h2 className="text-2xl font-bold mb-4 mt-8">1. Generative Drafting & The End of Templates</h2>
                        <p className="mb-4 text-slate-700 leading-relaxed">
                            The era of static templates is ending. Modern legal AI doesn't just fill in blanks; it understands the semantic context of a deal.
                            By 2026, <strong>generative drafting</strong> will handle 60% of initial contract modifications, allowing associates to focus on
                            strategic negotiation points rather than boilerplate syntax.
                        </p>
                        <p className="mb-4 text-slate-700 leading-relaxed">
                            LawYan's proprietary engine analyzes over 50 million clauses to suggest high-fidelity edits that match your firm's specific style guide,
                            effectively creating a living, breathing knowledge base that grows with every deal.
                        </p>

                        <h2 className="text-2xl font-bold mb-4 mt-8">2. Predictive Analytics in Litigation</h2>
                        <p className="mb-4 text-slate-700 leading-relaxed">
                            "Data is the new oil" is a cliché, but in litigation, it's the new ammunition. Predictive analytics tools are now capable of
                            forecasting case outcomes with startling accuracy—often exceeding 85% in commercial disputes.
                        </p>
                        <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-blue-500 my-6">
                            <span className="font-bold block mb-2 text-slate-900">Key Statistic</span>
                            Firms using predictive case assessment reduce discovery costs by an average of 40% while increasing settlement favorability by 25%.
                        </div>

                        <h2 className="text-2xl font-bold mb-4 mt-8">3. Autonomous Legal Agents</h2>
                        <p className="mb-4 text-slate-700 leading-relaxed">
                            We are moving beyond "copilots" to "autonomous agents." These are AI systems capable of executing multi-step workflows without
                            constant human intervention. Imagine an agent that monitors a regulatory docket, identifies relevant changes, drafts a client alert,
                            and schedules a partner review—all before the partner has finished their morning coffee.
                        </p>
                        <p className="mb-4 text-slate-700 leading-relaxed">
                            This shift creates a new role for the lawyer: the <strong>Architect</strong>. The lawyer's job becomes designing the systems and
                            constraints within which these agents operate, ensuring ethical compliance and strategic alignment.
                        </p>

                        <h2 className="text-2xl font-bold mb-4 mt-8">Conclusion: The Hybrid Firm</h2>
                        <p className="mb-4 text-slate-700 leading-relaxed">
                            The future isn't AI replacing lawyers; it's AI-augmented hybrid firms replacing traditional ones. The firms that succeed will be those
                            that view technology not as a cost center, but as a fundamental layer of their practice architecture.
                        </p>
                    </div>
                </div>
            </TracingBeam>
        </div>
    );
};

export default FutureOfAIPage;
