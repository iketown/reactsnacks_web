import React from "react";
import { Container, Grid, Segment, Image } from "semantic-ui-react";
import Link from "next/link";
import SnackCard from "./SnackCard";

const SnackList: React.FC<{ posts: PostInfo[] }> = ({ posts }) => {
  console.log({ posts });
  return (
    <Container>
      <Grid doubling columns={4}>
        {posts.map((post) => {
          return (
            <Grid.Column key={post._id}>
              <SnackCard {...{ post }} />
            </Grid.Column>
          );
        })}
      </Grid>
    </Container>
  );
};

export default SnackList;
