export declare type Student = {
  course: "data" | "webdev";
  name: string;
  durationOfCourse: number;
};

export namespace Vehicle {
  export interface Car {
    brand: string;
    year: number;
    extras: string[];
    previousOwners?: Array<string>;
  }

  export interface Plane {
    airline: string;
    numberOfSeats: number;
  }

  export type Engine = "Diesel" | "Gasoline" | "Electric" | "Queroseno";

  export type RevealEngineType = (a: Engine) => string;
}
