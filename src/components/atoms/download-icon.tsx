import * as React from "react";

const DownloadIcon: React.FunctionComponent = () => {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.7" filter="url(#filter0_b_226_784)">
        <rect width="34" height="34" rx="6.97436" fill="black" />
      </g>
      <path
        d="M24.4101 19.1792V22.6664C24.4101 23.1288 24.2264 23.5723 23.8994 23.8993C23.5724 24.2263 23.1289 24.41 22.6665 24.41H10.4614C9.99893 24.41 9.55545 24.2263 9.22846 23.8993C8.90147 23.5723 8.71777 23.1288 8.71777 22.6664V19.1792"
        stroke="white"
        strokeWidth="1.74359"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.2051 14.8203L16.5641 19.1793L20.923 14.8203"
        stroke="white"
        strokeWidth="1.74359"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.564 19.1793V8.71777"
        stroke="white"
        strokeWidth="1.74359"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <filter
          id="filter0_b_226_784"
          x="-3.48718"
          y="-3.48718"
          width="40.9744"
          height="40.9744"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImage" stdDeviation="1.74359" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_226_784"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_226_784"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default DownloadIcon;
