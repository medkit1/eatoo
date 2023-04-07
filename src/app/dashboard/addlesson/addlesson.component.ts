import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ClassLessonSimpleDTO } from 'src/app/core/domain/ClassLessonSimpleDTO';
import { LessonSimpleDTO } from 'src/app/core/domain/LessonSimpleDTO';
import { LessonService } from 'src/app/core/services/LessonService';
import {UserService} from 'src/app/core/services/UserService'

@Component({
  selector: 'app-addlesson',
  templateUrl: './addlesson.component.html',
  styleUrls: ['./addlesson.component.scss']
})
export class AddlessonComponent implements OnInit {

  title: string;
  description: string;

  constructor(
    public dialogRef: MatDialogRef<AddlessonComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ClassLessonSimpleDTO,
    private lessonService: LessonService
 ) { }
 
   ngOnInit() {
   // will log the entire data object
   console.log('log addlesson' + this.data.clazzId + " " + this.data.title)
 }




 onNoClick(): void {
  
   this.dialogRef.close();
 }

 onYesClick(): void {
   console.log('aaa');
 //  this.userService.register(new User(null, this.nick, this.firstname, this.surname, this.email, this.password));
   this.lessonService.addLesson(this.data.clazzId, new LessonSimpleDTO(null, this.title, this.description))
   this.dialogRef.close();
 }

}
