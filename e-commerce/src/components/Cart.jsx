import React, { useContext } from 'react';
import { CartContext } from '../context/CartData';
import CartCard from './CartCard';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const [cartItems] = useContext(CartContext);
  const navigate =useNavigate()

  return (
    <div className="relative px-6 pt-24 pb-16 min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      
      {/* Page Title */}
      <h1 className="text-5xl sm:text-6xl font-extrabold text-center mb-12 
                     text-transparent bg-clip-text bg-gradient-to-r from-[#24C6DC] to-[#514A9D] 
                     dark:from-[#514A9D] dark:to-[#24C6DC] drop-shadow-lg">
        Your Cart
      </h1>

      {/* Empty Cart Message */}
      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-20 space-y-4">
          <p className="text-center text-gray-500 dark:text-gray-400 text-lg sm:text-xl">
            Your cart is currently empty.
          </p>
          <p className="text-center text-gray-400 dark:text-gray-500 text-md sm:text-lg">
            Browse our shop and add some amazing items!
          </p>
        </div>
      ) : (
       <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-8 px-4">
  {cartItems.map((item) => (
    <div key={item.id} className="w-full sm:w-80 md:w-96">
      <CartCard product={item} />
    </div>
  ))}
</div>

      )}

      {/* Decorative Background Shapes */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-[#24C6DC] to-[#514A9D] opacity-10 rounded-full -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-tr from-[#514A9D] to-[#24C6DC] opacity-10 rounded-full -z-10"></div>

      {/* Optional Footer CTA */}
      {cartItems.length > 0 && (
        <div className="mt-12 flex justify-center">
          <button className="bg-gradient-to-r from-[#24C6DC] to-[#514A9D] dark:from-[#514A9D] dark:to-[#24C6DC] 
                             text-white font-semibold px-8 py-3 rounded-2xl shadow-lg hover:shadow-xl 
                             transform hover:scale-105 transition-all duration-300"
                             
                             onClick={()=>navigate('/checkout')}
                             >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
}
