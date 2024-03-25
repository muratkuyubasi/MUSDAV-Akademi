import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { getBaseUrl } from 'src/main';
import { Menu } from '../models/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  path: string = getBaseUrl() + "api/FrontMenuItems/";
  constructor(private http: HttpClient) { }

  getTopMenus() {
    return this.getList(0);
  }

  getBottomMenus() {
    return this.getList(1);
  }

  getByLink(link: string): Observable<Menu> {
    return this.http.get<Menu>(this.path + "GetByLink?link=" + link);
  }

  //0: Üst
  //1: Alt
  private getList(position: number) {
    return this.http.get(this.path + "GetListByPosition?position=" + position);
  }

}
