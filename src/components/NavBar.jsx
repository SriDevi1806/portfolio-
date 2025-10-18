import React, { useState } from "react";
import { Link } from "react-scroll";
import icon from "../assets/s.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const sections = ["home", "about", "skills", "experience", "projects", "contact"];

  return (
    <nav className="bg-black text-white sticky top-0 w-full z-50 shadow-md">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="cursor-pointer"
        >
          <img src={icon} className="h-20 w-20 rounded-full" alt="Logo" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          {sections.map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              spy={true} // Tracks active section
              offset={-70} // Adjust if navbar height overlaps
              activeClass="text-blue-500"
              className="capitalize cursor-pointer hover:text-blue-500 transition"
            >
              {section}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black px-4 py-2 flex flex-col space-y-3">
          {sections.map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              activeClass="text-blue-500"
              onClick={() => setIsOpen(false)}
              className="capitalize cursor-pointer hover:text-blue-500 transition"
            >
              {section}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
