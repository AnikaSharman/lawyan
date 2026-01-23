import React from 'react';
import { Check } from 'lucide-react';
import { PRICING_TIERS } from '../constants';
import { Button } from './ui/MovingBorder';

const Pricing: React.FC = () => {
    return (
        <section id="pricing" className="py-12 bg-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
                    {PRICING_TIERS.map((tier, idx) => (
                        <div key={tier.name} className="h-full">
                            {tier.recommended ? (
                                <Button
                                    borderRadius="1.5rem"
                                    className="bg-slate-900 text-white border-slate-800"
                                    duration={3000}
                                    containerClassName="h-full w-full"
                                >
                                    <div className="flex flex-col p-8 h-full w-full bg-slate-900 rounded-[1.4rem]">
                                        <div className="mb-8">
                                            <div className="text-sm font-bold uppercase tracking-wider mb-2 text-blue-400">
                                                {tier.name}
                                            </div>
                                            <div className="flex items-baseline gap-1 mb-4">
                                                <span className="text-5xl font-sans font-bold tracking-tight text-white">{tier.price}</span>
                                                {tier.price !== 'Custom' && <span className="text-lg text-slate-400">/mo</span>}
                                            </div>
                                            <p className="text-sm leading-relaxed text-slate-300">
                                                {tier.description}
                                            </p>
                                        </div>

                                        <div className="flex-1 pt-6 mb-8 border-t border-slate-800">
                                            <ul className="space-y-4">
                                                {tier.features.map(feature => (
                                                    <li key={feature} className="flex items-start gap-3">
                                                        <div className="mt-0.5 w-5 h-5 flex items-center justify-center rounded-full bg-slate-800">
                                                            <Check className="w-3 h-3 text-blue-400" />
                                                        </div>
                                                        <span className="text-sm font-medium text-slate-200">{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <button className="w-full py-4 rounded-xl font-bold text-sm transition-all shadow-sm bg-blue-600 text-white hover:bg-blue-500">
                                            Start Free Trial
                                        </button>
                                    </div>
                                </Button>
                            ) : (
                                <div className="flex flex-col p-8 rounded-2xl transition-all duration-300 relative bg-white text-textMain border border-black/5 hover:border-black/10 hover:shadow-xl h-full">
                                    <div className="mb-8">
                                        <div className="text-sm font-bold uppercase tracking-wider mb-2 text-accent-primary">
                                            {tier.name}
                                        </div>
                                        <div className="flex items-baseline gap-1 mb-4">
                                            <span className="text-5xl font-sans font-bold tracking-tight">{tier.price}</span>
                                            {tier.price !== 'Custom' && <span className="text-lg text-textMuted">/mo</span>}
                                        </div>
                                        <p className="text-sm leading-relaxed text-textMuted">
                                            {tier.description}
                                        </p>
                                    </div>

                                    <div className="flex-1 pt-6 mb-8 border-t border-current border-opacity-10">
                                        <ul className="space-y-4">
                                            {tier.features.map(feature => (
                                                <li key={feature} className="flex items-start gap-3">
                                                    <div className="mt-0.5 w-5 h-5 flex items-center justify-center rounded-full bg-blue-50">
                                                        <Check className="w-3 h-3 text-accent-primary" />
                                                    </div>
                                                    <span className="text-sm font-medium">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <button className="w-full py-4 rounded-xl font-bold text-sm transition-all shadow-sm bg-textMain text-white hover:bg-gray-800">
                                        Contact Sales
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;