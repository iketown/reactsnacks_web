import React, { useEffect, useRef } from "react";
import prism from "prismjs";

const Prism = () => {
  const divRef = useRef();
  useEffect(() => {
    if (typeof window !== "undefined") prism.highlightAllUnder(divRef.current);
  }, []);
  const codeText = `
  import React, { useState } from "react";
  // same as React.useState
  export const ColorPicker = () => {
    const [color, /*trig1*/ setColor /*trig2*/] = useState("blue");
  
    return (
      <div>
        <h2>the /*trig2*/ color /*trig2*/ is {color}</h2>
        <button onClick={() => setColor("red")}>RED</button>
        <button onClick={() => setColor("blue")}>BLUE</button>
      </div>
    );
  };
  `.trim();
  const re = /\/\*trig\d\*\//g;
  const match = codeText.match(re);
  console.log({ match });

  return (
    <div ref={divRef}>
      <pre className="language-javascript">
        {codeText.split(re).map((section, index) => {
          if (index % 2 === 1) {
            console.log({ section, index });
            const classStr = match[index - 1].slice(2, -2);
            return <code className={classStr}>{section.trim()}</code>;
          }
          return <code>{section}</code>;
        })}
      </pre>
    </div>
  );
};

export default Prism;
