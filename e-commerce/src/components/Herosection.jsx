import React from "react";
import HeroImage from "../assets/undraw_shopping_a55o.svg";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Herosection() {
  const navigate = useNavigate();

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center dark:bg-gray-900 px-4 sm:px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl
                   bg-gradient-to-r from-[#24C6DC] to-[#514A9D] 
                   text-white rounded-3xl shadow-2xl overflow-hidden p-6 md:p-12
                   transition-all duration-500
                   dark:bg-gray-900/80 dark:from-gray-900 dark:to-gray-950 dark:backdrop-blur-md dark:border dark:border-[#514A9D]
                   dark:shadow-2xl dark:shadow-[#514A9D]
                   "
      >
        {/* Text Section */}
        <div className="flex-1 text-center md:text-left space-y-6 md:space-y-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-xl">
            Welcome to{" "}
            <span
              className="text-transparent bg-clip-text 
                         bg-gradient-to-r from-[#6366F1] to-[#06B6D4] italic
                         dark:from-[#6366F1] dark:to-[#06B6D4]"
            >
              Velora
            </span>
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl max-w-xl mx-auto md:mx-0 leading-relaxed text-gray-100 dark:text-gray-200">
            Discover the perfect blend of{" "}
            <span className="font-semibold text-[#06B6D4]">style</span> and{" "}
            <span className="font-semibold text-[#6366F1]">comfort</span>.
            Explore our exclusive collection to add elegance into your everyday life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <motion.button
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-white text-[#514A9D] font-semibold rounded-full shadow-lg
                         hover:bg-[#24C6DC] hover:text-white transition duration-300
                         dark:bg-gray-700/40 dark:text-white dark:bg-gradient-to-r dark:from-[#6366F1] dark:to-[#06B6D4]"
              onClick={() => navigate("/shop")}
            >
              Shop Now
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 border-2 border-white font-semibold rounded-full 
                         hover:bg-white hover:text-[#514A9D] transition duration-300
                         dark:border-gray-400/60 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-white"
              onClick={() => navigate("/about")}
            >
              Learn More
            </motion.button>
          </div>
        </div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="flex-1 flex justify-center mt-10 md:mt-0"
        >
          <img
            src={HeroImage}
            alt="Shopping illustration"
            className="w-[85%] md:w-[80%] max-w-md drop-shadow-2xl hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
