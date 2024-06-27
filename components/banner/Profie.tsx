import Image from 'next/image'
import React from 'react'

import frame from '@/public/PngItem.png'

const Profie = async ({ banner }: { banner: BannerType }) => {
  return (
    <div className="relative">
      <div className="relative">
        <Image src={frame} alt="ava-frame" className='w-[15vw] max-w-[400px] m-auto'/>
      <Image src={banner.avatar} alt={`banner-avatar`} width="200" height="200" className='w-[13vw] z-[-1] object-cover object-top rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'/>
      </div>
      <div className="py-4 tracking-[3px] text-grey-3">
        <p className='uppercase text-center'>Welcome to my blog!</p>
        <p className="uppercase text-center">Thanks for visiting</p>
        <p className="uppercase text-center">and i hope you enjoy</p>
      </div>
  </div>
  )
}

export default Profie