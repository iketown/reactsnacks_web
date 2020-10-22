import * as React from "react";
import styled from "styled-components";

const PageGrid = styled.div`
  border: 2px solid orange;
  width: 100vw;
  height: 100vh;
  background: lightblue;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  .circle {
    width: 5rem;
    height: 5rem;
  }
`;
function Circle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <PageGrid>
      {Array.from({ length: 100 }).map((_, i) => {
        return (
          <div key={i} className="circle">
            <svg viewBox="0 0 20 20" {...props}>
              <circle
                stroke="#979797"
                cx={10}
                cy={10}
                r={5}
                fill="none"
                // fill="#999900"
                fillRule="evenodd"
              />
              );
            </svg>
          </div>
        );
      })}
    </PageGrid>
  );
}

const MemoCircle = React.memo(Circle);
export default MemoCircle;
