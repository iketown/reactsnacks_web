import * as React from "react";

function LeftShelf(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 154 144"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={2}
      {...props}
    >
      <g transform="matrix(.11783 0 0 1 -58.499 -2897.199)">
        <path fill="none" d="M496.469 2897.2h1303.95v143H496.469z" />
        <clipPath id="prefix__a">
          <path d="M496.469 2897.2h1303.95v143H496.469z" />
        </clipPath>
        <g clipPath="url(#prefix__a)">
          <path
            d="M546.785 2968.555h13531.189v59.13H546.785v-59.13z"
            fill="#0d1825"
            fillRule="nonzero"
          />
          <path
            d="M12906.365 2905.764H1718.3l-34.686 1.86c-180.685 9.684-361.36 19.37-542.046 29.053-169.906 9.11-339.838 18.216-509.762 27.325l-85.02 4.556h13531.103a435214.45 435214.45 0 00-84.953-4.556c-169.992-9.109-339.898-18.216-509.805-27.325l-542.054-29.054c-11.543-.62-23.085-1.24-34.712-1.859z"
            fill="#233f63"
            fillRule="nonzero"
          />
          <use
            xlinkHref="#prefix___Image2"
            x={5.945}
            y={9.782}
            width={147.711}
            height={120.712}
            transform="matrix(8.47024 0 0 .99762 496.467 2897.198)"
          />
        </g>
      </g>
      <defs>
        <image
          id="prefix___Image2"
          width={148}
          height={121}
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
}

const MemoLeftShelf = React.memo(LeftShelf);
export default MemoLeftShelf;
