import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { getBaseUrl } from 'src/main';
import { CommonHttpErrorService } from '../common/error-handler/common-http-error.service';
import { Router } from '@angular/router';
import { CommonError } from '../common/error-handler/common-error';

@Injectable({
  providedIn: 'root'
})
export class SiteSettingService {
  constructor(private http: HttpClient,private commonHttpErrorService: CommonHttpErrorService,private router:Router) { }

  getCampuses(): Observable<any[] | CommonError> {
      const url = `Campus/Campuses`;
      return this.http.get<any[]>(url)
        .pipe(catchError(this.commonHttpErrorService.handleError));
  }

  addContactData(data): Observable<any | CommonError> {
    const url = `Home/AddContactForm`;
    return this.http.post<any[]>(url,data)
      .pipe(catchError(this.commonHttpErrorService.handleError));
  }

  addOffer(data): Observable<any | CommonError> {
    const url = `Home/AddCourseOffer`;
    return this.http.post<any[]>(url,data)
      .pipe(catchError(this.commonHttpErrorService.handleError));
  }

  
}
