import React from "react";
import styled from "styled-components";
import { Button, Segment, Container, Icon } from "semantic-ui-react";
import { useAuth } from "@contexts/auth/AuthCtx";
import SignInOut from "./SignInOut";
import Link from "next/link";
import { useResponsive } from "@hooks/useResponsive";

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

const NavBarTop: React.FC<{ openDrawer: () => void }> = ({ openDrawer }) => {
  const { user } = useAuth();
  const { screenSm, screenMd, screenLg } = useResponsive();
  return (
    <Segment inverted style={{ borderRadius: 0 }}>
      <NavContent>
        <div className="leftSide">
          {(screenSm || screenMd) && (
            <Button onClick={openDrawer} icon basic circular inverted>
              <Icon name="bars" />
            </Button>
          )}
          <Link href="/">
            <a style={{ color: "white" }}>ReactSnacks</a>
          </Link>
        </div>
        <div className="rightSide">
          <Link href="/dashboard">
            <Icon size="big" name="user circle" />
          </Link>
          <SignInOut />
        </div>
      </NavContent>
    </Segment>
  );
};

export default NavBarTop;
