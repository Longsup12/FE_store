import Collections from "@/components/Collections";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import BlogList from "@/components/BlogList";
import Slider from "@/components/Slider";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <Slider />
      <Collections />
      <Hero/>
      <BlogList />
      <Footer/>
    </>
  );
}

export const dynamic = "force-dynamic";

