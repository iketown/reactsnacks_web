import * as React from "react";

function Test(props) {
  return (
    <svg width={1153} height={58} fill="none" {...props}>
      <path
        d="M358.963 56.854C213.927 56.807 1 32.594 1 32.594V1h1151.04v45.27s-119.19-17.102-218.993-18.93c-205.826-3.769-368.18 29.581-574.084 29.514z"
        fill="#274367"
        stroke="#000"
      />
    </svg>
  );
}

const MemoTest = React.memo(Test);
export default MemoTest;
