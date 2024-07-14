'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-primary sticky top-0 z-50">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="Bhagirathi Abroad Study"
            width={50}
            height={50}
          />
          <span className="text-xl font-bold text-white ml-3">
            <Link href="/">Bhagirathi Abroad Study</Link>
          </span>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link href="/" className="text-white hover:text-white-500 text-lg">
            Home
          </Link>
          <Link href="/about" className="text-white text-lg">
            About Us
          </Link>
          <Link href="/services" className="text-white text-lg">
            Services
          </Link>
          <Link href="/contact" className="text-white text-lg">
            Contact
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col items-start space-y-4 py-3 pl-5 text-xl">
            <Link href="/" className="text-white" onClick={toggleMenu}>
              Home
            </Link>
            <Link href="/about" className="text-white" onClick={toggleMenu}>
              About Us
            </Link>
            <Link href="/services" className="text-white" onClick={toggleMenu}>
              Services
            </Link>
            <Link href="/contact" className="text-white" onClick={toggleMenu}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
