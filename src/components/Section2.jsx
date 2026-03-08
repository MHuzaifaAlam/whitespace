import React from 'react'
import PM from "../assets/p2.png"
const Section2 = () => {
  return (
    <div className="w-full">
      <div className="container mx-auto mt-49 px-6 md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* NOW ON THE LEFT: MOCKUP/IMAGE */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative w-full max-w-xl mb-20 h-150 p-6 hover:scale-[1.02] transition">
              {/* Added fallback text for the image if PM isn't defined yet */}
              <img src={typeof PM !== 'undefined' ? PM : ''} alt="Project Management Mockup" className='h-140 ' />
            </div>
          </div>

          {/* NOW ON THE RIGHT: TEXT CONTENT */}
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl text-black font-bold tracking-tight leading-tight">
              Work togather
            </h1>

            <p className="text-lg text-slate-400 mt-6 leading-relaxed">
              While Uploading the image and the files you can also share with your team and also pubish your work on the internet
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium shadow-lg shadow-indigo-600/30 transition">
                TRY IT NOW
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Section2