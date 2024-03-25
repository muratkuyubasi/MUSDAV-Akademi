import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseComponent } from 'src/app/base.component';
import { CoursesService } from 'src/app/services/courses.service';
import localeDe from '@angular/common/locales/de';
import { registerLocaleData } from '@angular/common';
import { Title } from '@angular/platform-browser';
registerLocaleData(localeDe,'de')

@Component({
    selector: 'app-courses-details-page',
    templateUrl: './courses-details-page.component.html',
    styleUrls: ['./courses-details-page.component.scss']
})
export class CoursesDetailsPageComponent extends BaseComponent implements OnInit {


    course:any={}
    releatedCourses:any[]=[]
    constructor(
        private activeRoute:ActivatedRoute,
        private coursesService:CoursesService,
        private titleService:Title
    ) {
      super()
    }


    ngOnInit(): void {
        this.sub$.sink = this.activeRoute.data.subscribe(
            (data:{course:any})=>{
                if(data.course){
                    this.course = data.course.data
                    // console.log(this.course)
                    this.titleService.setTitle("Mufid | "+this.course.name)
                    this.getReleatedCourses()
                }
            }
        )
    }

    getReleatedCourses(){
      
        this.coursesService.getReleatedCourses(this.course.categoryCode,this.course.id,this.defaultLang$).subscribe((resp:any)=>{
            this.releatedCourses = resp.data
            console.log(this.releatedCourses)
        })
    }

}