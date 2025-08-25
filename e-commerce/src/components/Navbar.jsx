import React, { useEffect, useState } from "react";
import { FaShoppingBag, FaShoppingCart, FaHeart, FaUser, FaMoon, FaSun } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(true);

  // Apply dark mode class to <html>
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="fixed top-0 left-0 w-full bg-white/80 dark:bg-gray-900/90 backdrop-blur-md shadow-md z-50 border-b border-[#24C6DC] dark:border-[#514A9D]">
      <div className="flex justify-between items-center px-8 py-4">
        
        {/* Logo */}
        <h1 className="flex items-center text-transparent bg-clip-text bg-gradient-to-r from-[#24C6DC] to-[#514A9D] text-4xl font-extrabold italic tracking-wide drop-shadow-sm">
          <FaShoppingBag className="text-[#24C6DC] mr-2 drop-shadow-md" />
          Velora
        </h1>

        {/* Navigation Links */}
        <ul className="flex gap-10 text-lg font-semibold tracking-wide text-[#24C6DC] dark:text-[#A5B4FC]">
          {["Home", "Shop", "Checkout", "About Us"].map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className="relative px-2 py-1 transition duration-300 hover:text-[#514A9D] 
                           after:content-[''] after:absolute after:left-0 after:bottom-0 
                           after:w-0 after:h-[2px] after:bg-gradient-to-r 
                           after:from-[#24C6DC] after:to-[#514A9D] 
                           after:transition-all after:duration-500 hover:after:w-full"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Search Box */}
        <div className="relative w-72">
          <input
            className="w-full border border-[#24C6DC] rounded-full py-2 px-5 pr-12 
                       text-[#514A9D] placeholder-[#24C6DC] focus:outline-none 
                       focus:border-[#514A9D] focus:ring-2 focus:ring-[#24C6DC]/40 
                       transition duration-300 shadow-sm hover:shadow-md 
                       dark:bg-gray-800 dark:text-white dark:border-[#514A9D] dark:placeholder-gray-400"
            placeholder="Search products..."
          />
          <FaSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-[#24C6DC]  cursor-pointer hover:scale-110 transition duration-300" />
        </div>

        {/* Icons */}
        <div className="flex items-center gap-6 text-[#24C6DC]  text-2xl">
          {/* Wishlist */}
          <FaHeart
            className="cursor-pointer hover:text-[#514A9D] dark:hover:text-red-400 transition-transform duration-300 hover:scale-125 hover:drop-shadow-md"
            title="Wishlist"
          />

          {/* Cart */}
          <FaShoppingCart
            className="cursor-pointer hover:text-[#514A9D] dark:hover:text-green-400 transition-transform duration-300 hover:scale-125 hover:drop-shadow-md"
            title="Cart"
          />

          {/* Profile */}
          <FaUser
            className="cursor-pointer hover:text-[#514A9D] dark:hover:text-blue-400 transition-transform duration-300 hover:scale-125 hover:drop-shadow-md"
            title="Profile"
          />

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="transition-transform duration-300 hover:scale-125 hover:drop-shadow-md cursor-pointer"
            title="Toggle Dark Mode"
          >
            {darkMode ? <FaSun className="dark:hover:text-yellow-300" /> : <FaMoon className="hover:text-[#514A9D]" />}
          </button>
        </div>
      </div>
    </div>
  );
}
