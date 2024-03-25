import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { getBaseUrl } from 'src/main';
import { CustomEnum } from '../models/gender';

@Injectable({
  providedIn: 'root'
})
export class CustomEnumService {

  path: string = getBaseUrl() + "api/SiteSettings/";

  constructor(private httpClient: HttpClient) { }

  getGenders(): Observable<CustomEnum[]> {
    return this.httpClient.get<CustomEnum[]>(this.path + "GetGenders");
  }

  getCourseTypes(): Observable<CustomEnum[]> {
    return this.httpClient.get<CustomEnum[]>(this.path + "GetCourseTypes");
  }

  getWeekdays(): Observable<CustomEnum[]> {
    return this.httpClient.get<CustomEnum[]>(this.path + "GetWeekdays");
  }

  getHourGaps(): Observable<CustomEnum[]> {
    return this.httpClient.get<CustomEnum[]>(this.path + "GetHourGaps");
  }

  getBranches() : Observable<CustomEnum[]> {
    return this.httpClient.get<CustomEnum[]>(this.path + "GetBranches");
  }
}
