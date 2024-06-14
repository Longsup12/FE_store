"use client";
import { Typography } from "@material-tailwind/react";
import React from "react";
 
import Image from "next/image";
import Midbanner from "@/public/banner2.jpg"
const Hero = () => {
   return (
       <div className='w-full mt-0 px-4 flex ...(truncated)'>
           <div className='flex flex-col justify-center lg:w-[60%] w-full lg:px-6 lg:pr-14 lg:pl-24'>
               <Typography placeholder="h1" className='mb-4 font-semibold text-3xl ...(truncated)'>
               Next Generation Motion Sense Cleaning Technology
               </Typography>
               <Typography placeholder="p" className='font-poppins mb-6 pr-20'>
               The Vax Platinum SmartWash is the UK’s first carpet washer with Motion Sense technology; there is no trigger, it automatically washes and dispenses clean water and Vax Antibacterial solution when you push forward and dries when you pull back - meaning it’s effortlessly easy to use.
               </Typography>
               <div className=""> 
                    <a href="" className="bg-green-500 inline-block px-8 py-2 rounded-2xl text-white hover:text-black">Shop now!</a>
               </div>
           </div>
           <div className='lg:w-[40%] w-full lg:block hidden '>
               <Image src={Midbanner} alt="banner" className='w-full'/>
           </div>
       </div>
   );
};
 
export default Hero;