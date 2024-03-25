import { Course } from "./course";

export interface Category {
  id: number;
  name: string;
  description: string;
  courses: Course[];
}
