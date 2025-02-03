"use client"
import React from 'react'
import Image from "next/image"; // ✅ Import Image component (if using Next.js)
import { HelpingHandIcon, DatabaseIcon, BinaryIcon } from 'lucide-react'
import { motion } from "motion/react"

const Insights = () => {
  const insightsData = [
    {
      title: "Productivity Enhaancer",
      date: "July 2023",
      icon: HelpingHandIcon,
      description: "Dynamic visibility tools built to drive engagement",
    },
    {
      title: "Remote Assistance",
      date: "Oct 2023",
      icon: DatabaseIcon,
      description: "Professional support for teams operating from remote locations",
    },
    {
      title: "Digital Marketer",
      date: "Nov 2023",
      icon: BinaryIcon,
      description: "Professional support for teams operating visually dynamical tools to build and drive optimal social economical engagement ",
    }
  ]

  const cardVariant = {
    hidden: {opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity:1,
      scale:1,
      transition:{
        delay: i * 0.2,
        duration: 0.5,
        ease:"easeInOut"
      }
    })
  }
  return (
    <div className="w-4/5 m-auto py-20 flex flex-col md:flex-row justify-between space-y-10 md:space-y-0">
      <div className="md:w-1/3 space-y-4">
        <motion.h2
          initial={{opacity: 0, y: -50}}
          whileInView={{opacity: 1, y:0}}
          transition={{duration: 0.5}}
          className="text-2xl font-bold"
        >
          Industry Insights
        </motion.h2>

        <motion.p
          initial={{opacity: 0, y: -50}}
          whileInView={{opacity: 1, y:0}}
          transition={{duration: 0.5}}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Quis nostrud ex ea commodo consequat. ea rebum. Ut enim ad minim veniam.
        </motion.p>
        <div className='flex items-center space-x-2'>
          <Image 
            src="https://randomuser.me/api/portraits/men/1.jpg"
            alt="Industry Insights"
            width={150}  // ✅ Add width and height (required in Next.js)
            height={500}
            className="w-12 h-12 rounded-full border-4" // ✅ Use className instead of class
          />
          <div>
            <h1 className='font-bold text-lg'>Michael Runner</h1>
            <p className='text-sm text-gray-400'>CEO, Founder</p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 flex flex-col md:flex-row md:space-x-5 space-y-5 md:space-y-0">
        {insightsData.map((insight, index) =>{
          const IconComponent = insight.icon;
          return (
          <motion.div className="w-full p-4 border-4 border-white/50 rounded-xl space-y-4" 
            key={index} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ amount: 0.5 }} 
            variants={cardVariant}
          >
            <div className='flex justify-between'>
              <div className='space-y-2'>
                <button className="p-3 rounded-full bg-violet-300 text-violet-800"><IconComponent size={24} /></button>
                <h1 className='text-xl font-bold'>{insight.title}</h1>
              </div>
              <p>{insight.date}</p>
            </div>
            <p className='text-lg leading-loose'>{insight.description}</p>
          </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default Insights;
