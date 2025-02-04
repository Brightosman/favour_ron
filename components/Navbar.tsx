"use client"
import React from 'react'
import { Button } from './ui/button'
import { motion } from "motion/react"
//import motion from "framer-motion/react";

const Navbar = () => {
  return (
    <div className="w-4/5 m-auto flex justify-between items-center py-5">
        <h1 className="text-xl font-bold text-primary">FRon</h1>
        <motion.ul
          initial={{  opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, staggerChildren: 0.1 }}
          className="hidden md:flex items-center space-x-5 text-primary/90" 
        >
            <motion.li whileHover={{ scale: 1.1}} whileTap={{ scale: 0.95}}><a href="#">Our Wall</a></motion.li>
            <motion.li whileHover={{ scale: 1.1}} whileTap={{ scale: 0.95}}><a href="#">Our Team</a></motion.li>
            <motion.li whileHover={{ scale: 1.1}} whileTap={{ scale: 0.95}}><a href="#">Careers</a></motion.li>
            <motion.li whileHover={{ scale: 1.1}} whileTap={{ scale: 0.95}}><a href="#">About</a></motion.li>
            <motion.li whileHover={{ scale: 1.1}} whileTap={{ scale: 0.95}}><a href="#">My Wall</a></motion.li>
        </motion.ul> 

        <Button className="px-5 py-2 border border-primary font-semibold rounded-full" variant={'default'}> Register </Button>

    </div>
  )
}

export default Navbar