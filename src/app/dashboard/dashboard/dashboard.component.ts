import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { DashboardService } from 'src/app/core/services/DashboardService';
import { ClassSimpleDTO } from 'src/app/core/domain/ClassSimpleDTO';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/core/services/UserService';
import { AddclassComponent } from 'src/app/dashboard/addclass/addclass.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private dashboardService: DashboardService, private http : HttpClient, private userService: UserService, public dialog: MatDialog) { }

  allClassSimpleDTO: ClassSimpleDTO[];
  userClassSimpleDTO: ClassSimpleDTO[];
  pickedClass: ClassSimpleDTO = null; 
  myControl: FormControl = new FormControl();
  userId: number;

  ngOnInit(): void {

    this.userService.user.subscribe(user => this.userId = user?.id);

 //  this.dashboardService.getAllClasses().subscribe(
 //     e => this.allClassSimpleDTO = e
  //  )

  //  this.dashboardService.getAllClasses().subscribe(
  //    e => this.userClassSimpleDTO = e
  //  )

   this.dashboardService.getUserClasses(this.userId).subscribe(
      e => this.userClassSimpleDTO = e
   )
   
  }

 

  getSelectedClazz(country: ClassSimpleDTO, event: any) {
  if (event.isUserInput) {
     this.pickedClass = country;
  }

  

}


openAddClassDialog(): void {
  const dialogRef = this.dialog.open(AddclassComponent, {
    width: '260px',
    height: '260px',
   
 }

  ).afterClosed()
  .subscribe(() => {
    console.log('after closed')
    this.dashboardService.getUserClasses(this.userId).subscribe(
      e => this.userClassSimpleDTO = e
    )
  });
}



}
