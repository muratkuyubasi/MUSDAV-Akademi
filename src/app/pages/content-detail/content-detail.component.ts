import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { BaseComponent } from 'src/app/base.component';

@Component({
    selector: 'app-content-detail',
    templateUrl: 'content-detail.component.html'
})

export class ContentDetailPageComponent extends BaseComponent implements OnInit {
    pageContent:any;

    constructor(
        private activeRoute:ActivatedRoute,
        private titleService:Title
    ) {
        super()
     }

    ngOnInit() {
        this.sub$.sink = this.activeRoute.data.subscribe(
            (data:{pageContent:any})=>{
                if(data.pageContent){
                    // this.course = data.course.data
                    console.log(data.pageContent)
                    this.pageContent = data.pageContent.data
                    this.titleService.setTitle("Mufid | "+ this.pageContent.menuName)
                }
            }
        )
    }

    
}