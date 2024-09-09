"use client";

import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="p-4 bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-lg font-bold text-[#0E0B16]">
          Kuinance
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-[#0E0B16] hover:text-gray-700">
            Home
          </Link>
          <Link href="/contato" className="text-[#0E0B16] hover:text-gray-700">
            Contato
          </Link>
          <Link href="/paginadeproduto" className="text-[#0E0B16] hover:text-gray-700">
            Produtos
          </Link>
        </nav>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6 text-[#0E0B16]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* Login and Signup */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/login" className="text-[#0E0B16]">
            Log In
          </Link>
          <Link href="/login" className="bg-[#01BC8D] text-white px-4 py-2 rounded-md">
            Inscrever-se
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col p-4 space-y-4">
            <Link href="/" className="text-[#0E0B16] hover:text-gray-700">
              Home
            </Link>
            <Link href="/contato" className="text-[#0E0B16] hover:text-gray-700">
              Contato
            </Link>
            <Link href="/paginadeproduto" className="text-[#0E0B16] hover:text-gray-700">
              Produtos
            </Link>
            <Link href="/login" className="text-[#0E0B16]">
              Log In
            </Link>
            <Link href="/login" className="bg-[#01BC8D] text-white px-4 py-2 rounded-md">
              Inscrever-se
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
