export declare interface APIResponse {
  info: Info;
  results: Character[];
}

export declare type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
  url: string;
};
export declare type Info = {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
};
