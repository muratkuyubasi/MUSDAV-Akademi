import { Component, OnInit, HostListener } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { debounce, debounceTime, distinctUntilChanged } from 'rxjs';
import { BaseComponent } from 'src/app/base.component';
import { UserAuth } from 'src/app/domain-classes/user-auth';
import { Menu } from 'src/app/models/menu';
import { SiteSetting } from 'src/app/models/siteSetting';
import { SecurityService } from 'src/app/security/security.service';
import { AnnouncementService } from 'src/app/services/announcement.service';
import { CoursesService } from 'src/app/services/courses.service';
import { MenuService } from 'src/app/services/menu.service';
import { SiteSettingService } from 'src/app/services/siteSetting.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-header-style-one',
  templateUrl: './header-style-one.component.html',
  styleUrls: ['./header-style-one.component.scss']
})
export class HeaderStyleOneComponent extends BaseComponent implements OnInit {

    appUserAuth:UserAuth=null
    searchForm:UntypedFormControl = new UntypedFormControl('');;
    mainMenus: Menu[] = [];
    siteSettings:any;
    categories:any[]=[];

    isSticky: boolean = false;
    @HostListener('window:scroll', ['$event'])
    checkScroll() {
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (scrollPosition >= 50) {
            this.isSticky = true;
        } else {
            this.isSticky = false;
        }
    }

    isToggled = false;

    constructor(
        public router: Router, 
        private securityService:SecurityService,
        private announcementService:AnnouncementService,
        private storeService:StorageService,
        private coursesService:CoursesService
    ) {
        super()
        this.siteSettings= JSON.parse(localStorage.getItem("siteSettings"))
    }

 

    ngOnInit(): void {
        this.getMenus()
        this.getHomeCategories()
    }

    getMenus(){
        this.announcementService.getMenus().subscribe((resp:any)=>{
            console.log("Menüler",resp)
            this.mainMenus = resp
        })

    }

    getHomeCategories(){
        this.coursesService.getHomeCategories().subscribe((resp:any)=>{
            console.log(resp)
            this.categories = resp
        })
    }

    classApplied = false;
    toggleClass() {
        this.classApplied = !this.classApplied;
    }

    classApplied2 = false;
    toggleClass2() {
        this.classApplied2 = !this.classApplied2;
    }

    classApplied3 = false;
    toggleClass3() {
        this.classApplied3 = !this.classApplied3;
    }

    onLogout(): void {
        this.isAuth$ = false;
        this.securityService.logout();
        this.securityService.reloadPage()
        // this.router.navigate(['/']);
    }

    searchCourses(){
        this.storeService.setItem("searchKey",this.searchForm.value)
        this.router.navigateByUrl('/search',{
            skipLocationChange:true,
            onSameUrlNavigation:'reload',
            replaceUrl:true,
            state:[this.searchForm.value]
        })
        this.classApplied3 = ! this.classApplied3
        this.searchForm.reset()
        // this.coursesService.reloadPage()
    }


    setTopLogAndName() {
        this.sub$.sink = this.securityService.securityObject$.subscribe(c => {
          if (c) {
            this.appUserAuth = c;
            this.user$ = c
            if (this.appUserAuth.profilePhoto) {
              this.appUserAuth.profilePhoto = `${this.imagePath$}${this.appUserAuth.profilePhoto}`
            }
          }
        })
      }
}