import { useState } from "react";
import { Box, Text, Input, Flex } from "@chakra-ui/react";
import Tag from "../atoms/tag";

interface IImageDetailInputProps {
  title: string;
  sideNote?: string;
  type?: string;
  placeholder?: string;
  suggestions: string[];
}

const ImageDetailInput: React.FunctionComponent<IImageDetailInputProps> = ({
  title,
  sideNote,
  type,
  suggestions,
  placeholder,
}) => {
  const [value, setValue] = useState({ string: "", array: [""] });

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
        value={value.string}
        onChange={(e) => {
          setValue({
            string: e.target.value,
            array: [...Array.from(new Set(e.target.value.split(",")))],
          });
        }}
      />
      <Flex flexWrap="wrap" gap="10px">
        {value.array[0]
          ? value.array.map((tag, index) =>
              tag && tag.replace(/\s/g, "").length ? (
                <Tag
                  key={tag + index}
                  tag={tag}
                  onTagClick={() => {
                    const newArray = value.array;
                    newArray.splice(index, 1);
                    setValue({
                      string: newArray.join(","),
                      array: newArray,
                    });
                  }}
                />
              ) : (
                ""
              )
            )
          : ""}
      </Flex>
      <Text fontSize="18px" mt="8px">
        Suggested:{" "}
        <Text as="span" color="text.primary">
          {suggestions.join(", ")}
        </Text>
      </Text>
    </Box>
  );
};

export default ImageDetailInput;
