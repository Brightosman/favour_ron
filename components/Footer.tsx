"use client"
import React from 'react'
import { motion } from "motion/react"

const Footer = () => {

  const footerVariant = {
    hidden: { opacity: 0, y: 50},
    visible : { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeInOut"} },
  }
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      variants={footerVariant}
      viewport={{ amount: 0.5 }} 
      className="py-20"
    >
      <div className="w-4/5 m-auto grid md:grid-cols-4 gap-6 px-4">
        <div className="">
          <h2 className="text-xl font-bold mb-2 text-primary">About Us</h2>
          <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur repellendus velit.</p>
        </div>

        <div>
          <h2 className='font-bold mb-2 text-primary'>Customer Service</h2>
          <ul>
            <li>
              <a href="#" className="text-gray-400 hover:text-primary">Contact Us</a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-primary">FAQs</a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-primary">Refunds</a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className='font-bold mb-2 text-primary'>Follow Us</h2>
          <ul>
            <li>
              <a href="https://www.facebook.com/profile.php?id=100080780278008" className="text-gray-400 hover:text-primary">Facebook</a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-primary">Youtube</a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-primary">Instagram</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-2 text-primary">News Letter</h3>
          <p>Enter your email to get the latest news and updates</p>
          <form className="mt-4">
            <input type='email' placeholder='your email address' className="p-2 w-full rounded-md text-gray-600 border" />
            <button className='mt-2 w-full p-2 bg-primary rounded-md font-semibold text-white'>Subscribe</button>
          </form>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-8 text-sm">
        <p>&copy; {new Date().getFullYear() }{"  "}FRon. All rights reserved</p>
      </div>
    </motion.footer>
  )
}

export default Footer