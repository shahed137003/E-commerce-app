import React, { useContext } from 'react';
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import FavoriteData from '../context/FavoriteData';
import { CartContext } from '../context/CartData';
import { useNavigate } from 'react-router-dom';

export default function Card({ product }) {
  const [favoriteItems, setFavoriteItems] = useContext(FavoriteData);
  const [cartItems, setCartItems] = useContext(CartContext);
  const navigate = useNavigate();

  const isFavorite = favoriteItems.some(item => item.id === product.id);

  // Toggle favorite status
  const handleFavorite = () => {
    if (isFavorite) {
      setFavoriteItems(favoriteItems.filter(item => item.id !== product.id));
    } else {
      setFavoriteItems([...favoriteItems, product]);
    }
  };

  // Add to cart or increment quantity
  const handleCart = () => {
    const itemInCart = cartItems.find(item => item.id === product.id);
    if (itemInCart) {
      setCartItems(
        cartItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div className="
      w-80 border border-[#24C6DC] bg-white dark:bg-gray-800 dark:border-[#514A9D]
      rounded-2xl shadow-[0_8px_20px_rgba(36,198,220,0.2),0_4px_10px_rgba(81,74,157,0.15)]
      dark:shadow-[0_10px_25px_rgba(99,102,241,0.4),0_5px_15px_rgba(6,182,212,0.2)]
      hover:shadow-[0_12px_30px_rgba(36,198,220,0.4),0_6px_20px_rgba(81,74,157,0.25)]
      dark:hover:shadow-[0_15px_30px_rgba(99,102,241,0.6),0_8px_20px_rgba(6,182,212,0.3)]
      transition-all duration-500 transform hover:-translate-y-2 p-4
    ">
      {/* Product Image */}
      <div className="relative">
        <img
          src={product.image}
          alt={product.title}
          className="rounded-2xl w-full h-48 object-contain"
        />
        {/* Favorite Button */}
        <button
          type="button"
          className={`absolute top-3 right-3 rounded-full p-2 shadow-md transition duration-300 
            ${isFavorite 
              ? 'bg-[#24C6DC] dark:bg-[#514A9D]' 
              : 'bg-white dark:bg-gray-700 hover:bg-[#24C6DC]'}`}
          onClick={handleFavorite}
        >
          <FaHeart
            className={`text-xl transition duration-300 ${
              isFavorite ? 'text-white' : 'text-[#514A9D] dark:text-[#24C6DC]'
            }`}
          />
        </button>
      </div>

      {/* Category + Add to Cart */}
      <div className="flex items-center justify-between mt-4">
        <p className="text-sm text-gray-600 dark:text-gray-300">{product.category}</p>
        <button
          type="button"
          className="bg-gradient-to-r from-[#24C6DC] to-[#514A9D] p-3 rounded-full shadow-md hover:shadow-lg hover:scale-110 active:scale-95 transition-all duration-300"
          onClick={handleCart}
        >
          <FaShoppingCart className="text-white text-[20px] text-center" />
        </button>
      </div>

      {/* Product Title */}
      <h1 className="font-bold text-[#514A9D] dark:text-[#24C6DC] text-center text-lg mt-2 line-clamp-2 hover:text-[#24C6DC] dark:hover:text-[#514A9D] transition duration-300 cursor-pointer">
        {product.title}
      </h1>

      {/* Price */}
      <p className="text-center text-gray-800 dark:text-gray-200 font-semibold text-md mt-1">
        {product.price} $
      </p>

      {/* View Details */}
      <button
        className="w-full mt-4 py-2 bg-gradient-to-r from-[#24C6DC] to-[#514A9D] dark:from-[#514A9D] dark:to-[#24C6DC] text-white font-semibold rounded-full shadow-md hover:scale-105 hover:shadow-xl transition duration-300"
        onClick={() => navigate(`/itemDetails/${product.id}`)}
      >
        View Details
      </button>
    </div>
  );
}
