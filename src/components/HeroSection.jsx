import React from "react";
import Boximage from "../assets/pj.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#020617] text-white pt-28 pb-16">

      {/* Background Base */}
      <div className="absolute inset-0 -z-20 bg-[#020617]" />

      {/* Top Right Glow */}
      <div className="absolute -top-32 -right-32 w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] md:w-[650px] md:h-[650px] bg-indigo-600/30 blur-[160px] rounded-full -z-10"></div>

      {/* Bottom Left Glow */}
      <div className="absolute -bottom-32 -left-32 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[550px] md:h-[550px] bg-purple-700/20 blur-[150px] rounded-full -z-10"></div>

      {/* Radial Light */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(99,102,241,0.15),transparent_50%)] -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT SIDE */}
          <div className="max-w-xl text-center lg:text-left mx-auto lg:mx-0">

            <span className="inline-block mb-6 px-4 py-1 text-xs sm:text-sm bg-indigo-500/10 text-indigo-400 rounded-full border border-indigo-500/20">
              Modern Project Management Platform
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              Get More Done
              <span className="block bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                with whitespace
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-slate-400 mt-6 leading-relaxed">
              Project management software that enables your teams to collaborate,
              plan, analyze and manage everyday tasks.
            </p>

            <div className="mt-8 flex justify-center lg:justify-start">
              <button className="px-6 sm:px-7 md:px-8 py-3 md:py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-90 rounded-xl font-medium shadow-lg shadow-indigo-600/30 transition">
                Try Whitespace for Free
              </button>
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="relative flex justify-center lg:justify-end w-full">

            {/* Glow Behind Card */}
            <div className="absolute inset-0 bg-indigo-500/10 blur-3xl rounded-3xl scale-110"></div>

            <div className="relative bg-slate-900 border border-slate-800 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl aspect-[4/3] rounded-2xl shadow-[0_20px_80px_rgba(0,0,0,0.6)] p-4 md:p-6 hover:scale-[1.02] transition">

              <div className="h-full bg-slate-800 rounded-lg flex items-center justify-center overflow-hidden">
                <img
                  src={Boximage}
                  alt="Dashboard"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;