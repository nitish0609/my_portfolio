// Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaLaptopCode } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-gray-900 to-gray-600 py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand Name */}
        <Link
          to="/"
          className="flex items-center text-white hover:text-gray-400 transition duration-300"
        >
          <span className="mr-2">
            <FaLaptopCode className="w-6 h-6 animate-pulse" />
          </span>
          <span className="animate-pulse">Nitish Pandey</span>
          {/* <span className="animate-bounce">Code</span> */}
        </Link>

        {/* Mobile menu button */}
        <div className="block lg:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Navigation links */}
        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:flex space-x-8 lg:space-x-0 lg:ml-4`}
        >
          <li>
            <Link
              to="/"
              className="text-white block py-2 px-4 hover:text-gray-400 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-white block py-2 px-4 hover:text-gray-400 transition duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="text-white block py-2 px-4 hover:text-gray-400 transition duration-300"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-white block py-2 px-4 hover:text-gray-400 transition duration-300"
            >
              Contact
            </Link>
          </li>
          <li>
            <a
              href="https://www.instagram.com/accounts/onetap/?next=%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white block py-2 px-4 hover:text-gray-400 transition duration-300"
            >
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
