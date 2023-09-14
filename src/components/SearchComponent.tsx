import React, { useState } from "react";
import { Box, TextField } from "@mui/material";

const Search = () => {
  const [value, setValue] = useState("");
  const placeholderText = [
    "Mountain View, CA",
    "What are you looking for?",
    "Search for a job title or company",
    "Good things are waiting for you",
  ];

  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setValue(inputValue);
    updateSuggestions(inputValue);
  };

  const updateSuggestions = (inputValue: string) => {
    // Simulate fetching suggestions based on user input
    // In this example, we just update the placeholder text
    const newPlaceholderIndex = inputValue.trim() === "" ? 0 : 1;
    setPlaceholderIndex(newPlaceholderIndex);
  };

  React.useEffect(() => {
    // set an interval
    const interval = setInterval(() => {
      // set the placeholder index to the next on the list, but if it's the last one, go back to the first one
      setPlaceholderIndex((prevIndex) =>
        prevIndex === placeholderText.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    // clear the interval on re-render to avoid memory leaks
    return () => clearInterval(interval);
  }, []);

  return (
    <Box width={"100%"}>
      <TextField
        label="Search"
        InputLabelProps={{
          shrink: true,
        }}
        fullWidth
        variant="outlined"
        placeholder={placeholderText[placeholderIndex]}
        value={value}
        onChange={handleInputChange}
      />
    </Box>
  );
};

export default Search;
