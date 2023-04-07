import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../core/services/UserService';
import { AddclassComponent } from 'src/app/dashboard/addclass/addclass.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router : Router, private userService: UserService, public dialog: MatDialog) {  }

  nick: string =  null;

  ngOnInit(): void {
    
    this.userService.user.subscribe(user => this.nick = user?.nick?.toString());
  }

  logout(): void {
    this.userService.user.next(null);
    this.router.navigate(['login']);
  }

  openAddClassDialog(): void {
    const dialogRef = this.dialog.open(AddclassComponent, {
   // width: '330px',
  // height: '400px',
     
   }
  
    );
  }

}
