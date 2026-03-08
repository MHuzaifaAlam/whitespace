import React from 'react'
import PM from "../assets/Pm.jpg"

const Section1 = () => {
  return (
    <div>
        {/* Content */}
              <div className="container mx-auto mt-49 px-6 md:px-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
                  {/* LEFT SIDE */}
                  <div className="max-w-2xl">
    
                    <h1 className="text-5xl md:text-6xl text-black  font-bold tracking-tight leading-tight">
                       Project
                      <span className="block text-black  ">
                      Management
                      </span>
                    </h1>
        
                    <p className="text-lg text-slate-400 mt-6 leading-relaxed">
                    Images , videos and audios are supported. You can also embed content from other platforms like Figma, Miro, Google Docs and more.
                    </p>
        
                    <div className="mt-10 flex flex-wrap gap-4">
        
                      <button className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-large shadow-lg shadow-indigo-600/30 transition">
                        Get Started
                      </button>
        
        
                    </div>
                  </div>
        
                  {/* RIGHT SIDE MOCKUP */}
                  <div className="relative flex justify-center lg:justify-end">
        
                    {/* Glow Behind Card */}
        
                    <div className="relative w-full max-w-xl   p-6 hover:scale-[1.02] transition">
                    <img src={PM}></img>
        
                    </div>
        
                  </div>
        
                </div>
              </div>
      
    </div>
  )
}

export default Section1
