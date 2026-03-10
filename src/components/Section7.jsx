import React from "react";
import P3 from "../assets/p3.png";

const Section7 = () => {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-20">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT TEXT */}
          <div className="max-w-xl text-center lg:text-left mx-auto lg:mx-0">

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black font-bold tracking-tight leading-tight">
              100% Your Data
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-slate-500 mt-6 leading-relaxed">
              The app is open source and your notes are stored in your own
              database, giving you full control over your data. You can export
              your information anytime you want.
            </p>

            <div className="mt-8 flex justify-center lg:justify-start">
              <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium shadow-lg shadow-indigo-600/30 transition">
                Read More
              </button>
            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:justify-end">

            <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl transition hover:scale-[1.02]">

              <img
                src={P3}
                alt="Your Data Control"
                className="w-full h-auto object-cover rounded-xl shadow-xl hover:shadow-2xl transition"
              />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Section7;