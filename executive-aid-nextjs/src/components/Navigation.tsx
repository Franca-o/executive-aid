'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface NavigationProps {
  isScrolled: boolean;
  currentPage?: string;
  contactLink?: string;
}

export default function Navigation({ isScrolled, currentPage, contactLink = "/#cta" }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { href: '/', label: 'HOME' },
    { href: '/about', label: 'ABOUT' },
    { href: '/services', label: 'SERVICES' },
    { href: '/web-solutions', label: ' PORTFOLIO' },
    { href: '/credentials', label: ' CREDENTIALS' },
    { href: 'https://razorbilltechnologies.com/', label: ' RAZORBILL', external: true },
  ];

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 py-4 md:py-6 ${
      isScrolled 
        ? 'backdrop-blur-xl bg-white/20 border-b border-white/20 shadow-lg' 
        : 'backdrop-blur-md bg-white/80 border-b border-gray-300/50'
    }`}>
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex justify-between items-center">
          {/* Logo & Subtitle */}
          <div className="flex items-center leading-none">
            <Link href="/" className="mr-2 flex-shrink-0">
              <Image
                src="/images/EAID-logo.jpg" // or your actual logo path
                alt="ExecutiveAid Logo"
                width={72}
                height={72}
                className="rounded-md"
              />
            </Link>
          <div className="flex flex-col ">
            <Link href="/" className="text-3xl md:text-4xl font-bold tracking-tighter text-gray-900">
              EXECUTIVE<span className="text-indigo-900">AID</span>
            </Link>
            <span className="text-xs md:text-sm text-gray-600 -mt-1">Efficiency Redefined.</span>
          </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => {
              const isExternal = item.external || item.href.startsWith('http');
              if (isExternal) {
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-sm md:text-base font-bold hover:text-indigo-900 transition ${
                      currentPage === item.href ? 'text-indigo-900' : 'text-gray-900'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              }
              return (
                <Link 
                  key={item.href}
                  href={item.href} 
                  className={`text-sm md:text-base font-bold hover:text-indigo-900 transition ${
                    currentPage === item.href ? 'text-indigo-900' : 'text-gray-900'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Desktop Contact Button */}
          <div className="hidden md:block">
            <Link href={contactLink}>
              <button className="bg-indigo-900 text-white px-4 md:px-6 py-1.5 md:py-2 text-sm md:text-base font-bold hover:bg-indigo-800 transition-all duration-300 border border-indigo-900 rounded-full">
                CONTACT
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-md text-gray-900 hover:text-indigo-900 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="pt-4 space-y-2">
              {navItems.map((item) => {
                const isExternal = item.external || item.href.startsWith('http');
                if (isExternal) {
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={closeMobileMenu}
                      className={`block px-3 py-2 text-base font-bold hover:text-indigo-900 transition ${
                        currentPage === item.href ? 'text-indigo-900' : 'text-gray-900'
                      }`}
                    >
                      {item.label}
                    </a>
                  );
                }
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className={`block px-3 py-2 text-base font-bold hover:text-indigo-900 transition ${
                      currentPage === item.href ? 'text-indigo-900' : 'text-gray-900'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link
                href={contactLink}
                onClick={closeMobileMenu}
                className="block px-3 py-2 mt-4"
              >
                <button className="w-full bg-indigo-900 text-white px-4 py-2 text-base font-bold hover:bg-indigo-800 transition-all duration-300 border border-indigo-900 rounded-full">
                  CONTACT
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 