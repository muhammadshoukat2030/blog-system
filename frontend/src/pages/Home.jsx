import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [blogs, setBlogs] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState('Global');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // API endpoint handler configuration (Aapke Node Port target par mapping)
    fetch('http://localhost:5000/api/blogs') 
      .then(res => res.json())
      .then(data => {
        setBlogs(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("API Fetch Error, using mock schema data instead", err);
        // Fallback UI structures taake dashboard khali na dikhe
        setBlogs([
          { _id: "1", title: "UAE Virtual Economic Engine Set to Launch in Dubai Workspace", description: "The United Arab Emirates introduces cutting-edge tech integration architectures scaling regional production pipelines natively.", category: "Business & Finance", author: "Global Bureau Desk", viewsCount: 1420, likesCount: 412, createdAt: new Date() },
          { _id: "2", title: "UK Technology Clusters Announce Next-Gen AI Grid Projects", description: "London research teams deploy high performance data modules for secure enterprise automation pipelines across Europe.", category: "Tech & Gadgets", author: "London Bureau", viewsCount: 980, likesCount: 235, createdAt: new Date() },
          { _id: "3", title: "US Market Liquidity Trends Amid Multi-Channel Systems", description: "Silicon Valley developers push forward deep learning system nodes to balance trade evaluation structures securely.", category: "Politics & Global Affairs", author: "Washington Desk", viewsCount: 2450, likesCount: 890, createdAt: new Date() }
        ]);
        setLoading(false);
      });
  }, []);

  const regions = ['Global', 'UK Bureau', 'UAE Desk', 'US Edition'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-left block">
      
      {/* Bureau Desk Filtering Line Selector */}
      <div className="flex items-center gap-3 border-b border-slate-200 dark:border-gray-800/80 pb-4 mb-8 overflow-x-auto">
        {regions.map((region) => (
          <button
            key={region}
            onClick={() => setSelectedRegion(region)}
            className={`px-4 py-2 text-[10px] uppercase font-black tracking-widest rounded-xl transition-all ${
              selectedRegion === region 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/10' 
                : 'bg-slate-100 dark:bg-gray-900 text-slate-600 dark:text-gray-400 hover:bg-slate-200 dark:hover:bg-gray-800'
            }`}
          >
            {region}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="text-center py-20 font-mono text-xs text-gray-500 animate-pulse">Synchronizing Global Stream Matrix Modules...</div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Top Featured News Item */}
          <div className="lg:col-span-2 space-y-6">
            {blogs.length > 0 && (
              <article className="bg-white dark:bg-[#0b111e] border border-slate-200 dark:border-gray-800 rounded-3xl overflow-hidden shadow-sm dark:shadow-2xl group flex flex-col justify-between">
                <div className="relative aspect-[16/9] bg-slate-900 overflow-hidden">
                  <img src={blogs[0].imageUrl || "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1200"} alt="Top Story" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90" />
                  <span className="absolute top-4 left-4 bg-blue-600 text-white font-mono font-bold text-[9px] uppercase tracking-widest px-2.5 py-1 rounded-md">{blogs[0].category}</span>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 text-xs font-mono text-slate-400 dark:text-gray-500 mb-3">
                    <span>✍️ {blogs[0].author}</span>
                    <span>•</span>
                    <span>📅 {new Date(blogs[0].createdAt).toLocaleDateString()}</span>
                  </div>
                  <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight leading-tight group-hover:text-blue-500 transition mb-3">{blogs[0].title}</h2>
                  <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed mb-6">{blogs[0].description}</p>
                  <div className="flex items-center justify-between border-t border-slate-100 dark:border-gray-800/60 pt-5">
                    <span className="text-xs font-mono text-blue-500 font-bold">👁️ {blogs[0].viewsCount || 0} Dynamic Hits</span>
                    <Link to={`/blog/${blogs[0]._id}`} className="text-xs uppercase tracking-widest font-black text-slate-900 dark:text-white hover:text-blue-500 transition">Access Full Wire Report →</Link>
                  </div>
                </div>
              </article>
            )}
          </div>

          {/* Right Static Sidebar News Intelligence Widgets */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-[#0b111e] border border-slate-200 dark:border-gray-800 p-6 rounded-2xl shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-gray-800/60 pb-3 mb-4">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-gray-500">Live Station Feed</span>
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping"></span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-black text-slate-900 dark:text-white">Islamabad Head Office</h4>
                  <p className="text-xs text-slate-500 dark:text-gray-400 mt-0.5">Scattering Clouds Open Skies</p>
                </div>
                <p className="text-3xl font-black font-mono text-blue-500">32°C</p>
              </div>
            </div>

            <div className="bg-white dark:bg-[#0b111e] border border-slate-200 dark:border-gray-800 p-6 rounded-2xl shadow-sm">
              <h3 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider mb-4">⚡ Market Coverage Metrics</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs border-b border-slate-100 dark:border-gray-800/40 pb-2">
                  <span className="text-slate-500 dark:text-gray-400">💻 Tech & Innovation</span>
                  <span className="font-mono font-bold text-blue-500">82%</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-500 dark:text-gray-400">📈 Business Structures</span>
                  <span className="font-mono font-bold text-emerald-500">69%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Grid List Streams for other Blogs */}
      <section className="border-t border-slate-200 dark:border-gray-800/80 pt-10 mt-12">
        <h3 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-tight mb-8 flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-blue-600 inline-block"></span> Dynamic Registry Streams
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.slice(1).map((blog) => (
            <article key={blog._id} className="bg-white dark:bg-[#0b111e] border border-slate-200 dark:border-gray-800 rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between group hover:shadow-md transition-all">
              <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden">
                <img src={blog.imageUrl || "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=600"} alt="Feed Graphic" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-3 left-3 bg-slate-950/90 text-gray-300 font-mono text-[8px] uppercase tracking-wider px-2 py-0.5 rounded">{blog.category}</span>
              </div>
              <div className="p-5 flex-grow">
                <div className="text-[10px] font-mono text-slate-400 mb-2">📅 {new Date(blog.createdAt).toLocaleDateString()}</div>
                <h4 className="text-base font-extrabold text-slate-900 dark:text-white leading-snug line-clamp-2 mb-2 group-hover:text-blue-500 transition">{blog.title}</h4>
                <p className="text-xs text-slate-500 dark:text-gray-400 line-clamp-3 leading-relaxed">{blog.description}</p>
              </div>
              <div className="px-5 pb-5 border-t border-slate-100 dark:border-gray-800/40 pt-3 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>❤️ {blog.likesCount || 0} Endorsements</span>
                <span className="text-blue-500 font-bold">👁️ {blog.viewsCount || 0} Hits</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;