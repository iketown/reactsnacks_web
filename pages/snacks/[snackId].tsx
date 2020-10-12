import BlockContent from "@components/BlockContent/BlockContent";
import { getPostById, getPostSlugs } from "lib/api";
import React from "react";
import { Container, Grid, Divider, Image } from "semantic-ui-react";
import SnackMeta from "@components/Snacks/SnackMeta";
import { motion } from "framer-motion";
import BackendTestButton from "@components/BlogButtons/BackendTestButton";
import styled from "styled-components";

const HeaderWithTitle = styled.div<{ url: string }>`
  background-image: url(${(p) => p.url});
  height: 50vh;
  color: white;
  display: flex;
  padding: 0 2rem;
  align-items: flex-end;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  h1 {
    color: white;
    font-size: 3rem;
    font-weight: 500;
    font-family: Oswald, sans-serif;
    text-shadow: 2px 2px 5px #00000099;
  }
`;
const SnackPage = ({ post }) => {
  const { _updatedAt, author, prerequisites } = post;
  console.log("post", post);
  return (
    <>
      <HeaderWithTitle url={`${post.image.url}`}>
        <Container>
          <motion.h1
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { duration: 0.8 } }}
            exit={{ x: -100, transition: { duration: 1 } }}
          >
            {post.title}
          </motion.h1>
        </Container>
      </HeaderWithTitle>
      <Container>
        <Grid reversed="mobile" stackable columns={2}>
          <Grid.Column></Grid.Column>
          <Grid.Column>
            <SnackMeta {...{ _updatedAt, author, prerequisites }} />
          </Grid.Column>
        </Grid>
        <Divider />
        <BlockContent body={post.body} />
        <BackendTestButton />
      </Container>
    </>
  );
};

export const getStaticPaths = async () => {
  const slugs = await getPostSlugs();
  return {
    paths: slugs.map((snackId: string) => ({ params: { snackId } })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { snackId } = params;
  const post = await getPostById(snackId);
  return { props: { snackId, post } };
};

export default SnackPage;
