import { TrendingUp, Clock, Users, CheckCircle, ArrowLeft } from 'lucide-react';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BackgroundGradientAnimation } from "../../components/ui/BackgroundGradient";

const MillerCaseStudyPage = () => {
    return (
        <div className="relative pt-32 pb-20 min-h-screen bg-bgMain text-textMain font-sans overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-10">
                <BackgroundGradientAnimation interactive={false} />
            </div>
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="mb-8">
                    <Link to="/resources" className="inline-flex items-center text-slate-500 hover:text-blue-600 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Resources
                    </Link>
                </div>
                <div className="text-center mb-16">
                    <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">Case Study</span>
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-6">Miller & Associates: Scaling to Powerhouse</h1>
                    <p className="text-xl text-slate-500 max-w-2xl mx-auto">
                        How a boutique litigation firm used LawYan to compete with Big Law—and win.
                    </p>
                </div>

                {/* Bento Grid Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[180px] mb-20">

                    {/* Stat 1: ROI */}
                    <div className="md:col-span-2 md:row-span-2 bg-blue-600 rounded-3xl p-8 flex flex-col items-start justify-between shadow-xl text-white relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-24 bg-white/10 rounded-full -mr-10 -mt-10 blur-3xl transition-all duration-500 group-hover:bg-white/20"></div>
                        <TrendingUp className="w-10 h-10 mb-4" />
                        <div>
                            <div className="text-6xl font-bold mb-2">300%</div>
                            <div className="text-blue-100 text-lg">Return on Investment in Year 1</div>
                        </div>
                    </div>

                    {/* Stat 2: Hours Saved */}
                    <div className="md:col-span-1 bg-white border border-slate-200 rounded-3xl p-6 flex flex-col justify-center shadow-sm">
                        <Clock className="w-8 h-8 text-slate-400 mb-3" />
                        <div className="text-3xl font-bold text-slate-900">20 Hrs</div>
                        <div className="text-slate-500 text-sm">Saved per Attorney/Week</div>
                    </div>

                    {/* Stat 3: Client Satisfaction */}
                    <div className="md:col-span-1 bg-slate-900 rounded-3xl p-6 flex flex-col justify-center text-white shadow-sm">
                        <Users className="w-8 h-8 text-blue-400 mb-3" />
                        <div className="text-3xl font-bold">98%</div>
                        <div className="text-slate-400 text-sm">Client Retention Rate</div>
                    </div>

                    {/* Stat 4: Error Reduction */}
                    <div className="md:col-span-2 bg-white border border-slate-200 rounded-3xl p-8 flex items-center gap-6 shadow-sm">
                        <div className="bg-green-100 p-4 rounded-full">
                            <CheckCircle className="w-8 h-8 text-green-600" />
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-slate-900">0%</div>
                            <div className="text-slate-500">Missed Filing Deadlines Since Implementation</div>
                        </div>
                    </div>

                </div>

                <div className="max-w-3xl mx-auto prose prose-lg prose-slate">
                    <h2>The Challenge</h2>
                    <p>
                        Founding Partner Sarah Miller faced the "Boutique Trap." Her team of 12 attorneys provided exceptional work, but they were drowning in
                        administrative overhead. Competing with larger firms for complex commercial litigation meant analyzing terabytes of discovery data—a task
                        that was physically impossible for her small team.
                    </p>

                    <h2>The LawYan Solution</h2>
                    <p>
                        Miller & Associates deployed LawYan's <strong>Litigation Suite</strong> to automate discovery processing and initial case assessment.
                        By using our autonomous agents to categorize documents, the firm could identify the "smoking gun" email in the <em>Harrison v. TechCorp</em>
                        case in 4 hours—a task estimated to take 3 weeks of manual review.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MillerCaseStudyPage;
