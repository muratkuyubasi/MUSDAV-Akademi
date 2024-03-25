import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { getBaseUrl } from 'src/main';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  path: string = getBaseUrl() + "api/Courses/";
  constructor(private http: HttpClient) { }

  getList(): Observable<any> {
    // alert(this.path + "GetList?isActive=true")
    return this.http.get<any>(this.path + "GetList?isActive=true");
  }

  

  get(id: string): Observable<Course> {
    return this.http.get<Course>(this.path + "GetById?id=" + id);
  }
}
