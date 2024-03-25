import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { BaseComponent } from 'src/app/base.component';
import { AnnouncementService } from 'src/app/services/announcement.service';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-hometwo-main-banner',
    templateUrl: './hometwo-main-banner.component.html',
    styleUrls: ['./hometwo-main-banner.component.scss']
})
export class HometwoMainBannerComponent extends BaseComponent implements OnInit {

	slideItems:any[]=[]
	imagePath = environment.courseImagePath

	
    constructor(private announcementService:AnnouncementService) {
		super()
	 }

    ngOnInit(): void {
		this.getSliders()
    }

	getSliders(){
		this.announcementService.getMainSliders().subscribe((resp:any)=>{
		  console.log("SLIDE",resp)
		  this.slideItems = resp
		})
	  }

    homeSlides: OwlOptions = {
		loop: true,
		nav: true,
		dots: true,
		autoplayHoverPause: true,
		autoplay: true,
		items: 1,
		autoHeight: true,
		navText: [
			"<i class='bx bx-chevron-left'></i>",
			"<i class='bx bx-chevron-right'></i>"
		]
    }

}