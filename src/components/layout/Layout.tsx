import NavBar from "@components/NavBar/NavBar";
import NavBarSide from "@components/NavBar/NavBarSide";
import NavBarTop from "@components/NavBar/NavBarTop";
import React, { useState } from "react";
import SignInModal from "../NavBar/SignInModal";
const Layout: React.FC = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useState(true);

  return (
    <NavBarSide {...{ drawerOpen, setDrawerOpen }}>
      <SignInModal />
      <NavBarTop openDrawer={() => setDrawerOpen(true)} />
      {children}
    </NavBarSide>
  );
};

export default Layout;
