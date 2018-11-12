import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { MyDialog } from './components/my-dyalog/my-dialog.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fuck-test-redux'
  
  constructor(public dialog: MatDialog) {};

  openDialog(): void {
    const dialogRef = this.dialog.open(MyDialog, {width:'300px', height:'300px'});

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

