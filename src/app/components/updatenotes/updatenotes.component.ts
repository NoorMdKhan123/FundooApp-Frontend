import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NotesService } from '../../services/notesservice/notes.service';


@Component({
  selector: 'app-updatenotes',
  templateUrl: './updatenotes.component.html',
  styleUrls: ['./updatenotes.component.scss']
})
export class UpdatenotesComponent implements OnInit {
title:any
message:any
token:any

  constructor(
    public dialogRef: MatDialogRef<UpdatenotesComponent>, private notesService : NotesService,
    @Inject(MAT_DIALOG_DATA) public notes: any){
      console.log(notes)
    }
//   {
//     console.log(this.data)
//   }

//   onNoClick(): void {
//     this.dialogRef.close();
    
//   }

//   ngOnInit() {
//     console.log(this.data)
//     this.title=this.data.title,
//     this.desc=this.data.takeNote
//   }

// }
ngOnInit(): void {
  console.log(this.notes)
  this.title=this.notes.title
  this.message=this.notes.takeANote
  console.log(this.message)
  this.token=localStorage.getItem('token')
}
onSubmitted() {
  let data = {
    notesId: this.notes.notesId,
    title: this.title,
    takeANote: this.message,
    

  }
  this.notesService.updateNotes(data,this.token).subscribe((response:any)=>{
    console.log(response)
    if(response.success == true)
      {
        console.log(response);
        console.log(this.message, this.title)
      }
  })
  console.log(this.message, this.title)
  this.dialogRef.close();

}
}
