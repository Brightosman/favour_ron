"use client"
import { ChartBarBigIcon, ChartLine, MessageCircleCodeIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"
import StatsImage from '@/public/favour2.jpg'

const Stats = () => {

  const imageVariant = {
		hidden: { opacity: 0, x: -80},
		visible: { opacity: 1, x: 0, transition: { delay: 0.2, duration: 0.8, ease: "easeInOut"}}
	}

  return (
    <div className="py-20 bg-white/50">
    <div className="w-4/5 m-auto flex flex-col md:flex-row items-center justify-between">
      <div className="w-full md:w-1/3">
        <motion.img 
          src={StatsImage.src}
          alt="Industry Insights"
          initial = "hidden" whileInView="visible" variants={imageVariant} viewport={{ amount: 0.50 }} 
          width={150}  // ✅ Add width and height (required in Next.js)
          height={500}
          className="w-full" // ✅ Use className instead of class
        />
      </div>
      <div className="md:-1/2 space-y-8 px-8">
        <h1 className="text-4xl md:text-6xl font-bold">Over 30,000</h1>
        <p className="md:text-4xl font-bold">
          {" "}
          Remote professionals provide essential services to businesses globally, delivering support from any location.
        </p>
        <div className="flex">
          <div className="space-y-5">
            <div className="flex items-center space-x-2">
              <span className="p-3 rounded-full bg-violet-300 text-violet-800"><MessageCircleCodeIcon /></span>
              <h1>Data Validation</h1>
            </div>
            <p className="">
              {" "}
              Ask your AAI Powered assistant anything. Your virtual assistant is here to help you stay ahead.
            </p>
          </div>

          <div className="space-y-5">
            <div className="flex items-center space-x-2">
              <span className="p-3 rounded-full bg-violet-300 text-violet-800"><ChartLine /></span>
              <h1>Optimize Efficiency</h1>
            </div>
            <p>
              {" "}
              Remote professionals provide essential services to businesses globally, delivering support from any location.
            </p>
          </div>
                
        </div>
      </div>
    </div>
    </div>
  )
}

export default Stats