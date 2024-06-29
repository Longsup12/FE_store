import Gallery from "@/components/Gallery"
import BlogCard from "@/components/BlogCard"
import BlogInfo from "@/components/BlogInfo"
import { getBlogDetails, getRelatedBlogs } from "@/lib/actions/actions"
import Copyright from "@/components/Copyright"

const BlogDetails = async ({ params }: { params: { blogId: string }}) => {
  const blogDetails = await getBlogDetails(params.blogId)
  const relatedBlogs = await getRelatedBlogs(params.blogId)

  return (
    <>
    <Gallery blogMedia={blogDetails.media} />
    <div className="flex justify-center items-start gap-16 py-10 px-5 max-md:flex-col max-md:items-center md:max-w-[70vw] md:mx-auto">
      <BlogInfo blogInfo={blogDetails} />
    </div>

    <div className="flex flex-col items-center px-10 py-10 max-md:px-3 border-t-2">
      <p className="text-heading3-bold">Related Blogs</p>
      <div className="flex flex-wrap gap-16 mx-auto mt-8 justify-center">
        {relatedBlogs?.map((blog: BlogType) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    </div>

    <Copyright/>
    </>
  )
}

export const dynamic = "force-dynamic";

export default BlogDetails