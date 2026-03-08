import React from "react";
import browser from "../assets/browser.png";

const Section3 = () => {
  return (
    <section className="bg-[#020617] py-20">
      <div className="container mx-auto px-6 md:px-20 sm:mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE */}
          <div className="max-w-xl text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight">
              Use as Extension
            </h1>

            <p className="text-lg text-slate-400 mt-6 leading-relaxed">
              You can use Whitespace as a browser extension, on your mobile
              phone, and also on your desktop for a seamless productivity
              experience.
            </p>

            <div className="mt-8">
              <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-lg shadow-indigo-600/30 transition">
                Get Started
              </button>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={browser}
              className="w-full max-w-md lg:max-w-xl"
              alt="Browser Preview"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Section3;