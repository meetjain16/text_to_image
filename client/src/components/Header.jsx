import React from 'react'
import{assets} from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col justify-center items-center text-center my-20'>
        
        <div className='text-stone-500 inline-flex rounded-full '>
            <p>
                Text to generate image 
            </p>
            <img src={assets.plus_icon} alt="" />
        </div>


    </div>
  )
}

export default Header