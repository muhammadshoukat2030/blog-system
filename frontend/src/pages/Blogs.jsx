import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/blogs')
      .then(res => res.json())
      .then(data => setBlogs(data))
      .catch(() => {
        setBlogs([
          { _id: "1", title: "Global Market Wire Reports Steady Progress", description: "Comprehensive coverage of economic transformations around production networks.", category: "General News", author: "Editorial Core" }
        ]);
      });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-left">
      <header className="mb-10 border-b border-slate-200 dark:border-gray-800 pb-6">
        <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white uppercase">Global Desks Directory</h1>
        <p class="text-xs text-slate-500 dark:text-gray-400 mt-1">Complete historical archives mapping database communication indices safely.</p>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map(blog => (
          <div key={blog._id} className="bg-white dark:bg-[#0b111e] border border-slate-200 dark:border-gray-800 p-6 rounded-2xl shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-[9px] font-mono font-bold text-blue-500 bg-blue-50 dark:bg-blue-950/40 px-2.5 py-1 rounded border border-blue-100 dark:border-blue-900/30 uppercase tracking-wider">{blog.category}</span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight mt-3 mb-2 line-clamp-2">{blog.title}</h3>
              <p className="text-xs text-slate-600 dark:text-gray-400 line-clamp-3 leading-relaxed mb-4">{blog.description}</p>
            </div>
            <Link to={`/blog/${blog._id}`} className="text-xs font-bold text-blue-500 hover:underline">Access Report File →</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;