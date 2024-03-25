import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/base.component';
import { UserAuth } from 'src/app/domain-classes/user-auth';
import { SecurityService } from 'src/app/security/security.service';
import { StudentService } from 'src/app/services/student.service';


@Component({
    selector: 'app-student-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.scss']
})
export class StudentDashboardComponent extends BaseComponent implements OnInit {

    openedCourses:any[]=[]
    constructor(
        private studentService:StudentService,
        private securityService:SecurityService
    ) {
        super()
    }

    ngOnInit(): void {
        this.getAllOpenedCourses()
    }

    getAllOpenedCourses(){
        this.studentService.getStudentOpenedCourses().subscribe((resp:any)=>{
            
            this.openedCourses = resp
            console.log(this.openedCourses)
        })
    }

    onLogout(): void {
        this.isAuth$ = false;
        this.securityService.logout();
        this.user$=""
        this.studentService.reloadPage();
    }
   
    

}