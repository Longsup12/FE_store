import Collections from "@/components/Collections";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProductList from "@/components/ProductList";
import Slider from "@/components/Slider";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <Slider />
      <Collections />
      <Hero/>
      <ProductList />
      <Footer/>
    </>
  );
}

export const dynamic = "force-dynamic";

