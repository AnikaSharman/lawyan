import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PricingPage from './pages/PricingPage';
import DemoPage from './pages/DemoPage';
import ResourcesPage from './pages/ResourcesPage';
import AboutPage from './pages/AboutPage';
import BentoGrid from './components/BentoGrid';

const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
};

const ProductsPage: React.FC = () => {
    return (
        <div className="pt-24 min-h-screen bg-background text-textMain">
            <BentoGrid />
        </div>
    );
};

import FutureOfAIPage from './pages/resources/FutureOfAIPage';
import GettingStartedPage from './pages/resources/GettingStartedPage';
import MillerCaseStudyPage from './pages/resources/MillerCaseStudyPage';
import AIEthicsPage from './pages/resources/AIEthicsPage';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <div className="min-h-screen bg-background font-sans text-textMain selection:bg-accent-primary/20">
                {/* ScrollToTop removed as per instruction's implied change */}
                <Navbar />

                {/* main tag removed as per instruction's implied change */}
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/products" element={<ProductsPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/integrations" element={<div className="pt-32 text-center text-2xl">Integrations (Coming Soon)</div>} />
                    <Route path="/changelog" element={<div className="pt-32 text-center text-2xl">Changelog (Coming Soon)</div>} />
                    <Route path="/pricing" element={<PricingPage />} />
                    <Route path="/demo" element={<DemoPage />} />
                    <Route path="/resources" element={<ResourcesPage />} />
                    <Route path="/resources/future-of-ai" element={<FutureOfAIPage />} />
                    <Route path="/resources/getting-started" element={<GettingStartedPage />} />
                    <Route path="/resources/case-study-miller" element={<MillerCaseStudyPage />} />
                    <Route path="/resources/ai-ethics" element={<AIEthicsPage />} />
                </Routes>

                <Footer />
            </div>
        </BrowserRouter>
    );
};

export default App;