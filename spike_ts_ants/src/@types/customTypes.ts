export declare type CourseDuration = number;
export declare type User = {
  email: string;
  password: string;
};

export declare namespace Data {
  export interface Student {
    name: string;

    hasLaptop?: boolean;
  }
  export type CourseType = "webdev" | "data";

  export type Mentor = "Killian" | "Muayid";
  export type Cohort = Array<User>;

  export type TellMentorName = (a: Mentor) => string;
}
