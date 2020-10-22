import NavBarTop from "@components/NavBar/NavBarTop";
import React, { useEffect, useState } from "react";

const Layout: React.FC = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div>
      <NavBarTop openDrawer={() => setDrawerOpen(true)} />
      {children}
    </div>
  );
};

export default Layout;
