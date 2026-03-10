import React from "react";

const Section5 = () => {
  return (
    <section className="w-full py-20 lg:py-28 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-20">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            Choose Your Plan
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-5 leading-relaxed">
            Whether you want to get organized, keep your personal life on track,
            or boost workplace productivity,
            <span className="block">
              Evernote has the right plan for you.
            </span>
          </p>

        </div>

        {/* Pricing Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="border-2 border-dashed border-amber-300 rounded-xl p-8 text-center bg-white hover:shadow-xl transition">

            <h3 className="text-xl font-semibold">Free</h3>

            <p className="mt-4 text-gray-500">
              Basic features for personal use
            </p>

            <p className="text-3xl font-bold mt-6">$0</p>

            <button className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
              Get Started
            </button>

          </div>

          {/* Card 2 (Featured Plan) */}
          <div className="bg-[#020617] text-white rounded-xl p-10 text-center shadow-2xl scale-105">

            <h3 className="text-xl font-semibold">Pro</h3>

            <p className="mt-4 text-gray-300">
              Perfect for professionals
            </p>

            <p className="text-4xl font-bold mt-6">$12</p>

            <button className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
              Try Now
            </button>

          </div>

          {/* Card 3 */}
          <div className="border-2 border-dashed border-amber-300 rounded-xl p-8 text-center bg-white hover:shadow-xl transition">

            <h3 className="text-xl font-semibold">Team</h3>

            <p className="mt-4 text-gray-500">
              Best for growing teams
            </p>

            <p className="text-3xl font-bold mt-6">$29</p>

            <button className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
              Get Started
            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Section5;