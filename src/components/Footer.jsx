import React from "react";
import logo from "../assets/logo.png";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#020617] text-white pt-16 pb-8">

      <div className="max-w-7xl mx-auto px-6">

        {/* Top Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Logo Section */}
          <div>
            <img src={logo} alt="logo" className="h-10 mb-4" />
            <p className="text-sm text-blue-100 leading-relaxed">
              whitepace was created for the new ways we live and work.
              We make a better workspace around the world.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-blue-100 text-sm">
              <li>Overview</li>
              <li>Pricing</li>
              <li>Customer stories</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-blue-100 text-sm">
              <li>Blog</li>
              <li>Guides & tutorials</li>
              <li>Help center</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-blue-100 text-sm">
              <li>About us</li>
              <li>Careers</li>
              <li>Media kit</li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="font-semibold mb-4">Try It Today</h3>
            <p className="text-sm text-blue-100 mb-4">
              Get started for free. Add your whole team as your needs grow.
            </p>

            <button className="bg-blue-400 hover:bg-blue-500 px-6 py-3 rounded-lg text-sm font-medium transition">
              Start today →
            </button>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-blue-500 my-10"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-blue-100">

          <div className="flex gap-6 flex-wrap items-center">
            <span>🌐 English</span>
            <span>Terms & privacy</span>
            <span>Security</span>
            <span>Status</span>
            <span>©2021 Whitepace LLC.</span>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5 text-lg">
            <FaFacebookF className="cursor-pointer hover:text-white" />
            <FaTwitter className="cursor-pointer hover:text-white" />
            <FaLinkedinIn className="cursor-pointer hover:text-white" />
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;