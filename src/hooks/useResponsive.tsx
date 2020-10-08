import { useWindowSize } from "@react-hook/window-size";
import { useEffect, useMemo, useState } from "react";

const breakpoints = {
  sm: 640,
  md: 991,
};

export const useResponsive = () => {
  const [width, height] = useWindowSize({
    initialHeight: 600,
    initialWidth: 800,
  });
  const screenSm = width <= breakpoints.sm;
  const screenMd = width > breakpoints.sm && width <= breakpoints.md;
  const screenLg = width > breakpoints.md;

  return { screenLg, screenMd, screenSm, width, height };
};
