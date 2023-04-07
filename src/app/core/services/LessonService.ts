import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { _COALESCED_STYLE_SCHEDULER } from '@angular/cdk/table';
import { LessonTweetSimpleDTO } from 'src/app/core/domain/LessonTweetSimpleDTO';
import { LessonSimpleDTO } from '../domain/LessonSimpleDTO';
import { endpoints } from 'src/environments/endpoints';

@Injectable({
    providedIn: 'root' 
  })
export class LessonService {

  constructor(private http: HttpClient) { }

/*
  getLessonById(classId : number) :  Observable<ClassLessonSimpleDTO>{
    return this.http.get<ClassLessonSimpleDTO>(
        'http://localhost:8080/api/lesson/get/byid/simple/' + classId)
    }  */

    getLessonById(lessonId : number) :  Observable<LessonTweetSimpleDTO>{
      return this.http.get<LessonTweetSimpleDTO>(
         endpoints.baseURL + '/api/lesson/get/byid/simple/' + lessonId)
      } 
      
      addLesson(clazz : number, lessonSimpleDTO: LessonSimpleDTO){
        return this.http.post(
            endpoints.baseURL + '/api/lesson/add/' + clazz, lessonSimpleDTO).subscribe(           
            );
      }    
}