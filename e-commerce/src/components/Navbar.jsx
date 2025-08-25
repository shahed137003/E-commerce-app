import { FaShoppingBag, FaShoppingCart, FaHeart, FaUser } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import React from "react";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-md z-50 border-b border-[#24C6DC]">
      <div className="flex justify-between items-center px-8 py-4">
        
        {/* Logo */}
        <h1 className="flex items-center text-transparent bg-clip-text bg-gradient-to-r from-[#24C6DC] to-[#514A9D] text-4xl font-extrabold italic tracking-wide drop-shadow-sm">
          <FaShoppingBag className="text-[#24C6DC] mr-2 drop-shadow-md" />
          Velora
        </h1>

        {/* Navigation Links */}
        <ul className="flex gap-10 text-lg font-semibold tracking-wide text-[#24C6DC]">
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
                       transition duration-300 shadow-sm hover:shadow-md"
            placeholder="Search products..."
          />
          <FaSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-[#24C6DC] cursor-pointer hover:text-[#514A9D] transition duration-300 hover:scale-110" />
        </div>

        {/* Icons */}
        <div className="flex items-center gap-6 text-[#24C6DC] text-2xl">
          {/* Wishlist */}
          <FaHeart
            className="cursor-pointer hover:text-[#514A9D] transition-transform duration-300 hover:scale-125 hover:drop-shadow-md"
            title="Wishlist"
          />

          {/* Cart */}
          <FaShoppingCart
            className="cursor-pointer hover:text-[#514A9D] transition-transform duration-300 hover:scale-125 hover:drop-shadow-md"
            title="Cart"
          />

          {/* Profile */}
          <FaUser
            className="cursor-pointer hover:text-[#514A9D] transition-transform duration-300 hover:scale-125 hover:drop-shadow-md"
            title="Profile"
          />

          {/* Login */}
          <FiLogIn
            className="cursor-pointer hover:text-[#514A9D] transition-transform duration-300 hover:scale-125 hover:drop-shadow-md"
            title="Login"
          />
        </div>
      </div>
    </div>
  );
}
