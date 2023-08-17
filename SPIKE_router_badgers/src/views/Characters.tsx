import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import CardsGrid from "../components/CardsGrid";
import { Button, Container, Row } from "react-bootstrap";
import SearchBar from "../components/SearchBar";
import {
  CharacterType,
  CharactersReponse,
  InfoType,
} from "../types/customTypes";

function Characters() {
  //   console.log("%c component rendered", "color:red");

  const [characters, setCharacters] = useState<CharacterType[]>([
    {
      id: 0,
      name: "",
      status: "",
      species: "",
      type: "",
      gender: "",
      image: "",
    },
  ]);

  const [info, setInfo] = useState<InfoType>({
    count: 0,
    next: "",
    pages: 0,
    prev: null,
  });
  //   const [characters, setCharacters] = useState<CharacterType[]>(null);
  const [searchText, setSearchText] = useState("");
  const [searchFormText, setSearchFormText] = useState("");

  const [pageNumber, setPageNumber] = useState(1);

  const fetchCharacters = async () => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${pageNumber}`
    );
    // console.log("response :>> ", response);

    const data = (await response.json()) as CharactersReponse;
    console.log("data :>> ", data);
    setCharacters(data.results);
    setInfo(data.info);
  };

  const filteredCharacters = characters.filter((character) => {
    return character.name.toLowerCase().includes(searchText.toLowerCase()); // This we use it with a plain input and onchange
    // return character.name.toLowerCase().includes(searchFormText.toLowerCase()); // this we use it with a submit button from the form
  });
  //   console.log("filteredCharacters :>> ", filteredCharacters);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    // console.log("e.target.value :>> ", e.target.value);

    setSearchText(e.target.value);
  };
  const hanldleSubmitForm = (e: FormEvent) => {
    e.preventDefault();
    setSearchFormText(searchText);
  };

  const changePage = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    //   console.log("e.target.name :>> ", (e.target as HTMLInputElement).name);
    const buttonName = (e.target as HTMLButtonElement).name;

    if (buttonName === "prev") {
      setPageNumber(pageNumber - 1);
    }
    if (buttonName === "next") {
      setPageNumber(pageNumber + 1);
    }
  };

  useEffect(() => {
    fetchCharacters().catch((error) => {
      console.log("error :>> ", error);
    });
  }, [pageNumber]);

  return (
    <div>
      <h1>Characters</h1>
      {/* <input type="text" onChange={handleInputChange} /> */}
      <SearchBar
        handleInputChange={handleInputChange}
        // hanldleSubmitForm={hanldleSubmitForm}
      />
      <div>
        <Button onClick={changePage} name="prev" disabled={!info.prev}>
          Prev
        </Button>
        {/* <Button onClick={(e)=> changePage(e)} name="next">  // trick to find out the type of the event  */}
        <Button onClick={changePage} name="next" disabled={!info.next}>
          Next
        </Button>
      </div>
      <div>
        <Container>
          <Row xs={1} sm={2} md={2} lg={4}>
            <CardsGrid characters={filteredCharacters} />
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Characters;
