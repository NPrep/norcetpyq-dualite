import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'PYQ Master', path: '/norcet-previous-year-question-papers' },
    { name: '2024', path: '/norcet-2024-question-paper' },
    { name: '2023', path: '/norcet-2023-question-paper' },
    { name: 'PDF Download', path: '/norcet-pyq-pdf-download' },
    { name: 'With Answers', path: '/norcet-pyq-with-answers' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex flex-shrink-0 items-center">
          <Link to="/" className="group flex items-center gap-2">
            <img loading="lazy" src="/favicon.svg" alt="Logo" className="h-8 w-8" />
            <span className="text-xl font-bold tracking-tight text-primary transition-opacity group-hover:opacity-90">
              NORCET<span className="text-black">PYQ</span>
            </span>
          </Link>
        </div>

        <nav className="hidden space-x-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-sm font-medium transition-colors duration-200 ${
                location.pathname === item.path
                  ? 'border-b-2 border-primary text-primary'
                  : 'text-gray-600 hover:text-primary'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-500 hover:text-primary focus:outline-none"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="nprep-mobile-drawer md:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block rounded-md px-3 py-2 text-base font-medium ${
                  location.pathname === item.path
                    ? 'bg-orange-50 text-primary'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-primary'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
