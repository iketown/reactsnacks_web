import React, { useState } from "react";

const AppleCounter = () => {
  const [appleCount, setAppleCount] = useState(10);
  return (
    <div>
      <h2>there are {appleCount} apples left.</h2>
      <button onClick={() => setAppleCount((oldCount) => oldCount + 1)}>
        ADD ONE
      </button>
      <button onClick={() => setAppleCount((oldCount) => oldCount - 1)}>
        EAT ONE
      </button>
    </div>
  );
};

const AppleAdder = () => {
  const [appleCount, setAppleCount] = useState(0);

  function addApple() {
    setAppleCount(appleCount + 1);
  }
  function addAppleWithFunction() {
    setAppleCount((oldAppleCount) => oldAppleCount + 1);
  }

  return (
    <div>
      <button onClick={addApple}>add one</button>
      <button onClick={addAppleWithFunction}>add one</button>
      <h2>You have {appleCount} apples.</h2>
    </div>
  );
};
