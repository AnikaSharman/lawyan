import React from 'react';

const AboutPage: React.FC = () => {
    return (
        <div className="pt-32 pb-20 min-h-screen bg-background">
            <div className="max-w-5xl mx-auto px-6">
                <div className="max-w-3xl">
                    <h1 className="text-5xl md:text-6xl font-serif font-medium mb-8 leading-[1.1] text-textMain tracking-tight">Our Mission is to <span className="text-gray-400 italic font-normal">Modernize</span> Justice.</h1>
                    <p className="text-2xl text-textMuted mb-12 leading-relaxed">LawYan was founded by legal technologists and engineers who believed that software should work as intuitively as a seasoned partner.</p>
                </div>

                <div className="w-full aspect-video rounded-3xl overflow-hidden mb-20 shadow-2xl">
                    <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" className="w-full h-full object-cover" alt="Office" />
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
