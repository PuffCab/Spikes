import React, { ChangeEvent } from "react";

type MySearchProps = {
  inputText: string;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

function MySearch({ handleInputChange, inputText }: MySearchProps) {
  return <input type="text" value={inputText} onChange={handleInputChange} />;
}

export default MySearch;
