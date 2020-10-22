import FirebaseAuth from "@components/FirebaseAuth";
import SnackCard from "@components/Snacks/SnackCard";
import UserProfile from "@components/UserProfile/UserProfile";
import { useAuth } from "@contexts/auth/AuthCtx";
import { useUserCtx } from "@contexts/userInfo/UserCtx";
import axios from "axios";
import { AnimateSharedLayout, motion } from "framer-motion";
import { getCategorizedPosts, getPostsList } from "lib/api";
import moment from "moment";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Container, Header, List } from "semantic-ui-react";
import styled from "styled-components";

const SnackGrid = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  grid-gap: 1rem;
  transition: 0.3s all;
`;

interface DashboardI {
  allPosts: PostInfo[];
  categorizedPosts: PostCategory[];
}
const Dashboard: React.FC<DashboardI> = ({ allPosts, categorizedPosts }) => {
  const [orderedPosts, setOrderedPosts] = useState(allPosts);

  const { user, signOut } = useAuth();
  const { userProfile, mySnacks } = useUserCtx();

  useEffect(() => {
    if (mySnacks) {
      const _orderedPosts = [...allPosts].sort((a, b) => {
        const aCompleted = mySnacks[a._id] && mySnacks[a._id].completed;
        const bCompleted = mySnacks[b._id] && mySnacks[b._id].completed;
        if (!aCompleted && bCompleted) return -1;
        if (aCompleted && !bCompleted) return 1;
        if (aCompleted && bCompleted) return bCompleted - aCompleted;
      });
      setOrderedPosts(_orderedPosts);
    }
  }, [mySnacks]);
  if (!user) return <FirebaseAuth />;
  return (
    <Container>
      <Header style={{ marginTop: "2rem" }} size="medium">
        Recommended Snacks
      </Header>
      <SnackGrid>
        <AnimateSharedLayout>
          {orderedPosts.map((post) => {
            const completedAt =
              mySnacks && mySnacks[post._id] && mySnacks[post._id].completed;
            if (completedAt) return null;
            return (
              <motion.div layout layoutId={post._id} key={post._id}>
                <SnackCard post={post} />
              </motion.div>
            );
          })}
        </AnimateSharedLayout>
      </SnackGrid>
      <List celled>
        <Header size="medium">Completed Snacks</Header>
        {mySnacks &&
          Object.entries(mySnacks).map(([id, snack]) => {
            const completedAt = snack.completed;
            if (!completedAt) return null;
            const finishedText = moment(completedAt).fromNow();
            const post = allPosts.find((p) => p._id === id);
            if (!post) return null;
            return (
              <Link
                href="/snacks/[snackId]"
                as={`/snacks/${post.slug}`}
                key={post.slug}
              >
                <List.Item>
                  <List.Icon
                    name={
                      completedAt ? "check square outline" : "square outline"
                    }
                    verticalAlign="middle"
                  />
                  <List.Content>
                    <a>
                      <List.Header>{post.title}</List.Header>
                    </a>
                    <List.Description>{finishedText}</List.Description>
                  </List.Content>
                </List.Item>
              </Link>
            );
          })}
      </List>
      {user ? <UserProfile /> : <div>not signed in</div>}
    </Container>
  );
};

export const getStaticProps = async () => {
  const allPosts = await getPostsList();
  const categorizedPosts = await getCategorizedPosts();
  return {
    props: { allPosts, categorizedPosts },
  };
};

export default Dashboard;
