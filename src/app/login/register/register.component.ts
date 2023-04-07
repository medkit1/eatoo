import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'
import {UserService} from 'src/app/core/services/UserService'
import {User} from 'src/app/core/domain/User'
import { ErrormComponent } from 'src/app/errorm/errorm.component';


interface DialogData {
  username: string;
  email: string;
  password: string;
  passwordVerify: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  nick: string;
  firstname: string;
  surname: string;
  email: string;
  password: string;
  passwordVerify: string;

  constructor(
    public dialogRef: MatDialogRef<RegisterComponent>,
 //   @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private userService: UserService,
    public dialog: MatDialog) {}

  onNoClick(): void {
    this.userService.test2();
    this.dialogRef.close();
  }

  onYesClick(): void {
    if(this.nick == null || this.firstname == null || this.surname == null || this.email == null || this.password == null || this.passwordVerify == null){
      this.dialog.open(ErrormComponent, {
        data: {
          err: 'Error',
          message: 'All values from form are mandatory'
        }
    });
    }

    if(this.password  != this.passwordVerify ){
      this.dialog.open(ErrormComponent, {
        data: {
          err: 'Error',
          message: 'Password and PasswordVerify must be same'
        }
    });
    }





    
    console.log('aaa');
    this.userService.register(new User(null, this.nick, this.firstname, this.surname, this.email, this.password));
    this.dialogRef.close();
  }

  ngOnInit() {
    
  }

}