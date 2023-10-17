import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h6 className="text-white text-xl font-extrabold">Nitish Pandey</h6>
        <ul className="flex space-x-8">
          <li>
            <Link
              to="/"
              className="text-white hover:text-gray-400 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-white hover:text-gray-400 transition duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="text-white hover:text-gray-400 transition duration-300"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-white hover:text-gray-400 transition duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
