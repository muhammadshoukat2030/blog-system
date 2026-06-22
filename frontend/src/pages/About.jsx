import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="w-full bg-slate-50 dark:bg-[#030712] text-left transition-colors duration-300 min-h-screen selection:bg-blue-500 selection:text-white">
            
            {/* Top Decorative Vector Line */}
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 dark:via-gray-800 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-28 block">
                
                {/* 1. HERO SHOWCASE SECTION */}
                <header className="relative space-y-4 max-w-4xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/50 text-[11px] font-mono font-bold uppercase text-blue-600 dark:text-blue-400 tracking-wider">
                        <span className="h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-500 animate-pulse"></span>
                        Corporate Identity Wire // Platform Verification Active
                    </div>
                    
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-slate-900 dark:text-white tracking-tight leading-none uppercase">
                        The Global <br className="hidden sm:inline" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                            Information Matrix
                        </span>
                    </h1>
                    
                    <p className="text-slate-600 dark:text-gray-400 text-sm md:text-base lg:text-lg max-w-3xl leading-relaxed pt-2">
                        Chronicle Global operates as an elite, high-fidelity ecosystem bridging the gap between raw decentralized data metrics and real-time analytical reporting. Powered by an asynchronous server engine and premium interface nodes.
                    </p>

                    {/* Architectural Accent Line */}
                    <div className="pt-6">
                        <div className="w-40 h-[4px] bg-gradient-to-r from-blue-600 via-indigo-600 to-transparent rounded-full"></div>
                    </div>
                </header>


                {/* 2. SPLIT INTERACTION GRID (WHO WE ARE & TECH VALUES) */}
                <section className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    
                    {/* Editorial Description (Spans 2 Columns) */}
                    <div className="lg:col-span-2 space-y-8 text-slate-600 dark:text-gray-300 leading-relaxed text-sm md:text-base">
                        <div className="space-y-4">
                            <h2 className="text-xs font-mono font-black tracking-widest text-slate-400 dark:text-gray-500 uppercase">
                                [01] Core Mandate
                            </h2>
                            <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
                                Securing Pristine Data Delivery
                            </h3>
                            <p>
                                Welcome to <strong className="text-slate-900 dark:text-white font-black">Chronicle Global</strong>. We design, host, and accelerate international media distribution frames. Built over custom Express pipelines and high-velocity server instances, our platform ensures every system log is distributed without synchronization delay or format degradation.
                            </p>
                            <p>
                                By structural design, our frontend layer isolates public reads from our administrative schema clusters. This ensures absolute protection against payload injection vectors while providing seamless server responses for international media groups and technical entities alike.
                            </p>
                        </div>

                        {/* Blockquote Segment */}
                        <div className="border-l-4 border-indigo-600 dark:border-indigo-500 bg-slate-100 dark:bg-[#0b1120] p-5 rounded-r-2xl transition-all duration-300">
                            <p className="text-xs md:text-sm font-medium italic text-slate-700 dark:text-gray-300 font-mono">
                                "Modern digital distribution demands absolute data immutability. Our framework maps global reporting logs onto optimized database schemas to protect transparency at scale."
                            </p>
                        </div>
                    </div>

                    {/* Tech Architecture Stack Card */}
                    <div className="bg-white dark:bg-[#090d16] p-6 md:p-8 rounded-3xl border border-slate-200/80 dark:border-gray-800/80 shadow-2xl space-y-6 relative overflow-hidden group hover:border-blue-500/50 transition-colors duration-300">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full blur-3xl group-hover:bg-blue-600/10 transition-all"></div>
                        
                        <div className="space-y-2">
                            <h3 className="text-xs font-mono font-black tracking-widest text-blue-600 dark:text-blue-400 uppercase">
                                // Engineering Stack
                            </h3>
                            <h4 className="text-lg font-black text-slate-900 dark:text-white uppercase">
                                Platform Architecture
                            </h4>
                        </div>

                        <div className="space-y-4 pt-2">
                            {/* Node 1 */}
                            <div className="flex items-start gap-3">
                                <div className="p-2 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 font-mono text-xs font-bold">Node</div>
                                <div>
                                    <h5 className="text-xs font-bold text-slate-900 dark:text-white">Express Backend Core</h5>
                                    <p className="text-[11px] text-slate-400 leading-normal">Asynchronous server clustering handling secure editorial request routes.</p>
                                </div>
                            </div>
                            {/* Node 2 */}
                            <div className="flex items-start gap-3">
                                <div className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 font-mono text-xs font-bold">Data</div>
                                <div>
                                    <h5 className="text-xs font-bold text-slate-900 dark:text-white">MongoDB Layer</h5>
                                    <p className="text-[11px] text-slate-400 leading-normal">Indexed, flexible model design optimizing data schema reads and writes.</p>
                                </div>
                            </div>
                            {/* Node 3 */}
                            <div className="flex items-start gap-3">
                                <div className="p-2 rounded-xl bg-purple-50 dark:bg-purple-950/50 text-purple-600 dark:text-purple-400 font-mono text-xs font-bold">View</div>
                                <div>
                                    <h5 className="text-xs font-bold text-slate-900 dark:text-white">Tailwind Matrix Design</h5>
                                    <p className="text-[11px] text-slate-400 leading-normal">Fluid interface rendering with high-speed theme evaluation logic.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>


                {/* 3. LIVE PERFORMANCE TRACKERS */}
                <section className="space-y-8">
                    <div className="text-center md:text-left space-y-1">
                        <h4 className="text-xs font-mono font-black tracking-widest text-slate-400 dark:text-gray-500 uppercase">// OPERATIONAL telemetry</h4>
                        <h3 className="text-2xl font-black uppercase text-slate-900 dark:text-white tracking-tight">System Performance Benchmarks</h3>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Card 1 */}
                        <div className="bg-white dark:bg-[#090d16] border border-slate-200/60 dark:border-gray-800/60 p-6 rounded-2xl shadow-sm group hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-1">
                            <div className="text-4xl font-black text-blue-600 dark:text-blue-500 tracking-tight">100%</div>
                            <div className="text-xs font-bold text-slate-800 dark:text-white mt-3 uppercase tracking-wider font-mono">Data Veracity</div>
                            <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">Cryptographic validation on all database entry endpoints.</p>
                        </div>
                        {/* Card 2 */}
                        <div className="bg-white dark:bg-[#090d16] border border-slate-200/60 dark:border-gray-800/60 p-6 rounded-2xl shadow-sm group hover:border-emerald-500/40 transition-all duration-300 hover:-translate-y-1">
                            <div className="text-4xl font-black text-emerald-600 dark:text-emerald-500 tracking-tight">&lt; 45ms</div>
                            <div className="text-xs font-bold text-slate-800 dark:text-white mt-3 uppercase tracking-wider font-mono">Query Pipeline</div>
                            <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">Optimized MERN database response time metrics.</p>
                        </div>
                        {/* Card 3 */}
                        <div className="bg-white dark:bg-[#090d16] border border-slate-200/60 dark:border-gray-800/60 p-6 rounded-2xl shadow-sm group hover:border-purple-500/40 transition-all duration-300 hover:-translate-y-1">
                            <div className="text-4xl font-black text-purple-600 dark:text-purple-500 tracking-tight">24/7/365</div>
                            <div className="text-xs font-bold text-slate-800 dark:text-white mt-3 uppercase tracking-wider font-mono">Wire Feed</div>
                            <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">Continuous delivery cycles across operational platforms.</p>
                        </div>
                        {/* Card 4 */}
                        <div className="bg-white dark:bg-[#090d16] border border-slate-200/60 dark:border-gray-800/60 p-6 rounded-2xl shadow-sm group hover:border-pink-500/40 transition-all duration-300 hover:-translate-y-1">
                            <div className="text-4xl font-black text-pink-600 dark:text-pink-500 tracking-tight">Secure</div>
                            <div className="text-xs font-bold text-slate-800 dark:text-white mt-3 uppercase tracking-wider font-mono">Access Layer</div>
                            <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">Advanced data shielding protecting administration panels.</p>
                        </div>
                    </div>
                </section>


                {/* 4. INTERNATIONAL DESK BUREAU MATRIX */}
                <section className="space-y-6">
                    <div className="border-l-4 border-blue-600 dark:border-blue-500 pl-4 space-y-1">
                        <h4 className="text-xs font-mono font-black uppercase tracking-wider text-blue-600 dark:text-blue-500">Global Hub Operations</h4>
                        <h3 className="text-2xl font-black uppercase text-slate-900 dark:text-white tracking-tight">Bureaus & Operational Vectors</h3>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* London Card */}
                        <div className="p-6 rounded-2xl border border-slate-200 dark:border-gray-800 bg-white dark:bg-[#090d16] space-y-4 group hover:shadow-xl transition-all duration-300">
                            <div className="flex justify-between items-center">
                                <span className="text-2xl">🇬🇧</span>
                                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-gray-800 text-slate-500 dark:text-gray-400 uppercase">GMT Desk</span>
                            </div>
                            <div className="space-y-1">
                                <h5 className="font-black text-slate-900 dark:text-white text-base uppercase tracking-tight">UK Editorial Bureau</h5>
                                <p className="text-xs text-slate-500 dark:text-gray-400 leading-relaxed">
                                    Monitoring European enterprise guidelines, banking system variations, and high-level Western analytical logs.
                                </p>
                            </div>
                        </div>

                        {/* Dubai Card */}
                        <div className="p-6 rounded-2xl border border-slate-200 dark:border-gray-800 bg-white dark:bg-[#090d16] space-y-4 group hover:shadow-xl transition-all duration-300">
                            <div className="flex justify-between items-center">
                                <span className="text-2xl">🇦🇪</span>
                                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-gray-800 text-slate-500 dark:text-gray-400 uppercase">GST Desk</span>
                            </div>
                            <div className="space-y-1">
                                <h5 className="font-black text-slate-900 dark:text-white text-base uppercase tracking-tight">UAE Media Desk</h5>
                                <p className="text-xs text-slate-500 dark:text-gray-400 leading-relaxed">
                                    Processing transcontinental shipping data, digital asset developments, and Middle-Eastern economic logs.
                                </p>
                            </div>
                        </div>

                        {/* US Card */}
                        <div className="p-6 rounded-2xl border border-slate-200 dark:border-gray-800 bg-white dark:bg-[#090d16] space-y-4 group hover:shadow-xl transition-all duration-300">
                            <div className="flex justify-between items-center">
                                <span className="text-2xl">🇺🇸</span>
                                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-gray-800 text-slate-500 dark:text-gray-400 uppercase">EST Desk</span>
                            </div>
                            <div className="space-y-1">
                                <h5 className="font-black text-slate-900 dark:text-white text-base uppercase tracking-tight">US Editorial Wire</h5>
                                <p className="text-xs text-slate-500 dark:text-gray-400 leading-relaxed">
                                    Handling deep software technological breakthroughs, distributed cloud scaling, and data privacy policies.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>


                {/* 5. ELITE ACTION CALL (CTA) */}
                <section className="bg-gradient-to-r from-slate-900 via-[#0b1329] to-slate-950 border border-slate-800 p-8 md:p-12 rounded-[2rem] flex flex-col lg:flex-row justify-between items-center gap-8 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.1),transparent)] pointer-events-none"></div>
                    
                    <div className="space-y-3 text-center lg:text-left relative z-10">
                        <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight uppercase leading-none">
                            Connect to the Live Database
                        </h3>
                        <p className="text-slate-400 text-xs md:text-sm max-w-2xl leading-relaxed">
                            Access our optimized distribution matrix. We update system logs, architectural studies, and corporate press streams directly from our live workspace environment.
                        </p>
                    </div>

                    <div className="relative z-10 shrink-0">
                        <Link 
                            to="/blogs" 
                            className="no-underline bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:opacity-95 text-white text-xs font-bold uppercase tracking-wider px-8 py-4 rounded-xl shadow-lg shadow-blue-950/50 transition-all duration-200 whitespace-nowrap block text-center group"
                        >
                            Explore Global Feed <span className="inline-block transform group-hover:translate-x-1 transition-transform ml-1">→</span>
                        </Link>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default About;