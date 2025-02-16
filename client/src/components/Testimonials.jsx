import React from 'react'
import { assets, testimonial } from '../assets/assets'
import { motion } from "motion/react"
const Testimonials = () => {
    return (

        <motion.div 
        initial={{ opacity: 0.2, y: 100 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='flex flex-col items-center justify-center my-24 py-12 '>

            <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>CustomerTestimonials</h1>
            <p className=' text-gray-600 mb-12'> What people are saying</p>

            <div className='flex flex-wrap gap-6 '>

                {testimonial.map((testimonial, index) => (
                    <div className='bg-white/20 p-12 rounded-lg shadow-md  w-80 m-auto cursor-pointer hover:scale-[1.02] transition-all ' key={index}>
                        <div className='flex flex-col items-center'>
                            <img className='rounded-full w-8' src={testimonial.image} alt="" />

                            <h2>
                                {testimonial.name}
                            </h2>
                            <p className='text-gray-600 mb-12'>{testimonial.role}</p>
                            <div className='flex mb-4'>
                                {Array(testimonial.stares).fill().map((item, index) => (
                                    <img className='w-10' key={index} src={assets.youtube_icon} alt="" />
                                ))}

                            </div>
                            <p className='text-center text-sm text-gray-500'>
                                {testimonial.text}
                            </p>
                        </div>

                    </div>
                ))}
            </div>

        </motion.div>
    )
}

export default Testimonials