import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { getBaseUrl } from 'src/main';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  path: string = getBaseUrl() + "api/CourseCategories/";
  constructor(private http: HttpClient) { }

  getList(): Observable<Category[]> {
    return this.http.get<Category[]>(this.path + "GetList");
  }

  get(id: string): Observable<Category> {
    return this.http.get<Category>(this.path + "GetById?id=" + id);
  }
}
