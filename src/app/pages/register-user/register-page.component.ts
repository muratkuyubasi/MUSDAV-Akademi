import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BaseComponent } from 'src/app/base.component';
import { CommonError } from 'src/app/common/error-handler/common-error';
import { UserAuth } from 'src/app/domain-classes/user-auth';
import { SecurityService } from 'src/app/security/security.service';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
    selector: 'app-register-user',
    templateUrl: './register-page.component.html',
    styleUrls: ['./register-page.component.scss']
})
export class RegisterUserComponent extends BaseComponent implements OnInit {

    isToggled = false;
    @Output() signInOrSignUp:  EventEmitter<boolean> = new EventEmitter<boolean>();
    registerFormGroup: UntypedFormGroup;
    isLoading = false;
    constructor(
        private fb: UntypedFormBuilder,
        private securityService: SecurityService,
        private toastr: ToastrService,
        private coursesService:CoursesService


    ) {
        super()
    }

    ngOnInit(): void {
        this.createFormGroup();
    }

    setRegister(){
        this.signInOrSignUp.emit(true)
    }

    createFormGroup(): void {
        this.registerFormGroup = this.fb.group({
          userName: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required,Validators.pattern('(?=\\D*\\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,}')]],
          firstName:['',Validators.required],
          lastName:['',Validators.required]
        });
    }

    register(){
        if(this.registerFormGroup.valid){
            const data = this.createUserData()
            this.securityService.register(data).subscribe((resp)=>{
                if(resp.success){
                    const newUser:any={
                      userName:this.registerFormGroup.get('userName').value,
                      password:this.registerFormGroup.get('password').value
                    }
                    this.sub$.sink = this.securityService.login(newUser)
        .subscribe(
          (c: UserAuth) => {

            this.isLoading = false;
            this.toastr.success('User login successfully.');
            this.coursesService.reloadPage()
          },
          (err: CommonError) => {
            this.isLoading = false;
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
            })
        }
        else{
            this.registerFormGroup.markAllAsTouched()
        }
      }

      createUserData(){
        const data = {
            userName:this.registerFormGroup.get('userName').value,
            password:this.registerFormGroup.get('password').value,
            email:this.registerFormGroup.get('userName').value,
            firstName:this.registerFormGroup.get('firstName').value,
            lastName:this.registerFormGroup.get('lastName').value,
            isActive:true,
            userRoles:[{
                roleId:"D7B7D555-2FA8-45BB-A3E8-E8320D272F99"
            }]

        }
        return data;
      }

}