import Button from "../../user/atoms/button";

interface IContinueButtonProps {
  text?: string;
}
const ContinueButton: React.FC<IContinueButtonProps> = ({ text }) => {
  return (
    <Button
      display="flex"
      justifyContent="center"
      alignItems="center"
      variant="primary"
      fontSize="18px"
      fontWeight="500"
      mt="20px"
      __css={{ svg: { ml: "16px" } }}
    >
      {text ? text : "Continue with details"}
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.86918 15.8872L8.63668 17.6547L17.0204 9.27096L8.63668 0.887207L6.86918 2.65471L12.2354 8.02096H0.25293V10.521H12.2354L6.86918 15.8872Z"
          fill="white"
        />
      </svg>
    </Button>
  );
};
export default ContinueButton;
