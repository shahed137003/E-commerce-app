import React, { createContext, useState } from "react";

const FavoriteData = createContext(); 

export const FavoriteProvider = ({ children }) => {
  const [favoriteItems, setFavoriteItems] = useState([]);
  return (
    <FavoriteData.Provider value={[favoriteItems, setFavoriteItems]}>
      {children}
    </FavoriteData.Provider>
  );
};

export default FavoriteData;
