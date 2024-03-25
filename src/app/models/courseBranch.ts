import { Course } from "./course";

export interface CourseBranch {
  id: number;
  name: string;
  order: number;
  courseId: string;
  course: Course;
}
