import { routes } from "@constants/routes";
import Link from "next/link";
import React, { useState } from "react";
import { Icon, Menu, Sidebar } from "semantic-ui-react";

const NavBarSide: React.FC<{
  drawerOpen: boolean;
  setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ drawerOpen = false, setDrawerOpen, children }) => {
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
            <Link href={route.href} key={route.href}>
              <Menu.Item as="a" onClick={handleClose}>
                <Icon name={route.iconName} />
                {route.display}
              </Menu.Item>
            </Link>
          );
        })}
      </Sidebar>
      <Sidebar.Pusher>
        <div style={{ height: "100vh", overflowY: "scroll" }}>{children}</div>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  );
};

export default NavBarSide;
