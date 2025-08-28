import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Card from "./Card";

export default function Category() {
  const { category_name } = useParams();
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get("https://fakestoreapi.com/products").then((resp) => {
      let data = resp.data;
      let categoryData = data.filter(
        (item) => item.category === category_name.toLowerCase()
      );
      setCategoryProducts(categoryData);
      setLoading(false);
    });
  }, [category_name]);

  return (
    <div className="relative px-6 py-20 min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 
                    dark:from-gray-900 dark:via-gray-950 dark:to-black transition-colors duration-500">
      
      {/* Page Title */}
      <h1 className="text-5xl sm:text-6xl font-extrabold text-center mb-16 
                     text-transparent bg-clip-text bg-gradient-to-r from-[#24C6DC] to-[#514A9D] 
                     dark:from-[#514A9D] dark:to-[#24C6DC] drop-shadow-xl animate-fade-in">
        {category_name.charAt(0).toUpperCase() + category_name.slice(1)}
      </h1>

      {/* Loading State */}
      {loading ? (
  <div className="flex flex-col items-center justify-center mt-20 space-y-4 h-screen bg-gray-100 dark:bg-gray-900">
  {/* Spinner Circle */}
  <div className="w-12 h-12 border-4 border-t-[#24C6DC] border-b-[#514A9D] border-gray-300 dark:border-gray-700 rounded-full animate-spin"></div>

  {/* Loading Text */}
  <p className="text-center text-[#24C6DC] dark:text-[#514A9D] text-lg sm:text-xl font-semibold animate-pulse">
    Loading products...
  </p>
</div>
      ) : categoryProducts.length === 0 ? (
        <p className="text-center text-gray-500 dark:text-gray-400 text-lg sm:text-xl">
          No products found in this category.
        </p>
      ) : (
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {categoryProducts.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
