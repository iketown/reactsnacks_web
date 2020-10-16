import React from "react";
import { blues } from "@constants/colors";

const TitleWave = () => {
  return (
    <div
      style={{
        background: blues[0],
        // height: "200px",
        position: "absolute",
        bottom: "-100%",
        left: 0,
        right: 0,
        clipPath: "url(#myWave)",
        pointerEvents: "none",
      }}
    >
      <svg>
        <defs>
          <clipPath id="myWave" clipPathUnits="objectBoundingBox">
            <path
              transform="scale(.0011, .004) translate(-2,-2)"
              d="M690.009 30.9999C816.014 30.9588 1001 9.95021 1001 9.95021V1H1V21.8175C1 21.8175 104.55 6.97807 191.258 5.39244C370.075 2.12243 511.124 31.0583 690.009 30.9999Z"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default TitleWave;
