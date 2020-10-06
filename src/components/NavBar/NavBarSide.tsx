import React, { useState } from "react";
import Link from "next/link";
import { routes } from "@constants/routes";
import {
  Menu,
  Sidebar,
  SidebarPushable,
  Container,
  Segment,
  Icon,
  Button,
  Header,
  Image,
  Grid,
  Checkbox,
} from "semantic-ui-react";

const NavBarSide: React.FC<{
  drawerOpen: boolean;
  setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ drawerOpen, setDrawerOpen, children }) => {
  const handleClose = () => setDrawerOpen(false);
  return (
    <Sidebar.Pushable>
      <Sidebar
        as={Menu}
        animation="overlay"
        icon="labeled"
        inverted
        onHide={() => setDrawerOpen(false)}
        vertical
        visible={drawerOpen}
        width="thin"
      >
        {routes.map((route) => {
          return (
            <Link href="/" key={route.href}>
              <Menu.Item as="a" onClick={handleClose}>
                <Icon name={route.iconName} />
                {route.display}
              </Menu.Item>
            </Link>
          );
        })}
      </Sidebar>
      <Sidebar.Pusher>
        <div style={{ height: "100vh" }}>{children}</div>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  );
};

export default NavBarSide;
