import React, { useEffect, useState } from "react";

interface CSNode {
  title: string;
  editorsize?: number;
  hidenavigation?: boolean;
  codemirror?: boolean;
  highlights?: number[];
  module?: string;
  initialpath?: string;
  previewwindow?: "console" | "tests" | "browser";
  view?: "editor" | "split" | "preview";
}
const CodeSandbox: React.FC<{
  node: CSNode;
}> = ({ node }) => {
  console.log("code sandbox", node);
  const [windowLoaded, setWindowLoaded] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowLoaded(true);
    }
  }, []);
  const {
    title,
    editorsize = 55,
    hidenavigation,
    codemirror = true,
    highlights = "",
    module = "/",
    initialpath = "/",
    previewwindow = "browser",
    view = "split",
  } = node;
  const options = {
    editorsize,
    hidenavigation: hidenavigation ? 1 : 0,
    codemirror: codemirror ? 1 : 0,
    highlights,
    module: module.replace("/", "%2F").replace(" ", "").trim(),
    initialpath: initialpath.replace("/", "%2F").replace(" ", "").trim(),
    previewwindow,
    theme: "dark",
    view,
  };
  const optionsString = Object.entries(options)
    .map(([key, val]) => `&${key}=${val}`)
    .join("");
  console.log({ optionsString });
  if (!windowLoaded) return null;
  return (
    <>
      <iframe
        src={`https://codesandbox.io/embed/${title}?fontsize=14${optionsString}`}
        style={{
          width: "100%",
          height: "600px",
          border: 0,
          overflow: "hidden",
        }}
        title="dark-glitter-i801y"
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      ></iframe>
    </>
  );
};

export default CodeSandbox;
