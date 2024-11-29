// import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-teal-600  text-white px-6 py-4 shadow-md">
      {/* Logo */}
      <div className="flex items-center px-8 space-x-1.5">
        <img
          src="/assets/png/logo.png" // Replace with the actual logo path
          alt="MindWise Logo"
          className="w-13 h-11"
        />
        <div className="flex flex-col">
          <h1 className="text-lg font-mono leading-none">Mind</h1>
          <h1 className="text-lg font-mono leading-none">Wise</h1>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-16 text-lg">
        <Link
          to="/"
          className="hover:underline hover:text-teal-200 transition duration-300"
        >
          Home
        </Link>
        <Link
          to="/consultation"
          className="hover:underline hover:text-teal-200 transition duration-300"
        >
          Consultation
        </Link>
        <Link
          to="/survey"
          className="hover:underline hover:text-teal-200 transition duration-300"
        >
          Survey Modules
        </Link>
        <Link
          to="/chatbot"
          className="hover:underline hover:text-teal-200 transition duration-300"
        >
          Chatbot
        </Link>
      </div>

      {/* Sign Up/Login Buttons */}
      <div className="flex space-x-4">
        <Link
          to="/signup"
          className="hidden md:inline-block px-4 py-2 bg-white text-teal-600 font-semibold rounded-lg shadow hover:bg-teal-100 transition duration-300"
        >
          Sign Up
        </Link>
        <Link
          to="/login"
          className="hidden md:inline-block px-4 py-2 bg-teal-700 font-semibold rounded-lg hover:bg-teal-800 transition duration-300"
        >
          Login
        </Link>

        {/* Mobile Menu Icon */}
        <button className="block md:hidden">
          <span className="material-icons text-white">menu</span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
