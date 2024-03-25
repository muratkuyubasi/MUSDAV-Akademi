import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent } from 'src/app/base.component';
import { CoursesService } from 'src/app/services/courses.service';
import localeDe from '@angular/common/locales/de';
import { registerLocaleData } from '@angular/common';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
registerLocaleData(localeDe,'de')

@Component({
    selector: 'app-course-register-page',
    templateUrl: './course-register-page.component.html',
    styleUrls: ['./course-register-page.component.scss']
})
export class CourseRegisterPageComponent extends BaseComponent implements OnInit {


    course:any={}
    releatedCourses:any[]=[]
    openedCourseCode:any;
    selectedCourse:any;
    signInOrSignUp:boolean=true
    studentForm:UntypedFormGroup
    message:any;
    namePlaceHolder:any="Vorame";
    lastNamePlaceHolder:any="Nachname";


    constructor(
        private activeRoute:ActivatedRoute,
        private coursesService:CoursesService,
        private router:Router,
        private fb:UntypedFormBuilder,
    ) {
      super()
      this.activeRoute.params.subscribe((param:any)=>{
        this.openedCourseCode = param.openedCourseCode
      })
    }


    ngOnInit(): void {
       console.log("KULLANIICI",this.user$)
        this.sub$.sink = this.activeRoute.data.subscribe(
            (data:{course:any})=>{
                if(data.course){
                    this.course = data.course.data
                    this.selectedCourse = this.course.openedCourses.filter(item=>item.code == this.openedCourseCode)[0]
                    console.log(this.course)
                    console.log(this.selectedCourse)
                    this.createForm()
                }
            }
        )
    }

    createForm(){
     
        this.studentForm =this.fb.group({
            identificationNumber:[''],
            name:[this.user$.firstName,Validators.required],
            lastName:[this.user$.lastName,Validators.required],
            openCourseId:[this.selectedCourse?.id],
            gender:['',Validators.required],
            birthDate:['',Validators.required],
            gsm:[this.user$?.phoneNumber,Validators.required],
            email:[this.user$?.email,[Validators.required,Validators.email]],
            educationStatusId:[1,Validators.required],
            confirmation:[true,Validators.requiredTrue],
            userId:[this.user$.id],
            workStatusId:[1],
            address:['',Validators.required],
            state:['',Validators.required],
            city:['',Validators.required]

        })
    }

    saveData(){
        console.log(this.studentForm.value)
        if(this.studentForm.valid){
          let data = Object.assign({},this.studentForm.value)
          this.coursesService.addStudent(data).subscribe((resp)=>{
            if(resp.success && resp.statusCode==200){
                this.message="Ihre Kursanmeldung wurde erfolgreich abgeschlossen"
                this.studentForm.reset()
              
            }
            else{
                if(resp.code==409){
                    this.message=resp.error[0]
                }
                else{
                    this.message="Kurs Kaydınız sırasında bir hata oluştu"
                }
            }
          },err=>{
            this.message="Die Anmeldung für diesen Kurs erfolgte unter demselben Namen"
          })
        }
        else{
          this.studentForm.markAllAsTouched()
        }
      }

    setIsChild(e){
        console.log(e.currentTarget.checked)
        if(e.currentTarget.checked){
            this.namePlaceHolder = "Vorname des kindes"
            this.lastNamePlaceHolder = "Nachname des kindes"
            this.studentForm.patchValue({name:''})
            this.studentForm.patchValue({lastName:''})
        }
        else{
            this.namePlaceHolder = "Vorname"
            this.lastNamePlaceHolder = "Nachname"
            this.studentForm.patchValue({name:this.user$.firstName})
            this.studentForm.patchValue({lastName:this.user$.lastName})
        }
    }
    setRegister(e){
        console.log(e)
        this.signInOrSignUp = e
    }


    register(){
        // console.log("LAST",this.activeRoute.snapshot.url)
        // this.router.navigate(['/'], { queryParams: { redirectTo: this.activeRoute.snapshot.url } });
    }
}