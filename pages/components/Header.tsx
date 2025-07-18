import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur shadow-md">
      <nav className="max-w-5xl mx-auto flex flex-wrap items-center justify-between py-2 px-4 sm:py-4 sm:px-6">
        <div className="flex items-center space-x-2 sm:space-x-3">
          <Image
            src="/logo.png"
            alt="Fast Trim Logo"
            width={32}
            height={32}
            className="rounded-full shadow"
          />
          <span className="text-lg sm:text-xl font-bold text-blue-900 tracking-tight">
            Fast Trim International
          </span>
        </div>

        <ul className="flex flex-wrap justify-center space-x-4 sm:space-x-8 text-blue-900 font-medium mt-2 sm:mt-0 w-full sm:w-auto">
          <li>
            <a href="#" className="hover:text-teal-500 transition text-sm sm:text-base">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-teal-500 transition text-sm sm:text-base">
              About
            </a>
          </li>
          <li>
            <a href="#products" className="hover:text-teal-500 transition text-sm sm:text-base">
              Products
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-teal-500 transition text-sm sm:text-base">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
