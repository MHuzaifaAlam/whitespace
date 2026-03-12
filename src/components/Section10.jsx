import React from "react";

const Section10 = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">

      {/* Title */}
      <div className="text-center">
        <h1 className="text-4xl lg:text-6xl font-bold">
          What Our Clients Says
        </h1>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">

        {/* Card 1 */}
        <div className="bg-gray-100 rounded-xl p-8 shadow-md">

          <p className="text-gray-600 mt-4 text-sm leading-relaxed">
            Whitepace is designed as a collaboration tool for businesses
            that is a full project management solution.
          </p>

          <div className="border-t mt-6 pt-6 flex items-center gap-4">

            <img
              src="https://i.pravatar.cc/50"
              alt="client"
              className="w-12 h-12 rounded-full"
            />

            <div>
              <h4 className="font-semibold text-sm">Oberon Shaw, MCH</h4>
              <p className="text-xs text-gray-500">
                Head of Talent Acquisition, North America
              </p>
            </div>

          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-blue-500 text-white rounded-xl p-8 shadow-md">


          <p className="mt-4 text-sm leading-relaxed">
            Whitepace is designed as a collaboration tool for businesses
            that is a full project management solution.
          </p>

          <div className="border-t border-blue-300 mt-6 pt-6 flex items-center gap-4">

            <img
              src="https://i.pravatar.cc/51"
              alt="client"
              className="w-12 h-12 rounded-full"
            />

            <div>
              <h4 className="font-semibold text-sm">Oberon Shaw, MCH</h4>
              <p className="text-xs text-blue-100">
                Head of Talent Acquisition, North America
              </p>
            </div>

          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-blue-500 text-white rounded-xl p-8 shadow-md">

          <p className="mt-4 text-sm leading-relaxed">
            Whitepace is designed as a collaboration tool for businesses
            that is a full project management solution.
          </p>

          <div className="border-t border-blue-300 mt-6 pt-6 flex items-center gap-4">

            <img
              src="https://i.pravatar.cc/52"
              alt="client"
              className="w-12 h-12 rounded-full"
            />

            <div>
              <h4 className="font-semibold text-sm">Oberon Shaw, MCH</h4>
              <p className="text-xs text-blue-100">
                Head of Talent Acquisition, North America
              </p>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
};

export default Section10;