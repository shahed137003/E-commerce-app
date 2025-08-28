import React, { useContext } from "react";
import FavoriteData from "../context/FavoriteData";
import Card from "./Card";

export default function Favorite() {
  const [favoriteItems] = useContext(FavoriteData);

  return (
    <div className="relative px-4 sm:px-6 pt-24 pb-16 min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      {/* Page Title */}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center mb-10 sm:mb-12 text-transparent bg-clip-text bg-gradient-to-r from-[#24C6DC] to-[#514A9D] dark:from-[#514A9D] dark:to-[#24C6DC] drop-shadow-lg">
        Favorite Items
      </h1>

      {/* Empty State */}
      {favoriteItems.length === 0 ? (
        <p className="text-center text-gray-500 dark:text-gray-400 text-base sm:text-lg lg:text-xl px-4">
          You haven't added any favorite items yet.
        </p>
      ) : (
        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {favoriteItems.map((item) => (
            <Card key={item.id} product={item} />
          ))}
        </div>
      )}

      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-2/3 sm:w-1/2 h-72 sm:h-96 bg-gradient-to-br from-[#24C6DC] to-[#514A9D] opacity-10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-1/2 sm:w-1/3 h-52 sm:h-64 bg-gradient-to-tr from-[#514A9D] to-[#24C6DC] opacity-10 rounded-full blur-3xl -z-10"></div>
    </div>
  );
}
