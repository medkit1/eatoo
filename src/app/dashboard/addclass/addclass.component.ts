import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ClassSimpleDTO } from 'src/app/core/domain/ClassSimpleDTO';
import { ClassService } from 'src/app/core/services/ClassService';
import { UserService } from 'src/app/core/services/UserService';

@Component({
  selector: 'app-addclass',
  templateUrl: './addclass.component.html',
  styleUrls: ['./addclass.component.scss']
})
export class AddclassComponent implements OnInit {

  title: string;
  description: string;
  userId: number;

  constructor(
    public dialogRef: MatDialogRef<AddclassComponent>,
   
    private classService: ClassService,
    private userService: UserService
  ) { }

  ngOnInit(): void {

    this.userService.user.subscribe(user => this.userId = user?.id);
  }

  onNoClick(): void {
  
    this.dialogRef.close();
  }
 
  onYesClick(): void {
    console.log('add class component. userId: ' + this.userId);
 
    this.classService.addClass(this.userId, new ClassSimpleDTO(null, this.title, this.description));
    this.dialogRef.close();
  }

}
