import { useState } from "react";

import { Box } from "@chakra-ui/react";

import { FaAngleDown } from "react-icons/fa";

import { useDetectClickOutside } from "react-detect-click-outside";

interface Props {
  status: string;
  handleCustomState: (e: any) => void;
}

const dropdownMenu = ["enable", "resend invite", "disable"];

const StatusDropdown: React.FC<Props> = ({ status, handleCustomState }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const ref = useDetectClickOutside({
    onTriggered: () => setIsDropdownOpen(false),
  });

  return (
    <>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "flex-start",
          position: "relative",
          width: "140px",
        }}
        ref={ref}
      >
        <Box
          onClick={() => {
            setIsDropdownOpen(!isDropdownOpen);
          }}
          style={{
            width: "140px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: status === "active" ? "#FFEED1" : "#F6F6F6",
            color: status === "active" ? "#AD7F33" : "#DFDFDF",
            padding: "6px 12px",
            fontSize: "15px",
            fontWeight: "700",
            borderRadius: "20px",
            cursor: "pointer",
            textTransform: "capitalize",
          }}
          _focus={{ outline: "none" }}
        >
          {status}
          <FaAngleDown style={{ marginLeft: "6px" }} />
        </Box>

        {isDropdownOpen && (
          <Box
            style={{
              position: "absolute",
              width: "140px",
              padding: "0 10px",
              left: "0",
              background: "#FFFFFF",
              boxShadow: "2px 4px 20px rgba(0, 0, 0, 0.15)",
              borderRadius: "0px 0px 6px 6px",
              marginTop: "40px",
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
                    textTransform: "capitalize",
                    cursor: "pointer",
                    padding: "6px 10px",
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

export default StatusDropdown;
