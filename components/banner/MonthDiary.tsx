import Image from 'next/image'
import React from 'react'

const MonthDiary = async ({ banner }: { banner: BannerType }) => {
  console.log(banner);
  
  return (
    <div className="hghgfhfghfhgffff">
        {banner.diaryBanner.map((src, index) => (
            <Image key={index} src={src} alt={`banner-${index}`} width="200" height="200" className='w-full max-h-[25vw] object-cover object-top'/>
        ))}
    </div>
  )
}

export default MonthDiary