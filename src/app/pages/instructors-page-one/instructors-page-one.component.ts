import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/base.component';
import { InstructorsService } from 'src/app/services/instructors.service';

@Component({
    selector: 'app-instructors-page-one',
    templateUrl: './instructors-page-one.component.html',
    styleUrls: ['./instructors-page-one.component.scss']
})
export class InstructorsPageOneComponent extends BaseComponent implements OnInit {

    isToggled = false;
    instructors:any[]=[];
	
    constructor(
        private instructorsService:InstructorsService
    ) {
        super()
    }


    ngOnInit(): void {
        this.getInstructors()
    }

    getInstructors(){
        this.instructorsService.getInstructors().subscribe((resp:any)=>{
            console.log(resp)
            this.instructors = resp
        })
    }

}