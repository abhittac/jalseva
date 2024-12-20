import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = ({serviceRef,homeRef,contactRef}) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title: 'Home',  action: () => scrollToSection(homeRef) },
    { title: 'Service', action: () => scrollToSection(serviceRef) },
    { title: 'About',  action: () => scrollToSection(serviceRef)  },
    { title: 'Contact',  action: () => scrollToSection(contactRef)  }
  ];
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false); // Close mobile menu if open
  };
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-xl font-bold text-gray-800">Logo</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item,index) => (
               <button
               key={index}
               onClick={item.action}
               className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 border-b-2 border-transparent hover:border-blue-500"
             >
               {item.title}
             </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {menuItems.map((item) => (
                <a
                  key={item.title}
                  onClick={item.action}
                  className="block text-gray-600 hover:text-gray-900 hover:bg-blue-100 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 border-b-2 border-transparent hover:border-blue-500"
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
