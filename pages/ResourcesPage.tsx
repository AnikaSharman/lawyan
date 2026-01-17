import React from 'react';
import { FileText, Play, Rocket, BookOpen } from 'lucide-react';

const ResourcesPage: React.FC = () => {
    const resources = [
        { title: 'The Future of AI in Legal', type: 'Whitepaper', icon: <FileText className="w-6 h-6" /> },
        { title: 'Getting Started with LawYan', type: 'Article', icon: <BookOpen className="w-6 h-6" /> },
        { title: 'Case Study: Miller & Associates', type: 'Customer Story', icon: <Rocket className="w-6 h-6" /> },
        { title: 'AI Ethics in Legal Practice', type: 'Guide', icon: <Play className="w-6 h-6" /> },
    ];

    return (
        <div className="pt-32 pb-20 min-h-screen bg-background">
            <div className="max-w-7xl mx-auto px-6">
                <div className="max-w-3xl mb-16">
                    <h1 className="text-5xl font-serif font-medium mb-6 leading-tight text-textMain">Insights and Intelligence</h1>
                    <p className="text-xl text-textMuted font-sans leading-relaxed">Everything you need to navigate the intersection of law and technology.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-1">
                    {resources.map((resource, i) => (
                        <div key={i} className="group p-8 bg-white border border-black/5 rounded-3xl shadow-card hover:shadow-card-hover transition-all duration-500 cursor-pointer">
                            <div className="w-12 h-12 bg-surface rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent-primary group-hover:text-white transition-colors duration-500">
                                {resource.icon}
                            </div>
                            <div className="text-xs font-bold text-accent-primary uppercase tracking-widest mb-3 opacity-80">{resource.type}</div>
                            <h3 className="text-xl font-semibold leading-tight mb-4 group-hover:text-accent-primary transition-colors">{resource.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ResourcesPage;
