import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import Grid from "../components/Grid";
import { ApiResponse, Characters, Info } from "../@types/CustomTypes";
import Search from "../components/Search";

function CharactersList() {
  const [characters, setCharacters] = useState<Characters[] | null>(null);
  const [userSearch, setUserSearch] = useState("");
  const [url, setUrl] = useState("https://rickandmortyapi.com/api/character");
  const [info, setInfo] = useState<Info | null>(null);

  const getCharacters = async (apiUrl: string) => {
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("...something went wrong..");
      }
      const data = (await response.json()) as ApiResponse;
      const charactersArray = data.results;
      setCharacters(charactersArray);
      setInfo(data.info);

      console.log("data :>> ", data);
    } catch (error) {
      console.log("error :>> ", error);
    }
  };

  const filteredCharacters = characters?.filter((character) => {
    return character.name.toLowerCase().includes(userSearch.toLowerCase());
  });

  const handleInputSearch = (e: ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value);
    setUserSearch(e.target.value);
  };

  const handlePagination = (e: MouseEvent<HTMLButtonElement>) => {
    console.log("event", e);
    const eventTarget = e.target as HTMLButtonElement;

    if (eventTarget.innerHTML === "Next") {
      if (info && info.next) {
        setUrl(info.next);
      }
    }
    if (eventTarget.innerHTML === "Prev") {
      if (info && info.prev) {
        setUrl(info.prev);
      }
    }
  };

  useEffect(() => {
    getCharacters(url);
  }, [url]);

  return (
    <div>
      <div>
        <Search handleInputSearch={handleInputSearch} />
        <div>
          <button onClick={handlePagination} disabled={!info?.prev}>
            Prev
          </button>
          <button onClick={handlePagination} disabled={!info?.next}>
            Next
          </button>
        </div>
      </div>
      {filteredCharacters && <Grid characters={filteredCharacters} />}
    </div>
  );
}

export default CharactersList;
