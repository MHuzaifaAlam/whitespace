import React from 'react'
import flow from "../assets/flow.png"

const Section9 = () => {
  return (
    <div className="bg-[#020617] py-20 mt-10">
              <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-20">
           
                   <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
           
                     {/* LEFT IMAGE */}
                     <div className="flex justify-center lg:justify-start">
           
                       <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl transition hover:scale-[1.02]">
           
                         <img
                         src={flow}
                           alt="Customization"
                           className="w-full h-auto object-cover rounded-xl shadow-xl hover:shadow-2xl transition"
                         />
           
                       </div>
           
                     </div>
           
                     {/* RIGHT TEXT */}
                     <div className="max-w-xl text-center lg:text-left mx-auto lg:mx-0">
           
                       <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold tracking-tight leading-tight">
                         Work With Your Favorite Apps
                         <span className="block">
                           Using Whitepace
                         </span>
                       </h1>
           
                       <p className="text-sm sm:text-base md:text-lg text-white mt-6 leading-relaxed">
                        whitepace team ups with your favourite software.Integrate 1000+ apps with zaiper to have all the tools which leads your project to sucess
                       </p>
           
                       <div className="mt-8 flex justify-center lg:justify-start">
                         <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium shadow-lg shadow-indigo-600/30 transition">
                           Read More
                         </button>
                       </div>
           
                     </div>
           
                   </div>
           
                 </div>
           </div>
  )
}

export default Section9
