import { ChangeEvent, MouseEvent, useEffect, useState } from "react";

import "./App.css";
import CharacterCard from "./components/CharacterCard";
import { Button, Container, Row } from "react-bootstrap";
import MyGrid from "./components/MyGrid";
import MySearch from "./components/MySearch";

interface CharacterType {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  image: string;
}
interface InfoType {
  count: number;
  next: string | null;
  pages: number;
  prev: string | null;
}

interface APIResponse {
  results: CharacterType[];
  info: InfoType;
}

function App() {
  const [characters, setCharacters] = useState<CharacterType[] | null>(null);
  const [info, setInfo] = useState<InfoType | null>(null);
  const [inputText, setInputText] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [url, setUrl] = useState<string | null>(
    "https://rickandmortyapi.com/api/character/"
  );

  const getCharacters = async () => {
    console.log("%c I am fetching", "color:orange");
    try {
      // const response = await fetch(
      //   `https://rickandmortyapi.com/api/character/?page=${pageNumber}`
      // );
      if (url) {
        const response = await fetch(url);
        // console.log("response", response);
        if (response.ok) {
          const result = (await response.json()) as APIResponse;
          console.log("result", result);
          const charactersArray = result.results;
          setInfo(result.info);
          setCharacters(charactersArray);
          // setCharacters(result.results)
        }
        if (!response.ok) {
          alert("something went wrong");
        }
      }
    } catch (err) {
      const error = err as Error;
      console.log("error", error.message);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("e", e.target.value);
    // console.log("working");
    setInputText(e.target.value);
  };
  const filteredCharacters = characters?.filter((character) => {
    const nornalisedInputText = inputText.toLowerCase();
    const normalisedCharacterName = character.name.toLowerCase();
    return normalisedCharacterName.includes(nornalisedInputText);
  });

  const changePageNumber = (e: MouseEvent<HTMLButtonElement>) => {
    // console.log("e.target.value", e.target.value);
    const target = e.target as HTMLButtonElement;
    console.log("target.value", target.value);

    if (target.value === "prev") {
      if (info?.prev === null) {
        setPageNumber(1);
      } else {
        // setPageNumber(pageNumber - 1);
        setUrl(info!.prev);
      }
    }
    if (target.value === "next") {
      if (info?.next === null) {
        setPageNumber(42);
      } else {
        setPageNumber(pageNumber + 1);
        setUrl(info!.next);
      }
    }
    console.log("pageNumber", pageNumber);
  };

  useEffect(() => {
    console.log("%c useffect run", "color:yellow");
    getCharacters();
  }, [url]);

  return (
    <>
      <h1>Rick & Morty with TS</h1>
      <div>
        <Button
          disabled={info?.prev ? false : true}
          value="prev"
          onClick={changePageNumber}
        >
          Prev
        </Button>
        <Button
          disabled={info?.next ? false : true}
          value="next"
          onClick={changePageNumber}
        >
          Next
        </Button>
      </div>
      <MySearch inputText={inputText} handleInputChange={handleInputChange} />
      {filteredCharacters && <MyGrid anyArray={filteredCharacters} />}
    </>
  );
}

export default App;
