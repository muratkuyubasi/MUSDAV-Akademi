import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { getBaseUrl } from 'src/main';
import { Page } from '../models/page';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  path: string = getBaseUrl() + "api/Pages/";
  constructor(private http: HttpClient) { }

  get(id: string) {
    return this.http.get(this.path + "GetById?id=" + id);
  }

  getByLink(link: string): Observable<Page> {
    return this.http.get<Page>(this.path + "GetByLink?link=" + link);
  }
}
