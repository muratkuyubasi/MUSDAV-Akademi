import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BaseComponent } from 'src/app/base.component';
import { CommonError } from 'src/app/common/error-handler/common-error';
import { UserAuth } from 'src/app/domain-classes/user-auth';
import { SecurityService } from 'src/app/security/security.service';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
    selector: 'app-login-user',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss']
})
export class LoginUserComponent extends BaseComponent implements OnInit {

    loginFormGroup: UntypedFormGroup;
    isToggled = false;
    @Output() signInOrSignUp:  EventEmitter<boolean> = new EventEmitter<boolean>();

    
    constructor(
        private securityService:SecurityService,
        private fb:UntypedFormBuilder,
        private toastr:ToastrService,
        private coursesService:CoursesService
    ) {
        super()
    }


    ngOnInit(): void {
        this.createFormGroup();
    }

    onLoginSubmit() {
        if (this.loginFormGroup.valid) {

          var userObject = Object.assign(this.loginFormGroup.value);
          this.sub$.sink = this.securityService.login(userObject)
            .subscribe(
              (c: UserAuth) => {
                this.isAuth$ = true
                this.toastr.success('Benutzeranmeldung erfolgreich.');
                
                this.coursesService.reloadOtherPage('student')
              },
              (err: CommonError) => {
                if (err.messages) {
                  err.messages.forEach(msg => {
                    this.toastr.error(msg);
                  });
                } else if (err.error) {
                  this.toastr.error(err.error as string);
                }
              }
            );
        }
      }

    createFormGroup(): void {
        this.loginFormGroup = this.fb.group({
          userName: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required]]
        });
      }


    setRegister(){
        this.signInOrSignUp.emit(false)
    }

}