import React, { useState } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#020617]">
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-8 w-auto" />
    
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8 text-blue-100">
          <a href="#" className="hover:text-white transition">Product</a>
          <a href="#" className="hover:text-white transition">Solutions</a>
          <a href="#" className="hover:text-white transition">Resources</a>
          <a href="#" className="hover:text-white transition">Pricing</a>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-4">

          {/* Login Button */}
          <button className="px-5 py-2 border border-blue-300 text-white rounded-lg hover:bg-blue-500 transition">
            Login
          </button>

          {/* CTA Button */}
          <button className="px-5 py-2 bg-blue-400 hover:bg-blue-500 text-white rounded-lg font-medium transition">
            Try Whitepace
          </button>

        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0E3A6D] border-t border-blue-500 px-6 py-6 space-y-6 text-blue-100">

          <a href="#" className="block hover:text-white">Product</a>
          <a href="#" className="block hover:text-white">Solutions</a>
          <a href="#" className="block hover:text-white">Resources</a>
          <a href="#" className="block hover:text-white">Pricing</a>

          <button className="w-full px-5 py-3 border border-blue-300 text-white rounded-lg hover:bg-blue-500 transition">
            Login
          </button>

          <button className="w-full px-5 py-3 bg-blue-400 hover:bg-blue-500 text-white rounded-lg font-medium transition">
            Try Whitepace
          </button>

        </div>
      )}
      
    </nav>
  );
};

export default Navbar;