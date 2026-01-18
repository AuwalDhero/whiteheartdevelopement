
import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Logo from '../Logo';

const NavLinks = ({ isMobile = false }) => {
  const linkClass = isMobile
    ? "block py-3 text-lg text-text-dark hover:text-medical-blue transition-colors duration-300"
    : "text-base font-medium text-text-light hover:text-medical-blue transition-colors duration-300";
  const activeLinkClass = isMobile ? "text-medical-blue font-semibold" : "text-medical-blue font-semibold";

  return (
    <>
      <NavLink to="/" className={({ isActive }) => `${linkClass} ${isActive ? activeLinkClass : ""}`} end>Home</NavLink>
      <NavLink to="/about" className={({ isActive }) => `${linkClass} ${isActive ? activeLinkClass : ""}`}>About Us</NavLink>
      <NavLink to="/programs" className={({ isActive }) => `${linkClass} ${isActive ? activeLinkClass : ""}`}>Our Programs</NavLink>
      <NavLink to="/impact-stories" className={({ isActive }) => `${linkClass} ${isActive ? activeLinkClass : ""}`}>Impact Stories</NavLink>
      <NavLink to="/get-involved" className={({ isActive }) => `${linkClass} ${isActive ? activeLinkClass : ""}`}>Get Involved</NavLink>
    </>
  );
};

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex-shrink-0">
            <Logo />
          </Link>
          <nav className="hidden lg:flex lg:items-center lg:space-x-8">
            <NavLinks />
          </nav>
          <div className="flex items-center">
             <Link to="/donate" className="hidden lg:inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-base font-medium rounded-full text-white bg-heart-pink hover:bg-opacity-90 transition-transform duration-300 hover:scale-105">
                Donate Now
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden ml-4 p-2 rounded-md text-gray-700 hover:text-medical-blue hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-medical-blue"
              aria-label="Open menu"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} lg:hidden bg-white shadow-lg`}>
        <div className="px-5 pt-2 pb-6 space-y-1">
          <NavLinks isMobile={true} />
           <Link to="/donate" className="mt-4 w-full flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-heart-pink hover:bg-opacity-90">
            Donate Now
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
