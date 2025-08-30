import React from "react";
import { FaShoppingCart, FaShippingFast, FaHeadset, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import ShoppingLight from "../assets/undraw_online-shopping_hgf6 (2).svg";
import ShoppingDark from "../assets/undraw_online-shopping_hgf6 (3).svg";

export default function About() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-16 bg-gray-100 dark:bg-gray-900 transition-all duration-500">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-white/30 dark:bg-gray-800/40 backdrop-blur-xl rounded-3xl shadow-xl p-10 border border-[#24C6DC] dark:border-[#514A9D] mt-10">
        
        {/* Left: Illustration with animation */}
        <div className="flex justify-center items-center relative">
         
          <motion.img
            src={ShoppingLight}
            alt="Shopping Illustration Light"
            className="w-80 md:w-[420px] drop-shadow-lg block dark:hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
          />
          {/* Dark mode image */}
          <motion.img
            src={ShoppingDark}
            alt="Shopping Illustration Dark"
            className="w-80 md:w-[420px] drop-shadow-lg hidden dark:block"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            whileHover={{ scale: 1.05, rotate: -2 }}
            whileTap={{ scale: 0.95 }}
          />
        </div>

    {/* Right: Content */}
        <div className="text-center md:text-left">
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#24C6DC] to-[#514A9D] dark:from-[#514A9D] dark:to-[#24C6DC] mb-6">
            About Us
          </h1>

          {/* Intro */}
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
            Welcome to <span className="font-semibold text-[#24C6DC]">Our Store</span> 🎉  
            We’re passionate about bringing you the best products at the best prices.  
            Our mission is to make online shopping simple, secure, and enjoyable for everyone.  
          </p>

          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
            From the latest fashion to cutting-edge electronics and daily essentials,  
            we’ve got you covered with quality items chosen just for you.
          </p>

          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
            At the heart of our journey is <span className="font-semibold text-[#514A9D]">you</span>, our valued customer 💙.  
            We’re always evolving to give you faster delivery, better deals,  
            and a personalized shopping experience that fits your lifestyle.
          </p>

          {/* Why Choose Us */}
      <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#514A9D] to-[#24C6DC] mb-6">
            Why Choose Us?
          </h2>
          <ul className="space-y-4 text-left">
            <li className="flex items-center gap-4 text-gray-700 dark:text-gray-300 text-lg">
              <span className="p-3 rounded-full bg-gradient-to-r from-[#24C6DC] to-[#514A9D] text-white">
                <FaStar className="text-xl" />
              </span>
              High-quality, carefully selected products
            </li>
            <li className="flex items-center gap-4 text-gray-700 dark:text-gray-300 text-lg">
              <span className="p-3 rounded-full bg-gradient-to-r from-[#514A9D] to-[#24C6DC] text-white">
                <FaShoppingCart className="text-xl" />
              </span>
              Secure & reliable online shopping
            </li>
            <li className="flex items-center gap-4 text-gray-700 dark:text-gray-300 text-lg">
              <span className="p-3 rounded-full bg-gradient-to-r from-[#24C6DC] to-[#514A9D] text-white">
                <FaShippingFast className="text-xl" />
              </span>
              Fast delivery with trusted services
            </li>
            <li className="flex items-center gap-4 text-gray-700 dark:text-gray-300 text-lg">
              <span className="p-3 rounded-full bg-gradient-to-r from-[#514A9D] to-[#24C6DC] text-white">
                <FaHeadset className="text-xl" />
              </span>
              24/7 customer support for your convenience
            </li>
          </ul>


          {/* Closing note */}
         <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mt-8">
            Thank you for trusting us with your shopping journey.  
            Let’s continue building this amazing community together 🌍✨.
          </p>
        </div>
      </div>
    </section>
  );
}
