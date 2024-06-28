"use client";


const BlogInfo = ({ blogInfo }: { blogInfo: BlogType }) => {
  const formatter = new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "long",
    day: "2-digit"
  });

  const updateString = blogInfo.updatedAt;

  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <p className="text-[35px] font-bold">{blogInfo.title}</p>
      </div>

      <div className="mb-3">
        <p className="text-body-bold">{blogInfo.category}</p>
      </div>

      <div className="font-mono text-[12px] mb-8">
        <p>Last updated: {formatter.format(Date.parse(updateString))}</p>
      </div>

      <div className="flex flex-col gap-2">
        <div className=" content" dangerouslySetInnerHTML={{ __html: blogInfo.description }} />
      </div>

      
    </div>
  );
};

export default BlogInfo;
