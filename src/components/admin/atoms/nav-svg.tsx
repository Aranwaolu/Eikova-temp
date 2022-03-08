import * as React from "react";
import {Box, BoxProps} from "@chakra-ui/react";

const NavSvg: React.FunctionComponent<BoxProps> = ({...props}) => {
  return (
    <Box {...props}>
      <svg width="317" height="112" viewBox="0 0 317 112" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.1">
          <rect x="3.4781" y="-119.426" width="150.232" height="186.495" rx="38.853"
                transform="rotate(-26.7128 3.4781 -119.426)" fill="#8F8F8F" stroke="#262626" stroke-width="5.18041"/>
          <rect opacity="0.7" x="49.1281" y="-104.34" width="150.232" height="186.495" rx="38.853"
                transform="rotate(-26.7128 49.1281 -104.34)" fill="#FFEED1" stroke="#262626" stroke-width="5.18041"/>
          <rect opacity="0.8" x="94.7779" y="-89.2544" width="150.232" height="186.495" rx="38.853"
                transform="rotate(-26.7128 94.7779 -89.2544)" fill="#8F8F8F" stroke="#262626" stroke-width="5.18041"/>
        </g>
      </svg>
    </Box>
   );
};

export default NavSvg