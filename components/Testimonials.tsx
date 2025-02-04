"use client"
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Testimonials = () => {
  const testmtVariant = {
		hidden: { opacity: 0, y: 50 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut",},},
	};

  const testimonialsData = [
    {
      image:"https://randomuser.me/api/portraits/men/24.jpg",
      name:"Michael Runner",
      position:"Founder",
      feedback:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur repellendus velit?",
    },
    {
      image:"https://randomuser.me/api/portraits/women/45.jpg",
      name:"Zoey Runner",
      position:"Creative Lead",
      feedback:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur repellendus velit?",
    },
    {
      image:"https://randomuser.me/api/portraits/men/21.jpg",
      name:"Chuks Runner",
      position:"Operations Manager",
      feedback:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur repellendus velit?",
    },
  ]
  return (
    <div className="py-10 bg-inherit">
      <div className="w-4/5 m-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: -50}}
          whileInView={{opacity:1, y:0 }}
          transition={{duration:0.5 }}
          className="space-y-5"
        >
          <h1 className="text-center text-lg">____Client Reviews</h1>
          <h2 className='text-sm md:text-xl md:font-semibold text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur repellendus velit. <br /> saepe perferendis architecto veritatis exercitationem! Labore deleniti provident,  <br />illum quibusdam corrupti rerum alias et voluptate.</h2>

        </motion.div>
        <div className='grid md:grid-cols-3 gap-4 py-10'>
          {testimonialsData.map((testimonial, index) =>(
            <motion.div key={index} 
              initial="hidden"
              whileInView="visible"
              variants={testmtVariant}
              viewport={{amount: 0.5 }}
              className='p-5 space-y-5 border border-primary rounded-lg flex flex-col items-center'
            >
              <div className='flex items-center space-x-2'>
                <Image src={testimonial.image} alt='images' width="50" height="50" className='w-16 h-16 rounded-full border-2' />
                <div>
                  <h1 className='font-bold text-lg' >{testimonial.name}</h1>
                  <p className='text-sm text-gray-400'>{testimonial.position}</p>
                </div>
              </div>
              <p className='text-center text-lg'>{testimonial.feedback}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Testimonials