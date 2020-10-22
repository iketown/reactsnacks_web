import AnimatedReactLogo from "@components/animated/AnimatedReactLogo";
import FlexCurve from "@components/curves/FlexCurve";
import SnackList from "@components/Snacks/SnackList";
import { blues, reds } from "@constants/colors";
import { getCategorizedPosts, getPostsList } from "lib/api";
import { Container, Header, Segment } from "semantic-ui-react";
import styled from "styled-components";

// import { useUser } from '../utils/auth/useUser'
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

const StyledHeader = styled(Header)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 0 0;
  position: relative;
`;

export const StyledSegment = styled(Segment)`
  /* background-position: bottom; */
  position: relative !important;
  ::before {
    background-image: url("images/circlerow.svg") !important;
    background-size: 30px !important;
    background-attachment: fixed !important;
    background-position: center !important;
    background-repeat: repeat-x !important;
    position: absolute;
    content: "";
    top: calc(100% - 6rem);
    border: 1px solid ${blues[0]};
    left: 0;
    height: 13rem;
    width: 100%;
    background: ${blues[0]};
    /* background: red; */
    transform: skewY(2deg) translateY(-50%);
    /* z-index: -1; */
  }
`;

const Index: React.FC<{ categorizedPosts: PostCategory[] }> = ({
  categorizedPosts,
}) => {
  // console.log({ categorizedPosts });

  return (
    <>
      <StyledSegment
        style={{
          border: 0,
          borderRadius: 0,
          margin: `0`,
          position: "relative",
          background: blues[0],
          // overflow: "hidden",
        }}
        inverted
      >
        <StyledHeader textAlign="center" inverted style={{}}>
          <STitle>
            <div>
              <span className="react">REACT</span>
              <span className="snacks">SNACKS</span>
            </div>
            <div className="tag">
              snack-sized <b>ReactJS</b> concepts
            </div>
          </STitle>
        </StyledHeader>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <AnimatedReactLogo />
        </div>
        {/* <TitleWave /> */}
      </StyledSegment>
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
