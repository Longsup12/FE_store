import Image from 'next/image'
import React from 'react'

const Profie = async ({ banner }: { banner: BannerType }) => {
  return (
    <div className="hghgfhfghfhgffff">
    <Image src={banner.avatar} alt={`banner-avatar`} width="200" height="200" className='w-full  object-cover object-top'/>
  </div>
  )
}

export default Profie