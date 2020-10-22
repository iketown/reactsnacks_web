// Page.js
import React, { createContext, useState } from "react";

export const PageContext = createContext();

export const Page = () => {
  const [color, setColor] = useState();
  return (
    <PageContext.Provider value={{ color, setColor }}>
      <ControlPanel />
      <Cart />
    </PageContext.Provider>
  );
};

// ButtonA.js
import React, { useContext } from "react";
import { PageContext } from "../../Page";

export const ButtonA = () => {
  const { setColor } = useContext(PageContext);

  return <button onClick={() => setColor("red")}>Go Red!</button>;
};

// Item2.js
import React, { useContext } from "react";
import { PageContext } from "../../Page";

export const Item2 = () => {
  const { color } = useContext(PageContext);
  return <div style={{ color }}>Wussup!</div>;
};
