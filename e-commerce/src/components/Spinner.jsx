// components/FullPageSpinner.jsx
import React from "react";

export default function FullPageSpinner() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-900 z-50">
      
      {/* Outer spinning circle */}
      <div className="w-20 h-20 rounded-full border-4 border-gray-200 dark:border-gray-700 relative animate-spin-slow">
        {/* Gradient inner circle */}
        <div className="absolute inset-0 m-1 rounded-full border-4 border-t-[#24C6DC] border-b-[#514A9D] animate-spin"></div>
      </div>

 
      <div className="absolute w-32 h-32 rounded-full bg-gradient-to-r from-[#24C6DC] to-[#514A9D] opacity-20 animate-pulse"></div>
    </div>
  );
}
