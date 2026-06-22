import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="w-full bg-white dark:bg-[#090d16] border-t border-slate-200 dark:border-gray-800/80 mt-24 block text-left transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                
                {/* Upper Mega Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-slate-200 dark:border-gray-800/60">
                    
                    {/* Column 1: Core Branding Matrix */}
                    <div className="space-y-4">
                        <Link to="/" className="flex items-center gap-3 no-underline">
                            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center shadow-xl font-black text-white text-xs tracking-normal">
                                CG
                            </div>
                            <div>
                                <h3 className="text-sm font-black tracking-tight text-slate-900 dark:text-white uppercase leading-none">CHRONICLE GLOBAL</h3>
                                <span className="text-[9px] font-mono tracking-widest text-blue-500 block font-bold uppercase mt-1">INTERNATIONAL MEDIA MATRIX</span>
                            </div>
                        </Link>
                        <p className="text-xs text-slate-500 dark:text-gray-400 leading-relaxed max-w-xs">
                            Global broadcasting wire distribution delivering real-time geopolitical logs, tech intelligence, and multi-regional reporting.
                        </p>
                        
                        {/* Dynamic Social Agency Nodes */}
                        <div className="flex items-center gap-4 pt-2">
                            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-500 dark:text-gray-500 dark:hover:text-blue-400 transition-colors" title="Twitter / X Channel">
                                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-500 dark:text-gray-500 dark:hover:text-blue-400 transition-colors" title="LinkedIn Corporate">
                                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                            </a>
                            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-500 dark:text-gray-500 dark:hover:text-blue-400 transition-colors" title="Open Source Hub">
                                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.061.069-.061 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"/></svg>
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Regional Bureau Desks */}
                    <div className="space-y-4">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-gray-500">News Bureaus</h4>
                        <div className="flex flex-col gap-2.5 text-xs font-semibold">
                            <Link to="/" className="text-slate-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 no-underline transition duration-200">🌐 Global Edition</Link>
                            <Link to="/blogs" className="text-slate-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 no-underline transition duration-200">🇬🇧 UK Bureau Feed</Link>
                            <Link to="/blogs" className="text-slate-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 no-underline transition duration-200">🇦🇪 UAE Media Desk</Link>
                            <Link to="/blogs" className="text-slate-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 no-underline transition duration-200">🇺🇸 US Editorial Wire</Link>
                        </div>
                    </div>

                    {/* Column 3: Navigation Sitemap */}
                    <div className="space-y-4">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-gray-500">Navigation Matrix</h4>
                        <div className="flex flex-col gap-2.5 text-xs font-semibold">
                            <Link to="/" className="text-slate-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 no-underline transition duration-200">Home Feed</Link>
                            <Link to="/about" className="text-slate-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 no-underline transition duration-200">About Matrix</Link>
                            <Link to="/blogs" className="text-slate-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 no-underline transition duration-200">Editorial Stream</Link>
                            <Link to="/contact" className="text-slate-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 no-underline transition duration-200">Secure Newsroom</Link>
                        </div>
                    </div>

                    {/* Column 4: Newsletter Wire Feed */}
                    <div className="space-y-4">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-gray-500">Newswire Dispatch</h4>
                        <p className="text-[11px] text-slate-500 dark:text-gray-400 leading-relaxed">
                            Subscribe to receive high-alert global broadcast reports and analytical media sheets instantly.
                        </p>
                        <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-2">
                            <input 
                                type="email" 
                                required
                                placeholder="name@newsroom.com" 
                                className="w-full bg-slate-50 dark:bg-[#111827]/60 border border-slate-200 dark:border-gray-800 rounded-xl px-3 py-2 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors"
                            />
                            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-xl text-xs font-bold transition shadow-md shadow-blue-600/10">
                                Join
                            </button>
                        </form>
                    </div>

                </div>

                {/* Bottom Row: Licensing, Time and System Metrics */}
                <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] font-medium tracking-normal text-slate-400 dark:text-gray-500">
                    <p className="order-2 sm:order-1">
                        © {new Date().getFullYear()} <span className="text-slate-900 dark:text-white font-bold">Chronicle Global Media Network</span>. All Rights Reserved.
                    </p>
                    <p className="order-1 sm:order-2 font-mono text-slate-500 dark:text-gray-400 bg-slate-50 dark:bg-gray-950/40 px-3 py-1 rounded-md border border-slate-200 dark:border-gray-850/60 flex items-center gap-1.5 select-none">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        Vite Core & Tailwind Newsroom Engine Standard
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;