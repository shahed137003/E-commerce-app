import React from "react";
import jewelery from "../assets/jewelery.jpg";
import man from "../assets/man.jpg";
import women from "../assets/women.jpg";
import electronics from "../assets/electronics.jpg";

export default function Categories() {
  const categories = [
    { name: "Men's Clothing", img: man },
    { name: "Women's Clothing", img: women },
    { name: "Electronics", img: electronics },
    { name: "Jewelery", img: jewelery },
  ];

  return (
    <div className="relative px-6 py-12">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] to-[#06B6D4]">
        Shop by Category
      </h1>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {categories.map((category, index) => (
          <div
            key={index}
            className="relative group cursor-pointer rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden"
          >
            {/* Background Image */}
            <img
              src={category.img}
              alt={category.name}
              className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

            {/* Text */}
            <div className="absolute bottom-4 left-4">
              <h2 className="text-xl font-semibold text-white drop-shadow-lg">
                {category.name}
              </h2>
              <button className="mt-2 px-4 py-1 bg-gradient-to-r from-[#6366F1] to-[#06B6D4] text-white text-sm rounded-full shadow-md hover:opacity-90 transition">
                Explore
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
