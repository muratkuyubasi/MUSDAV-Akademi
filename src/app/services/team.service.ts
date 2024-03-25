import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getBaseUrl } from 'src/main';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  path: string = getBaseUrl() + "api/Users/"
  constructor(private http: HttpClient) { }

  get(id: string) {
    return this.http.get(this.path + "GetById?id=" + id);
  }

  getList() {
    return this.http.get(this.path + "GetTeacherList?isActive=true");
  }
}
