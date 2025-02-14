import React from 'react'
import{assets} from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col justify-center items-center text-center my-20'>
        
        <div className='text-stone-500 inline-flex items-center  text-center rounded-full  gap-2 bg-white px-6 py-1 border border-neutral-500'>
            <p>
                Text to generate image 
            </p>
            <img className='h-5' src={assets.plus_icon} alt="" />
        </div>
        <h1 className='text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center'>Turn Text to <span className='text-blue-600'>Image</span>,in seconds</h1>
        <p className='text-center max-w-xl mx-auto mt-5 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem placeat minus consequatur eaque error ipsam eligendi iste quod, </p>

        <button>
            Generate Images 
            <img src={assets.message_icon} alt="" />
        </button>


    </div>
  )
}

export default Header