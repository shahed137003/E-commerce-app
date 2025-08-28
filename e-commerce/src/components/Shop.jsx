import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterValue, setFilterValue] = useState({
    category: "",
    price: 0,
  });

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((resp) => {
        let data = resp.data;

        if (filterValue.category !== "") {
          data = data.filter(
            (product) => product.category === filterValue.category
          );
        }

        if (filterValue.price > 0) {
          data = data.filter((product) => product.price <= filterValue.price);
        }

        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  }, [filterValue]);

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

  function handleFilterChange(e) {
    const { name, value } = e.target;
    setFilterValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div className="relative px-6 py-24 min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      
      {/* Page Title */}
      <h1 className="text-5xl sm:text-6xl font-extrabold text-center mb-14 text-transparent bg-clip-text bg-gradient-to-r from-[#24C6DC] to-[#514A9D] dark:from-[#514A9D] dark:to-[#24C6DC] drop-shadow-lg">
        Shop Now
      </h1>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-6 items-center justify-center mb-12">
        <select
          name="category"
          className="p-4 rounded-xl border-2 border-transparent bg-white dark:bg-gray-800 dark:text-white
                     shadow-lg transition-all duration-300 ease-in-out
                     focus:outline-none focus:ring-2 focus:ring-[#24C6DC] focus:border-[#514A9D]
                     hover:scale-105 cursor-pointer"
          value={filterValue.category}
          onChange={handleFilterChange}
        >
          <option value="">✨ All Categories</option>
          <option value="men's clothing">👔 Men's Clothing</option>
          <option value="women's clothing">👗 Women's Clothing</option>
          <option value="electronics">💻 Electronics</option>
          <option value="jewelery">💍 Jewelery</option>
        </select>

        <select
          name="price"
          className="p-4 rounded-xl border-2 border-transparent bg-white dark:bg-gray-800 dark:text-white
                     shadow-lg transition-all duration-300 ease-in-out
                     focus:outline-none focus:ring-2 focus:ring-[#514A9D] focus:border-[#24C6DC]
                     hover:scale-105 cursor-pointer"
          value={filterValue.price}
          onChange={handleFilterChange}
        >
          <option value="0">💰 Any Price</option>
          <option value="50">💵 Up to $50</option>
          <option value="100">💸 Up to $100</option>
          <option value="200">💎 Up to $200</option>
        </select>
      </div>

      {/* Products Grid */}
      {products.length === 0 ? (
        <p className="text-center text-gray-500 dark:text-gray-400 text-lg sm:text-xl">
          No products found matching your filters.
        </p>
      ) : (
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
          {products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      )}

      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-1/3 h-96 bg-gradient-to-br from-[#24C6DC] to-[#514A9D] opacity-10 rounded-full -z-10"></div>
      <div className="absolute bottom-0 right-0 w-1/4 h-64 bg-gradient-to-tr from-[#514A9D] to-[#24C6DC] opacity-10 rounded-full -z-10"></div>
    </div>
  );
}
