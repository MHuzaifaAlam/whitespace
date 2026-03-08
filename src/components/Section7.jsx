import React from 'react'
import P3 from "../assets/p3.png"

const Section7 = () => {
  return (
     <div>
            {/* Content */}
                  <div className="container mx-auto mt-35 px-6 md:px-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
                      {/* LEFT SIDE */}
                      <div className="max-w-2xl  mb-20">
        
                        <h1 className="text-5xl md:text-6xl text-black  font-bold tracking-tight leading-tight">
                           100% your data
                        </h1>
            
                        <p className="text-lg text-slate-400 mt-6 leading-relaxed">
                       The app is open source and your notes are stored in your own database, so you have full control over your data and can easily export it whenever you want.
                        </p>
            
                        <div className="mt-10 flex flex-wrap gap-4">
            
                          <button className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-large shadow-lg shadow-indigo-600/30 transition">
                            Read More
                          </button>
            
            
                        </div>
                      </div>
            
                      {/* RIGHT SIDE MOCKUP */}
                      <div className="relative flex justify-center lg:justify-end">
            
                        {/* Glow Behind Card */}
            
                        <div className="relative w-full max-w-xl  mb-10 lg:h-25  lg:mb-80  p-6 hover:scale-[1.02] transition">
                        <img src={P3}></img>
            
                        </div>
            
                      </div>
            
                    </div>
                  </div>
          
        </div>
      
  )
}

export default Section7
