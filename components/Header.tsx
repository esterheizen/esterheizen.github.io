import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Products", path: "/Products" },
    
  ];

  const handleNavClick = (path: string) => {
    setMenuOpen(false);
    // Use router to navigate programmatically
    router.push(path);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/50 backdrop-blur shadow-md">
      <nav className="max-w-5xl mx-auto flex flex-wrap items-center justify-between py-2 px-4 sm:py-4 sm:px-6">
        {/* Logo and Brand */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          <Image
            src="/logo.jpg"
            alt="Fast Trim Logo"
            width={32}
            height={32}
            className="rounded-full shadow"
          />
          <span className="text-lg sm:text-xl font-bold text-blue-900 tracking-tight">
            Fast Trim International
          </span>
        </div>

        {/*Hamburger menu for mobile*/}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className="sm:hidden flex items-center justify-center w-10 h-10 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
        >
          <svg
            className="w-6 h-6 text-blue-900"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>

        {/* Navigation links */}
        <ul
          className={`
            flex flex-col sm:flex-row sm:space-x-8
            text-blue-900 font-medium
            mt-2 sm:mt-0
            w-full sm:w-auto
            bg-white/10 
            rounded-2xl sm:rounded-none
            shadow-md sm:shadow-none
            transition-all duration-300 ease-in-out
            ${menuOpen ? "max-h-72 py-4 px-6 overflow-hidden" : "max-h-0 overflow-hidden"}
            sm:max-h-full sm:overflow-visible
          `}
          style={{ transitionProperty: "max-height" }}
        >
          {navItems.map(({ label, path }) => (
            <li key={label}>
              <a
                className="block px-4 py-2 rounded-full bg-white/50 backdrop-blur-md transition hover:bg-teal-500 hover:text-white text-sm sm:text-base cursor-pointer"
                onClick={() => handleNavClick(path)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
