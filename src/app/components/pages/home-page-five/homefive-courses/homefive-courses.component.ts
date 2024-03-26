import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-homefive-courses',
    templateUrl: './homefive-courses.component.html',
    styleUrls: ['./homefive-courses.component.scss']
})
export class HomefiveCoursesComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {}

    // for tab click event
    currentTab = 'tab1';
    switchTab(event: MouseEvent, tab: string) {
        event.preventDefault();
        this.currentTab = tab;
    }

}