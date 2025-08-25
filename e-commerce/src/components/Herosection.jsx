import React from 'react'
import HeroImage from '../assets/undraw_shopping_a55o.svg'

export default function Herosection() {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center ">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl bg-gradient-to-r from-[#24C6DC] to-[#514A9D] text-white rounded-3xl shadow-2xl overflow-hidden p-10">
        
      
        <div className="flex-1 text-center md:text-left space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
            Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#24C6DC] to-[#514A9D] italic">Velora</span>
          </h1>

          <p className="text-[30px] md:text-xl max-w-xl leading-relaxed ">
            Discover the perfect blend of style and comfort. Shop from our exclusive 
            collection and bring elegance into your everyday life.
          </p>

 
          <div className="flex gap-4 justify-center md:justify-start pt-4">
            <a
              href="#shop"
              className="px-6 py-3 bg-white text-[#514A9D] font-semibold rounded-full shadow-lg hover:bg-[#24C6DC] hover:text-white transition duration-300"
            >
              Shop Now
            </a>
            <a
              href="#about"
              className="px-6 py-3 border-2 border-white font-semibold rounded-full hover:bg-white hover:text-[#514A9D] transition duration-300"
            >
              Learn More
            </a>
          </div>
        </div>

      
        <div className="flex-1 flex justify-center mt-10 md:mt-0">
          <img
            src={HeroImage}
            alt="Shopping illustration"
            className="w-[90%] md:w-[80%] max-w-lg drop-shadow-2xl animate-bounce-slow"
          />
        </div>
      </div>
    </div>
  )
}
