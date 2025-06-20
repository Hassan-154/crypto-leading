"use client"
import React, { useState } from 'react';
import { RiMenuLine, RiCloseLine } from 'react-icons/ri';
import navData from '../constant/navbar.json';
import Button from './Button';
import Image from 'next/image'
import Link from 'next/link';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white border-b border-[#E2E8F0] fixed top-0 left-0 right-0 z-[1000]">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-0">
        <div className="flex items-center justify-between h-16 lg:justify-start">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image src="/assets/WhatsApp Image 2025-06-16 at 1.47.24 AM.jpeg" alt='image' height="65" width="65"/>
          </div>

          {/* Navigation Menu - Shared HTML for both desktop and mobile */}
          <div className={`${isOpen ? 'max-h-screen opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-4'} lg:max-h-none lg:opacity-100 lg:translate-y-0 lg:flex lg:flex-1 lg:justify-center absolute lg:relative top-16 lg:top-0 left-0 lg:left-auto w-full lg:w-auto bg-white lg:bg-transparent z-50 lg:z-auto overflow-hidden lg:overflow-visible transition-all duration-300 ease-in-out`}>
            <div className="flex flex-col lg:flex-row lg:items-center px-2 py-2 lg:p-0 space-y-1 lg:space-y-0 lg:space-x-10">
              {navData.menuItems.map((item, index) => (
                <Link
                  key={index}
                  href={`/pages${item.link}`}
                  onClick={() => setIsOpen(false)}
                  className="text-black hover:text-gray-700 block lg:inline px-3 py-2 lg:p-0 text-base lg:text-[15px] lg:font-thin"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Buttons - Shared HTML for both desktop and mobile */}
          <div className={`${isOpen ? 'max-h-screen opacity-100 translate-y-0 border-b border-[#E2E8F0] lg:border-none' : 'max-h-0 opacity-0 -translate-y-4'} lg:max-h-none lg:opacity-100 lg:translate-y-0 lg:flex lg:items-center lg:space-x-3 absolute lg:relative top-50 lg:top-0 left-0 lg:left-auto w-full lg:w-auto bg-white lg:bg-transparent pt-4 lg:pt-0 pb-6 lg:pb-0 px-5 lg:px-0 z-50 lg:z-auto overflow-hidden lg:overflow-visible transition-all duration-300 ease-in-out`}>
            <div className="flex flex-col lg:flex-row lg:items-center space-y-3 lg:space-y-0 lg:space-x-3">
              <Button title="Contact Us" className="bg-slate-light hover:bg-slate-light-hover text-black rounded-md" />
              <Button title="Book Consultation " className="bg-periwinkle-blue hover:bg-periwinkle-blue-hover text-white rounded-md" />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="cursor-pointer inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              {isOpen ? (
                <RiCloseLine className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <RiMenuLine className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>    
    </nav>
  );
};

export default NavBar;