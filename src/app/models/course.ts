import { Observable } from "rxjs";
import { Category } from "./category";
import { CourseBranch } from "./courseBranch";
import { CourseDay } from "./courseDay";
import { CourseHour } from "./courseHour";
import { Teacher } from "./teacher";

export interface Course {
  id: string;
  courseCategoryId: number;
  name: string;
  description: string;
  quota: number;
  preContent: string;
  creationDate: Date;
  teacher: Teacher;
  teacherName: string | undefined;
  teacherFullname: string | undefined;
  startDate: Date | undefined;
  imagePath: string | undefined;
  weekday: number;
  isActive: boolean;
  hasOptionToSelectDay: boolean;
  hasOptionToSelectBranch: boolean;
  order: number;
  courseBranches: CourseBranch[];
  courseDays: CourseDay[];
  courseHours: CourseHour[];
  courseCategory: Category;
  kacKayitVar: number;
}
