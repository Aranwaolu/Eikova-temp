import { Global } from "@emotion/react";

const Font = () => (
  <Global
    styles={`
    @font-face {
  font-family: 'Duplicate Sans';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(/assets/fonts/DuplicateSans-Medium.woff) format('woff');
}

    @font-face {
  font-family: 'Duplicate Sans';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(/assets/fonts/DuplicateSans-Bold.woff) format('woff');
    }`}
  />
);
export default Font;
