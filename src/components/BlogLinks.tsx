import React from 'react';
import Image from 'next/image';

const BlogLinks = () => {
  // Sample blog data
  const blogs = [
    {
      id: 1,
      title: '5 Common AC Problems During Karaikudi Summer',
      excerpt: 'Learn how to identify and troubleshoot the most frequent AC issues during peak summer months.',
      image: '/ac-problems.jpg',
      category: 'Maintenance',
      bgColor: 'from-red-100 to-orange-100',
      iconBg: 'bg-red-500',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
    },
    {
      id: 2,
      title: 'Why Daikin ACs Are Perfect for Karaikudi Climate',
      excerpt: 'Discover why Daikin air conditioners are well-suited for the unique weather conditions in Karaikudi.',
      image: '/daikin-ac.jpg',
      category: 'Products',
      bgColor: 'from-blue-100 to-cyan-100',
      iconBg: 'bg-blue-500',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      id: 3,
      title: 'Seasonal AC Maintenance Tips for Chettinad Homes',
      excerpt: 'Special maintenance considerations for air conditioners in traditional Chettinad-style houses.',
      image: '/maintenance-tips.jpg',
      category: 'Tips & Tricks',
      bgColor: 'from-green-100 to-teal-100',
      iconBg: 'bg-green-500',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full">
      <div className="mb-2">
        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">BLOG POSTS</span>
      </div>
      
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold">
          AC Tips for <span className="text-purple-600">Karaikudi</span> Residents
        </h2>
        <a href="#" className="text-purple-600 text-sm font-medium hidden md:block hover:underline">
          View all articles →
        </a>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all hover:translate-y-[-4px] border border-gray-100">
            <div className="relative h-48 w-full">
              {/* Visual image representation with gradients and icons */}
              <div className={`absolute inset-0 bg-gradient-to-br ${blog.bgColor}`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Icon circle */}
                    <div className={`${blog.iconBg} text-white p-4 rounded-full shadow-md`}>
                      {blog.icon}
                    </div>
                    
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 transform translate-x-8 -translate-y-2 w-12 h-12 bg-white/10 rounded-full blur-md"></div>
                    <div className="absolute bottom-0 left-0 transform -translate-x-6 translate-y-2 w-8 h-8 bg-white/20 rounded-full blur-sm"></div>
                  </div>
                </div>
                
                {/* Pattern overlay */}
                <div className="absolute inset-0 opacity-10" style={{ 
                  backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)', 
                  backgroundSize: '20px 20px' 
                }}></div>
                
                {/* Category badge */}
                <div className="absolute bottom-3 right-3">
                  <span className="bg-white/80 backdrop-blur-sm text-gray-800 text-xs font-medium px-2.5 py-1 rounded shadow-sm">
                    {blog.category}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="p-5">
              <div className="mb-2">
                <span className={`${blog.iconBg} text-white text-xs font-medium px-2.5 py-1 rounded-md shadow-sm`}>
                  {blog.category}
                </span>
              </div>
              
              <h3 className="text-lg font-bold mb-2 text-gray-800">{blog.title}</h3>
              
              <p className="text-gray-800 text-sm mb-4">{blog.excerpt}</p>
              
              <a 
                href="#" 
                className="inline-flex items-center text-purple-600 hover:text-purple-800 text-sm font-medium"
              >
                Read more
                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 text-center md:hidden">
        <a href="#" className="text-purple-600 text-sm font-medium hover:underline">
          View all articles →
        </a>
      </div>
    </section>
  );
};

export default BlogLinks;
