import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { _COALESCED_STYLE_SCHEDULER } from '@angular/cdk/table';
import { MemberDTO } from '../domain/MemberDTO';
import { endpoints } from 'src/environments/endpoints';

@Injectable({
    providedIn: 'root'
  })
export class MemberService {

  constructor(private http: HttpClient) { }

  addMember(clazz: number, memberDTO: MemberDTO){
      return this.http.post(
          endpoints.baseURL + '/api/member/add/' + clazz, memberDTO).subscribe(
          );
  }   
}