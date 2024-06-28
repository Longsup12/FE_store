"use client"

import Image from "next/image";
import React, { useState } from "react";

const Gallery = ({ blogMedia }: { blogMedia: string[] }) => {
  const [mainImage, setMainImage] = useState(blogMedia[0]);

  return (
    <div className="flex flex-col gap-3 ">
      <Image
        src={mainImage}
        width={500}
        height={500}
        alt="blog"
        className="object-cover h-64 w-full"
      />
    </div>
  );
};

export default Gallery;
