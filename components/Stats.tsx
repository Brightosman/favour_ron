import { ChartBarBigIcon, ChartLine, MessageCircleCodeIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Stats = () => {
  return (
    <div className="py-20 bg-white/50">
    <div className="w-4/5 m-auto flex flex-col md:flex-row items-center justify-between">
      <div className="w-full md:w-1/3">
        <Image 
          src="https://randomuser.me/api/portraits/men/1.jpg"
          alt="Industry Insights"
          width={150}  // ✅ Add width and height (required in Next.js)
          height={500}
          className="w-full" // ✅ Use className instead of class
        />
      </div>
      <div className="md:-1/2 space-y-8">
        <h1 className="text-4xl md:text-6xl font-bold">Over 30,000</h1>
        <p className="md:text-4xl font-bold">
          {" "}
          Remote professionals provide essential services to businesses globally, delivering support from any location.
        </p>
        <div>
          <div className="">
            <span><MessageCircleCodeIcon /></span>
            <h1>Data Validation</h1>
          </div>
          <p>
            {" "}
            Ask your AAI Powered assistant anything. Your virtual assistant is here to help you stay ahead.
          </p>
        </div>
        <div>
          <div>
            <span><ChartLine /></span>
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
  )
}

export default Stats