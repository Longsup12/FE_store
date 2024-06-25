import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import { getCollectionDetails } from "@/lib/actions/actions";
import Image from "next/image";
import React from "react";

const CollectionDetails = async ({
  params,
}: {
  params: { collectionId: string };
}) => {
  const collectionDetails = await getCollectionDetails(params.collectionId);

  return (
    <>
    <div className="px-10 py-10 flex flex-col items-center gap-8">
      <Image
        src={collectionDetails.image}
        width={1500}
        height={1000}
        alt="collection"
        className="w-full h-[400px] object-cover rounded-xl"
      />
      <p className="text-heading3-bold text-grey-2">{collectionDetails.title}</p>
      <p className="text-body-normal text-grey-2 text-center max-w-[900px]">{collectionDetails.description}</p>
      <div className="flex flex-wrap gap-16 justify-center">
        {collectionDetails.blogs.map((blog: BlogType) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default CollectionDetails;

export const dynamic = "force-dynamic";

