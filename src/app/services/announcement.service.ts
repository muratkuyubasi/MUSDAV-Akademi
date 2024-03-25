import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { getBaseUrl } from 'src/main';
import { Announcement } from '../models/announcement';
import { CommonError } from '../common/error-handler/common-error';
import { CommonHttpErrorService } from '../common/error-handler/common-http-error.service';
import { environment } from 'src/environments/environment';
import { AppSetting } from '../domain-classes/app-setting';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {

  path: string = getBaseUrl() + "api/Announcements/";
  apiPath=environment.apiUrl
  currentLang:any="de";
  constructor(private http: HttpClient, private commonHttpErrorService:CommonHttpErrorService,private translateService:TranslateService) { 
   
  }

  getMainSliders(): Observable<any[] | CommonError> {
    const url = `FrontAnnouncement/GetList/de`;
    return this.http.get<any[]>(url)
      .pipe(catchError(this.commonHttpErrorService.handleError));
  }

  getMenus(): Observable<any[] | CommonError> {
    const url = `Home/GetHomeMenus/de`;
    return this.http.get<any[]>(url)
      .pipe(catchError(this.commonHttpErrorService.handleError));
  }

  getContentDetail(code: string): Observable<any | CommonError> {
    const url = `Home/GetContentDetail/${code}/de`;
    return this.http.get<any>(url)
      .pipe(catchError(this.commonHttpErrorService.handleError));
  }
  getAppSetting(id: string): Observable<AppSetting | CommonError> {
    const url = `appsetting/${id}`;
    return this.http.get<AppSetting>(url)
      .pipe(catchError(this.commonHttpErrorService.handleError));
  }

}
