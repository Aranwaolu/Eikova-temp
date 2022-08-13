import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";
import AutoSuggest from "react-autosuggest";

import "./autosuggest.css";
import { Box, Flex, Text } from "@chakra-ui/react";

import Tag from "../atoms/tag";

interface IImageDetailAutosuggestInputProps {
  id: string;
  title: string;
  sideNote?: string;
  type?: string;
  placeholder: string;
  suggestionsList?: string[];
  setValue: (v: string) => void;
}

const ImageDetailAutosuggestInput: React.FC<
  IImageDetailAutosuggestInputProps
> = ({ id, title, sideNote, placeholder, type, suggestionsList, setValue }) => {
  const [valueLocal, setValueLocal] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [selectedSuggestions, setSelectedSuggestions] = useState<string[]>([]);

  const getSuggestions = (value: string): string[] => {
    const lowerCasedSuggestionsList = suggestionsList
      ? suggestionsList.map((language) => language.toUpperCase())
      : [];

    // convert value from string to array
    let valueArray = value.split(/[,]/).map(function (item) {
      return item.trim();
    });

    return lowerCasedSuggestionsList.filter((language) =>
      valueArray[valueArray.length - 1].trim() !== ""
        ? language.startsWith(
            valueArray[valueArray.length - 1].trim().toUpperCase()
          )
        : null
    );
  };

  let valueArray;

  return (
    <Box mt="48px">
      <Text fontSize="24px" fontWeight="500" mb="16px">
        {title}{" "}
        <Text as="span" fontWeight="400" color="text.gray200">
          {sideNote}
        </Text>
      </Text>

      <AutoSuggest
        id={id}
        suggestions={suggestions}
        onSuggestionsClearRequested={() => setSuggestions([])}
        onSuggestionsFetchRequested={({ value }) => {
          setSuggestions(getSuggestions(value));
        }}
        onSuggestionSelected={(e, { suggestionValue }) => {
          valueArray = valueLocal.split(",");

          if (valueArray.includes(suggestionValue)) {
            valueArray.pop();
            setValueLocal(valueArray.join());
          } else {
            valueArray[valueArray.length - 1] = suggestionValue;
            setValueLocal(valueArray.join());
          }

          setSelectedSuggestions(valueArray);
          setValue(valueArray.join());
        }}
        getSuggestionValue={(suggestion) => suggestion}
        renderSuggestion={(suggestion) => <span>{suggestion}</span>}
        inputProps={{
          placeholder: placeholder,
          value: valueLocal,
          onChange: (_, { newValue, method }) => {
            setValueLocal(newValue);
          },
        }}
        highlightFirstSuggestion={true}
      />

      {type !== "date" && title !== "Location" && (
        <Flex flexWrap="wrap" gap="10px">
          {selectedSuggestions && selectedSuggestions[0]
            ? selectedSuggestions.map((tag, index) =>
                tag && tag.replace(/\s/g, "").length ? (
                  <Tag
                    key={tag + index}
                    tag={tag}
                    onTagClick={() => {
                      const newArray = selectedSuggestions;
                      newArray.splice(index, 1);
                      setValueLocal(newArray.join());
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

      {suggestionsList && title !== "Date" && (
        <Text fontSize="18px" mt="8px">
          Suggested:{" "}
          <Text as="span" color="text.primary">
            {suggestionsList.join(", ")}
          </Text>
        </Text>
      )}
    </Box>
  );
};

export default ImageDetailAutosuggestInput;
