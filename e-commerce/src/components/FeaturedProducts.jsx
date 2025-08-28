import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

export default function FeaturedProducts() {
  const [products, setProducts] = useState([]); 
  const [loading, setLoading] = useState(true);

  // define which product IDs are "featured"
  const featuredIds = [1, 2, 3, 7, 10, 12, 15 , 17,18 ,19 ];  

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((resp) => {
        const featured = resp.data.filter((p) => featuredIds.includes(p.id));
        setProducts(featured);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  }, []);

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
    <div className="relative px-6 py-10 dark:bg-gray-900">
      <h1 className="text-4xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-[#24C6DC] to-[#514A9D] dark:from-[#514A9D] dark:to-[#24C6DC]">
        Featured Products
      </h1>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
