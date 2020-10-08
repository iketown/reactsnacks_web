import groq from "groq";
import { client } from "./sanityClient";

const postListQ = groq`*[_type == "post"]{
  "slug": slug.current,
  "authorInfo": author->{name, "slug": slug.current},
	"image": mainImage.asset -> url,
  "categories": categories[] -> {
  	title,
    "slug": slug.current
  },
  title,
  synopsis,
  _id
}`;

export const getPostsList = async () => {
  const data = await client.fetch(postListQ);
  return data;
};

const categorizedPostsQ = groq`
  *[_type == 'category']{
  title,
  "slug": slug.current,
  "posts": *[_type == "post" && references(^._id)]{
  "slug": slug.current,
  "authorInfo": author->{name, "slug": slug.current},
	"image": mainImage.asset -> url,
  "categories": categories[] -> {
  	title,
    "slug": slug.current
  },
  title,
  synopsis,
  _id
  }
}
  `;

export const getCategorizedPosts = async () => {
  const data = await client.fetch(categorizedPostsQ);
  return data;
};

const postSlugsQ = groq`
  *[_type == 'post'].slug.current
`;
export const getPostSlugs = async () => {
  const data = await client.fetch(postSlugsQ);
  return data;
};

const singlePostQ = groq`
  *[_type == 'post' && slug.current == $snackId ]{
  ...,
  "prerequisites": prerequisites[] -> {"slug": slug.current, title, _id},
  "author": author -> {name, "slug": slug.current}
  }
`;
export const getPostById = async (snackId: string) => {
  const data = await client.fetch(singlePostQ, { snackId });
  return data[0];
};
