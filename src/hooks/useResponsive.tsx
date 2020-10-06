import { useWindowSize } from "@react-hook/window-size";
import { useEffect, useMemo, useState } from "react";
export const useResponsive = () => {
  const [width, height] = useWindowSize({
    initialHeight: 600,
    initialWidth: 800,
  });
  const screenSm = width <= 640;
  const screenMd = width > 640 && width <= 1008;
  const screenLg = width > 1008;

  return { screenLg, screenMd, screenSm, width, height };
};
