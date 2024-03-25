import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../security/auth.guard';
import { StudentDashboardComponent } from './student-dashboard/dashboard.component';


const routes: Routes = [
    {
        path:'',
        canActivate:[AuthGuard],
        component:StudentDashboardComponent
    }
]

@NgModule({
    declarations: [],
    imports: [
      RouterModule.forChild(routes)
    ], exports: [
      RouterModule
    ]
  })
  export class StudentRoutingModule { }