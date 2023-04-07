import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { _COALESCED_STYLE_SCHEDULER } from '@angular/cdk/table';
import { ClassSimpleDTO } from 'src/app/core/domain/ClassSimpleDTO';
import { endpoints } from 'src/environments/endpoints';

@Injectable({
    providedIn: 'root'
  })
export class DashboardService {

  constructor(private http: HttpClient) { }

  getAllClasses() :  Observable<ClassSimpleDTO[]>{
    return this.http.get<ClassSimpleDTO[]>(
        endpoints.baseURL +  '/api/class/get/all/simple')
  }

  getUserClasses(userId : number) :  Observable<ClassSimpleDTO[]>{
    return this.http.get<ClassSimpleDTO[]>(
       endpoints.baseURL + '/api/class/get/byuser/simple/' + userId)
  }
}