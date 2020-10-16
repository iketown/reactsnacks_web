import SnackList from "@components/Snacks/SnackList";
import { getCategorizedPosts, getPostsList } from "lib/api";
import { Container, Header, Icon, Segment } from "semantic-ui-react";
import CurvesColor from "@components/curves/CurvesColor";
import HeaderCurves from "@components/curves/HeaderCurves";
import FlexCurve from "@components/curves/FlexCurve";
import { reds } from "@constants/colors";
// import { useUser } from '../utils/auth/useUser'
import AnimatedReactLogo from "@components/animated/AnimatedReactLogo";
import styled from "styled-components";
import { blues } from "@constants/colors";
import TitleWave from "@components/layout/TitleWave";
import ReactPart from "@components/animated/ReactPart";
const STitle = styled.div`
  .react,
  .snacks {
    font-family: Oswald, sans-serif;
    font-size: 3rem;
  }
  .react {
    font-weight: 500;
  }
  .snacks {
    font-weight: 200;
  }
  .tag {
    font-weight: 200;
    color: ${reds[3]};
  }
`;

const Index: React.FC<{ categorizedPosts: PostCategory[] }> = ({
  categorizedPosts,
}) => {
  // console.log({ categorizedPosts });

  return (
    <>
      <Segment
        style={{
          border: 0,
          borderRadius: 0,
          margin: `0`,
          position: "relative",
          background: blues[0],
          overflow: "hidden",
        }}
        inverted
      >
        <Header
          textAlign="center"
          inverted
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "2rem",
          }}
        >
          <STitle>
            <div>
              <span className="react">REACT</span>
              <span className="snacks">SNACKS</span>
            </div>
            <div className="tag">
              snack-sized <b>ReactJS</b> concepts
            </div>
          </STitle>
        </Header>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <AnimatedReactLogo />
        </div>
        <TitleWave />
      </Segment>
      <FlexCurve />

      <Container>
        {categorizedPosts.map((catPosts) => {
          if (!catPosts?.posts?.length) return null;
          return (
            <div key={catPosts.slug}>
              <h4>{catPosts.title}</h4>
              <SnackList posts={catPosts.posts} />
            </div>
          );
        })}
      </Container>
      <div style={{ padding: "40rem" }}>space</div>
    </>
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
