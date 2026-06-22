import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function BlogDetail() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:5000/api/blogs/${id}`)
      .then(res => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then(data => {
        setBlog(data);
        setLoading(false);
      })
      .catch(() => {
        // Fallback Premium Backup Metadata Placeholder layout
        setBlog({
          title: "Automated Wire Node Connection Interrupted",
          content: "This is sample premium text standing as placeholder framework code layout. The server endpoint connection was parsed safely, but the live payload stream is currently offline. Our asynchronous background clusters are monitoring the route registry to restore full synchronization loops across the global portal networks instantly.",
          category: "Tech Desk",
          author: "System Admin",
          createdAt: new Date().toISOString()
        });
        setLoading(false);
      });
  }, [id]);

  // Premium Dashboard Wireframe Skeleton Loader
  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-left space-y-8 animate-pulse">
        <div className="h-4 w-32 bg-slate-200 dark:bg-gray-800 rounded"></div>
        <div className="space-y-4">
          <div className="h-6 w-24 bg-blue-200 dark:bg-blue-900/40 rounded"></div>
          <div className="h-10 w-full bg-slate-200 dark:bg-gray-800 rounded"></div>
          <div className="h-10 w-3/4 bg-slate-200 dark:bg-gray-800 rounded"></div>
        </div>
        <div className="h-[1px] w-full bg-slate-200 dark:bg-gray-800"></div>
        <div className="space-y-3">
          <div className="h-4 w-full bg-slate-200 dark:bg-gray-800 rounded"></div>
          <div className="h-4 w-full bg-slate-200 dark:bg-gray-800 rounded"></div>
          <div className="h-4 w-5/6 bg-slate-200 dark:bg-gray-800 rounded"></div>
        </div>
      </div>
    );
  }

  // Reading time estimator utility function
  const getReadingTime = (text) => {
    if (!text) return "1 min";
    const words = text.split(/\s+/).length;
    const minutes = Math.ceil(words / 200);
    return `${minutes} min read`;
  };

  // Safe formatting utility for long database body logs
  const renderContent = (contentString) => {
    if (!contentString) return null;
    return contentString.split('\n\n').map((paragraph, index) => (
      <p key={index} className="text-slate-700 dark:text-gray-300 text-sm md:text-base leading-relaxed mb-6 font-normal">
        {paragraph}
      </p>
    ));
  };

  return (
    <div className="w-full bg-white dark:bg-[#030712] text-left transition-colors duration-300 min-h-screen selection:bg-blue-500 selection:text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10 block">
        
        {/* Navigation Action */}
        <div>
          <Link 
            to="/blogs" 
            className="no-underline text-xs font-mono text-slate-400 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-500 transition-colors duration-200 flex items-center gap-1.5 group"
          >
            <span className="inline-block transform group-hover:-translate-x-1 transition-transform">←</span> 
            RETURN TO NEWSROOM STREAM
          </Link>
        </div>

        {/* Article Metadata Registry Cluster */}
        <article className="space-y-8">
          <header className="space-y-4 border-b border-slate-100 dark:border-gray-800/80 pb-6 relative">
            
            {/* Category Tag Component */}
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-mono font-bold bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-900/40 px-2.5 py-1 rounded uppercase tracking-wider">
                {blog.category || "General Wire"}
              </span>
              <span className="text-[11px] font-mono text-slate-400 dark:text-gray-500">
                // {getReadingTime(blog.content || blog.description)}
              </span>
            </div>

            {/* Premium Dynamic Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight uppercase">
              {blog.title}
            </h1>

            {/* Author Matrix Specs */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 pt-2 text-xs font-mono text-slate-400 dark:text-gray-500">
              <div>
                Correspondent Desk: <strong className="text-slate-800 dark:text-gray-300 font-bold">{blog.author || "Global Staff"}</strong>
              </div>
              <div className="hidden sm:inline text-slate-200 dark:text-gray-800">|</div>
              <div>
                Dispatch Log:{' '}
                <span className="text-slate-600 dark:text-gray-400">
                  {blog.createdAt ? new Date(blog.createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  }) : "Live Log"}
                </span>
              </div>
            </div>

            {/* Bottom Accent Decor */}
            <div className="absolute bottom-0 left-0 w-20 h-[2px] bg-blue-600 dark:bg-blue-500"></div>
          </header>

          {/* Premium Body Article Content */}
          <section className="prose dark:prose-invert max-w-none">
            {renderContent(blog.content || blog.description)}
          </section>
        </article>

        {/* Footer Navigation Divider Line */}
        <div className="w-full h-[1px] bg-slate-100 dark:bg-gray-800/80 my-4"></div>

        {/* Bottom Fast Navigation Box */}
        <div className="flex justify-between items-center pt-2">
          <Link 
            to="/blogs" 
            className="no-underline text-xs font-mono font-bold px-4 py-2.5 rounded-lg border border-slate-200 dark:border-gray-800 bg-slate-50 dark:bg-[#090d16] text-slate-700 dark:text-gray-300 hover:border-blue-500/40 transition duration-200"
          >
            ← View All Dispatches
          </Link>
          <span className="text-[10px] font-mono text-slate-400 dark:text-gray-500 tracking-widest uppercase hidden sm:inline">
            // Chronicle Encryption Verified
          </span>
        </div>

      </div>
    </div>
  );
}

export default BlogDetail;