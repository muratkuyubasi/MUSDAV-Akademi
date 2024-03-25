import { Teacher } from "./teacher";

export interface User {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  genderId: number;
  teacher: Teacher;
  userImage: string | undefined;
}
