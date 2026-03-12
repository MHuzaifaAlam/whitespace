import React from 'react'
import { FaWindows } from "react-icons/fa";
import { FaLinux } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

const Section11 = () => {
  return (
    <div className="bg-[#020617] py-20 mt-10">
        <h1 className='mt-10 text-center text-6xl font-bold text-white'>Try Whitepace
            <span className='block text-white'>Today</span>
        </h1>
        <p className='mt-10 text-center text-white'>Get started For Free
            <span className='block text-white'>
                Add your Whole team as yours  needs grow
            </span>
        </p>
        <button className='mt-10 block mx-auto px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium shadow-lg shadow-indigo-600/30 transition'>
        Try Taskyee Free
        </button>
        <p className='mt-10 text-white text-center '>On a Big team ? Contact sales</p>
        <div className="flex mt-10 text-white justify-center gap-6 text-6xl">
        <FaWindows />
        <FaLinux />
        <FaApple />
        </div>

      
    </div>
  )
}

export default Section11
