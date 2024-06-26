export const getCollections = async () => {
  const collections = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/collections`)
  return await collections.json()
}

export const getCollectionDetails = async (collectionId: string) => {
  const collection = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/collections/${collectionId}`)
  return await collection.json()
}

export const getBlogs = async () => {
  const blogs = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs`)
  return await blogs.json()
}

export const getBlogDetails = async (blogId: string) => {
  const blog = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs/${blogId}`)
  return await blog.json()
}

export const getSearchedBlogs = async (query: string) => {
  const searchedBlogs = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/search/${query}`)
  return await searchedBlogs.json()
}

export const getRelatedBlogs = async (blogId: string) => {
  const relatedBlogs = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs/${blogId}/related`)
  return await relatedBlogs.json()
}

export const getBanner = async () => {
  const blogs = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/banners`)
  return await blogs.json()
}

export const getBannerDetails = async (bannerId: string) => {
  const blog = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/banners/${bannerId}`)
  return await blog.json()
}