"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="text-white font-serif body-font bg-black">
      <div className="container mx-auto flex p-5 items-center justify-between">
        <a className="flex title-font font-medium items-center text-gray-900">
          <span className="ml-3 text-3xl text-white">Hasnain Ali</span>
        </a>
        <nav className="hidden  md:flex flex-wrap items-center text-base justify-center">
          <Link href="/" className="mr-5 hover:text-red-600">
            Home
          </Link>
          <Link href="#about" className="mr-5 hover:text-red-600">
            About
          </Link>
          <Link href="#Contact" className="mr-5 hover:text-red-600">
            Contact
          </Link>
        </nav>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? (
              <AiOutlineClose className="text-white text-3xl" />
            ) : (
              <AiOutlineMenu className="text-white text-3xl" />
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-black">
          <nav className="flex flex-col items-center p-4">
            <Link
              href="/"
              onClick={toggleMenu}
              className="py-2 hover:text-red-600"
            >
              Home
            </Link>
            <Link
              href="#about"
              onClick={toggleMenu}
              className="py-2 hover:text-red-600"
            >
              About
            </Link>
            <Link
              href="#Contact"
              onClick={toggleMenu}
              className="py-2 hover:text-red-600"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
