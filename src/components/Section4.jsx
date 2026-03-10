import React from "react";
import ext from "../assets/extension.png";

const Section4 = () => {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-20">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT IMAGE */}
          <div className="flex justify-center lg:justify-start">

            <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl transition hover:scale-[1.02]">

              <img
                src={ext}
                alt="Customization"
                className="w-full h-auto object-cover rounded-xl shadow-xl hover:shadow-2xl transition"
              />

            </div>

          </div>

          {/* RIGHT TEXT */}
          <div className="max-w-xl text-center lg:text-left mx-auto lg:mx-0">

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black font-bold tracking-tight leading-tight">
              Customise it
              <span className="block">
                to your needs
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-6 leading-relaxed">
              Customize your app with themes, plugins, and multiple editors.
              You can also use it as a browser extension or access it on
              desktop and mobile devices.
            </p>

            <div className="mt-8 flex justify-center lg:justify-start">
              <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium shadow-lg shadow-indigo-600/30 transition">
                Let's Go
              </button>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Section4;