import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-homethree-courses',
    templateUrl: './homethree-courses.component.html',
    styleUrls: ['./homethree-courses.component.scss']
})
export class HomethreeCoursesComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {}

    // for tab click event
    currentTab = 'tab1';
    switchTab(event: MouseEvent, tab: string) {
        event.preventDefault();
        this.currentTab = tab;
    }

}