import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";
import AutoSuggest from "react-autosuggest";

import "./autosuggest.css";
import { Box, Text } from "@chakra-ui/react";

interface IImageDetailAutosuggestInputProps {
  id: string;
  title: string;
  sideNote?: string;
  placeholder: string;
  suggestionsList: string[];
  setValue: (v: string) => void;
}

const ImageDetailAutosuggestInput: React.FC<
  IImageDetailAutosuggestInputProps
> = ({ id, title, sideNote, placeholder, suggestionsList, setValue }) => {
  const [valueLocal, setValueLocal] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const getSuggestions = (value: string): string[] => {
    const lowerCasedSuggestionsList = suggestionsList.map((language) =>
      language.toUpperCase()
    );

    return lowerCasedSuggestionsList.filter((language) =>
      language.includes(value.trim().toUpperCase())
    );
  };

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
          setValueLocal(value);
          setSuggestions(getSuggestions(value));
        }}
        onSuggestionSelected={(_, { suggestionValue }) => {}}
        getSuggestionValue={(suggestion) => suggestion}
        renderSuggestion={(suggestion) => <span>{suggestion}</span>}
        inputProps={{
          placeholder: placeholder,
          value: valueLocal,
          onChange: (_, { newValue, method }) => {
            setValue(newValue);
            setValueLocal(newValue);
          },
        }}
        highlightFirstSuggestion={true}
      />

      {title !== "Date" && (
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
