interface PostInfo {
  authorInfo: { name: string; slug: string };
  image: string;
  slug: string;
  title: string;
  _id: string;
  categories: {
    slug: string;
    title: string;
  };
}

interface PostCategory {
  slug: string;
  title: string;
  posts?: PostInfo[];
}
