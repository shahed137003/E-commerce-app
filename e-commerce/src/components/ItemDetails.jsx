import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CartContext } from "../context/CartData";

export default function ItemDetails() {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useContext(CartContext);

  const isInCart = productDetails
    ? cartItems.some((item) => item.id === productDetails.id)
    : false;

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((resp) => {
      const product = resp.data.find((item) => item.id === parseInt(id));
      setProductDetails(product);
      setLoading(false);
    });
  }, [id]);

  const handleCart = () => {
    if (productDetails && !isInCart) {
      setCartItems([...cartItems, productDetails]);
    }
  };

  if (loading)
    return (
<div className="flex flex-col items-center justify-center mt-20 space-y-4 h-screen bg-gray-100 dark:bg-gray-900">
  {/* Spinner Circle */}
  <div className="w-12 h-12 border-4 border-t-[#24C6DC] border-b-[#514A9D] border-gray-300 dark:border-gray-700 rounded-full animate-spin"></div>

  {/* Loading Text */}
  <p className="text-center text-[#24C6DC] dark:text-[#514A9D] text-lg sm:text-xl font-semibold animate-pulse">
    Loading products...
  </p>
</div>

    );
  if (!productDetails)
    return (
      <p className="text-center mt-20 text-lg sm:text-xl text-gray-600 dark:text-gray-300">
        Product not found
      </p>
    );

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-10">
      <div className="w-full max-w-5xl relative rounded-3xl p-1 bg-gradient-to-r from-[#24C6DC] to-[#514A9D] shadow-xl">
        {/* Inner card */}
        <div className="bg-white dark:bg-gray-800/90 backdrop-blur-md rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 flex flex-col md:flex-row gap-6 md:gap-12 transition-transform duration-500 hover:scale-[1.01]">
          {/* Product Image */}
          <div className="flex-1 flex items-center justify-center">
            <img
              src={productDetails.image}
              alt={productDetails.title}
              className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto rounded-2xl object-contain shadow-xl transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Product Info */}
          <div className="flex-1 flex flex-col justify-center gap-4 md:gap-6">
            {/* Title */}
            <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white leading-snug">
              {productDetails.title}
            </h1>

            {/* Category Badge */}
            <span className="inline-block self-start px-3 py-1 text-xs sm:text-sm md:text-base font-semibold rounded-full bg-gradient-to-r from-[#24C6DC] to-[#514A9D] text-white">
              {productDetails.category.toUpperCase()}
            </span>

            {/* Description */}
            <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed mt-2">
              {productDetails.description}
            </p>

            {/* Price */}
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mt-4">
              Price:{" "}
              <span className="text-[#24C6DC] dark:text-[#514A9D]">
                ${productDetails.price}
              </span>
            </p>

            {/* Add to Cart Button */}
            <button
              onClick={handleCart}
              disabled={isInCart}
              className={`w-full sm:w-48 py-2 sm:py-3 mt-4 font-semibold rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${
                isInCart
                  ? "bg-[#24C6DC] dark:bg-[#514A9D] cursor-not-allowed text-white"
                  : "bg-gradient-to-r from-[#24C6DC] to-[#514A9D] text-white hover:scale-105 hover:shadow-xl"
              }`}
            >
              {isInCart ? "In Cart" : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
