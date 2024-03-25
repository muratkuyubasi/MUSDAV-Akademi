import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,NavigationEnd, Event, NavigationStart, NavigationError } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { BaseComponent } from 'src/app/base.component';
import { CoursesService } from 'src/app/services/courses.service';
import { StorageService } from 'src/app/services/storage.service';
import { Title } from '@angular/platform-browser';
import { filter, map } from 'rxjs';



@Component({
    selector: 'app-category-list',
    templateUrl: 'category.component.html',
    styleUrls:['../courses/courses.component.scss']
})

export class CategoryComponent extends BaseComponent implements OnInit {


    searchKey:any;
    courses:any[]=[]
    totalResult = 0;
    categoryCode:any;
    category:any;

    private storageSub= new Subject<String>();
    

    constructor(
        private activeRoute:ActivatedRoute,
        private coursesService:CoursesService,
        private storeService:StorageService,
        private titleService:Title,
        private router:Router
    ) {
        super()
            this.activeRoute.params.subscribe((param:any)=>{
                this.categoryCode = param.code
                this.getCategoryCourses()
            })
      
     }


    ngOnInit() {
        
    }

    getCategoryCourses(){
        this.coursesService.getCategoryCourses(this.categoryCode,this.defaultLang$).subscribe((resp:any)=>{
            this.category =resp.data
            this.courses = resp.data.courses
            this.titleService.setTitle("Mufid | " +resp.data.fieldName +" - "+resp.data.categoryName)
        })
    }

    setTitle(){
       
        this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => {
          let route: ActivatedRoute = this.router.routerState.root;
          console.log(route.snapshot.data['title'])
          let routeTitle = '';
          while (route!.firstChild) {
            route = route.firstChild;
          }
          if (route.snapshot.data['title']) {
            routeTitle = route!.snapshot.data['title'];
          }
          return routeTitle;
        })
      )
      .subscribe((title: string) => {
        if (title) {
          this.titleService.setTitle(`My App - ${title}`);
        }
      });
    }

  
}