import * as React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

interface ReactLogoI {
  width?: number;
  rotateFxn?: (y: number) => number;
  opacityFxn?: (y: number) => number;
  scaleFxn?: (y: number) => number;
}

function React520(props) {
  return (
    <svg viewBox="0 0 520 520" fill="none" {...props}>
      <path d="M0 0h520v520H0z" />
      <path
        d="M260.064 307.128c26.545 0 48.064-21.519 48.064-48.064S286.609 211 260.064 211 212 232.519 212 259.064s21.519 48.064 48.064 48.064z"
        fill="#61DAFB"
      />
      <path
        transform="rotate(120 260 260)"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M259.736 153c141.697 0 256.737 47.69 256.737 106.429 0 58.74-115.04 106.429-256.737 106.429S3 318.169 3 259.429C3 200.69 118.039 153 259.736 153zm0 24.11c80.097 0 151.279 15.575 195.308 40.468 21.829 12.341 37.319 25.39 37.319 41.851 0 16.462-15.49 29.51-37.319 41.852-44.029 24.893-115.211 40.468-195.308 40.468-80.098 0-151.279-15.575-195.308-40.468-21.83-12.342-37.319-25.39-37.319-41.852 0-16.461 15.49-29.51 37.319-41.851 44.029-24.893 115.21-40.468 195.308-40.468z"
        fill="#61DAFB"
      />
    </svg>
  );
}

const MemoReact520 = React.memo(React520);
export default MemoReact520;
