import Collections from "@/components/Collections";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import BlogList from "@/components/BlogList";
import Slider from "@/components/Slider";

import Image from "next/image";
import Headbanner from "@/public/pink-sky-background-with-crescent-moon.jpg"

export default function Home() {
  return (
    <>
      <div className="">
        <Image src={Headbanner} alt="banner" className='w-full max-h-[25vw] object-cover object-top'/>
      </div>
      {/* <Slider /> */}
      
      {/* <Hero/> */}
      <BlogList />
      <Collections />
      {/* <Footer/> */}
    </>
  );
}

export const dynamic = "force-dynamic";

