import React from "react";
import {
  motion,
  useSpring,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import ReactLogo520 from "./ReactLogo520";

const AnimatedReactLogo = () => {
  const { scrollY } = useViewportScroll();
  const rotate1 = useTransform(scrollY, (y) => y / 2);
  const rotate2 = useTransform(scrollY, (y) => y / -4);
  const rotateSpring1 = useSpring(rotate1, { stiffness: 20 });
  const rotateSpring2 = useSpring(rotate2, { stiffness: 10 });

  return (
    <div
      style={{
        position: "relative",
        height: 200,
        width: 200,
        // border: "1px solid orange",
      }}
    >
      <div style={{ position: "absolute" }}>
        <ReactLogo520 width={200} />
      </div>
      <motion.div
        style={{ position: "absolute", rotate: rotateSpring1, opacity: 0.4 }}
      >
        <ReactLogo520 width={200} />
      </motion.div>
      <motion.div
        style={{ position: "absolute", rotate: rotateSpring2, opacity: 0.2 }}
      >
        <ReactLogo520 width={200} />
      </motion.div>
    </div>
  );
};

export default AnimatedReactLogo;
