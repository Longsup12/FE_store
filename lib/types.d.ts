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

type BannerType = {
  _id: string;
  title: string; 
  headBanner: string;
  diaryTittle: string;
  diaryBanner: string;
  diaryDescription: string;
  midBanner: string;
  avatar: string;
  isActive: boolean;
}