export type Info = {
  count: number;
  pages: number;
  next: number;
  prev: number;
};

export type APIResponse = {
  info: Info;
  results: Character[];
};

export type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
};
