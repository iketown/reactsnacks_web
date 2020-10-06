import { useResponsive } from "@hooks/useResponsive";
import React, { useState } from "react";
import NavBarSide from "./NavBarSide";
import NavBarTop from "./NavBarTop";

const NavBar = () => {
  const { screenSm } = useResponsive();
  const [drawerOpen, setDrawerOpen] = useState(true);
  return (
    <>
      <NavBarTop openDrawer={() => setDrawerOpen(true)} />
      <NavBarSide {...{ drawerOpen, setDrawerOpen }}></NavBarSide>
    </>
  );
};

export default NavBar;
