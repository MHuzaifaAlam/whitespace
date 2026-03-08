import React from 'react'
import ext from "../assets/extension.png"

const Section4 = () => {
  return (
    <div>
         <div className="container mx-auto mt-30 px-6 md:px-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  
                  {/* NOW ON THE LEFT: MOCKUP/IMAGE */}
                  <div className="relative flex justify-center lg:justify-start">
                    <div className="relative w-full max-w-xl p-6 hover:scale-[1.02] transition">
                      {/* Added fallback text for the image if PM isn't defined yet */}
                      <img src={ext}></img>
                    </div>
                  </div>
        
                  {/* NOW ON THE RIGHT: TEXT CONTENT */}
                  <div className="max-w-2xl">
                    <h1 className="text-5xl md:text-6xl text-black font-bold tracking-tight leading-tight">
                      Customise it 
                      <span className="block text-black  ">
                      to your needs
                      </span>
                    </h1>
        
                    <p className="text-lg text-gray-600 mt-6 leading-relaxed">
                     Customize your app with custom themes and plugins and multiple text editors and also you can also use it as a extension in your browser and also you can use it on your mobile phone and also you can use it on your desktop
                      </p>
        
                    <div className="mt-10 flex flex-wrap gap-4">
                      <button className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium shadow-lg shadow-indigo-600/30 transition">
                        Let's Go
                      </button>
                    </div>
                  </div>
        
                </div>
              </div>
      
    </div>
  )
}

export default Section4
