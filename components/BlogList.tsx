import { getBlogs } from "@/lib/actions/actions";
import BlogCard from "./BlogCard";

const BlogList = async () => {
  const blogs = await getBlogs();

  return (
    <div className="flex flex-col items-center gap-10 py-10 px-5">
      <p className="text-heading1-bold">Blogs</p>
      {!blogs || blogs.length === 0 ? (
        <p className="text-body-bold">No blogs found</p>
      ) : (
        <div className="flex flex-wrap justify-center gap-16">
          {blogs.map((blog: BlogType) => (
            <BlogCard key={blog._id} blog={blog}/>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogList;
