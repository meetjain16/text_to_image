import React from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"

const Description = () => {
    return (


        <motion.div 
        initial={{ opacity: 0.2, y: 100 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='flex flex-col items-center justify-center my-24 p-6 md:px-28'>

            <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>Create AI images </h1>
            <p className=' text-gray-600 mb-8'> Transform words into stunning images</p>

            <div className='flex flex-col gap-5 md:gap-14 md:flex-row items-center'>
                <img src={assets.menu_icon} className='w-80 xl:w-96 rounded-lg' alt="" />
                <div>
                    <h2 className='text-3xl font-medium max-w-lg mb-4'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, nam.
                    </h2 >
                    <p className='text-gray-600 mb-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et amet cumque placeat voluptates corrupti distinctio repudiandae magni dolorem. Iste unde fuga laboriosam aspernatur sunt magnam facere possimus, perferendis minima explicabo.</p>
                    <p className='text-gray-600 '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam nihil voluptatum dolores cum distinctio magnam quo itaque eveniet deserunt fuga corrupti, ipsam doloribus praesentium voluptatibus! Corrupti, quibusdam! Sunt, veritatis nesciunt.</p>
                </div>

            </div>
        </motion.div>
    )
}

export default Description