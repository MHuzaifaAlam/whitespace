import React, { useState } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-slate-950/70 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-8 w-auto" />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8 text-slate-300">
          <a href="#" className="hover:text-white transition">Product</a>
          <a href="#" className="hover:text-white transition">Solutions</a>
          <a href="#" className="hover:text-white transition">Resources</a>
          <a href="#" className="hover:text-white transition">Pricing</a>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="text-slate-300 hover:text-white transition">
            Login
          </button>

          <button className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-xl font-medium shadow-lg shadow-indigo-600/30 transition">
            Try Whitespace
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-slate-300"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-950 border-t border-slate-800 px-6 py-6 space-y-6 text-slate-300">

          <a href="#" className="block hover:text-white">Product</a>
          <a href="#" className="block hover:text-white">Solutions</a>
          <a href="#" className="block hover:text-white">Resources</a>
          <a href="#" className="block hover:text-white">Pricing</a>

          <button className="block w-full text-left hover:text-white">
            Login
          </button>

          <button className="w-full px-5 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-xl font-medium shadow-lg shadow-indigo-600/30 transition">
            Try Whitespace for free
          </button>

        </div>
      )}

    </nav>
  );
};

export default Navbar;