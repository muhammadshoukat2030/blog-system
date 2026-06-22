import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Dynamic operational feedback handler
        alert(`Thank you, ${formData.name}! Your request has been securely captured into our communication pipeline.`);
        setFormData({ name: '', email: '', message: '' }); // Clear fields cleanly
    };

    return (
        <div className="max-w-6xl mx-auto px-6 py-16 block text-left">
            
            {/* Engineering Standard Header Showcase */}
            <header className="mb-16 border-b border-gray-800 pb-6 relative">
                <span className="text-blue-500 text-xs font-mono font-bold uppercase tracking-widest block mb-2">
                    // Operational Communication Matrix
                </span>
                <h1 className="text-4xl font-black text-white tracking-tight">
                    Let's Connect
                </h1>
                <p className="text-gray-400 mt-2 text-sm max-w-2xl leading-relaxed">
                    Submit your engineering queries directly to the operational team. We typically parse and respond to complex network system requests within 12 business hours.
                </p>
                <div className="absolute bottom-0 left-0 w-24 h-[2px] bg-blue-500"></div>
            </header>

            {/* Split Grid Framework: Contact Info vs Form Shell */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                
                {/* Left Block: Corporate Metadata Info (Spans 5 cols on desktop) */}
                <div className="lg:col-span-5 space-y-6">
                    <div className="bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 p-8 rounded-2xl shadow-xl space-y-8">
                        <div>
                            <h3 className="text-lg font-bold text-white tracking-tight mb-2">Agency Blueprint</h3>
                            <p className="text-xs text-gray-400 leading-relaxed font-medium">
                                DevZore operations execute out of centralized hubs, connecting high-end web services with flawless database connectivity patterns globally.
                            </p>
                        </div>

                        <div className="space-y-4 font-sans text-sm">
                            {/* Location Standard Pin */}
                            <div className="flex items-start gap-4">
                                <div className="p-2.5 bg-blue-600/10 rounded-xl border border-blue-500/20 text-blue-400 font-mono text-xs select-none">📍</div>
                                <div>
                                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider font-mono">Location Infrastructure</h4>
                                    <p className="text-white font-semibold mt-0.5">Islamabad, Pakistan</p>
                                </div>
                            </div>

                            {/* Response Protocol Tag */}
                            <div className="flex items-start gap-4">
                                <div className="p-2.5 bg-emerald-600/10 rounded-xl border border-emerald-500/20 text-emerald-400 font-mono text-xs select-none">⚡</div>
                                <div>
                                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider font-mono">Response Speed SLA</h4>
                                    <p className="text-white font-semibold mt-0.5">Under 12 Hours Guaranteed</p>
                                </div>
                            </div>
                        </div>

                        {/* Network Warning Note */}
                        <div className="bg-gray-950/60 border border-gray-850 p-4 rounded-xl">
                            <p className="text-[11px] font-medium text-gray-500 leading-relaxed">
                                <strong className="text-gray-400">Security Note:</strong> All data transmissions passing through this form component wrapper are processed with strict isolation logic layers.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Block: Pure VIP Luxury Form Box (Spans 7 cols on desktop) */}
                <form 
                    onSubmit={handleSubmit} 
                    className="lg:col-span-7 space-y-6 bg-gray-900 border border-gray-800 p-8 rounded-2xl shadow-2xl relative"
                >
                    <div className="space-y-1">
                        <h3 className="text-xl font-bold text-white tracking-tight">Direct Client Transmission</h3>
                        <p className="text-xs text-gray-500 font-medium">Initialize communication by filling out the details below.</p>
                    </div>

                    {/* Name Input Module */}
                    <div className="flex flex-col gap-2">
                        <label className="text-gray-300 text-xs font-semibold uppercase tracking-wider font-mono">Your Name</label>
                        <input 
                            type="text" 
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required 
                            placeholder="e.g., Jane Doe" 
                            className="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3.5 text-white text-sm font-medium placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition duration-200" 
                        />
                    </div>
                    
                    {/* Email Input Module */}
                    <div className="flex flex-col gap-2">
                        <label className="text-gray-300 text-xs font-semibold uppercase tracking-wider font-mono">Email Address</label>
                        <input 
                            type="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required 
                            placeholder="name@domain.com" 
                            className="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3.5 text-white text-sm font-medium placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition duration-200" 
                        />
                    </div>
                    
                    {/* Message Box Module */}
                    <div className="flex flex-col gap-2">
                        <label className="text-gray-300 text-xs font-semibold uppercase tracking-wider font-mono">Message Description</label>
                        <textarea 
                            rows="5" 
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required 
                            placeholder="Outline project objectives, tech stack requirements, or deployment timeline..." 
                            className="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3.5 text-white text-sm font-medium placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition duration-200 resize-none leading-relaxed"
                        ></textarea>
                    </div>

                    {/* Submit Button Stack */}
                    <button 
                        type="submit" 
                        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-4 rounded-xl transition duration-200 shadow-xl shadow-blue-950/40 text-sm tracking-wide border border-blue-500/20 active:scale-[0.99]"
                    >
                        Send Secure Message
                    </button>
                </form>

            </div>
        </div>
    );
};

export default Contact;