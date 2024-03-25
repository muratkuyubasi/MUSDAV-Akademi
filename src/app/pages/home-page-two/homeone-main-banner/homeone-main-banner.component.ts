import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { BaseComponent } from 'src/app/base.component';
import { AnnouncementService } from 'src/app/services/announcement.service';

@Component({
    selector: 'app-homeone-main-banner',
    templateUrl: './homeone-main-banner.component.html',
    styleUrls: ['./homeone-main-banner.component.scss']
})
export class HomeoneMainBannerComponent extends BaseComponent implements OnInit {

    isToggled = false;
	
    constructor(
    ) {
        super()
    }

   

    ngOnInit(): void {
      
    }

   


    missionSlides: OwlOptions = {
		loop: true,
		nav: true,
		dots: false,
		autoplayHoverPause: true,
		autoplay: true,
		items: 1,
		navText: [
			"<i class='bx bx-left-arrow-alt'></i>",
			"<i class='bx bx-right-arrow-alt'></i>"
		]
    }

}