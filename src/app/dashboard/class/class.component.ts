import { HttpClient } from '@angular/common/http';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import {ClassService } from 'src/app/core/services/ClassService';
import { ClassLessonSimpleDTO } from 'src/app/core/domain/ClassLessonSimpleDTO';
import { FormControl } from '@angular/forms';
import { LessonSimpleDTO } from 'src/app/core/domain/LessonSimpleDTO';
import { MatDialog } from '@angular/material/dialog';
import { AddlessonComponent } from 'src/app/dashboard/addlesson/addlesson.component';
import { GetusersComponent } from 'src/app/dashboard/getusers/getusers.component';
import { AdduserComponent } from 'src/app/dashboard/adduser/adduser.component';

@Component({
  selector: 'class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.scss']
})
export class ClassComponent implements OnInit , OnChanges{

  @Input() element: {clazzId: number, title: string }
  classLessonSimpleDTO: ClassLessonSimpleDTO = null;
  myControl: FormControl = new FormControl();
  pickedLesson : LessonSimpleDTO = null;
  

  constructor(private classService: ClassService, private http : HttpClient, public dialog: MatDialog) { }

  ngOnInit(): void {
    console.log("class component on init")
this.classService.getAllClasses(this.element.clazzId).subscribe(
  e => this.classLessonSimpleDTO = e
)


  }

  ngOnChanges(): void {
    console.log("class component on changes")
   this.myControl.reset();
this.classService.getAllClasses(this.element.clazzId).subscribe(
  e => this.classLessonSimpleDTO = e
)
this.pickedLesson = null;
  } 
  
  getSelectedLesson(country: LessonSimpleDTO, event: any) {
    if (event.isUserInput) {
       this.pickedLesson = country;
       console.log("event option2 selected lesson " + country.lessonId + country.title)
    }
  }

  
  openAddLessonDialog(): void {
    const dialogRef = this.dialog.open(AddlessonComponent, {
      width: '260px',
     height: '260px',
     data: this.classLessonSimpleDTO
   }
  
    ).afterClosed()
    .subscribe(() => {
      console.log('after closed')
      this.classService.getAllClasses(this.element.clazzId).subscribe(
        e => this.classLessonSimpleDTO = e
      )
    });
  }

  openGetUsersDialog(): void {
    const dialogRef = this.dialog.open(GetusersComponent, {
    width: '330px',
    height: '400px',
     data: this.classLessonSimpleDTO
   }
  
    );
  }

  openAddUserDialog(): void {
    const dialogRef = this.dialog.open(AdduserComponent, {
    width: '330px',
 // height: '400px',
     data: this.classLessonSimpleDTO
   }
  
    );
  }

}
