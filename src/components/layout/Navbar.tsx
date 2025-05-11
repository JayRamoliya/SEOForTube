
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const NavLinks = [
  { name: 'Home', path: '/' },
  { name: 'Generator', path: '/generator' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-40">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-primary-400 to-primary-600 text-white rounded-lg h-8 w-8 flex items-center justify-center">
              <span className="font-bold text-lg">Y</span>
            </div>
            <span className="font-bold text-xl">YTubeSEO</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {NavLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className={`text-sm font-medium transition-colors hover:text-primary-500 ${location.pathname === link.path ? 'text-primary-500' : 'text-gray-700'}`}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="bg-primary-500 hover:bg-primary-600 text-white">
              <Link to="/generator">Try Now</Link>
            </Button>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
              />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-2">
            {NavLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className={`block py-3 text-sm font-medium transition-colors hover:text-primary-500 ${location.pathname === link.path ? 'text-primary-500' : 'text-gray-700'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button 
              asChild 
              className="w-full mt-3 mb-2 bg-primary-500 hover:bg-primary-600 text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              <Link to="/generator">Try Now</Link>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
