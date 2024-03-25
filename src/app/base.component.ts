import { Component, OnDestroy } from '@angular/core';
import { SubSink } from 'SubSink';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-base',
    template: ``
})
export class BaseComponent implements OnDestroy {
    sub$: SubSink;
    defaultLang$:any="de";
    institutionCode$:any;
    imagePath$:any;
    userId$:any;
    user$:any={}
    isAuth$:any;
    constructor() {
        this.sub$ = new SubSink();
        let lang = localStorage.getItem("language");
       
        this.defaultLang$ = lang
        this.imagePath$ = environment.courseImagePath
        this.institutionCode$ = environment.institution.code
        let userAuth = JSON.parse(localStorage.getItem("authObj"))
        this.userId$ = userAuth?.id
        this.user$ = userAuth;
        this.isAuth$ = userAuth ? true:false;
    }
    ngOnDestroy(): void {
        this.sub$.unsubscribe();
    }

}
