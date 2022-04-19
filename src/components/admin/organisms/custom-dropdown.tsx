import { useState } from "react";

import { Box, Image } from "@chakra-ui/react";

import { FaAngleDown } from "react-icons/fa";

import { useDetectClickOutside } from "react-detect-click-outside";

interface Props {
  faIconColor?: string;
  containerStyle: object;
  defaultValue: string;
  defaultValueStyle: object;
  defaultValueIcon?: IconObject;
  handleCustomState: (e: any) => void;
  dropdownMenu: Array<string>;
  dropdownMenuStyle: object;
  dropdownMenuItemStyle?: object;
  dropdownIcon?: boolean;
}

interface IconObject {
  iconUsed: boolean;
  iconSrc: string;
}

const CustomDropdown: React.FC<Props> = ({
  faIconColor,
  containerStyle,
  defaultValue,
  defaultValueStyle,
  defaultValueIcon,
  handleCustomState,
  dropdownMenu,
  dropdownMenuStyle,
  dropdownMenuItemStyle,
  dropdownIcon,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const ref = useDetectClickOutside({
    onTriggered: () => setIsDropdownOpen(false),
  });

  return (
    <>
      <Box style={containerStyle} ref={ref}>
        <Box
          onClick={() => {
            setIsDropdownOpen(!isDropdownOpen);
          }}
          style={defaultValueStyle}
          _focus={{ outline: "none" }}
        >
          {defaultValueIcon && defaultValueIcon.iconUsed && (
            <Image
              src="/assets/images/svg_icons/user_add.svg"
              style={{ marginRight: "15px" }}
            />
          )}
          {defaultValue}
          {dropdownIcon && (
            <FaAngleDown style={{ marginLeft: "6px", color: faIconColor }} />
          )}
        </Box>

        {isDropdownOpen && (
          <Box style={dropdownMenuStyle}>
            {dropdownMenu.map((item, index) => {
              if (index !== dropdownMenu.length - 1) {
                return (
                  <Box
                    style={dropdownMenuItemStyle}
                    borderBottom="1px solid #E8E8E8"
                    _hover={{ background: "aliceblue" }}
                    key={index}
                    onClick={() => {
                      setIsDropdownOpen(false);
                      handleCustomState(item);
                    }}
                  >
                    {item}
                  </Box>
                );
              } else {
                return (
                  <Box
                    style={dropdownMenuItemStyle}
                    _hover={{ background: "aliceblue" }}
                    key={index}
                    onClick={() => {
                      setIsDropdownOpen(false);
                      handleCustomState(item);
                    }}
                  >
                    {item}
                  </Box>
                );
              }
            })}
          </Box>
        )}
      </Box>
    </>
  );
};

export default CustomDropdown;
