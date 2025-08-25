import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

export default function FeaturedProducts() {
  const [products, setProducts] = useState([]); 
  const [loading, setLoading] = useState(true);

  // define which product IDs are "featured"
  const featuredIds = [1, 2, 3, 7, 10 , 12 , 18];  

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
      <p className="text-center text-lg text-[#514A9D] mt-10 animate-pulse">
        Loading products...
      </p>
    );
  }

  return (
    <div className="relative px-6 py-10">
      <h1 className="text-4xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-[#24C6DC] to-[#514A9D]">
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
