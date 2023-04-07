import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ClassLessonSimpleDTO } from 'src/app/core/domain/ClassLessonSimpleDTO';
import { User } from 'src/app/core/domain/User';
import { LessonService } from 'src/app/core/services/LessonService';
import { UserService } from 'src/app/core/services/UserService';

@Component({
  selector: 'app-getusers',
  templateUrl: './getusers.component.html',
  styleUrls: ['./getusers.component.scss']
})
export class GetusersComponent implements OnInit {

  user: User;
  u: User;

  constructor(
    public dialogRef: MatDialogRef<GetusersComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ClassLessonSimpleDTO,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService.user.subscribe(
      user => this.u = user
    )


    this.userService.getClassWithMembers(this.data.clazzId).subscribe(
      result => this.user = result
    )
  }

  onNoClick(): void {
  
    this.dialogRef.close();
  }
 
  onYesClick(): void {
  
  //  this.userService.register(new User(null, this.nick, this.firstname, this.surname, this.email, this.password));
  //  this.lessonService.addLesson(this.data.clazzId, new LessonSimpleDTO(null, this.title))
    this.dialogRef.close();
  }

}
