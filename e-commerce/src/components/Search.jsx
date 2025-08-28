import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Card from "../components/Card"; // adjust path if needed

export default function Search() {
  const { title } = useParams(); // search keyword from URL
  const [productSearch, setProductSearch] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((resp) => {
      const data = resp.data;
      const searchData = data.filter((product) =>
        product.title.toLowerCase().includes(title.toLowerCase())
      );
      setProductSearch(searchData);
      setLoading(false);
    });
  }, [title]);

  if (loading) {
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
  }

  return (
    <div className="relative px-6 py-20 min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      {/* Page Title */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-14 text-transparent bg-clip-text bg-gradient-to-r from-[#24C6DC] to-[#514A9D] dark:from-[#514A9D] dark:to-[#24C6DC] drop-shadow-lg">
        Search Results for “{title}”
      </h1>

      {productSearch.length === 0 ? (
        <p className="text-center text-gray-500 dark:text-gray-400 text-lg sm:text-xl">
          No products found matching your search.
        </p>
      ) : (
        <div className="grid gap-8 sm:gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {productSearch.map((product) => (
            <div
              key={product.id}
              className="transform hover:scale-105 transition duration-300"
            >
              <Card product={product} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
