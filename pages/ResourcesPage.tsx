import React from 'react';
import { TextGenerateEffect } from '../components/TextGenerateEffect';
import { HoverEffect } from '../components/HoverEffect';
import { FuturisticBrain, DynamicFlag, GrowthChart, EthicsScale } from '../components/ModernGraphics';

const ResourcesPage: React.FC = () => {
    const resources = [
        { title: 'The Future of AI in Legal', type: 'Whitepaper', icon: <FuturisticBrain className="w-8 h-8 text-blue-500" />, link: '/resources/future-of-ai' },
        { title: 'Getting Started with LawYan', type: 'Article', icon: <DynamicFlag className="w-8 h-8 text-blue-500" />, link: '/resources/getting-started' },
        { title: 'Case Study: Miller & Associates', type: 'Customer Story', icon: <GrowthChart className="w-8 h-8 text-blue-500" />, link: '/resources/case-study-miller' },
        { title: 'AI Ethics in Legal Practice', type: 'Guide', icon: <EthicsScale className="w-8 h-8 text-blue-500" />, link: '/resources/ai-ethics' },
    ];

    return (
        <div className="pt-32 pb-20 min-h-screen bg-bgMain text-textMain font-sans">
            <div className="max-w-7xl mx-auto px-6">
                <div className="max-w-3xl mb-16">
                    <TextGenerateEffect words="Insights and Intelligence" className="font-serif font-medium mb-6 leading-tight text-textMain" />
                    <p className="text-xl text-textMuted font-sans leading-relaxed mt-4">Everything you need to navigate the intersection of law and technology.</p>
                </div>

                <HoverEffect items={resources.map(r => ({
                    title: r.title,
                    description: `A comprehensive ${r.type} exploring key trends and strategies for modern legal teams.`,
                    link: r.link,
                    icon: r.icon
                }))} />
            </div>
        </div>
    );
};

export default ResourcesPage;
