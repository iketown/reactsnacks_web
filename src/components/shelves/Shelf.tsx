import React from "react";
import LeftShelf from "./LeftShelf";
import styled from "styled-components";

const StyledShelf = styled.div`
  background-image: linear-gradient(black, grey);
  display: grid;
  border: 1px solid orange;
  height: 3rem;
  width: 25rem;
`;
const Shelf = () => {
  return (
    <div>
      <svg>
        <path d="p" />
      </svg>
    </div>
  );
};

export default Shelf;
