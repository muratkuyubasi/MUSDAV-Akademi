import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap, catchError, map } from 'rxjs/operators';

import { Router } from '@angular/router';
import { CommonHttpErrorService } from '../common/error-handler/common-http-error.service';
import { CommonError } from '../common/error-handler/common-error';
import { UserAuth } from '../domain-classes/user-auth';
import { User } from '../domain-classes/user';
import { environment } from 'src/environments/environment';


@Injectable(
  { providedIn: 'root' }
)
export class SecurityService {

  path=environment.apiUrl

  // securityObject: UserAuth = new UserAuth();
  private _securityObject$: BehaviorSubject<UserAuth> = new BehaviorSubject<UserAuth>(null);

  public get securityObject$(): Observable<UserAuth> {
    return this._securityObject$.pipe(
      map(c => {
        if (c) {
          return c;
        }
        const currenyData = localStorage.getItem('authObj');
        if (currenyData) {
          this._securityObject$.next(JSON.parse(currenyData))
          return JSON.parse(currenyData);
        }
        return null;
      })
    );
  }
  constructor(
    private http: HttpClient,
    private commonHttpErrorService: CommonHttpErrorService,
    private router: Router,
  ) {

  }

  login(entity: User): Observable<UserAuth | CommonError> {
    // Initialize security object
    this.resetSecurityObject();
    return this.http.post<UserAuth>('User/login', entity)
      .pipe(
        tap((resp) => {
          localStorage.setItem('authObj', JSON.stringify(resp));
          localStorage.setItem('bearerToken', resp.bearerToken);
         
          this._securityObject$.next(resp);
          
        })
      ).pipe(catchError(this.commonHttpErrorService.handleError));
  }

  register(user): Observable<any | CommonError>{
    const url = `Register`;
    return this.http.post<any>(url, user)
      .pipe(catchError(this.commonHttpErrorService.handleError));
  }

  forgotPassword(user): Observable<any | CommonError>{
    const url =`user/ForgotPassword`
    return this.http.post<any>(url,user)
      .pipe(catchError(this.commonHttpErrorService.handleError));
  }
  
  isLogin(): boolean {
    const authStr = localStorage.getItem('authObj');
    if (authStr)
      return true;
    else
      return false;
  }


  logout(): void {
    this.resetSecurityObject();
  }

  resetSecurityObject(): void {
    localStorage.removeItem('authObj');
    localStorage.removeItem('bearerToken');
    this._securityObject$.next(null);
  }

  reloadPage(){
    const url=self ? this.router.url :'/';
    this.router.navigateByUrl('/',{skipLocationChange:false}).then(()=>{
        this.router.navigate([`/${url}`]).then(()=>{
            console.log(`After navigation I am on:${this.router.url}`)
        })
    })
}



  // This method can be called a couple of different ways
  // *hasClaim="'claimType'"  // Assumes claimValue is true
  // *hasClaim="'claimType:value'"  // Compares claimValue to value
  // *hasClaim="['claimType1','claimType2:value','claimType3']"
  // tslint:disable-next-line: typedef
  hasClaim(claimType: any, claimValue?: any): boolean {
    let ret = false;
    // See if an array of values was passed in.
    if (typeof claimType === 'string') {
      ret = this.isClaimValid(claimType, claimValue);
    } else {
      const claims: string[] = claimType;
      if (claims) {
        // tslint:disable-next-line: prefer-for-of
        for (let index = 0; index < claims.length; index++) {
          ret = this.isClaimValid(claims[index]);
          // If one is successful, then let them in
          if (ret) {
            break;
          }
        }
      }
    }
    return ret;
  }

  private isClaimValid(claimType: string, claimValue?: string): boolean {
    let ret = false;
    let auth: UserAuth = null;
    // Retrieve security object
    const authStr = localStorage.getItem('authObj');
    if (authStr) {
      auth = JSON.parse(authStr);
      // See if the claim type has a value
      // *hasClaim="'claimType:value'"
      if (claimType.indexOf(':') >= 0) {
        const words: string[] = claimType.split(':');
        claimType = words[0].toLowerCase();
        claimValue = words[1];
      } else {
        claimType = claimType.toLowerCase();
        // Either get the claim value, or assume 'true'
        claimValue = claimValue ? claimValue : 'true';
      }
      // Attempt to find the claim
      ret =
        auth.claims.find(
          (c) =>
            c.claimType && c.claimType.toLowerCase() == claimType && c.claimValue == claimValue
        ) != null;
    }
    return ret;
  }


  getUserDetail(): UserAuth {
    var userJson = localStorage.getItem('authObj');
    return JSON.parse(userJson);
  }
}
