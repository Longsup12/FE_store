"use client";

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import Image from 'next/image';
import Akko1 from '@/public/slider/haedbanner1.jpg';
import Akko2 from '@/public/slider/headr.jpg';
import Akko3 from '@/public/slider/headbanner3.jpeg';


const Slider = () => {
    return ( 
        <Swiper loop={true} navigation={true} pagination={{
            clickable: true,
          }} 
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Pagination, Autoplay ]}>
            <SwiperSlide><Image src={Akko2} alt="banner" className='w-full'/></SwiperSlide>
            <SwiperSlide><Image src={Akko3} alt="banner" className='w-full' /></SwiperSlide>
            <SwiperSlide><Image src={Akko1} alt="banner" className='w-full' /></SwiperSlide>
        </Swiper>
     );
}
 
export default Slider;