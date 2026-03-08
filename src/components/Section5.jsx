import React from 'react'

const Section5 = () => {
  return (
    <div className='mt-40'>
        <h1 className='text-center text-6xl font-bold'>Choose Your Plan</h1>
        <p className='text-center text-lg mt-5'>Wether you want to get organized,Keep your personal life on track,or boost workplace or productivity,
            <span className=' block'>Evemote has the right plan for you</span></p>
        <div  className='mt-10 grid grid-cols-1 lg:grid-cols-3 gap-5 items-center ml-20 lg:ml-30'>
            <div className='h-110 w-100 border-2 border-dashed border-amber-300  rounded-lg p-5'>

            </div>
             <div className=' bg-[#020617] h-130 w-100'>
                
            </div>
             <div className='h-110 w-100 border-2 border-dashed border-amber-300  rounded-lg p-5'>
                
            </div>

        </div>
    </div>
  )
}

export default Section5
