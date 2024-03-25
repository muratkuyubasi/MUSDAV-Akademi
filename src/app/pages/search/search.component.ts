import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { BaseComponent } from 'src/app/base.component';
import { CoursesService } from 'src/app/services/courses.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
    selector: 'app-search',
    templateUrl: 'search.component.html',
    styleUrls:['../courses/courses.component.scss']
})

export class SearchComponent extends BaseComponent implements OnInit {

    searchKey:any;
    courses:any[]=[]
    totalResult = 0;

    private storageSub= new Subject<String>();
    

    constructor(
        private activeRoute:ActivatedRoute,
        private coursesService:CoursesService,
        private storeService:StorageService
    ) {
        super()
        this.searchKey = localStorage.getItem("searchKey")
        
     }


    ngOnInit() {

        this.storeService.watchStorage().subscribe((resp:any)=>{
            if(resp){
                this.searchKey = resp

                this.searchData()
            }
            
        })
       

        this.searchData()
    }


    searchData(){
        this.coursesService.search(this.searchKey,this.defaultLang$).subscribe((resp:any)=>{
            this.totalResult = resp.length
            this.courses = resp
        })
    }

}