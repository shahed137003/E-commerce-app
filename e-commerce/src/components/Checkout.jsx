import React, { useContext ,useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCreditCard, FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../context/CartData";

export default function Checkout() {
  const [cartItems] = useContext(CartContext);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handlePlaceOrder = () => {
    setOrderPlaced(true);
  };

  // Calculate total
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Left: Billing Details */}
        <div className="bg-white/30 dark:bg-gray-800/40 backdrop-blur-xl shadow-2xl border border-[#24C6DC] dark:border-[#514A9D] rounded-3xl p-8 transition-all duration-500">
          <h2 className="text-2xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#24C6DC] to-[#514A9D]">
            Billing Details
          </h2>

          <div className="space-y-4">
            {/* Name */}
            <div className="flex items-center border rounded-xl px-3 py-2 bg-white/60 dark:bg-gray-900/40">
              <FaUser className="text-gray-500 mr-3" />
              <input type="text" placeholder="Full Name" className="bg-transparent outline-none w-full text-gray-800 dark:text-gray-200" />
            </div>

            {/* Email */}
            <div className="flex items-center border rounded-xl px-3 py-2 bg-white/60 dark:bg-gray-900/40">
              <FaEnvelope className="text-gray-500 mr-3" />
              <input type="email" placeholder="Email Address" className="bg-transparent outline-none w-full text-gray-800 dark:text-gray-200" />
            </div>

            {/* Phone */}
            <div className="flex items-center border rounded-xl px-3 py-2 bg-white/60 dark:bg-gray-900/40">
              <FaPhone className="text-gray-500 mr-3" />
              <input type="text" placeholder="Phone Number" className="bg-transparent outline-none w-full text-gray-800 dark:text-gray-200" />
            </div>

            {/* Address */}
            <div className="flex items-center border rounded-xl px-3 py-2 bg-white/60 dark:bg-gray-900/40">
              <FaMapMarkerAlt className="text-gray-500 mr-3" />
              <input type="text" placeholder="Shipping Address" className="bg-transparent outline-none w-full text-gray-800 dark:text-gray-200" />
            </div>

            {/* Card Info */}
            <div className="flex items-center border rounded-xl px-3 py-2 bg-white/60 dark:bg-gray-900/40">
              <FaCreditCard className="text-gray-500 mr-3" />
              <input type="text" placeholder="Card Number" className="bg-transparent outline-none w-full text-gray-800 dark:text-gray-200" />
            </div>
          </div>
        </div>

        {/* Right: Order Summary */}
        <div className="bg-white/30 dark:bg-gray-800/40 backdrop-blur-xl shadow-2xl border border-[#24C6DC] dark:border-[#514A9D] rounded-3xl p-8 transition-all duration-500">
          <h2 className="text-2xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#24C6DC] to-[#514A9D]">
            Order Summary
          </h2>

          {/* Items */}
          <div className="space-y-4">
            {cartItems.map((item, index) => (
              <div key={item.id} className="flex justify-between">
                <span className="text-gray-700 dark:text-gray-300">
                  {index + 1}. {item.title} × {item.quantity}
                </span>
                <span className="font-semibold text-gray-900 dark:text-gray-100">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}

            {/* Total */}
            <div className="flex justify-between border-t pt-2">
              <span className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                Total
              </span>
              <span className="text-lg font-bold text-[#24C6DC] dark:text-[#514A9D]">
                ${total.toFixed(2)}
              </span>
            </div>
          </div>

          {/* Place Order Button */}
          <button className="w-full mt-6 py-3 flex items-center justify-center gap-2 text-lg font-semibold text-white bg-gradient-to-r from-[#24C6DC] to-[#514A9D] rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          
          onClick={handlePlaceOrder}
          >
            <FaShoppingCart /> Place Order
          </button>

          {orderPlaced && (
        <div className="mt-6 bg-green-100 text-green-700 px-6 py-3 rounded-2xl shadow-md text-lg font-semibold">
          ✅ Your order has been placed successfully!
        </div>
      )}
        </div>
      </div>
    </div>
  );
}
