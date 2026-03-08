import React from 'react'

const Section6 = () => {
  return (
    <div className='bg-[#020617]  py-20 mt-30 lg:mt-40 '>
         {/* LEFT SIDE */}
          <div className="max-w-xl text-center mx-auto">
            <h1 className="text-6xl md:text-5xl lg:text-4xl text-white font-bold leading-tight">
              You work, every where you are
            </h1>

            <p className="text-md lg:justify-center text-slate-400 mt-6 leading-relaxed">
              You can use Whitespace as a browser extension, on your mobile phone, and also on your desktop for a seamless productivity
              experience.
            </p>

            <div className="mt-8">
              <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-lg shadow-indigo-600/30 transition">
                Try takeaway
              </button>
            </div>
          </div>
      
    </div>
  )
}

export default Section6
