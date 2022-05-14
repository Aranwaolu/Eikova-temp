import { useEffect, useState } from "react";
import { Box, Text, Input, Flex } from "@chakra-ui/react";
import Tag from "../atoms/tag";

interface IImageDetailInputProps {
  title: string;
  sideNote?: string;
  type?: string;
  placeholder?: string;
  suggestions: string[];
  value: string;
  setValue: (v: string) => void;
}

const ImageDetailInput: React.FunctionComponent<IImageDetailInputProps> = ({
  title,
  sideNote,
  type,
  suggestions,
  placeholder,
  value,
  setValue,
}) => {
  const [valueLocal, setValueLocal] = useState({ array: [""] });
  useEffect(() => {
    setValueLocal({ array: [...Array.from(new Set(value.split(",")))] });
  }, [value]);
  return (
    <Box mt="48px">
      <Text fontSize="24px" fontWeight="500" mb="16px">
        {title}{" "}
        <Text as="span" fontWeight="400" color="text.gray200">
          {sideNote}
        </Text>
      </Text>
      <Input
        placeholder={placeholder ? placeholder : "Add tags..."}
        h="62px"
        mb="8px"
        bgColor="text.gray150"
        border="none"
        _focus={{
          outline: "none",
          boxShadow: "0px 4px 4px rgba(173, 127, 51, 0.1)",
          backgroundColor: "#FFFFFF",
          border: "1px solid #AD7F33",
        }}
        type={type ? type : "text"}
        px="24px"
        fontSize="18px"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          setValueLocal({
            array: [...Array.from(new Set(e.target.value.split(",")))],
          });
        }}
      />
      {type !== "date" && title !== "Location" && (
        <Flex flexWrap="wrap" gap="10px">
          {valueLocal.array[0]
            ? valueLocal.array.map((tag, index) =>
                tag && tag.replace(/\s/g, "").length ? (
                  <Tag
                    key={tag + index}
                    tag={tag}
                    onTagClick={() => {
                      const newArray = valueLocal.array;
                      newArray.splice(index, 1);
                      setValueLocal({
                        array: newArray,
                      });
                      setValue(newArray.join(","));
                    }}
                  />
                ) : (
                  ""
                )
              )
            : ""}
        </Flex>
      )}
      {title !== "Date" && (
        <Text fontSize="18px" mt="8px">
          Suggested:{" "}
          <Text as="span" color="text.primary">
            {suggestions.join(", ")}
          </Text>
        </Text>
      )}
    </Box>
  );
};

export default ImageDetailInput;
