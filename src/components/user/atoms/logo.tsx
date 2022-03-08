import * as React from "react";

interface ILogoProps {
  big?: boolean;
}
const Logo: React.FunctionComponent<ILogoProps> = ({big=false}) => {
  return (
    <svg
      width="75"
      height={big ? "87": "33"}
      viewBox="0 0 75 87"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1.67398"
        y="1.16104"
        width="49.6401"
        height="61.6221"
        rx="12.8379"
        fill="#8F8F8F"
        stroke="white"
        strokeWidth="1.71173"
      />
      <rect
        opacity="0.8"
        x="12.907"
        y="12.3949"
        width="49.6401"
        height="61.6221"
        rx="12.8379"
        fill="#FFEED1"
        stroke="white"
        strokeWidth="1.71173"
      />
      <rect
        opacity="0.8"
        x="24.1402"
        y="23.6273"
        width="49.6401"
        height="61.6221"
        rx="12.8379"
        fill="#8F8F8F"
        stroke="white"
        strokeWidth="1.71173"
      />
    </svg>
  );
};

export default Logo;
