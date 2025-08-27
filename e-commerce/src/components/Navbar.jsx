import React, { useEffect, useState } from "react";
import {
  FaShoppingBag,
  FaShoppingCart,
  FaHeart,
  FaUser,
  FaMoon,
  FaSun,
  FaSearch,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
   const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Checkout", path: "/checkout" },
    { name: "About Us", path: "/about" },
  ];

  return (
    <div className="fixed top-0 left-0 w-full bg-white/80 dark:bg-gray-900/90 backdrop-blur-md shadow-md z-50 border-b border-[#24C6DC] dark:border-[#514A9D]">
      <div className="flex justify-between items-center px-8 py-4">
        
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center text-transparent bg-clip-text bg-gradient-to-r from-[#24C6DC] to-[#514A9D] text-4xl font-extrabold italic tracking-wide drop-shadow-sm"
        >
          <FaShoppingBag className="text-[#24C6DC] mr-2 drop-shadow-md" />
          Velora
        </Link>

        {/* Navigation Links */}
        <ul className="flex gap-10 text-lg font-semibold tracking-wide text-[#24C6DC] dark:text-[#A5B4FC]">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className="relative px-2 py-1 transition duration-300 hover:text-[#514A9D] 
                           after:content-[''] after:absolute after:left-0 after:bottom-0 
                           after:w-0 after:h-[2px] after:bg-gradient-to-r 
                           after:from-[#24C6DC] after:to-[#514A9D] 
                           after:transition-all after:duration-500 hover:after:w-full"
              >
                {item.name}
              </Link>
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
          <FaSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-[#24C6DC] cursor-pointer hover:scale-110 transition duration-300" />
        </div>

        {/* Icons */}
        <div className="flex items-center gap-6 text-[#24C6DC] text-2xl">
         <FaHeart
      className="cursor-pointer hover:text-[#514A9D] dark:hover:text-red-400 transition-transform duration-300 hover:scale-125 hover:drop-shadow-md"
      title="Wishlist"
      onClick={() => navigate('/favorite')}  
    />
          <FaShoppingCart
            className="cursor-pointer hover:text-[#514A9D] dark:hover:text-green-400 transition-transform duration-300 hover:scale-125 hover:drop-shadow-md"
            title="Cart"
               onClick={() => navigate('/cart')}  
          />
          <FaUser
            className="cursor-pointer hover:text-[#514A9D] dark:hover:text-blue-400 transition-transform duration-300 hover:scale-125 hover:drop-shadow-md"
            title="Profile"
          />
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="transition-transform duration-300 hover:scale-125 hover:drop-shadow-md cursor-pointer"
            title="Toggle Dark Mode"
          >
            {darkMode ? (
              <FaSun className="dark:hover:text-yellow-300" />
            ) : (
              <FaMoon className="hover:text-[#514A9D]" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
