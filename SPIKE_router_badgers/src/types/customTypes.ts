export interface CharacterType {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
}
export interface InfoType {
  count: number;
  pages: number;
  next: string;
  prev: string | null;
}

export interface CharactersReponse {
  results: CharacterType[];
  info: InfoType;
}
