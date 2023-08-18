import React, { ChangeEvent, FormEvent } from "react";
import { Button } from "react-bootstrap";

interface SearchBarProps {
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  //   hanldleSubmitForm: (e: FormEvent) => void;
}

const SearchBar = ({
  handleInputChange,
}: //   hanldleSubmitForm,
SearchBarProps) => {
  return <input type="text" onChange={handleInputChange} />;
  //! with a Form example
  //   return (
  //     <form onSubmit={hanldleSubmitForm}>
  //       <input type="text" onChange={handleInputChange} name="search" />
  //       <button type="submit">Submit search</button>
  //     </form>
  //   );
};

export default SearchBar;
