import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { _COALESCED_STYLE_SCHEDULER } from '@angular/cdk/table';
import { ClassLessonSimpleDTO } from '../domain/ClassLessonSimpleDTO';
import { ClassSimpleDTO } from '../domain/ClassSimpleDTO';
import { endpoints } from 'src/environments/endpoints';

@Injectable({
    providedIn: 'root'
  })
export class ClassService {

  constructor(private http: HttpClient) { }

  getAllClasses(classId : number) :  Observable<ClassLessonSimpleDTO>{
    return this.http.get<ClassLessonSimpleDTO>(
      endpoints.baseURL + '/api/class/get/byid/simple/' + classId)
    }

    addClass(userId: number, classSimpleDTO: ClassSimpleDTO){
      return this.http.post(
        endpoints.baseURL + '/api/class/add2/' + userId, classSimpleDTO).subscribe(
        );
    }   
}
