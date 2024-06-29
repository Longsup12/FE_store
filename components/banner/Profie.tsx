import Image from 'next/image'
import React from 'react'

import frame from '@/public/PngItem.png'
import tape from '@/public/tape.png';
import tape2 from '@/public/tape2.png'
import tape3 from '@/public/tape3.png'
import social1 from '@/public/icons8-facebook-80.png';
import social2 from '@/public/icons8-instagram-80.png'
import social3 from '@/public/icons8-tiktok-80.png'

const Profie = async ({ banner }: { banner: BannerType }) => {
  return (
    <div className="relative">
      <div className="relative">
        <Image src={frame} alt="ava-frame" className='w-[15vw] max-w-[400px] m-auto'/>
      <Image src={banner.avatar} alt={`banner-avatar`} width="200" height="200" className='w-[13vw] z-[-1] object-cover object-top rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'/>
      </div>
      <div className="py-4 tracking-[3px] text-grey-3 text-[13px]">
        <p className='uppercase text-center'>Welcome to my blog!</p>
        <p className="uppercase text-center">Thanks for visiting</p>
        <p className="uppercase text-center">and i hope you enjoy</p>
      </div>
      <div className="flex gap-6 justify-center mb-8 mt-4">
        <a href="https://www.facebook.com/profile.php?id=100028271590461">
          <Image className='w-10' src={social1} width={500} height={500} alt='tape'/>
        </a>
        <a href="https://www.instagram.com/kheih.huyn/">
          <Image className='w-10' src={social2} width={500} height={500} alt='tape'/>
        </a>
        <a href="https://www.tiktok.com/@kheih.huyn">
          <Image className='w-10' src={social3} width={500} height={500} alt='tape'/>
        </a>
      </div>
      <div className="">
        <a href='/about-me' className="relative">
          <p className='uppercase absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white'>About me</p>
          <Image className='md:w-[300px] md:h-[70px] w-[250px] h-[50px] m-auto' src={tape} width={500} height={500} alt='tape'/>
        </a>
        <a href="/freebies" className="relative">
        <p className='uppercase absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white'>Freebies</p>
          <Image className='md:w-[300px] md:h-[70px] w-[250px] h-[50px] m-auto' src={tape2} width={500} height={500} alt='tape'/>
        </a>
        <a href="/contact" className="relative">
        <p className='uppercase absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white'>Contact</p>
          <Image className='md:w-[300px] md:h-[70px] w-[250px] h-[50px] m-auto' src={tape3} width={500} height={500} alt='tape'/>
        </a>
      </div>
  </div>
  )
}

export default Profie