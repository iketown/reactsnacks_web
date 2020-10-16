import React from "react";
import styled from "styled-components";
import { Button, Segment, Container, Icon } from "semantic-ui-react";
import Link from "next/link";
import { useResponsive } from "@hooks/useResponsive";
import { blues } from "@constants/colors";
import TitleWave from "@components/layout/TitleWave";

const clipPathString =
  "M0.5,1 C0.5,1,0,0.7,0,0.3 A0.25,0.25,1,1,1,0.5,0.3 A0.25,0.25,1,1,1,1,0.3 C1,0.7,0.5,1,0.5,1 Z";

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .rightSide,
  .leftSide {
    align-items: center;
    display: flex;
  }
`;

const STitle = styled.div`
  .react,
  .snacks {
    font-family: Oswald, sans-serif;
    font-size: 20px;
  }
  .react {
    font-weight: 500;
  }
  .snacks {
    font-weight: 200;
  }
`;

const NavBarTop: React.FC<{ openDrawer: () => void }> = ({ openDrawer }) => {
  // const { user } = useAuth();
  const { screenSm, screenMd, screenLg } = useResponsive();
  return (
    <>
      <Segment
        inverted
        style={{
          borderRadius: 0,
          margin: 0,
          backgroundColor: blues[0],
          // position: "relative",
        }}
      >
        <NavContent>
          <div className="leftSide">
            {/* {(screenSm || screenMd) && (
            <Button onClick={openDrawer} icon basic circular inverted>
              <Icon name="bars" />
            </Button>
          )} */}
            <Link href="/" as="/">
              <a style={{ color: "white" }}>
                <STitle>
                  <div>
                    <span className="react">REACT</span>
                    <span className="snacks">SNACKS</span>
                  </div>
                </STitle>
              </a>
            </Link>
          </div>
          <div className="rightSide">
            <Link href="/dashboard">
              <Icon size="big" name="user circle" />
            </Link>
          </div>
        </NavContent>
      </Segment>
    </>
  );
};

export default NavBarTop;
