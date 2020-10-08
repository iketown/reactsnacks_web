import SnackList from "@components/Snacks/SnackList";
import { getCategorizedPosts, getPostsList } from "lib/api";
import { Container, Segment } from "semantic-ui-react";
// import { useUser } from '../utils/auth/useUser'
const Index: React.FC<{ categorizedPosts: PostCategory[] }> = ({
  categorizedPosts,
}) => {
  // console.log({ categorizedPosts });
  return (
    <Container>
      {categorizedPosts.map((catPosts) => {
        return (
          <div>
            <h4>{catPosts.title}</h4>
            <SnackList posts={catPosts.posts} />
          </div>
        );
      })}
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
