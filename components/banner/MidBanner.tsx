import Image from 'next/image'
import React from 'react'

const MidBanner = async ({ banner }: { banner: BannerType }) => {
  return (
    <div className="hghgfhfghfhgffff">
      <Image src={banner.midBanner} alt={`banner-diary`} width="200" height="200" className='w-full  object-cover object-top'/>
    </div>
  )
}

export default MidBanner