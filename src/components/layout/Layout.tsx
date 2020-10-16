import CurvesColor from "@components/curves/CurvesColor";
import NavBarSide from "@components/NavBar/NavBarSide";
import NavBarTop from "@components/NavBar/NavBarTop";
import React, { useState, useEffect } from "react";
import SignInModal from "../NavBar/SignInModal";
import { blues } from "@constants/colors";
const Layout: React.FC = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    // <NavBarSide {...{ drawerOpen, setDrawerOpen }}>
    <div>
      <NavBarTop openDrawer={() => setDrawerOpen(true)} />
      {children}
    </div>
    // </NavBarSide>
  );
};

export default Layout;
