import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export default function CartData({ children }) {
  const [cartItems, setCartItems] = useState([]);

  return (
    <CartContext.Provider value={[cartItems, setCartItems]}>
      {children}
    </CartContext.Provider>
  );
}
