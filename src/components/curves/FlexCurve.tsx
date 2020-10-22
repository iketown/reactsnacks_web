import * as React from "react";
import { reds, blues } from "@constants/colors";
import {
  useViewportScroll,
  motion,
  useTransform,
  useSpring,
} from "framer-motion";

function FlexCurve(props: React.SVGProps<SVGSVGElement>) {
  const { scrollY } = useViewportScroll();
  const yOff1 = useTransform(scrollY, (y) => y * -0.1);
  const yOff2 = useTransform(scrollY, (y) => y * -0.5);
  const ySpringOff1 = useSpring(yOff1, { stiffness: 10 });
  const ySpringOff2 = useSpring(yOff2, { stiffness: 10 });
  const opacity1 = useTransform(scrollY, (y) => 1 - y / 200);
  const opacity2 = useTransform(scrollY, (y) => 1 - y / 220);
  const ySpringOpacity1 = useSpring(opacity1, { stiffness: 10 });
  const ySpringOpacity2 = useSpring(opacity2, { stiffness: 10 });
  return (
    <svg
      style={{ transform: "translateY(-50%)" }}
      viewBox="5 0 1140 141"
      fill="none"
      {...props}
    >
      <motion.path
        style={{ y: ySpringOff1, opacity: ySpringOpacity1 }}
        d="M1111.13 49.088c-182.998 55.344-420.438 33.268-642.315 11.194C290.325 42.524 121.902 24.766 0 47.312v17.941c123.518-33.232 334.753-12.968 565.05 7.294 196.949 17.33 407.855 34.655 589.74 18.525V35.279c-13.17 5.06-29.92 9.653-43.66 13.809z"
        fill={blues[1]}
      />
      <motion.path
        style={{ y: ySpringOff2, opacity: ySpringOpacity2 }}
        d="M1155 40.08c-21.75 2.586-43.64 5.111-65.67 7.566a8197.38 8197.38 0 01-51.67 5.59C732.695 85.256 354.521 122.345 0 96.103V78.187c3.939-3.359 6.136-5.96 2.984-6.23v-6.47l.91.122C27.293 68.717 496.62 128.793 1155 35v5.08z"
        fill={blues[3]}
      />
    </svg>
  );
}

const MemoFlexCurve = React.memo(FlexCurve);
export default MemoFlexCurve;
