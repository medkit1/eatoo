import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AboutComponent>,
   ) {}

  ngOnInit() {
  }

  onCloseClick(): void {
    this.dialogRef.close();
  }
}
