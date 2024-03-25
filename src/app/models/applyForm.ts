export interface ApplyForm {
  firstName: string;
  lastName: string;
  gender: number;
  birthDate: Date;
  email: string;
  phone: string | undefined;
  courseId: string;
  street: string | undefined;
  number: string | undefined;
  postCode: string | undefined;
  location: string | undefined;
  kidFirstName: string | undefined;
  kidLastName: string | undefined;
  kidBirthDate: Date | undefined;
  kidGender: number | undefined;
}
