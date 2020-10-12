import BlockContent from "@components/BlockContent/BlockContent";
import { getPostById, getPostSlugs } from "lib/api";
import React from "react";
import { Container, Grid, Divider } from "semantic-ui-react";
import SnackMeta from "@components/Snacks/SnackMeta";
import { motion } from "framer-motion";
import BackendTestButton from "@components/BlogButtons/BackendTestButton";

const SnackPage = ({ post }) => {
  const { _updatedAt, author, prerequisites } = post;
  return (
    <Container>
      <Grid reversed="mobile" stackable columns={2}>
        <Grid.Column>
          <motion.h1
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { duration: 0.8 } }}
            exit={{ x: -100, transition: { duration: 1 } }}
          >
            {post.title}
          </motion.h1>
        </Grid.Column>
        <Grid.Column>
          <SnackMeta {...{ _updatedAt, author, prerequisites }} />
        </Grid.Column>
      </Grid>
      <Divider />
      <BlockContent body={post.body} />
      <BackendTestButton />
    </Container>
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
