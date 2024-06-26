import { getBlogs } from "@/lib/actions/actions";
import BlogCard from "./BlogCard";
import localFont from "next/font/local"

const customFont = localFont({src: '../public/fonts/Callite.ttf'})
const BlogList = async () => {

  const blogs = await getBlogs();
  const latestBlogs = blogs && blogs.length > 0 ? blogs.slice(0, 3) : [];

  return (
    <div className="flex flex-row items-center gap-10 py-10 px-10 ">
      <div className=" text-[30px] text-grey-3 -rotate-90"><p className={customFont.className}>Latest Blog</p></div>
      {latestBlogs.length === 0? (
        <p className="text-body-bold">No blogs found</p>
      ) : (
        <div className="flex flex-wrap justify-center gap-16">
          {latestBlogs.map((blog: BlogType) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogList;