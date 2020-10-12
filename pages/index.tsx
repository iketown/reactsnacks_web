import SnackList from "@components/Snacks/SnackList";
import { getCategorizedPosts, getPostsList } from "lib/api";
import { Container, Segment } from "semantic-ui-react";
import { motion } from "framer-motion";
// import { useUser } from '../utils/auth/useUser'
const Index: React.FC<{ categorizedPosts: PostCategory[] }> = ({
  categorizedPosts,
}) => {
  // console.log({ categorizedPosts });
  return (
    <Container>
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
      > */}
      {categorizedPosts.map((catPosts) => {
        return (
          <div key={catPosts.slug}>
            <h4>{catPosts.title}</h4>
            <SnackList posts={catPosts.posts} />
          </div>
        );
      })}
      {/* </motion.div> */}
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

export default Index;
