interface PostInfo {
  authorInfo: { name: string; slug: string };
  image: string;
  snackImage: { url: string };
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

interface SnackPost {
  author: {name:string; slug: string};
  prerequisites: any[];
  body: any;
  categories: any[];
  image: {url:string};
  slug: {current:string;};
  snackImage: {url:string};
  title: string;
  finalText?:string;
  _createdAt:string;
  _updatedAt:string;
  _id:string;
}