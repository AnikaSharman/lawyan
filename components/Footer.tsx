import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="bg-surface pt-20 pb-10 px-6 border-t border-black/5">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">

                    <div className="md:col-span-5">
                        <Link to="/" className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 bg-textMain text-white rounded-lg flex items-center justify-center font-serif font-bold text-lg">L</div>
                            <span className="font-sans font-bold text-xl text-textMain">LawYan</span>
                        </Link>
                        <p className="text-textMuted leading-relaxed max-w-sm mb-6">
                            The intelligent operating system for forward-thinking legal teams. Automate the mundane, focus on the extraordinary.
                        </p>
                        <div className="flex gap-4">
                            <SocialIcon />
                            <SocialIcon />
                            <SocialIcon />
                        </div>
                    </div>

                    <div className="md:col-span-2">
                        <h4 className="font-semibold text-textMain mb-4">Product</h4>
                        <ul className="space-y-3 text-textMuted text-sm">
                            <li><Link to="/products" className="hover:text-accent-primary transition-colors">Features</Link></li>
                        </ul>
                    </div>

                    {/* Column 2 */}
                    <div className="md:col-span-2">
                        <h4 className="font-semibold text-textMain mb-4">Platform</h4>
                        <ul className="space-y-3 text-textMuted text-sm">
                            <li><Link to="/products" className="hover:text-accent-primary transition-colors">Products</Link></li>
                            <li><Link to="/integrations" className="hover:text-accent-primary transition-colors">Integrations</Link></li>
                            <li><Link to="/changelog" className="hover:text-accent-primary transition-colors">Changelog</Link></li>
                            <li><Link to="/pricing" className="hover:text-accent-primary transition-colors">Pricing</Link></li>
                            <li><Link to="/demo" className="hover:text-accent-primary transition-colors">Book a Demo</Link></li>
                        </ul>
                    </div>

                    <div className="md:col-span-2">
                        <h4 className="font-semibold text-textMain mb-4">Company</h4>
                        <ul className="space-y-3 text-textMuted text-sm">
                            <li><Link to="/about" className="hover:text-accent-primary transition-colors">About</Link></li>
                            <li><Link to="/resources" className="hover:text-accent-primary transition-colors">Blog</Link></li>
                            <li><a href="#" className="hover:text-accent-primary transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-accent-primary transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div className="md:col-span-3">
                        <h4 className="font-semibold text-textMain mb-4">Subscribe</h4>
                        <p className="text-xs text-textMuted mb-4">Join our newsletter for legal tech insights.</p>
                        <div className="flex gap-2">
                            <input type="email" placeholder="Email address" className="bg-white border border-black/10 rounded-lg px-3 py-2 w-full text-sm outline-none focus:border-accent-primary" />
                            <button className="bg-textMain text-white rounded-lg px-4 py-2 text-sm font-medium hover:bg-gray-800">Submit</button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-black/5 text-sm text-textMuted">
                    <p>© 2026 LawYan Inc.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-textMain">Privacy Policy</a>
                        <a href="#" className="hover:text-textMain">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

const SocialIcon = () => (
    <div className="w-8 h-8 rounded-full bg-white border border-black/5 flex items-center justify-center text-textMuted hover:text-textMain hover:border-black/20 cursor-pointer transition-all">
        <div className="w-4 h-4 bg-current rounded-sm opacity-50"></div>
    </div>
)

export default Footer;