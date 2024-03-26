import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-homesix-courses',
    templateUrl: './homesix-courses.component.html',
    styleUrls: ['./homesix-courses.component.scss']
})
export class HomesixCoursesComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {}

    // for tab click event
    currentTab = 'tab1';
    switchTab(event: MouseEvent, tab: string) {
        event.preventDefault();
        this.currentTab = tab;
    }

}