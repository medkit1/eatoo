import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ClassLessonSimpleDTO } from 'src/app/core/domain/ClassLessonSimpleDTO';
import { User } from 'src/app/core/domain/User';
import { LessonService } from 'src/app/core/services/LessonService';
import { UserService } from 'src/app/core/services/UserService';
import { MemberService } from 'src/app/core/services/MemberService';
import { MemberDTO } from 'src/app/core/domain/MemberDTO';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit {

  user: User[];
  pickedUser: User;
  myControl: FormControl = new FormControl();
  m: MemberDTO;
  listpickedUsers : User[] = new Array(); 

  filteredOptions: Observable<string[]>;

  constructor(
    public dialogRef: MatDialogRef<AdduserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ClassLessonSimpleDTO,
    private userService: UserService,
    private memberService: MemberService
   
  ) { }

  ngOnInit(): void {

    this.userService.getAll().subscribe(
      result => this.user = result
    )

  this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
   );
  }

  private _filter(value: User): User[] {
    const filterValue = value;

     return this.user.filter(option => option.nick.includes(filterValue.nick));
  }

  onNoClick(): void {
  
    this.dialogRef.close();
  }
 
  onYesClick(): void {
    console.log('aaa');
  //  this.userService.register(new User(null, this.nick, this.firstname, this.surname, this.email, this.password));
  //  this.lessonService.addLesson(this.data.clazzId, new LessonSimpleDTO(null, this.title))
    this.dialogRef.close();
  }

  getSelectedLesson(country: User, event: any) {
    if (event.isUserInput) {
       this.pickedUser = country;
       console.log("pciked user " + country.id + country.nick)
       console.log("pciked user  id" + this.pickedUser.id)
       this.listpickedUsers.push(country)


       setTimeout(()=>{                    
        
    }, 500);

       this.m = new MemberDTO(null, this.pickedUser.id);
       console.log("a moje m  id" + this.pickedUser.id)
       this.memberService.addMember(this.data.clazzId, this.m)
    }
  }

  customFilter = function(countries: any[], query: string): any[] {
    return countries.filter(x => x.firstname.toLowerCase().startsWith(query.toLowerCase()));
  };

}
