"use client";

const BlogInfo = ({ blogInfo }: { blogInfo: BlogType }) => {

  return (
    <div className="max-w-[400px] flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <p className="text-heading3-bold">{blogInfo.title}</p>
      </div>

      <div className="flex gap-2">
        <p className="text-base-medium text-grey-2">Category:</p>
        <p className="text-base-bold">{blogInfo.category}</p>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-base-medium text-grey-2">Description:</p>
        <p className="text-small-medium">{blogInfo.description}</p>
      </div>
    </div>
  );
};

export default BlogInfo;
