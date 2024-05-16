export declare interface WebStudent {
  name: string;
  course: "webdev" | "data";
  courseLenght: number;
  hasLaptop: boolean;
  hasPet?: boolean;
}

export declare namespace Cohort {
  interface Student {
    name: string;
    courseLenght: 3 | 5;
    hasLaptop: boolean;
  }
  type Course = "webdev" | "data";
  type Mentor = "Killian" | "Emly";
  type FavMentor = (a: Mentor) => void;
}
