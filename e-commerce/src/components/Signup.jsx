import React, { useState } from "react";
import { FiMail, FiUser, FiLock, FiCheckCircle, FiXCircle } from "react-icons/fi";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const resp = await axios.post("https://fakestoreapi.com/users", formData);

      if (resp.status === 200 || resp.status === 201) {
        setMessage({
          type: "success",
          text: "✅ Account created successfully!",
        });

        // Redirect after short delay
        setTimeout(() => navigate("/login"), 1500);
      } else {
        setMessage({
          type: "error",
          text: "❌ Something went wrong. Try again.",
        });
      }
    } catch (error) {
      setMessage({
        type: "error",
        text: "❌ Error while signing up. Please try again.",
      });
    }
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 flex items-center justify-center min-h-screen px-4 sm:px-6">
      <div
        className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl
                   flex flex-col items-center 
                   bg-white/30 dark:bg-gray-800/40 backdrop-blur-xl 
                   shadow-2xl dark:shadow-[#514A9D]/50 shadow-[#24C6DC]/50
                   border border-[#24C6DC] dark:border-[#514A9D] 
                   rounded-3xl py-8 sm:py-10 px-6 sm:px-8 md:px-10 
                   transition-all duration-500 mt-8 sm:mt-10"
      >
        {/* Title */}
        <h1
          className="font-extrabold text-3xl sm:text-4xl text-center mb-6 sm:mb-8 
                     text-transparent bg-clip-text bg-gradient-to-r from-[#24C6DC] to-[#514A9D]"
        >
          Sign Up
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5 sm:gap-6 w-full">
          {/* Username */}
          <InputField
            label="Username"
            name="username"
            type="text"
            value={formData.username}
            onChange={handleChange}
            icon={<FiUser />}
          />

          {/* Email */}
          <InputField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            icon={<FiMail />}
          />

          {/* Password */}
          <InputField
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            icon={<FiLock />}
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-4 py-3 sm:py-3.5 rounded-xl text-white font-semibold
                       bg-gradient-to-r from-[#24C6DC] to-[#514A9D]
                       shadow-lg hover:shadow-xl transition duration-300
                       hover:scale-[1.02] active:scale-[0.98]
                       text-sm sm:text-base"
          >
            Sign Up
          </button>
        </form>

        {/* Success / Error Message */}
        {message && (
          <div
            className={`mt-6 flex items-center gap-3 px-4 py-3 rounded-xl font-medium shadow-md transition-all duration-500
              ${
                message.type === "success"
                  ? "bg-green-100 text-green-700 border border-green-300"
                  : "bg-red-100 text-red-700 border border-red-300"
              }`}
          >
            {message.type === "success" ? (
              <FiCheckCircle className="w-5 h-5 flex-shrink-0" />
            ) : (
              <FiXCircle className="w-5 h-5 flex-shrink-0" />
            )}
            <span className="text-sm sm:text-base">{message.text}</span>
          </div>
        )}

        {/* Extra Link */}
        <p className="mt-6 text-sm sm:text-md text-gray-600 dark:text-gray-400">
          Already have an account?{" "}
          <button
            className="font-semibold text-transparent bg-clip-text 
                       bg-gradient-to-r from-[#24C6DC] to-[#514A9D] hover:underline"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
}

// Reusable Input Field with Icon
function InputField({ label, name, type, value, onChange, icon }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-semibold text-gray-700 dark:text-gray-300 text-sm">
        {label}
      </label>
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-300 text-lg">
          {icon}
        </span>
        <input
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={`Enter ${label.toLowerCase()}`}
          className="w-full pl-10 pr-4 py-3 sm:py-3.5 rounded-xl border border-gray-300 dark:border-gray-600 
                     focus:ring-2 focus:ring-[#24C6DC] focus:border-transparent 
                     dark:bg-gray-700 dark:text-white transition 
                     text-sm sm:text-base placeholder-gray-500 dark:placeholder-gray-400"
        />
      </div>
    </div>
  );
}
