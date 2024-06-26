import { getBanner } from '@/lib/actions/actions'
import React from 'react'
import HeadBanner from './banner/HeadBanner';
import BlogList from './BlogList';
import MonthDiary from './banner/MonthDiary';
import MidBanner from './banner/MidBanner';
import Profie from './banner/Profie';


const Mainbanner = async () => {
    const mainBanner = await getBanner();
    const activeBanners = mainBanner.filter((banner: BannerType) => banner.isActive);
    
  return (
    <div>
      {activeBanners.map((banner: BannerType) => (
        <div className="">
          <HeadBanner banner={banner} />
          <div className="flex flex-row">
            <div className="basis-2/3 flex flex-col p-5 border-r-2">
              <MonthDiary banner={banner} />
              <BlogList />
              <MidBanner banner={banner}/>
            </div>
            <div className="basis-1/3 flex flex-col p-5">
              <Profie banner={banner} />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Mainbanner