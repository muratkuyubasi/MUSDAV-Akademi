import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageTwoComponent } from './pages/home-page-two/home-page-two.component';
import { CoursesDetailsPageComponent } from './pages/courses-details-page/courses-details-page.component';
import { OpenedCourseDetailResolverService } from './pages/courses-details-page/course-detail-resolver';
import { HometwoCoursesComponent } from './pages/home-page-two/hometwo-courses/hometwo-courses.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { CourseRegisterPageComponent } from './pages/course-register-page/course-register-page.component';
import { ContentDetailPageComponent } from './pages/content-detail/content-detail.component';
import { ContentDetailResolverService } from './pages/content-detail/content-detail-resolver';
import { SearchComponent } from './pages/search/search.component';
import { CategoriesStyleOneComponent } from './common/categories-style-one/categories-style-one.component';
import { CategoryComponent } from './pages/category/category.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { LoginUserComponent } from './pages/login-user/login-page.component';
import { RegisterUserComponent } from './pages/register-user/register-page.component';
import { AuthGuard } from './security/auth.guard';
import { InstructorsPageOneComponent } from './pages/instructors-page-one/instructors-page-one.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { OfferPageComponent } from './pages/offer/offer-page.component';

const routes: Routes = [
  {path: '', component: HomePageTwoComponent,title:" Bildungsstätte"},
  {path: 'course/:code/:slug',component:CoursesDetailsPageComponent,resolve:{course:OpenedCourseDetailResolverService},title:'Angelbote'},
  {path:'courses',component:CoursesComponent},
  {path: 'register-course/:code/:openedCourseCode/:slug',component:CourseRegisterPageComponent,resolve:{course:OpenedCourseDetailResolverService}},
  {path: 'detail/:code/:slug',component:ContentDetailPageComponent,resolve:{pageContent:ContentDetailResolverService}},
  {path:'search',component:SearchComponent},
  {path:'category/:code/:slug',component:CategoryComponent,title: 'Kategorien', },
  {path:'login',component:LoginUserComponent},
  {path:'register',component:RegisterUserComponent},
  {path:'instructors',component:InstructorsPageOneComponent},
  {path:'contact', component:ContactPageComponent},
  {path:'offer',component:OfferPageComponent},
  {path:'student',
    canActivate:[AuthGuard],
    loadChildren:()=>import('./student/student.module').then((m)=>m.StudentModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {scrollPositionRestoration: 'enabled',onSameUrlNavigation:'reload' }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
