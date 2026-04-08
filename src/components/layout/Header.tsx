'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const leftNav = [
    { name: 'EXPERTISE', href: '/services' },
    { name: 'PROJETS', href: '/projets' },
  ];

  const rightNav = [
    { name: 'TALENTS', href: '/talents' },
    { name: 'CONTACT', href: '/contact' },
  ];

  return (
    <header className="relative bg-black">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-32">
          <div className="hidden md:flex items-center space-x-16 flex-1 justify-end pr-24">
            {leftNav.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white text-base font-semibold tracking-[0.25em] hover:opacity-70 transition-opacity duration-300"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex-shrink-0">
            <Link href="/" className="hover:opacity-70 transition-opacity">
              <Image
                src="/chronos-transparent-blanc.png"
                alt="Chronos Corp"
                width={600}
                height={200}
                priority
                className="h-36 w-auto"
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-16 flex-1 pl-24">
            {rightNav.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white text-base font-semibold tracking-[0.25em] hover:opacity-70 transition-opacity duration-300"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Ouvrir le menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-white/10">
            <div className="flex flex-col space-y-6">
              {[...leftNav, ...rightNav].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white text-sm font-light tracking-[0.15em] hover:opacity-70 transition-opacity"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
