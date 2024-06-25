import BlogCard from '@/components/BlogCard'
import { getSearchedBlogs } from '@/lib/actions/actions'

const SearchPage = async ({ params }: { params: { query: string }}) => {
  const searchedBlogs = await getSearchedBlogs(params.query)

  const decodedQuery = decodeURIComponent(params.query)

  return (
    <div className='px-10 py-5'>
      <p className='text-heading3-bold my-10'>Search results for {decodedQuery}</p>
      {!searchedBlogs || searchedBlogs.length === 0 && (
        <p className='text-body-bold my-5'>No result found</p>
      )}
      <div className='flex flex-wrap justify-between gap-16'>
        {searchedBlogs?.map((blog: BlogType) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
  )
}

export const dynamic = "force-dynamic";

export default SearchPage