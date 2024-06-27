import Image from 'next/image'
import React from 'react'

import localFont from "next/font/local"

const customFont = localFont({src: '../../public/fonts/Callite.ttf'})

const MidBanner = async ({ banner }: { banner: BannerType }) => {
  return (
    <div className="hghgfhfghfhgffff">
      <Image src={banner.midBanner} alt={`banner-diary`} width="1000" height="1000" className='w-full  object-cover object-top'/>
      <div className="text-center text-[30px] py-6">
        <p className={customFont.className}>Thanks for reading!</p>
      </div>
    </div>
  )
}

export default MidBanner