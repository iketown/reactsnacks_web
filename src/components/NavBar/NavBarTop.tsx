import { blues } from "@constants/colors";
import { useResponsive } from "@hooks/useResponsive";
import Link from "next/link";
import React from "react";
import { Icon, Segment, Dropdown, Button } from "semantic-ui-react";
import styled from "styled-components";
import { useAuth } from "@contexts/auth/AuthCtx";
import { useUserCtx } from "@contexts/userInfo/UserCtx";
import { useRouter } from "next/router";
import SignInModal from "./SignInModal";
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
  const { user, signOut, setSignInModalOpen } = useAuth();
  const { userProfile } = useUserCtx();
  const { screenSm, screenMd, screenLg } = useResponsive();
  const { push } = useRouter();
  const handleSignOut = () => {
    signOut();
    push("/", "/");
  };
  const displayName =
    userProfile?.username || user?.displayName || user?.email || "";
  return (
    <>
      <Segment
        inverted
        style={{
          borderRadius: 0,
          margin: 0,
          backgroundColor: blues[0],
          position: "relative",
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
            {user ? (
              <Dropdown floating text={displayName}>
                <Dropdown.Menu direction="left">
                  <Link href="/dashboard" as="/dashboard">
                    <Dropdown.Item>Dashboard</Dropdown.Item>
                  </Link>
                  <Link href="/profile" as="/profile">
                    <Dropdown.Item>Profile</Dropdown.Item>
                  </Link>
                  <Dropdown.Item onClick={handleSignOut}>
                    Sign Out
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <Button
                onClick={() => setSignInModalOpen(true)}
                inverted
                size="tiny"
                basic
              >
                Sign in
              </Button>
            )}
            {/* <Link href="/dashboard">
              <Icon size="big" name="user circle" />
            </Link> */}
          </div>
        </NavContent>
      </Segment>
      <SignInModal />
    </>
  );
};

export default NavBarTop;
