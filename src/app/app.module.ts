import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CountUpModule } from 'ngx-countup';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { LightboxModule } from 'ngx-lightbox';
import { LightgalleryModule } from 'lightgallery/angular';
import { HomePageTwoComponent } from './pages/home-page-two/home-page-two.component';
import { HometwoAboutComponent } from './pages/home-page-two/hometwo-about/hometwo-about.component';
import { HometwoCoursesComponent } from './pages/home-page-two/hometwo-courses/hometwo-courses.component';
import { HomeoneMainBannerComponent } from './pages/home-page-two/homeone-main-banner/homeone-main-banner.component';
import { HeaderStyleOneComponent } from './common/header-style-one/header-style-one.component';
import { CategoriesStyleOneComponent } from './common/categories-style-one/categories-style-one.component';
import { FunfactsComponent } from './common/funfacts/funfacts.component';
import { OurMissionComponent } from './common/our-mission/our-mission.component';
import { PartnerStyleOneComponent } from './common/partner-style-one/partner-style-one.component';
import { InstructorsStyleTwoComponent } from './common/instructors-style-two/instructors-style-two.component';
import { StudentsFeedbackFormComponent } from './common/students-feedback-form/students-feedback-form.component';
import { BlogComponent } from './common/blog/blog.component';
import { FooterComponent } from './common/footer/footer.component';
import { HometwoMainBannerComponent } from './pages/home-page-two/hometwo-main-banner/hometwo-main-banner.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TruncatePipe } from './pipes/truncate.pipe';
import { SlugifyPipe } from './pipes/slugify.pipe';
import { CoursesDetailsPageComponent } from './pages/courses-details-page/courses-details-page.component';
import { OpenedCourseDetailResolverService } from './pages/courses-details-page/course-detail-resolver';
import { CoursesComponent } from './pages/courses/courses.component';
import { CourseRegisterPageComponent } from './pages/course-register-page/course-register-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContentDetailPageComponent } from './pages/content-detail/content-detail.component';
import { ContentDetailResolverService } from './pages/content-detail/content-detail-resolver';
import { SearchComponent } from './pages/search/search.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { createTranslateLoader } from './translater-loader';
import { CategoryComponent } from './pages/category/category.component';
import { TitleStrategy } from '@angular/router';
import { TemplatePageTitleStrategy } from './pipes/template-title';
import { LoginUserComponent } from './pages/login-user/login-page.component';
import { RegisterUserComponent } from './pages/register-user/register-page.component';
import { HttpInterceptorModule } from './http-interceptor.module';
import { InstructorsPageOneComponent } from './pages/instructors-page-one/instructors-page-one.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { OfferPageComponent } from './pages/offer/offer-page.component';



@NgModule({
  declarations: [
    AppComponent,
    HomePageTwoComponent,
    HometwoMainBannerComponent,
    HometwoAboutComponent,
    HometwoCoursesComponent,
    HomeoneMainBannerComponent,
    HeaderStyleOneComponent,
    CoursesComponent,
    CoursesDetailsPageComponent,
    CourseRegisterPageComponent,
    CategoriesStyleOneComponent,
    FunfactsComponent,
    OurMissionComponent,
    PartnerStyleOneComponent,
    InstructorsStyleTwoComponent,
    StudentsFeedbackFormComponent,
    BlogComponent,
    FooterComponent,
    RegisterPageComponent,
    LoginPageComponent,
    ContentDetailPageComponent,
    SearchComponent,
    CategoryComponent,
    LoginUserComponent,
    RegisterUserComponent,
    InstructorsPageOneComponent,
    ContactPageComponent,
    OfferPageComponent,
    TruncatePipe,SlugifyPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpInterceptorModule,
    CarouselModule,
    CountUpModule,
    NgxScrollTopModule,
    LightboxModule,
    LightgalleryModule,
    TranslateModule.forRoot({
      loader:{
        provide:TranslateLoader,
        useFactory:createTranslateLoader,
        deps:[HttpClient]
      }
    }),
    ToastrModule.forRoot()
  ],
  bootstrap: [AppComponent],
  exports:[TruncatePipe,HeaderStyleOneComponent],
  providers: [
    {
      provide:TitleStrategy,
      useClass:TemplatePageTitleStrategy
    },
    OpenedCourseDetailResolverService,ContentDetailResolverService],
})
export class AppModule { }
