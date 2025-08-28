import React from "react";
import { FaCheckCircle, FaShoppingCart, FaShippingFast, FaHeadset, FaStar } from "react-icons/fa";

export default function About() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-16 bg-gray-100 dark:bg-gray-900 transition-all duration-500">
      <div className="max-w-4xl text-center bg-white/30 dark:bg-gray-800/40 backdrop-blur-xl rounded-3xl shadow-xl p-10 border border-[#24C6DC] dark:border-[#514A9D] mt-10">
        
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#24C6DC] to-[#514A9D] mb-6">
          About Us
        </h1>

        {/* Intro */}
        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
          Welcome to <span className="font-semibold text-[#24C6DC]">Our Store</span> 🎉  
          We’re passionate about bringing you the best products at the best prices.  
          Our mission is to make online shopping simple, secure, and enjoyable for everyone.  
        </p>

        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
          Whether you're looking for the latest fashion, electronics, or daily essentials,  
          we’ve got you covered. We carefully select our items to ensure quality and satisfaction.
        </p>

        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
          At the heart of our journey is <span className="font-semibold text-[#514A9D]">you</span>, our valued customer 💙.  
          We are constantly evolving to provide better services, faster delivery,  
          and a personalized shopping experience that fits your lifestyle.
        </p>

        {/* Why Choose Us */}
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#514A9D] to-[#24C6DC] mb-6">
          Why Choose Us?
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-8">
          <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300 text-lg">
            <FaStar className="text-[#24C6DC] text-2xl" /> High-quality, carefully selected products
          </li>
          <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300 text-lg">
            <FaShoppingCart className="text-[#514A9D] text-2xl" /> Secure & reliable online shopping
          </li>
          <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300 text-lg">
            <FaShippingFast className="text-[#24C6DC] text-2xl" /> Fast delivery with trusted services
          </li>
          <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300 text-lg">
            <FaHeadset className="text-[#514A9D] text-2xl" /> 24/7 customer support for your convenience
          </li>
        </ul>

        {/* Closing note */}
        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
          Thank you for trusting us with your shopping journey.  
          Let’s continue building this amazing community together 🌍✨.
        </p>
      </div>
    </section>
  );
}
