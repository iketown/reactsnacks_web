import React, { useEffect } from "react";
import Curve1 from "./Curve1";
import Curve2 from "./Curve2";
import Curve3 from "./Curve3";
import Curve4 from "./Curve4";
import Curve5 from "./Curve5";
import Curve6 from "./Curve6";
import Curve7 from "./Curve7";
import {
  useViewportScroll,
  motion,
  useTransform,
  transform,
} from "framer-motion";

//
//

function CurvesColor(props: React.SVGProps<SVGSVGElement>) {
  const { scrollY } = useViewportScroll();
  const oneBased = useTransform(scrollY, (x) => {
    console.log({ x });
    return x;
  });
  return (
    <svg
      viewBox="0 0 2773 1022"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={2}
      {...props}
    >
      <g transform="matrix(.64811 0 0 .2757 466.736 158.75)">
        {/* <path fill="none" d="M-720.148-575.836h4277.97v3705.28h-4277.97z" /> */}
        {/* <clipPath id="prefix__a">
          <path d="M-720.148-575.836h4277.97v3705.28h-4277.97z" />
        </clipPath> */}
        <g clipPath="url(#prefix__a)">
          {/* <path
            d="M3455.795-828.174C3095.24 768.064 2558.59 1461.116 1328.435 1328.07c0 0 1177.325 467.912 1967.45-87.307 108.73-76.39 210.086-172.148 300.024-291.12V-1538.46c-44.251 254.007-90.509 490.697-140.114 710.286z"
            fill="#5bffed"
            fillRule="nonzero"
          /> */}
          {/* <motion.g>
            <Curve1 color={"red"} />
          </motion.g> */}
          <Curve3 color="green" />
          <Curve4 color="orange" />
          {/* <Curve5 color="beige" /> */}
          <Curve6 color="grey" />
          <Curve7 color="black" />
          {/* <motion.g style={{ scaleY: 0.5 }}>
            <Curve2 color={"blue"} />
          </motion.g> */}
        </g>
      </g>
    </svg>
  );
}

export default CurvesColor;
