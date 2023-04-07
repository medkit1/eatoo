import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AboutComponent } from '../../login/about/about.component';
import { RegisterComponent } from '../../login/register/register.component';
import { UserService } from 'src/app/core/services/UserService';
import { LoginDTO } from 'src/app/core/domain/LoginDTO';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  nick: string;
  password: string;


  constructor(private router : Router, public dialog: MatDialog, private userService: UserService) {  }

  ngOnInit(): void {
  }

  login(): void {
    this.userService.login(new LoginDTO(this.nick, this.password));
  //  this.router.navigate(['dashboard']);
  }


  openAboutDialog(): void {
    const dialogRef = this.dialog.open(AboutComponent, {
   //   width: '300px',
     
  
    });
  }

  openRegisterDialog(): void {
    const dialogRef = this.dialog.open(RegisterComponent, {
      width: '300px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
    //  this.email = result.email;
   //   this.password = result.password;
      console.log(this.nick + this.password);
    });
  }

}
