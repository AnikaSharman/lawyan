import React from 'react';
import { Check } from 'lucide-react';
import { PRICING_TIERS } from '../constants';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-medium mb-4">Simple, transparent pricing</h2>
            <p className="text-textMuted text-lg max-w-2xl mx-auto">Start with a 14-day free trial. No credit card required.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {PRICING_TIERS.map((tier, idx) => (
                <div 
                    key={tier.name}
                    className={`flex flex-col p-8 rounded-2xl transition-all duration-300 relative ${
                        tier.recommended 
                        ? 'bg-textMain text-white shadow-2xl scale-105 z-10 border border-transparent' 
                        : 'bg-white text-textMain border border-black/5 hover:border-black/10 hover:shadow-xl'
                    }`}
                >
                    <div className="mb-8">
                        <div className={`text-sm font-bold uppercase tracking-wider mb-2 ${tier.recommended ? 'text-gray-400' : 'text-accent-primary'}`}>
                            {tier.name}
                        </div>
                        <div className="flex items-baseline gap-1 mb-4">
                            <span className="text-5xl font-sans font-bold tracking-tight">{tier.price}</span>
                            {tier.price !== 'Custom' && <span className={`text-lg ${tier.recommended ? 'text-gray-400' : 'text-textMuted'}`}>/mo</span>}
                        </div>
                        <p className={`text-sm leading-relaxed ${tier.recommended ? 'text-gray-300' : 'text-textMuted'}`}>
                            {tier.description}
                        </p>
                    </div>

                    <div className="flex-1 pt-6 mb-8 border-t border-current border-opacity-10">
                        <ul className="space-y-4">
                            {tier.features.map(feature => (
                                <li key={feature} className="flex items-start gap-3">
                                    <div className={`mt-0.5 w-5 h-5 flex items-center justify-center rounded-full ${tier.recommended ? 'bg-white/20' : 'bg-blue-50'}`}>
                                        <Check className={`w-3 h-3 ${tier.recommended ? 'text-white' : 'text-accent-primary'}`} />
                                    </div>
                                    <span className="text-sm font-medium">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <button className={`w-full py-4 rounded-xl font-bold text-sm transition-all shadow-sm ${
                        tier.recommended 
                        ? 'bg-white text-textMain hover:bg-gray-100' 
                        : 'bg-textMain text-white hover:bg-gray-800'
                    }`}>
                        {tier.recommended ? 'Start Free Trial' : 'Contact Sales'}
                    </button>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;