import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Projects', href: '/#projects' },
    { name: 'Skills', href: '/#skills' },
    { name: 'Journey', href: '/#journey' },
    { name: 'Certifications', href: '/#certifications' },
    { name: 'Contact', href: '/#contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith('/#')) {
      const elementId = href.substring(2);
      if (isHome) {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 bg-white ${
        scrolled ? 'shadow-md' : 'border-b border-gray-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <span className="google-font font-medium text-xl text-gray-600 group-hover:text-[#1a73e8] transition-colors">
                &lt;{PERSONAL_INFO.name} /&gt;
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              isHome ? (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-gray-600 hover:text-[#1a73e8] font-medium transition-colors text-sm"
                >
                  {link.name}
                </a>
              ) : (
                <Link 
                  key={link.name}
                  to="/" 
                  className="text-gray-600 hover:text-[#1a73e8] font-medium transition-colors text-sm"
                >
                  {link.name}
                </Link>
              )
            ))}
          </nav>

          {/* Resume Button */}
          <div className="hidden md:block">
            <a 
              href={PERSONAL_INFO.resumeLink} 
              target="_blank"
              rel="noreferrer"
              className="px-6 py-2 bg-[#1a73e8] text-white text-sm font-medium rounded hover:bg-[#174ea6] transition-colors shadow-sm"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
               isHome ? (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-[#1a73e8] hover:bg-blue-50"
                >
                  {link.name}
                </a>
               ) : (
                <Link
                  key={link.name}
                  to="/"
                  onClick={() => setIsOpen(false)}
                   className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-[#1a73e8] hover:bg-blue-50"
                >
                  {link.name}
                </Link>
               )
            ))}
            <div className="mt-4 px-3">
              <a 
                href={PERSONAL_INFO.resumeLink}
                target="_blank"
                rel="noreferrer"
                className="block w-full text-center px-5 py-3 bg-[#1a73e8] text-white font-medium rounded hover:bg-[#174ea6]"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;