import React, { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import CharacterCard from "../components/CharacterCard";
import { Button, Col, Container, Row } from "react-bootstrap";
import { APIResponse, Character, Info } from "../@types/Customtypes";
import Grid from "../components/Grid";
import Search from "../components/Search";

function Characters() {
  console.log("component rendered :>> ");
  const [characters, setCharacters] = useState<Character[] | null>(null);
  const [inputText, setInputText] = useState("");
  const [info, setInfo] = useState<Info | null>(null);
  const [url, setUrl] = useState("https://rickandmortyapi.com/api/character");

  const getCharacters = async (myUrl: string) => {
    try {
      const response = await fetch(myUrl);
      if (response.ok) {
        const data = (await response.json()) as APIResponse;
        console.log("data :>> ", data);
        setCharacters(data.results);
        setInfo(data.info);
      }
      //handle here situation in which !response.ok
    } catch (error) {
      console.log("error :>> ", error);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("event :>> ", e.target.value);
    setInputText(e.target.value);
  };

  const filteredCharacters = characters?.filter((character) => {
    return character.name.toLowerCase().includes(inputText.toLowerCase());
  });

  const changePage = (e: MouseEvent<HTMLButtonElement>) => {
    console.log("e :>> ", e);
    console.log("info :>> ", info?.next);
    const targetEvent = e.target as HTMLButtonElement;

    if (targetEvent.innerText === "Prev") {
      if (info && info.prev) {
        setUrl(info.prev);
      }
    }
    if (targetEvent.innerText === "Next") {
      if (info && info.next) {
        setUrl(info.next);
      }
    }
  };

  // const prevPage = () => {
  //   if (info && info.prev) {
  //     setUrl(info.prev);
  //   }
  // };

  useEffect(() => {
    console.log("%c useEffect run", "color:red");
    getCharacters(url);
  }, [url]);

  return (
    <>
      <h1>Characters</h1>
      <Search handleInputChange={handleInputChange} />
      <div>
        <Button onClick={changePage} value="prev" disabled={!info?.prev}>
          Prev
        </Button>
        <Button onClick={changePage} disabled={!info?.next}>
          Next
        </Button>
      </div>
      <div>
        <Container>
          <Row>
            <Grid characters={filteredCharacters!} />
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Characters;
