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
      className="w-[220px] flex flex-col gap-2"
    >
      <Image
        src={blog.media[0]}
        alt="blog"
        width={250}
        height={300}
        className="h-[250px] rounded-lg object-cover"
      />
      <div>
        <p className="text-base-bold">{blog.title}</p>
        <p className="text-small-medium text-grey-2">{blog.category}</p>
      </div>
    </Link>
  );
};

export default BlogCard;
