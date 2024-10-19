"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Use usePathname instead of useRouter
import { Search, Menu } from 'lucide-react';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get the current path using usePathname

  // Helper function to check if the current path matches
  const isActive = (path) => pathname === path;

  return (
    <nav className="bg-darkgreen text-white p-4">
      <div className="container mx-auto flex justify-between items-center font-light tex-2xl">
        <Link href="/" className="flex items-center">
          <Image src="/assets/logowhite.png" alt="Chloro Logo" width={100} height={100} />
        </Link>

        <div className="hidden md:flex space-x-6 items-center font-sans z-12">
          <Link href="/" className={isActive("/") ? "text-white" : "text-white opacity-20 hover:opacity-100"}>
            Home
          </Link>
          <Link href="/about" className={isActive("/about") ? "text-white" : "text-white opacity-20 hover:opacity-100"}>
            About
          </Link>

          {/* Dropdown for Services */}
          <div className="relative group">
            <Link href="/services" className={isActive("/services") ? "text-white" : "text-white opacity-20 hover:opacity-100"}>
              Services <span className="ml-1"></span>
            </Link>
            <div className="absolute hidden group-hover:block bg-green-800 p-2 rounded-md mt-2 z-12">
              <Link href="/services/1" className="block py-1 hover:text-green-300">Service 1</Link>
              <Link href="/services/2" className="block py-1 hover:text-green-300">Service 2</Link>
            </div>
          </div>

          {/* Dropdown for Pages */}
          <div className="relative group">
            <Link href="/pages" className={isActive("/pages") ? "text-white" : "text-white opacity-20 hover:opacity-100"}>
              Pages <span className="ml-1"></span>
            </Link>
            <div className="absolute hidden group-hover:block bg-green-800 p-2 rounded-md mt-2 z-12">
              <Link href="/pages/1" className="block py-1 hover:text-green-300">Page 1</Link>
              <Link href="/pages/2" className="block py-1 hover:text-green-300">Page 2</Link>
            </div>
          </div>

          <Link href="/contact" className={isActive("/contact") ? "text-white" : "text-white opacity-20 hover:opacity-100"}>
            Contact
          </Link>

          {/* Search Icon */}
        </div>
        <button aria-label="Search" className="text-white opacity-20 hover:opacity-100">
            <Search size={20} />
          </button>
        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 space-y-2">
          <Link href="/" className={isActive("/") ? "block py-2 px-4 bg-green-800" : "block py-2 px-4 hover:bg-green-800 opacity-20"}>
            Home
          </Link>
          <Link href="/about" className={isActive("/about") ? "block py-2 px-4 bg-green-800" : "block py-2 px-4 hover:bg-green-800 opacity-20"}>
            About
          </Link>
          <Link href="/services" className={isActive("/services") ? "block py-2 px-4 bg-green-800" : "block py-2 px-4 hover:bg-green-800 opacity-20"}>
            Services
          </Link>
          <Link href="/pages" className={isActive("/pages") ? "block py-2 px-4 bg-green-800" : "block py-2 px-4 hover:bg-green-800 opacity-20"}>
            Pages
          </Link>
          <Link href="/contact" className={isActive("/contact") ? "block py-2 px-4 bg-green-800" : "block py-2 px-4 hover:bg-green-800 opacity-20"}>
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
