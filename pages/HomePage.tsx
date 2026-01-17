import React from 'react';
import Hero from '../components/Hero';
import LogoTicker from '../components/LogoTicker';

const HomePage: React.FC = () => {
    return (
        <>
            <Hero />
            <LogoTicker />
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-serif font-medium mb-6">Relationship intelligence for modern law.</h2>
                    <p className="text-xl text-textMuted max-w-2xl mx-auto">
                        The CRM that thinks like a partner. Automate intake, organize cases, and predict outcomes with an OS designed for the future of legal practice.
                    </p>
                </div>
            </section>
        </>
    );
};

export default HomePage;
