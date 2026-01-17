import React from 'react';
import Pricing from '../components/Pricing';

const PricingPage: React.FC = () => {
    return (
        <div className="pt-24 min-h-screen bg-background">
            <div className="max-w-7xl mx-auto px-6 py-20 text-center">
                <h1 className="text-5xl md:text-6xl font-serif font-medium mb-6">Simple, Transparent Pricing</h1>
                <p className="text-xl text-textMuted max-w-3xl mx-auto">
                    Choose the plan that fits your practice. All plans include our core AI relationship intelligence.
                </p>
            </div>
            <Pricing />
        </div>
    );
};

export default PricingPage;
