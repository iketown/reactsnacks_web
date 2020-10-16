import FirebaseAuth from "@components/FirebaseAuth";
import SnackCard from "@components/Snacks/SnackCard";
import { useAuth } from "@contexts/auth/AuthCtx";
import axios from "axios";
import { AnimateSharedLayout, motion } from "framer-motion";
import { getCategorizedPosts, getPostsList } from "lib/api";
import moment from "moment";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Container, List } from "semantic-ui-react";
import styled from "styled-components";
import useSWR from "swr";

const SnackGrid = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 1rem;
  transition: 0.3s all;
`;

const axiosFetcher = (url) => axios.get(url).then(({ data }) => data);

interface DashboardI {
  allPosts: PostInfo[];
  categorizedPosts: PostCategory[];
}
const Dashboard: React.FC<DashboardI> = ({ allPosts, categorizedPosts }) => {
  const [orderedPosts, setOrderedPosts] = useState(allPosts);

  const { user } = useAuth();
  const dashboardUrl = `/api/dashboard`;
  const { data: mySnacks, error } = useSWR<PostInfo[]>(
    dashboardUrl,
    axiosFetcher
  );

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
      <SnackGrid>
        <AnimateSharedLayout>
          {orderedPosts.map((post) => {
            const completedAt =
              mySnacks && mySnacks[post._id] && mySnacks[post._id].completed;
            const finishedText = completedAt
              ? moment(completedAt).fromNow()
              : "not yet";
            return (
              <motion.div layout layoutId={post._id} key={post._id}>
                <SnackCard post={post} />
              </motion.div>
            );
          })}
        </AnimateSharedLayout>
      </SnackGrid>
      <List>
        {orderedPosts.map((post) => {
          const completedAt =
            mySnacks && mySnacks[post._id] && mySnacks[post._id].completed;
          const finishedText = completedAt
            ? moment(completedAt).fromNow()
            : "not yet";
          return (
            <Link
              href="/snacks/[snackId]"
              as={`/snacks/${post.slug}`}
              key={post._id}
            >
              <List.Item>
                <List.Icon
                  name={completedAt ? "check square outline" : "square outline"}
                  verticalAlign="middle"
                />
                <List.Content>
                  <List.Header>{post.title}</List.Header>
                  <List.Description>{finishedText}</List.Description>
                </List.Content>
              </List.Item>
            </Link>
          );
        })}
      </List>
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
