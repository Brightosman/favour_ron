"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from "motion/react"
import StatsImage from '@/public/favour2.jpg'

const Pricing = () => {
  const imageVariant = {
		hidden: { opacity: 0, x: -20},
		visible: { opacity: 1, x: 0, transition: { delay: 0.2, duration: 0.8, ease: "easeInOut"}}
	}

  return (
    <div className="py-20 w-4/5 m-auto flex flex-col md:flex-row justify-between items-center space-y-10 md:space-y-0 text-primary">
      <div className="md:w-1/2 space-y-8">
        <h1 className="text-4xl md:text-6xl font-bold">Maximize your Efficiency with EPIC Inc</h1>
        <h3 className="text-3xl md:text-5xl font-bold">₦29,900 or  GH₵50</h3>
        <p className="md:text-2xl leading-8">
          {" "}
          We offer tailored virtual services for your business, supporting your team remotely so they can thrive
        </p>
      </div>
      <div className="w-full md:w-1/3">
        <motion.img
          src={StatsImage.src}
          alt="Industry Insights"
          initial = "hidden" whileInView="visible" variants={imageVariant} viewport={{ amount: 0.5 }} 
          width={150}  // ✅ Add width and height (required in Next.js)
          height={500}
          className="w-full" // ✅ Use className instead of class 
        />
      </div>
    </div>
  )
}

export default Pricing