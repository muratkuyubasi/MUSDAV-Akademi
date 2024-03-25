import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CommonHttpErrorService } from '../common/error-handler/common-http-error.service';
import { CommonError } from '../common/error-handler/common-error';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({providedIn: 'root'})

export class StudentService {

    path=environment.apiUrl;

    constructor(
      private httpClient: HttpClient,
      private commonHttpErrorService: CommonHttpErrorService,private router:Router) {}

    getOpenedCourses(): Observable<any[] | CommonError> {
        const url = `Student/OpenedCourses`;
        return this.httpClient.get<any[]>(url)
          .pipe(catchError(this.commonHttpErrorService.handleError));
    }

    getStudentOpenedCourses(): Observable<any[] | CommonError> {
      const url = `Student/StudentOpenedCourses`;
      return this.httpClient.get<any[]>(url)
        .pipe(catchError(this.commonHttpErrorService.handleError));
  
    }

    getStudentOpenedCourse(id): Observable<any | CommonError> {
      const url = `Student/StudentOpenedCourseDetail/${id}`;
      return this.httpClient.get<any>(url)
        .pipe(catchError(this.commonHttpErrorService.handleError));
  
    }

    addStudent(student): Observable<any | CommonError> {
      const url = `Student/AddStudent`;
      return this.httpClient.post<any>(url, student)
        .pipe(catchError(this.commonHttpErrorService.handleError));
    }

    getLastStudent(userid): Observable<any | CommonError> {
      const url = `Student/StudentLastRegisterData/${userid}`;
      return this.httpClient.get<any>(url)
        .pipe(catchError(this.commonHttpErrorService.handleError));
    }

    //#region LESSON
    getStudentLesson(id): Observable<any | CommonError> {
      const url = `Student/OpenedCourseLesson/${id}`;
      return this.httpClient.get<any>(url)
        .pipe(catchError(this.commonHttpErrorService.handleError));
  
    }
    
    //#endregion

    //#region  STUDENTEXAM

    getStudentExams(): Observable<any | CommonError> {
      const url = `StudentExam/GetStudentExams`;
      return this.httpClient.get<any>(url)
        .pipe(catchError(this.commonHttpErrorService.handleError));
  
    }

    getStudentExam(studentCode,id): Observable<any | CommonError> {
      const url = `StudentExam/GetLessonStudentExam/${studentCode}/${id}`;
      return this.httpClient.get<any>(url)
        .pipe(catchError(this.commonHttpErrorService.handleError));
  
    }

    getStudentExamDetail(studentCode,id): Observable<any | CommonError> {
      const url = `StudentExam/GetLessonStudentExamDetail/${studentCode}/${id}`;
      return this.httpClient.get<any>(url)
        .pipe(catchError(this.commonHttpErrorService.handleError));
  
    }
    getStudentExamScreen(userId,examCode): Observable<any | CommonError> {
      const url = `StudentExam/GetStudentExamScreen/${userId}/${examCode}`;
      return this.httpClient.get<any>(url)
        .pipe(catchError(this.commonHttpErrorService.handleError));
  
    }

    updateStudentAnswer(data): Observable<any | CommonError> {
      const url = `StudentExam/UpdateStudentQuestionAnswer`;
      return this.httpClient.put<any>(url,data)
        .pipe(catchError(this.commonHttpErrorService.handleError));
  
    }

    updateStudentExam(examStudent): Observable<any | CommonError> {
      const url = `StudentExam/UpdateStudentExam`;
      return this.httpClient.put<any>(url,examStudent)
        .pipe(catchError(this.commonHttpErrorService.handleError));
  
    }
    //#endregion


    addLessonAssignmentFile(LessonAssignmentFile: any): Observable<any | CommonError> {
      const url = `LessonAssignment/AddLessonAssignmentFile`;
      return this.httpClient.post<any>(url, LessonAssignmentFile)
        .pipe(catchError(this.commonHttpErrorService.handleError));
    }

    getStudentAssignments(id): Observable<any[] | CommonError> {
      const url = `Student/GetStudentAssignment/${id}`;
      return this.httpClient.get<any[]>(url)
        .pipe(catchError(this.commonHttpErrorService.handleError));
  
    }

    getStudentAllAssignments(): Observable<any[] | CommonError> {
      const url = `Student/StudentAllAssignments`;
      return this.httpClient.get<any[]>(url)
        .pipe(catchError(this.commonHttpErrorService.handleError));
  
    }

    getStudentAttendances(id): Observable<any[] | CommonError> {
      const url = `Student/GetStudenAttendance/${id}`;
      return this.httpClient.get<any[]>(url)
        .pipe(catchError(this.commonHttpErrorService.handleError));
  
    }
    getStudentAllAttendances(): Observable<any[] | CommonError> {
      const url = `Student/StudentAllAttendances`;
      return this.httpClient.get<any[]>(url)
        .pipe(catchError(this.commonHttpErrorService.handleError));
  
    }

    updateStudentAttendance(attendance: any): Observable<any | CommonError> {
      const url = `Student/UpdateStudentAttendance`;
      return this.httpClient.put<any>(url, attendance)
        .pipe(catchError(this.commonHttpErrorService.handleError));
    }

    
    getStudentAllNotes(): Observable<any[] | CommonError> {
      const url = `Student/StudentAllNotes`;
      return this.httpClient.get<any[]>(url)
        .pipe(catchError(this.commonHttpErrorService.handleError));
  
    }
    
    getStudentAllQuestions(): Observable<any[] | CommonError> {
      const url = `Student/StudentAllQuestions`;
      return this.httpClient.get<any[]>(url)
        .pipe(catchError(this.commonHttpErrorService.handleError));
  
    }
    uploadFile(form: FormData): Observable<any | CommonError> {
      const url = `LessonAssignment/AddFile`;
      return this.httpClient.post<any>(url, form)
        .pipe(catchError(this.commonHttpErrorService.handleError));
    }

    reloadPage(){
      const url=self ? this.router.url :'/';
      this.router.navigateByUrl('/',{skipLocationChange:false}).then(()=>{
          this.router.navigate([`/${url}`]).then(()=>{
              console.log(`After navigation I am on:${this.router.url}`)
          })
      })
  }
}