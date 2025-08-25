import React from 'react'
import { FaShoppingCart, FaHeart } from "react-icons/fa";

export default function Card(props) {
  return (
    <div className="w-80 border border-[#24C6DC] bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:shadow-[#514A9D] p-4">
      
      {/* Product Image */}
      <div className="relative">
        <img
          src={props.product.image}
          alt="Product"
          className="rounded-2xl w-full h-48 object-contain"
        />
        {/* Favorite Button */}
        <button className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md hover:bg-[#24C6DC] group transition duration-300">
          <FaHeart className="text-[#514A9D] group-hover:text-white text-xl" />
        </button>
      </div>

      {/* Collection Name + Add to Cart */}
      <div className="flex items-center justify-between mt-4">
        <p className="text-sm text-gray-600">{props.product.category}</p>

        {/* Add to Cart Button */}
        <button className="bg-gradient-to-r from-[#24C6DC] to-[#514A9D] p-3 rounded-full shadow-md hover:shadow-lg hover:scale-110 active:scale-95 transition-all duration-300">
          <FaShoppingCart className="text-white text-[20px] text-center" />
        </button>
      </div>

      {/* Product Title */}
      <h1
        className="font-bold text-[#514A9D] text-center text-lg mt-2 
                   line-clamp-2 hover:text-[#24C6DC] transition duration-300 
                   cursor-pointer"
      >
        {props.product.title}
      </h1>

      {/* Price */}
      <p className="text-center text-gray-800 font-semibold text-md mt-1">
        {props.product.price} $
      </p>

      {/* View Details Button */}
      <button className="w-full mt-4 py-2 bg-gradient-to-r from-[#24C6DC] to-[#514A9D] text-white font-semibold rounded-full shadow-md hover:scale-105 hover:shadow-xl transition duration-300">
        View Details
      </button>
    </div>
  )
}
