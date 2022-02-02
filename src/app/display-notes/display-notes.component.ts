import { Component, Input, OnInit } from '@angular/core';
import { NotesService } from '../notes.service';
import { UpdatenotesComponent } from '../updatenotes/updatenotes.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-display-notes',  
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent implements OnInit {
 
  @Input() notesArraylist:any;
  title:any;
  message:any;
  constructor(private user: NotesService, private dialog: MatDialog) { 
    
  }
  
  openDialog(notesObject: any): void {
    const dialogRef = this.dialog.open(UpdatenotesComponent, {
      width: '250px',
      data: notesObject

    });
    console.log( notesObject)
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', "");
      this.title = result;
      this.message = result;
      console.log(this.title, this.message)
      
    });
  }
 
  ngOnInit(): void {}
}
