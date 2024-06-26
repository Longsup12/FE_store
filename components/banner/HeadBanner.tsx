import Image from 'next/image'
import React from 'react'

const HeadBanner = async ({ banner }: { banner: BannerType }) => {
  return (
    <div className="">
        <Image src={banner.headBanner} alt="banner" width="1000" height="1000" className='w-full max-h-[25vw] object-cover object-top'/>
    </div>
  )
}

export default HeadBanner
