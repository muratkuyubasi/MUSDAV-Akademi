import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { getBaseUrl } from 'src/main';
import { ApplyForm } from '../models/applyForm';
import { ApplyFormTeacher } from '../models/applyFormTeacher';

@Injectable({
  providedIn: 'root'
})
export class ApplyFormService {

  studentPath: string = getBaseUrl() + "api/ApplyForms/";
  teacherPath: string = getBaseUrl() + "api/ApplyFormTeachers/";
  getQuataPath: string = getBaseUrl() + "api/ApplyForms/GetListByQuata/"
  constructor(private http: HttpClient) { }

  submitStudent(applyForm: ApplyForm) {
    return this.http.post(this.studentPath + "Add", applyForm);
  }

  submitTeacher(applyForm: ApplyFormTeacher) {
    return this.http.post(this.teacherPath + "Add", applyForm);
  }


  getQuata(courseId: string): Observable<number> {
    return this.http.get<number>(this.getQuataPath + "?courseId=" + courseId);
  }


}
