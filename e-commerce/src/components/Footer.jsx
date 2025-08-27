import React from 'react';
import { FaInstagramSquare, FaTwitter, FaLinkedin } from "react-icons/fa";
import { SiFacebook } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="relative w-full bg-gradient-to-r from-[#24C6DC] to-[#514A9D] dark:from-gray-900 dark:to-gray-950 text-white dark:text-gray-300 px-10 py-12 overflow-hidden">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* About Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold dark:text-[#514A9D]">Velora</h2>
          <p className="text-sm text-gray-100 dark:text-gray-400">
            Velora is your one-stop fashion destination, blending style and comfort in every collection.
          </p>
          <div className="flex gap-4 text-2xl mt-2">
            <a href="#" className="hover:text-pink-500 dark:hover:text-pink-400 transition-colors duration-300"><FaInstagramSquare /></a>
            <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"><SiFacebook /></a>
            <a href="#" className="hover:text-sky-400 dark:hover:text-sky-300 transition-colors duration-300"><FaTwitter /></a>
            <a href="#" className="hover:text-blue-500 dark:hover:text-blue-300 transition-colors duration-300"><FaLinkedin /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-2">
          <h3 className="font-semibold text-lg dark:text-[#514A9D]">Quick Links</h3>
          <ul className="text-sm space-y-1">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#shop" className="hover:underline">Shop</a></li>
            <li><a href="#about" className="hover:underline">About Us</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div className="space-y-2">
          <h3 className="font-semibold text-lg dark:text-[#514A9D]">Customer Service</h3>
          <ul className="text-sm space-y-1">
            <li><a href="#faq" className="hover:underline">FAQ</a></li>
            <li><a href="#returns" className="hover:underline">Returns</a></li>
            <li><a href="#shipping" className="hover:underline">Shipping</a></li>
            <li><a href="#support" className="hover:underline">Support</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-2">
          <h3 className="font-semibold text-lg dark:text-[#514A9D]">Contact Us</h3>
          <p className="text-sm">123 Fashion Street, New York, NY</p>
          <p className="text-sm">Email: support@velora.com</p>
          <p className="text-sm">Phone: +1 234 567 890</p>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-8 border-t border-white/30 pt-4 text-center text-sm text-gray-200 dark:text-gray-400">
        © 2025 Velora. All rights reserved.
      </div>
    </footer>
  );
}
