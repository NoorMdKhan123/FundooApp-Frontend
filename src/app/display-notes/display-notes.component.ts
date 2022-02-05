import { Component, Input, OnInit } from '@angular/core';
import { NotesService } from '../services/notesservice/notes.service';
import { UpdatenotesComponent } from '../updatenotes/updatenotes.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DataserviceService } from '../services/dataservice/dataservice.service';

@Component({
  selector: 'app-display-notes',  
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent implements OnInit {
 
  @Input() notesArraylist:any;
  title:any;
  message:any;
  constructor(private user: NotesService, private dialog: MatDialog, private dataService : DataserviceService) { 
    
  }
  ngOnInit(): void {
    
  }
  messageFromNote(e:any)
    {
      console.log(e)
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
 

}
