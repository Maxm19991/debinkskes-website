'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Over Ons', href: '#over-ons' },
    { name: 'Opvang', href: '#opvang' },
    { name: 'Dagindeling', href: '#dagindeling' },
    { name: 'Tarieven', href: '#tarieven' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold" style={{ color: '#40735B' }}>
              De Binkskes
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 px-3 py-2 rounded-md text-sm font-medium transition-opacity hover:opacity-70"
                  style={{
                    transition: 'opacity 0.2s ease',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#40735B'}
                  onMouseLeave={(e) => e.currentTarget.style.color = ''}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="#inschrijven"
                className="text-white px-4 py-2 rounded-md text-sm font-medium transition-opacity hover:opacity-80 ml-4"
                style={{ backgroundColor: '#40735B' }}
              >
                Inschrijven voor ouders
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 inline-flex items-center justify-center p-2 rounded-md focus:outline-none transition-opacity hover:opacity-70"
              style={{
                color: isOpen ? '#40735B' : undefined
              }}
            >
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" />
              ) : (
                <Bars3Icon className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-sm border-t" style={{ borderColor: '#e5e5e5' }}>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 block px-3 py-2 rounded-md text-base font-medium hover:opacity-70 transition-opacity"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="#inschrijven"
                className="text-white block px-3 py-2 rounded-md text-base font-medium mt-4 hover:opacity-80 transition-opacity"
                style={{ backgroundColor: '#40735B' }}
                onClick={() => setIsOpen(false)}
              >
                Inschrijven voor ouders
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;