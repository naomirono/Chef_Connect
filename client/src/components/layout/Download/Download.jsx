import React from 'react';
import "./download.css";

const DownloadApp = () => {
  return (
    <section className="py-16 relative">
       <svg
        className="circle-svg circle-svg-1"
        width="500"
        height="500"
        style={{ position: "absolute", top: "8%", left: "2%", zIndex: "-1" }}
      >
        <circle cx="250" cy="250" r="240" fill="#f97316" />
      </svg>
      <svg
        className="circle-svg circle-svg-2"
        width="400"
        height="400"
        style={{
          position: "absolute",
          bottom: "13%",
          left: "22%",
          zIndex: "-1",
        }}
      >
        <circle cx="200" cy="200" r="190" fill="#f97316" />
      </svg>
    <div className='container mx-auto flex flex-col lg:flex-row items-center max-w-[1100px]'>
      {/* Left Section with Image */}
      <div className="w-3/4 lg:w-1/2 lg:pr-8">
        <img
          src="/src/assets/DownloadApp.png" 
          alt="Chef Connect App"
          className="w-full h-auto"
        />
      </div>

      {/* Right Section with Text Content */}
      <div className=" w-full px-6 lg:w-1/2 lg:pl-8">
        <p className="text-orange-500 mb-4">Get to easily find the best chefs</p>
        
        <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">Download the Chef Connect App</h2>
        
        <p className="text-gray-300 mb-14">
          Download the Chef Connect app to get chefs easily. Explore a world of culinary talent right at your fingertips.
        </p>
        
        {/* Buttons Aligned Horizontally */}
        <div className="flex space-x-6">
          <button><img src='/src/assets/app-store-badge.svg' alt="App Play" /></button>
          <button ><img src='/src/assets/google-play-badge.svg' alt="Google Play" /></button>
        </div>
      </div>
      </div>
    </section>
  );
};

export default DownloadApp;
