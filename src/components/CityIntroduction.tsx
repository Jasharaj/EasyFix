import React from 'react';

const CityIntroduction = () => {
  return (
    <section className="w-full rounded-xl overflow-hidden shadow-lg">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* Left content section */}
        <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-blue-100 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
          <div className="mb-3">
            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1.5 rounded-full uppercase tracking-wide">KARAIKUDI</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Premium <span className="text-purple-600">Daikin AC</span> Services in Karaikudi
          </h1>
          
          <p className="text-gray-900 mb-8 text-base md:text-lg leading-relaxed">
            Known for its heritage buildings and Chettinad cuisine, Karaikudi residents trust us for quick AC servicing even during the scorching Tamil Nadu summers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-8 rounded-md transition-colors shadow-sm hover:shadow-md">
              Book Now
            </button>
            <button className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 font-medium py-3 px-8 rounded-md transition-colors">
              Call Us
            </button>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 mt-2">
            <div className="flex items-center">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <span className="text-sm text-gray-800 ml-2 font-medium">From 2,500+ reviews</span>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="bg-blue-100 p-2 rounded-full">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-sm text-gray-900 font-medium">Same-Day Service</span>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="bg-blue-100 p-2 rounded-full">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span className="text-sm text-gray-900 font-medium">90-Day Warranty</span>
            </div>
          </div>
        </div>
        
        {/* Right image section */}
        <div className="relative h-full min-h-[300px] lg:min-h-0">
          {/* This is a placeholder for an actual image */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-600 flex items-center justify-center p-8">
            <div className="relative w-full max-w-md mx-auto">
              {/* AC unit illustration */}
              <div className="bg-white rounded-xl shadow-lg p-6 relative z-10">
                <div className="flex justify-between items-center mb-4">
                  <div className="w-24 h-6 bg-gray-100 rounded-md"></div>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                  </div>
                </div>
                <div className="h-24 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg mb-4 flex items-center justify-center">
                  <div className="w-3/4 h-4/5 bg-white rounded-md shadow-sm flex items-center justify-center">
                    <span className="text-purple-600 font-bold text-sm">DAIKIN</span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="w-16 h-4 bg-gray-100 rounded"></div>
                  <div className="w-16 h-4 bg-gray-100 rounded"></div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 rounded-full blur-xl"></div>
              <div className="absolute bottom-0 right-0 transform translate-x-1/4 w-24 h-24 bg-purple-300/30 rounded-full blur-xl"></div>
              <div className="absolute top-0 right-1/4 w-8 h-8 bg-yellow-300/40 rounded-full blur-md"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Service highlights section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 bg-white">
        <div className="bg-blue-50 rounded-lg p-6 flex items-start gap-4 transition-transform hover:transform hover:scale-105">
          <div className="bg-blue-500 text-white p-3 rounded-full">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">AC Repair</h3>
            <p className="text-gray-700">Fixing cooling issues and component failures with expert precision.</p>
          </div>
        </div>
        
        <div className="bg-purple-50 rounded-lg p-6 flex items-start gap-4 transition-transform hover:transform hover:scale-105">
          <div className="bg-purple-500 text-white p-3 rounded-full">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">Maintenance</h3>
            <p className="text-gray-700">Regular servicing to keep your AC running efficiently all year round.</p>
          </div>
        </div>
        
        <div className="bg-blue-50 rounded-lg p-6 flex items-start gap-4 transition-transform hover:transform hover:scale-105">
          <div className="bg-blue-500 text-white p-3 rounded-full">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">Installation</h3>
            <p className="text-gray-700">Professional mounting and setup by certified technicians.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CityIntroduction;
