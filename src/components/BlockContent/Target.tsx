import React from "react";
import { useBlockCtx } from "./BlockCtx";
import { motion } from "framer-motion";

const variants = {
  selected: { scale: 1.2, backgroundColor: "#FFFF0044" },
  idle: { scale: 1, backgroundColor: "#FFFFFF00" },
};
const Target: React.FC<{
  mark: { _key: string; _type: string; targetId: string };
}> = ({ mark, children }) => {
  const { highlights, setHighlights } = useBlockCtx();
  const { targetId } = mark;
  const selected = highlights.includes(targetId);
  console.log("targetId", { targetId, selected });
  return (
    <span>
      <motion.div
        style={{
          position: "relative",
          display: "inline-block",
        }}
        animate={selected ? "selected" : "idle"}
        variants={variants}
      >
        {children}
      </motion.div>
    </span>
  );
};

export default Target;
