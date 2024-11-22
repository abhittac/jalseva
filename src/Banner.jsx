import React from 'react';
import { Phone } from 'lucide-react';
import banner_video from "./asserts/banner.mp4";

const Banner = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={banner_video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay with gradient for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent">
        {/* Text Content */}
        <div className="relative h-full flex flex-col justify-center items-start px-6 md:px-16 max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Pure Water, <span className="text-blue-400">Better Life</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl">
            Delivering crystal-clear, purified water straight to your doorstep. 
            Experience the difference with our advanced RO technology.
          </p>
          
          {/* Call to Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a 
              href="tel:+919971035511"
              className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full 
                font-semibold text-lg transition-all duration-300 transform hover:scale-105
                flex items-center justify-center gap-2"
            >
              {/* <Phone className="w-5 h-5" /> */}
              <span>Call Now</span>
            </a>
            
            <button className="px-8 py-3 bg-transparent border-2 border-white text-white 
              rounded-full font-semibold text-lg transition-all duration-300 
              hover:bg-white hover:text-blue-500">
              Get Demo 
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex gap-8 text-white text-lg">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500/20">
                <span className="text-2xl">💧</span>
              </div>
              <span>Advanced RO Filtration</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500/20">
                <span className="text-2xl">🛠️</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">24/7 Service Available</span>
                <span className="text-sm text-gray-300">Installation • Maintenance • Repair</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500/20">
                <span className="text-2xl">🚚</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Quick Delivery</span>
                <span className="text-sm text-gray-300">At Your Doorstep</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;