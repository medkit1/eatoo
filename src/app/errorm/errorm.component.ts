import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-errorm',
  templateUrl: './errorm.component.html',
  styleUrls: ['./errorm.component.scss']
})
export class ErrormComponent implements OnInit {
  message: string = 'An unspecified error has occurred';
  err: string = '';

  constructor(
    @Inject(MAT_DIALOG_DATA)
    private data: {
      err: string;
      message: string;
    },
    public dialogRef: MatDialogRef<ErrormComponent>,) {
      if (data?.err) this.err = data.err;
    if (data?.message) this.message = data.message;
     }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }

}
