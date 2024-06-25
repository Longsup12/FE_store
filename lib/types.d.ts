type CollectionType = {
  _id: string;
  title: string;
  blogs: number;
  image: string;
};

type BlogType = {
  _id: string;
  title: string;
  description: string;
  media: [string];
  category: string;
  collections: [string];
  tags: [string];
  createdAt: string;
  updatedAt: string;
};