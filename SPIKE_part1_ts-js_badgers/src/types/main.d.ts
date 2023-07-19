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
