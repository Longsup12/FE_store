import Image from 'next/image'
import React from 'react'

const MonthDiary = async ({ banner }: { banner: BannerType }) => {
  
  return (
    <div className="hghgfhfghfhgffff">
      <p className='text-center bg-[#f3f1f1] w-full text-grey-3 py-3 uppercase text-[20px] tracking-[10px] mb-5'>{banner.diaryTittle}</p>
      <Image src={banner.diaryBanner} alt={`banner-diary`} width="1200" height="1200" className='w-full  object-cover object-top'/>
      <p className='text-center my-6 text-[#706e6e] text-[18px] px-5'>{banner.diaryDescription}</p>
    </div>
  )
}

export default MonthDiary