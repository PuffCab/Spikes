export declare type Student = {
  course: "data" | "webdev";
  name: string;
  durationOfCourse: number;
};

export declare interface Car {
  brand: string;
  year: number;
  extras: string[];
  previousOwners?: Array<string>;
}
