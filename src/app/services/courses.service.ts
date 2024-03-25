import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError } from "rxjs";
import { environment } from "src/environments/environment";
import { CommonHttpErrorService } from "../common/error-handler/common-http-error.service";
import { CommonError } from "../common/error-handler/common-error";
import { Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";

@Injectable({
    providedIn: 'root'
})

export class CoursesService {
    currentLang:any="de";
    path: string = environment.apiUrl;
    constructor(private http: HttpClient,private commonHttpErrorService: CommonHttpErrorService,private router:Router,private translateService:TranslateService) { 
    }

    getHomeCategories(): Observable<any[] | CommonError> {
        const url = `Home/GetHomeCategories`;
        return this.http.get<any[]>(url)
          .pipe(catchError(this.commonHttpErrorService.handleError));
    }

    getCategoryCourses(code,lang): Observable<any[] | CommonError>{
        const url = `Home/GetCategoryCourses/${code}/de`;
        return this.http.get<any[]>(url)
          .pipe(catchError(this.commonHttpErrorService.handleError));
        
    }
    getCourseCategoryFields(): Observable<any[] | CommonError>{
        const url = `Home/GetCategories/de`;
        return this.http.get<any[]>(url)
          .pipe(catchError(this.commonHttpErrorService.handleError));
    }

    getCourse(id: string): Observable<any | CommonError> {
        const url = `Home/GetCourseDetail/${id}/de`;
        return this.http.get<any>(url)
          .pipe(catchError(this.commonHttpErrorService.handleError));
    }

    getOpenedCourses(): Observable<any[] | CommonError> {
        const url = `OpenedCourse/OpenedCourses`;
        return this.http.get<any[]>(url)
          .pipe(catchError(this.commonHttpErrorService.handleError));
    }

    getOpenedCourse(id: string): Observable<any | CommonError> {
        const url = `OpenedCourse/OpenedCourse/${id}`;
        return this.http.get<any>(url)
          .pipe(catchError(this.commonHttpErrorService.handleError));
    }

    getReleatedCourses(id,courseId,lang): Observable<any | CommonError> {
        const url = `Home/GetRelelatedCourses/${id}/${courseId}/de`;
        console.log(url)
        return this.http.get<any>(url)
          .pipe(catchError(this.commonHttpErrorService.handleError));
    }

    addStudent(student): Observable<any | CommonError> {
        const url = `Student/AddStudent`;
        return this.http.post<any>(url, student)
          .pipe(catchError(this.commonHttpErrorService.handleError));
      }
    
    search(key,lang): Observable<any[] | CommonError> {
        let data={
            searchKey:key,
            languageCode:'de'
        }
        const url = `Home/SearchCourses`;
        return this.http.post<any[]>(url,data)
          .pipe(catchError(this.commonHttpErrorService.handleError));
    }


    reloadPage(){
        const url=self ? this.router.url :'/';
        this.router.navigateByUrl('/',{skipLocationChange:true}).then(()=>{
            this.router.navigate([`/${url}`]).then(()=>{
                console.log(`After navigation I am on:${this.router.url}`)
            })
        })
    }

    reloadOtherPage(newUrl){
        const url=newUrl ? newUrl: this.router.url;
        console.log(url);
        this.router.navigateByUrl('/',{skipLocationChange:true}).then(()=>{
            this.router.navigate([`/${url}`]).then(()=>{
                console.log(`After navigation I am on:${this.router.url}`)
            })
        })
    }
}