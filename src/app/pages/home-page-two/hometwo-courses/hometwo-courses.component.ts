import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-hometwo-courses',
    templateUrl: './hometwo-courses.component.html',
    styleUrls: ['./hometwo-courses.component.scss']
})
export class HometwoCoursesComponent implements OnInit {

    isToggled = false;
    imagePath = environment.courseImagePath
    currentTab:any;
    categoryFields:any[]=[]
    courses:any[]=[]
	
    constructor(
        private coursesService:CoursesService
    ) {
       
    }


    ngOnInit(): void {
        this.getCategoryFields()
    }

    getCategoryFields(){
        this.coursesService.getCourseCategoryFields().subscribe((resp:any)=>{
            this.categoryFields = resp.data
            this.currentTab = "tab"+this.categoryFields[0].id
            // this.categoryFields.forEach((element:any) => {
                
            //     let courses= element.courses;
            //     this.courses.push(courses)
            // });
        })
    }

    // for tab click event
    
    switchTab(event: MouseEvent, tab: string,id:number) {
        event.preventDefault();
        this.currentTab = tab;
        this.courses = this.categoryFields.filter(item=>item.id==id)[0].courses
        console.log(this.courses)
    }

}