import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './core/services/UserService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'CAETO';

  nick:string = null;

  constructor(private router : Router, private userService: UserService) {  }

  ngOnInit(): void {
    this.userService.user.subscribe(user => this.nick = user?.nick?.toString());

    if(this.nick == null){
   //   this.router.navigate(['dashboard']);
      this.router.navigate(['login']);
    }else{
      this.router.navigate(['dashboard']);
    }
  }


}
