import { NgModule } from "@angular/core";
import { StudentDashboardComponent } from "./student-dashboard/dashboard.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { StudentRoutingModule } from "./student.routing";
import { TranslateModule } from "@ngx-translate/core";


@NgModule({
    declarations:[StudentDashboardComponent],
    imports:[CommonModule,FormsModule,ReactiveFormsModule,StudentRoutingModule,TranslateModule],
    providers:[]
})

export class StudentModule { }