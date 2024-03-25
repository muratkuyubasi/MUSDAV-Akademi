import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router, NavigationCancel, NavigationEnd } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { TranslationService } from './services/translation.service';
import { AnnouncementService } from './services/announcement.service';
import { BaseComponent } from './base.component';
declare let $: any;

@Component({
  selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [
        Location, {
            provide: LocationStrategy,
            useClass: PathLocationStrategy
        }
    ]
})
export class AppComponent extends BaseComponent implements OnInit {
  title: any;
  location: any;
  isToggled = false;
  routerSubscription: any;
  

  constructor(
    private router: Router,
    private translate:TranslateService,
    private translationService:TranslationService,
    private annService:AnnouncementService
    ) {
      super()
      this.translate.setDefaultLang('de');
      localStorage.setItem("language","de")

      
      this.annService.getAppSetting('2793af14-4f02-492b-a48d-179adef0e8ba').subscribe((resp:any)=>{
        const lang = JSON.parse(resp.value)

        localStorage.setItem("siteSettings",resp.value)

        let i=0;
        for(let lng of lang.supportedLanguages){
            translate.addLangs([lng.languageCode]);
            i++;
        }
        translate.setDefaultLang(lang.defaultLanguage);
        this.setLanguage();    
            
        },err=>{
            translate.addLangs(['de','tr','en']);
            translate.setDefaultLang('de');
            this.setLanguage();
        })
    }

    ngOnInit(): void {
      this.recallJsFuntions();
    }
    setLanguage() {
      const currentLang = this.translationService.getSelectedLanguage();
      if (currentLang) {
        this.sub$.sink = this.translationService.setLanguage(currentLang)
        .subscribe(() => { });
      }
      else {
        const browserLang = this.translate.getBrowserLang();
        const lang = browserLang.match(/de|tr|en/) ? browserLang : 'de';
        this.sub$.sink = this.translationService.setLanguage(lang).subscribe(() => { });
      
      }
    }

    recallJsFuntions() {
      this.routerSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd || event instanceof NavigationCancel))
      .subscribe(event => {
          this.location = this.router.url;
          if (!(event instanceof NavigationEnd)) {
              return;
          }
          window.scrollTo(0, 0);
      });
  }
}
