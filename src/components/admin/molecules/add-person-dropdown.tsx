import { useState } from "react";

import { Box, Image } from "@chakra-ui/react";

import { useDetectClickOutside } from "react-detect-click-outside";

interface Props {
  handleCustomState: (e: any) => void;
}

const dropdownMenu = ["contributor", "admin", "user"];

const AddPersonDropdown: React.FC<Props> = ({ handleCustomState }) => {
  // check how this useState calls affects the rendering
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [hovered, setHovered] = useState(false);

  const ref = useDetectClickOutside({
    onTriggered: () => setIsDropdownOpen(false),
  });

  return (
    <>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          position: "relative",
          width: "205px",
          marginRight: "24px",
        }}
        ref={ref}
      >
        <Box
          onClick={() => {
            setIsDropdownOpen(!isDropdownOpen);
          }}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            padding: "15px 30px",
            borderRadius: "5px",
            backgroundColor: hovered ? "#E2E8F0" : "#FFEED1",
            fontWeight: "500",
            fontSize: "18px",
            lineHeight: "23px",
            color: "#262626",
            height: "60px",
            width: "100%",
            cursor: "pointer",
          }}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          _focus={{ outline: "none" }}
        >
          <Image
            src="/assets/images/svg_icons/user_add.svg"
            style={{ marginRight: "15px" }}
          />
          Add As:
        </Box>

        {isDropdownOpen && (
          <Box
            style={{
              position: "absolute",
              width: "100%",
              padding: "0 15px",
              left: "0",
              background: "#FFFFFF",
              boxShadow: "2px 4px 20px rgba(0, 0, 0, 0.15)",
              borderRadius: "0px 0px 6px 6px",
              marginTop: "65px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "flex-start",
              zIndex: "99",
              overflow: "hidden",
            }}
          >
            {dropdownMenu.map((item, index) => {
              return (
                <Box
                  style={{
                    width: "100%",
                    cursor: "pointer",
                    padding: "8px 15px",
                    textTransform: "capitalize",
                  }}
                  borderBottom="1px solid #E8E8E8"
                  _hover={{ background: "aliceblue" }}
                  _last={{ borderBottom: "none" }}
                  key={index}
                  onClick={() => {
                    setIsDropdownOpen(false);
                    handleCustomState(item);
                  }}
                >
                  {item}
                </Box>
              );
            })}
          </Box>
        )}
      </Box>
    </>
  );
};

export default AddPersonDropdown;
