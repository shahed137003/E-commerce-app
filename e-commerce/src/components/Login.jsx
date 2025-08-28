import React, { useContext, useState } from 'react'
import { UsersContext } from '../context/userData'  
import { CheckCircle, XCircle } from "lucide-react"  
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const { users } = useContext(UsersContext) 
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [message, setMessage] = useState(null); 
  const navigate = useNavigate();

  // function that authenticates the user 
  const checkUser = (e) => {
    e.preventDefault(); 
    const email = userEmail.trim();
    const password = userPassword.trim();

    const userExists = users.find(
      (user) => user.email === email && user.password === password
    );

    if (userExists) {
      setMessage({ type: "success", text: "✅ Login successful! Welcome back." });
      setTimeout(() => navigate("/"), 1200); // redirect after success
    } else {
      setMessage({ type: "error", text: "❌ Invalid email or password. Try again." });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg relative rounded-3xl p-6 sm:p-8 md:p-10 
                      bg-white dark:bg-gray-800 shadow-2xl border
                      border-[#24C6DC]/40 dark:border-[#514A9D]/40
                      transition-all duration-500">
        
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-6 sm:mb-8 
                       text-transparent bg-clip-text bg-gradient-to-r from-[#24C6DC] to-[#514A9D]">
          Login
        </h1>

        {/* Form */}
        <form className="space-y-5 sm:space-y-6" onSubmit={checkUser}>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="mt-2 w-full px-4 py-3 sm:py-3.5 rounded-xl border border-gray-300 
                         focus:ring-2 focus:ring-[#24C6DC] focus:border-transparent
                         dark:bg-gray-700 dark:text-white dark:border-gray-600
                         text-sm sm:text-base"
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="mt-2 w-full px-4 py-3 sm:py-3.5 rounded-xl border border-gray-300 
                         focus:ring-2 focus:ring-[#514A9D] focus:border-transparent
                         dark:bg-gray-700 dark:text-white dark:border-gray-600
                         text-sm sm:text-base"
              onChange={(e) => setUserPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 sm:py-3.5 rounded-xl text-white font-semibold
                       bg-gradient-to-r from-[#24C6DC] to-[#514A9D]
                       shadow-lg hover:shadow-xl transition duration-300
                       hover:scale-[1.02] active:scale-[0.98] text-sm sm:text-base"
          >
            Login
          </button>
        </form>

        {/* ✅ Feedback message */}
        {message && (
          <div
            className={`mt-6 flex items-center gap-3 px-4 py-3 rounded-xl font-medium shadow-md transition-all duration-500
              ${message.type === "success" 
                ? "bg-green-100 text-green-700 border border-green-300" 
                : "bg-red-100 text-red-700 border border-red-300"
              }`}
          >
            {message.type === "success" ? (
              <CheckCircle className="w-5 h-5 flex-shrink-0" />
            ) : (
              <XCircle className="w-5 h-5 flex-shrink-0" />
            )}
            <span className="text-sm sm:text-base">{message.text}</span>
          </div>
        )}

        {/* Sign up link */}
        <div className="mt-6 text-center">
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            Don’t have an account?{" "}
            <button
              className="font-semibold text-transparent bg-clip-text 
                         bg-gradient-to-r from-[#24C6DC] to-[#514A9D] hover:underline"
              onClick={() => navigate('/signup')}
            >
              Sign Up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
