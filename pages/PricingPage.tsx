import React from 'react';
import Pricing from '../components/Pricing';

const PricingPage: React.FC = () => {
    return (
        <div className="pt-32 pb-20 min-h-screen bg-bgMain text-textMain font-sans">
            <div className="max-w-7xl mx-auto px-6 py-12 text-center text-textMain">
                <h1 className="text-5xl md:text-6xl font-serif font-medium mb-6">Simple, Transparent Pricing</h1>
                <p className="text-xl text-textMuted max-w-3xl mx-auto mb-16">
                    Choose the plan that fits your practice. All plans include our core AI relationship intelligence.
                </p>
            </div>
            <Pricing />
        </div>
    );
};

export default PricingPage;
