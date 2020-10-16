import * as React from "react";
import { reds, blues } from "@constants/colors";
import { useViewportScroll, motion, useTransform } from "framer-motion";

function FlexCurve(props: React.SVGProps<SVGSVGElement>) {
  const { scrollY } = useViewportScroll();
  const yOff1 = useTransform(scrollY, (y) => y * -0.1);
  const yOff2 = useTransform(scrollY, (y) => y * -0.5);
  const yOff3 = useTransform(scrollY, (y) => y * 0.1);
  const opacity1 = useTransform(scrollY, (y) => 1 - y / 120);
  const opacity2 = useTransform(scrollY, (y) => 1 - y / 140);
  const opacity3 = useTransform(scrollY, (y) => 1 - y / 160);
  return (
    <svg
      style={{ transform: "translateY(-50%)" }}
      viewBox="5 0 1140 141"
      fill="none"
      {...props}
    >
      <motion.path
        style={{ y: yOff1, opacity: opacity1 }}
        d="M1111.13 49.088c-182.998 55.344-420.438 33.268-642.315 11.194C290.325 42.524 121.902 24.766 0 47.312v17.941c123.518-33.232 334.753-12.968 565.05 7.294 196.949 17.33 407.855 34.655 589.74 18.525V35.279c-13.17 5.06-29.92 9.653-43.66 13.809z"
        fill={blues[1]}
      />
      <motion.path
        style={{ y: yOff2, opacity: opacity2 }}
        d="M1155 40.08c-21.75 2.586-43.64 5.111-65.67 7.566a8197.38 8197.38 0 01-51.67 5.59C732.695 85.256 354.521 122.345 0 96.103V78.187c3.939-3.359 6.136-5.96 2.984-6.23v-6.47l.91.122C27.293 68.717 496.62 128.793 1155 35v5.08z"
        fill={blues[3]}
      />
      <motion.path
        style={{ y: yOff3, opacity: opacity3 }}
        d="M0 10.17a4738.792 4738.792 0 0065.66 15.144c17.14 3.82 34.34 7.553 51.654 11.19C422.226 100.6 800.331 174.847 1154.79 122.315V86.452c-3.94-6.724-6.14-11.93-2.99-12.473V61.027s-.3.084-.91.246C1127.5 67.493 658.257 187.754 0 0v10.17z"
        fill={reds[1]}
      />
    </svg>
  );
}

const MemoFlexCurve = React.memo(FlexCurve);
export default MemoFlexCurve;
