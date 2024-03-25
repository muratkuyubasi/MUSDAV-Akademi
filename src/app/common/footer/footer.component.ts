import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  siteSettings:any 
  constructor(
    private router:Router,
    private storeService:StorageService
  ) {
    this.siteSettings= JSON.parse(localStorage.getItem("siteSettings"))
   }

  ngOnInit(): void {

  }

  searchCourses(course){
    this.storeService.setItem("searchKey",course)
    this.router.navigateByUrl('/search',{
      skipLocationChange:true,
      // onSameUrlNavigation:'ignore',
      replaceUrl:true,
      state:[course]
  })
  }

}
