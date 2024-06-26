import Image from 'next/image'
import React from 'react'

const HeadBanner = async ({ banner }: { banner: BannerType }) => {
  return (
    <div className="">
        <Image src={banner.headBanner} alt="banner" width="200" height="200" className='w-full max-h-[25vw] object-cover object-top'/>
    </div>
  )
}

export default HeadBanner
