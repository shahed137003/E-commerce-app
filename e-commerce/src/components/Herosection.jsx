import React from 'react';
import HeroImage from '../assets/undraw_shopping_a55o.svg';
console.log(React.version)
export default function Herosection() {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center dark:bg-gray-900">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl
                      bg-gradient-to-r from-[#24C6DC] to-[#514A9D] 
                      text-white rounded-3xl shadow-2xl overflow-hidden p-10
                      transition-all duration-500
                      dark:bg-gray-900/80 dark:from-gray-900 dark:to-gray-950 dark:backdrop-blur-md dark:shadow-xl dark:border dark:border-[#514A9D] dark:shadow-[#514A9D]">
        
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-xl">
            Welcome to{' '}
            <span className="text-transparent bg-clip-text 
                             bg-gradient-to-r from-[#6366F1] to-[#06B6D4] italic
                             dark:from-[#6366F1] dark:to-[#06B6D4]">
              Velora
            </span>
          </h1>

          <p className="text-[20px] md:text-xl max-w-xl leading-relaxed text-gray-100
                        dark:text-gray-200">
            Discover the perfect blend of style and comfort. Shop from our exclusive 
            collection and bring elegance into your everyday life.
          </p>

          <div className="flex gap-4 justify-center md:justify-start pt-4">
            <a
              href="#shop"
              className="px-6 py-3 bg-white text-[#514A9D] font-semibold rounded-full shadow-lg
                         hover:bg-[#24C6DC] hover:text-white transition duration-300 transform hover:scale-105
                         dark:bg-gray-700/40 dark:text-white dark:bg-gradient-to-r dark:from-[#6366F1] dark:to-[#06B6D4]"
            >
              Shop Now
            </a>
            <a
              href="#about"
              className="px-6 py-3 border-2 border-white font-semibold rounded-full 
                         hover:bg-white hover:text-[#514A9D] transition duration-300 transform hover:scale-105
                         dark:border-gray-400/60 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-white"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex-1 flex justify-center mt-10 md:mt-0">
          <img
            src={HeroImage}
            alt="Shopping illustration"
            className="w-[90%] md:w-[80%] max-w-lg drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
}
