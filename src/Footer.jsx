import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold">RO</span>
            <span className="text-sm text-gray-400">Your Trusted Service</span>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#home" className="text-gray-300 hover:text-white">Home</a>
            <a href="#about" className="text-gray-300 hover:text-white">About</a>
            <a href="#services" className="text-gray-300 hover:text-white">Services</a>
            <a href="#contact" className="text-gray-300 hover:text-white">Contact</a>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4">
          {/* Social Media Links */}
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-300 hover:text-white">
              <i className="fab fa-facebook-f"></i> {/* FontAwesome for social icons */}
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-400 mt-4">
            &copy; {new Date().getFullYear()} RO. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
