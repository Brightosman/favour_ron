"use client"
import React from 'react'
import { Button } from './ui/button'
import { YoutubeIcon, HelpingHandIcon } from 'lucide-react'
import Image from 'next/image'
import HeroImage from '@/public/favour.jpg'
import { motion } from "motion/react"

const Hero = () => {
	const textVariant = {
		hidden: { opacity: 0, x: -100 },
		visible: { opacity: 1, x: 0, transition: { duration: 0.2, ease: "easeInOut",},},
	};

	const buttonVariant = {
		hidden: { opacity: 0},
		visible: { opacity: 1, transition: { delay:0.2, duration: 0.8,}}
	}

	const imageVariant = {
		hidden: { opacity: 0, x: 50},
		visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeInOut"}}
	}

	return(
		<div className="w-4/5 m-auto py-20 flex flex-col md:flex-row justify-between items-center space-y-10 md:space-y-0">
			<div className="md:w-1/2 space-y-6">
				<motion.p  initial="hidden" whileInView="visible" viewport={{amount:0.2}} variants={{textVariant}} className="">__Innovation Requires Courage</motion.p>
				<motion.h1 initial="hidden" whileInView="visible" viewport={{amount:0.6}} variants={{textVariant}}  className="text-5xl md:text-7xl font-bold text-primary">Being Innovators Require Courage</motion.h1>
				<motion.p  initial="hidden" whileInView="visible" viewport={{amount:0.9}} variants={{textVariant}} className="md:text-lg">
					Understanding your capacity for risk can guide your business into untapped opportunities, helping you navigate growth.
				</motion.p>
				<div className="flex space-x-5">
					<Button className="px-5 py-3 rounded-full font-semibold">Book</Button>
					<Button className="flex space-x-4 items-center" variant="secondary"> 
						<span className="w-8 h-8 flex justify-center items-center rounded-full"> {" "} <YoutubeIcon /> </span> {" "}
						<span>Watch</span>
					</Button>
				</div>
			</div>

			<div className="w-full md:w-1/3">
				<motion.img src={HeroImage.src} alt="Hero Image" 
					// width={400} height={400}
					className='w-full'
				/>
			</div>
		</div>
	)
}

export default Hero