import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const Header = () => {
 
  const {user,setShowLogin}=useContext(AppContext)

const navigate=useNavigate()
  const onClickHandler=()=>{

    if(user){
      navigate('/result')
    }
    else{
      setShowLogin(true)
    }

  }
  return (
    <motion.div className='flex flex-col justify-center items-center text-center my-20'
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        animate={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='text-stone-500 inline-flex items-center  text-center rounded-full  gap-2 bg-white px-6 py-1 border border-neutral-500'>
        <p>
          Text to generate image
        </p>
        <img className='h-5' src={assets.plus_icon} alt="" />
      </motion.div>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 2 }}
        className='text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center'>Turn Text to <span className='text-blue-600'>Image</span>,in seconds</motion.h1>
      <motion.p

        initial={{ opacity: 0, y: 20 }}

        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}

        className='text-center max-w-xl mx-auto mt-5 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem placeat minus consequatur eaque error ipsam eligendi iste quod, </motion.p>

      <motion.button
onClick={onClickHandler}

        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ opacity: { delay: 0.4, duration: 1 }, default: { duration: 0.5 } }}
        className='sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2.5 flex items-center gap-5 rounded-full '>
        Generate Images
        <img className='h-6 bg-amber-50 rounded-full' src={assets.message_icon} alt="" />
      </motion.button>

      <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
      className='flex flex-wrap justify-center mt-16 gap-3'>
        {Array(6).fill('').map((item, index) => (
          <motion.img 
          whileHover={{ scale: 1.05 ,duration:0.1}}
          className='rounded hover:scale-105 transition-all duration-100 cursor-pointer max-sm:w-10'
            src={index % 2 === 0 ? assets.gallery_icon : assets.bulb_icon} key={index} width={60} alt="" />
        ))}
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      className='mt-2 text-neutral-600'>Generared images by us</motion.p>


    </motion.div>
  )
}

export default Header