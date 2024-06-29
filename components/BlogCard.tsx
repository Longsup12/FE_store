"use client";

import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  blog: BlogType;
}

const BlogCard = ({ blog }: BlogCardProps ) => {
  return (
    <Link
      href={`/blogs/${blog._id}`}
      className="w-[220px] flex flex-col gap-2 relative group"
    >
      <Image
        src={blog.media[0]}
        alt="blog"
        width={250}
        height={300}
        className="rounded-lg object-cover group-hover:scale-105 transition-all duration-300 h-32 lg:h-72"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white leading-5">
        <p className="text-base-bold leading-5">{blog.title}</p>
        <p className="text-small-medium text-grey-2">{blog.category}</p>
      </div>
    </Link>
  );
};

export default BlogCard;
