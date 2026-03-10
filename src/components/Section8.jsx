import React from 'react'
import apple from "../assets/Apple.png"
import google from "../assets/google.png"
import Slack from "../assets/slack.png"
import microsoft from "../assets/microsoft.png"

const Section8 = () => {
  return (
    <div className='sm:mt-20 lg:mt-50'>
        <h1 className='text-4xl lg:text-6xl font-bold text-center'>Our Sponsor</h1>

        <div className='flex flex-wrap justify-center items-center gap-10 lg:gap-30 mt-10'>

            <div>
                <img 
                src={apple} 
                alt="Apple" 
                className='w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain'
                />
            </div>

            <div>
                <img 
                src={google} 
                alt="Google" 
                className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-50 lg:h-50 object-contain'
                />
            </div>

            <div>
                <img 
                src={Slack} 
                alt="Slack" 
                className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-50 lg:h-50 object-contain'
                />
            </div>

            <div>
                <img 
                src={microsoft} 
                alt="Microsoft" 
                className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-50 lg:h-50 object-contain'
                />
            </div>

        </div>
      
    </div>
  )
}

export default Section8