import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-surface/80 backdrop-blur-lg shadow-molecular border-b border-gray-800/50'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          <Link 
            to="/" 
            className="text-2xl font-display font-bold text-white animate-pulse-subtle hover:animate-glow transition-all duration-300"
          >
            MKWW
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="relative text-gray-300 hover:text-white transition-all duration-300 group"
              >
                <span className="relative z-10">{item.label}</span>
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="navigation-underline"
                    className="absolute -bottom-[1.5px] left-0 right-0 h-0.5 bg-accent shadow-molecular"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
                <motion.div
                  className="absolute inset-0 bg-accent/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                  whileHover={{ scale: 1.05 }}
                />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 hover:animate-glow transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-surface/95 backdrop-blur-lg shadow-molecular border-t border-gray-800/50"
          >
            <div className="container-custom py-4">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`relative text-gray-300 hover:text-white transition-all duration-300 group ${
                      location.pathname === item.path ? 'text-white' : ''
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="relative z-10">{item.label}</span>
                    <motion.div
                      className="absolute inset-0 bg-accent/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={false}
                      whileHover={{ scale: 1.02 }}
                    />
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation; 