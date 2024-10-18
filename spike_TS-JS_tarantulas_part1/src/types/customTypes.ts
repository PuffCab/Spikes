export type User = {
  name: string;
  password: number;
};

// export interface Student {
//   name: string;
//   course: "webdev" | "data";
//   courseLenght: 3 | 5;
//   hasLaptop: boolean;
//   hasPet?: boolean;
// }
export declare namespace Cohort {
  interface Student {
    name: string;
    course: "webdev" | "data";
    courseLenght: 3 | 5;
    hasLaptop: boolean;
    hasPet?: boolean;
    chooseCohortName: (cohortName: string) => void;
  }

  type Course = "Data" | "web";
  type Mentor = "emily" | "Killian";
}
