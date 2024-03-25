import { Injectable } from '@angular/core';
import {
    Resolve,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { BaseComponent } from 'src/app/base.component';
import { AnnouncementService } from 'src/app/services/announcement.service';

@Injectable()
export class ContentDetailResolverService extends BaseComponent implements Resolve<any> {
    constructor(private annService: AnnouncementService) { super()}
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> {
        const id = route.paramMap.get('code');
        return this.annService.getContentDetail(id) as Observable<any>;
    }
}
