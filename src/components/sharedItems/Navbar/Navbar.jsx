import React, { useState, useEffect } from "react";
import MainButton from "../MainButton/MainButton";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  // Navigation items array with routes
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Industries Served", path: "/industries" },
    { name: "Contact Us", path: "/contact" },
    { name: "About Us", path: "/about-us" }
  ];

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest("nav")) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  // Handle navigation item click
  const handleItemClick = (item) => {
    setActiveItem(item.name);
    setIsMenuOpen(false);
    // You can add navigation logic here if using React Router
    // navigate(item.path);
  };

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <div className="bg-white">
      <nav
        className={`w-full fixed top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-xl bg-white/95 shadow-lg py-3 border-b border-gray-200"
            : "backdrop-blur-md bg-white/90 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-between w-full md:w-auto md:gap-12">
              {/* Logo */}
              <div className="shrink-0 group cursor-pointer">
                <div className="text-black font-bold text-xl sm:text-2xl tracking-tight">
                  <span className="font-extrabold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                    Syntax Six
                  </span>
                </div>
              </div>

              {/* Desktop Navigation - Hidden on mobile */}
              <div className="hidden lg:block">
                <div className="flex items-baseline space-x-1 xl:space-x-2">
                  {navItems.map((item, index) => (
                    <a
                      key={index}
                      href={item.path}
                      className={`px-3 py-2 rounded-lg text-sm font-semibold relative group transition-all duration-300 ${
                        activeItem === item.name
                          ? "text-gray-900"
                          : "text-gray-500 hover:text-gray-900 "
                      }`}
                      onClick={() => handleItemClick(item)}
                    >
                      {item.name}
                      {/* Animated underline */}
                      <span
                        className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-black transition-all duration-300 ${
                          activeItem === item.name
                            ? "w-4/5"
                            : "w-0 group-hover:w-4/5"
                        }`}
                      ></span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Desktop Button - Hidden on mobile */}
            <div className="hidden lg:block">
              <MainButton>Learn With Us</MainButton>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center gap-4 lg:hidden">
              {/* Mobile Button - Visible only on mobile */}
              <div className="lg:hidden">
                <MainButton size="sm">Learn</MainButton>
              </div>
              
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-colors duration-300 p-2 rounded-lg hover:bg-gray-100"
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
              >
                {/* Animated hamburger icon */}
                <div className="w-5 h-5 sm:w-6 sm:h-6 flex flex-col justify-center items-center relative">
                  <span
                    className={`block h-0.5 w-full bg-current transform transition duration-300 ease-in-out ${
                      isMenuOpen
                        ? "rotate-45 translate-y-1.5"
                        : "-translate-y-1"
                    }`}
                  ></span>
                  <span
                    className={`block h-0.5 w-full bg-current transition-all duration-300 ease-in-out mt-1 ${
                      isMenuOpen ? "opacity-0" : "opacity-100"
                    }`}
                  ></span>
                  <span
                    className={`block h-0.5 w-full bg-current transform transition duration-300 ease-in-out ${
                      isMenuOpen
                        ? "-rotate-45 -translate-y-1.5"
                        : "translate-y-1"
                    }`}
                  ></span>
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <div
            className={`lg:hidden absolute left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-gray-200 shadow-xl transform transition-all duration-300 ease-in-out ${
              isMenuOpen
                ? "translate-y-0 opacity-100 visible"
                : "-translate-y-4 opacity-0 invisible"
            }`}
            style={{
              top: scrolled ? "64px" : "72px"
            }}
          >
            <div className="px-4 py-3 space-y-1">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.path}
                  className={`block px-4 py-3 rounded-xl text-base font-semibold transition-all duration-300  ${
                    activeItem === item.name
                      ? "text-gray-900 bg-blue-50 "
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50 border-transparent hover:border-gray-300"
                  }`}
                  onClick={() => handleItemClick(item)}
                >
                  <div className="flex items-center">
                    <span
                      className={` mr-3 transition-all duration-300 ${
                        activeItem === item.name
                          ? " scale-125"
                          : "bg-gray-400 group-hover:bg-gray-600"
                      }`}
                    ></span>
                    {item.name}
                  </div>
                </a>
              ))}
              
              {/* Mobile full width button */}
              <div className="pt-2 px-4">
                <MainButton fullWidth className="text-center justify-center">
                  Learn With Us
                </MainButton>
              </div>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/10 backdrop-blur-sm z-40 lg:hidden top-0"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </div>
  );
};

export default Navbar;