import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError } from "rxjs";
import { environment } from "src/environments/environment";
import { CommonHttpErrorService } from "../common/error-handler/common-http-error.service";
import { CommonError } from "../common/error-handler/common-error";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})

export class InstructorsService{

    constructor(private http: HttpClient,private commonHttpErrorService: CommonHttpErrorService,private router:Router) { }

    getInstructors(): Observable<any[] | CommonError> {
        const url = `Home/GetInstructors`;
        return this.http.get<any[]>(url)
          .pipe(catchError(this.commonHttpErrorService.handleError));
    }
}