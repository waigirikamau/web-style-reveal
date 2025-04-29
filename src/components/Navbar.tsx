
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="/" className="text-xl font-bold flex items-center">
          <span className="text-teal-500 mr-1">UI</span> Portfolio
        </a>
        
        {/* Mobile menu button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        
        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="hover:text-teal-500 transition-colors">Home</a>
          <a href="#about" className="hover:text-teal-500 transition-colors">About</a>
          <a href="#services" className="hover:text-teal-500 transition-colors">Services</a>
          <a href="#" className="hover:text-teal-500 transition-colors">Blog ↓</a>
          <a href="#portfolio" className="hover:text-teal-500 transition-colors">Portfolio</a>
          <a href="#contact" className="hover:text-teal-500 transition-colors">Contact</a>
          
          <button className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md transition-colors">
            Hire Me
          </button>
          
          <button className="text-white">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
        
        {/* Mobile menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 right-0 bg-gray-900 shadow-lg md:hidden z-10">
            <div className="flex flex-col p-4 space-y-3">
              <a href="#" className="block hover:text-teal-500 transition-colors">Home</a>
              <a href="#about" className="block hover:text-teal-500 transition-colors">About</a>
              <a href="#services" className="block hover:text-teal-500 transition-colors">Services</a>
              <a href="#" className="block hover:text-teal-500 transition-colors">Blog</a>
              <a href="#portfolio" className="block hover:text-teal-500 transition-colors">Portfolio</a>
              <a href="#contact" className="block hover:text-teal-500 transition-colors">Contact</a>
              <button className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md transition-colors w-full">
                Hire Me
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
