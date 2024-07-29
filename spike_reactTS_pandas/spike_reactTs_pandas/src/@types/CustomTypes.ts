export declare type Characters = {
  id: number;
  name: string;
  status: string;
  species: string;
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

export declare type ApiResponse = {
  info: Info;
  results: Characters[];
};
