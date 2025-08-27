import React, { useContext, useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { CartContext } from '../context/CartData';

export default function CartCard({ product }) {
  const [cartItems, setCartItems] = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const handleRemove = () => {
    setCartItems(cartItems.filter(item => item.id !== product.id));
  };

  const handleQuantityChange = (e) => {
    const value = Math.max(1, parseInt(e.target.value) || 1);
    setQuantity(value);
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between bg-white dark:bg-gray-800
                    border border-transparent rounded-3xl shadow-lg p-6 mb-6
                    transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl
                    hover:border-gradient-to-r hover:from-[#24C6DC] hover:to-[#514A9D] relative overflow-hidden">

      {/* Background gradient overlay */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#24C6DC] to-[#514A9D] opacity-10 pointer-events-none"></div>

      {/* Product Image */}
      <img
        src={product.image}
        alt={product.title}
        className="w-20 h-20 sm:w-26 sm:h-26 object-contain rounded-xl mb-4 sm:mb-0 sm:mr-6 hover:scale-110 transition-transform duration-500 z-10"
      />

      {/* Product Info */}
      <div className="flex-1 text-center sm:text-left z-10">
        <h2 className="font-bold text-lg text-[#514A9D] dark:text-[#24C6DC] line-clamp-2 
                       overflow-hidden overflow-ellipsis whitespace-normal hover:text-[#24C6DC] dark:hover:text-[#514A9D] transition-colors duration-300">
          {product.title}
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 truncate">{product.category}</p>
        <p className="font-extrabold text-xl text-gray-800 dark:text-gray-200 mt-2 transition-all duration-300 hover:text-[#24C6DC] dark:hover:text-[#514A9D]">
          ${product.price * quantity}
        </p>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 sm:mt-0 z-10">
        {/* Quantity Selector */}
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={handleQuantityChange}
          className="w-12 p-2 rounded-xl border border-gray-300 dark:border-gray-600 text-center
                     focus:outline-none focus:ring-2 focus:ring-[#24C6DC] dark:focus:ring-[#514A9D]
                     transition-all duration-300 hover:scale-105 m-1"
        />

        {/* Remove Button */}
        <button
          onClick={handleRemove}
          className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full shadow-md
                     hover:shadow-xl transition-all duration-300 flex items-center justify-center transform hover:scale-110  mr-3"
        >
          <FaTrashAlt />
        </button>
      </div>
    </div>
  );
}
