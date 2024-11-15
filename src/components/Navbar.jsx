import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-teal-600 text-white p-4">
      <h1 className="text-2xl font-bold">MindWise</h1>
      <div className="space-x-6">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/consultation" className="hover:underline">
          Consultation
        </Link>
        <Link to="/survey" className="hover:underline">
          Survey Modules
        </Link>
        <Link to="/chatbot" className="hover:underline">
          Chatbot
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
