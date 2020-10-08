import BlockContent from "@components/BlockContent/BlockContent";
import { getPostById, getPostSlugs } from "lib/api";
import React from "react";
import { Container, Grid, Divider } from "semantic-ui-react";
import SnackMeta from "@components/Snacks/SnackMeta";

const SnackPage = ({ post }) => {
  const { _updatedAt, author, prerequisites } = post;
  return (
    <Container>
      <Grid reversed="mobile" stackable columns={2}>
        <Grid.Column>
          <h1>{post.title}</h1>
        </Grid.Column>
        <Grid.Column>
          <SnackMeta {...{ _updatedAt, author, prerequisites }} />
        </Grid.Column>
      </Grid>
      <Divider />
      <BlockContent body={post.body} />
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
