import { Injectable } from '@angular/core';
import {
    Resolve,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { CoursesService } from 'src/app/services/courses.service';

@Injectable()
export class OpenedCourseDetailResolverService implements Resolve<any> {
    constructor(private coursesService: CoursesService) { }
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> {
        const id = route.paramMap.get('code');
        return this.coursesService.getCourse(id) as Observable<any>;
    }
}
