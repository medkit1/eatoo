import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {User} from 'src/app/core/domain/User'
import {LoginDTO} from 'src/app/core/domain/LoginDTO'
import { _COALESCED_STYLE_SCHEDULER } from '@angular/cdk/table';
import { Router } from '@angular/router';
import { endpoints } from 'src/environments/endpoints';
import { MatDialog } from '@angular/material/dialog';
import { ErrormComponent } from 'src/app/errorm/errorm.component';

@Injectable({
    providedIn: 'root'
  })
export class UserService {

  constructor(private http: HttpClient, private router : Router, public dialog: MatDialog) { }

  public user = new BehaviorSubject<User>(null);

  // works
  register(user : User){
    return this.http.post(
      endpoints.baseURL + '/api/user/register', user
    ).subscribe(
      (e)=>(console.log('login s userem: ' + e.toString))
    );
  }

  t (){
    this.user.next(null);

  }

  login(login : LoginDTO){
    return this.http.post<User>(
    endpoints.baseURL + '/api/user/login', login
  ) .subscribe(
    result => {
      // Handle result
      (this.user.next(result));
    },
    error => {
        console.log('Error during login: ' + error.toString);
        this.dialog.open(ErrormComponent, {
          data: {
            err: 'Error',
            message: 'Unknown combination of Username and Password'
          }
        });
   //   this.errors = error;
    },
    () => {
      // 'onCompleted' callback.
      this.router.navigate(['dashboard']);
    }
  );


  
  /*.subscribe(
    (e)=>(this.user.next(e)),
    
  );
  console.log('chyba pri loginu');  */
}

getAll(): Observable<User[]>{
  return this.http.get<User[]>(endpoints.baseURL + '/api/user/get/all');
};

getClassWithMembers(classId: number): Observable<User>{
  return this.http.get<User>(endpoints.baseURL + '/api/class/get/members/' + classId);
};


login2(login : LoginDTO): Observable<User>{    
    return this.http.post<User>(endpoints.baseURL + '/api/user/register', login);
}

  test(){
    return this.http.get(
      endpoints.baseURL + '/api/hello2',  { responseType: 'text' }
    ).subscribe(
    );
  }

  test2(){
 // const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post<any>(
      endpoints.baseURL + '/api/test2', 'miraaaaaaaaaaaaaaaaa'
    ).subscribe(
    );
  }


}