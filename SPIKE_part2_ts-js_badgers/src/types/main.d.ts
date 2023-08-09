//Put inside here our custom types

export type WebMentor = "Emily" | "Heron";

export interface Student {
  name: string;
  course: string;
  courseLength: number;
  hasPet?: boolean;

  // [key: string]: string | number | boolean;
  [key: string]: any;
}

export namespace Vehicle {
  interface Car {
    brand: string;
    year: number;
  }
  type Engine = "Diesel" | "Electric" | "Gasoline";
  type CarCollection = Array<Car>;
  type TellMotor = (a: Engine) => String;

  interface Plane {
    seats: number;
    airline: string;
  }
}
