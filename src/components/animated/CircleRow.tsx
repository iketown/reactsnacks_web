import * as React from "react";

function CirclerowSketch(props) {
  return (
    <svg viewBox="0 0 95 1330" {...props}>
      <g fill="none" fillRule="evenodd">
        <path d="M.994.002h93.744v1329.101H.994z" />
        <g fill="#000">
          <circle
            cx={45.604}
            cy={45.672}
            r={44.937}
            transform="translate(1.977 1236.153)"
          />
          <circle
            cx={45.805}
            cy={45.854}
            r={45.109}
            transform="translate(1.782 1144.694)"
          />
          <circle
            cx={44.139}
            cy={44.345}
            r={43.686}
            transform="translate(3.448 1055.633)"
          />
          <circle
            cx={42.799}
            cy={43.13}
            r={42.541}
            transform="translate(4.788 965.065)"
          />
          <circle
            cx={40.621}
            cy={40.25}
            r={39.826}
            transform="translate(6.966 877.507)"
          />
          <circle
            cx={37.431}
            cy={37.359}
            r={37.101}
            transform="translate(10.155 789.66)"
          />
          <circle
            cx={35.069}
            cy={34.313}
            r={34.229}
            transform="translate(12.518 701.8)"
          />
          <circle
            cx={32.208}
            cy={32.72}
            r={31.785}
            transform="translate(15.383 612.455)"
          />
          <circle
            cx={27.959}
            cy={27.963}
            r={27.301}
            transform="translate(19.633 526.286)"
          />
          <circle
            cx={24.221}
            cy={24.575}
            r={24.108}
            transform="translate(23.366 438.472)"
          />
          <circle
            cx={3.186}
            cy={2.887}
            r={2.722}
            transform="translate(44.404 5.878)"
          />
          <circle
            cx={7.315}
            cy={7.535}
            r={7.103}
            transform="translate(40.274 92.43)"
          />
          <circle
            cx={7.315}
            cy={7.535}
            r={7.103}
            transform="translate(40.274 91.646)"
          />
          <circle
            cx={12.65}
            cy={12.37}
            r={11.66}
            transform="translate(34.937 178.064)"
          />
          <circle
            cx={16.456}
            cy={16.725}
            r={15.766}
            transform="translate(31.136 264.646)"
          />
          <circle
            cx={20.365}
            cy={20.175}
            r={19.96}
            transform="translate(27.221 352.556)"
          />
        </g>
      </g>
    </svg>
  );
}

const MemoCirclerowSketch = React.memo(CirclerowSketch);
export default MemoCirclerowSketch;
