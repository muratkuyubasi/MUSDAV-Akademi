import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-homeone-courses',
    templateUrl: './homeone-courses.component.html',
    styleUrls: ['./homeone-courses.component.scss']
})
export class HomeoneCoursesComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {}

    // for tab click event
    currentTab = 'tab1';
    switchTab(event: MouseEvent, tab: string) {
        event.preventDefault();
        this.currentTab = tab;
    }

}