import React from "react";

type SearchProps = {
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

function Search({ handleInputChange }: SearchProps) {
  return (
    <input
      type="text"
      placeholder="type any character name"
      onChange={handleInputChange}
    />
  );
}

export default Search;
