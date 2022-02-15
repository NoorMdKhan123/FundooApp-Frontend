import { Component, Input, OnInit } from '@angular/core';
import { NotesService } from '../../services/notesservice/notes.service';
import { DataserviceService } from '../../services/dataservice/dataservice.service';

@Component({
  selector: 'app-trashnotes',
  templateUrl: './trashnotes.component.html',
  styleUrls: ['./trashnotes.component.scss']
})
export class TrashnotesComponent implements OnInit {
  @Input() notesCard: any
  token: any
  list: any
  trashListData : any

  constructor(private note: NotesService, private dataService : DataserviceService) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.dataService.receivedMessage.subscribe((displayTrashed:any) =>
    {
      console.log(displayTrashed)
      this.getTrashNotes();
    })
    
  }

  getTrashNotes() {
    this.note.getAllNotes(this.token).subscribe((response: any) => {
      console.log(response.data)

      this.trashListData=response.notes.filter((result:any)=>{
      this.list= result.isTrash === true
      return this.list
      })
      console.log("Trashed Notes:")
      this.trashListData.reverse()

      

    })
  }
  // deleteNote()
  // {
  //   let reqData =
  //   {
  //     notesIdList : [this.notesCard.notesId],
  //     isTrash : true
  //   }
  //   this.note.trashNotes(reqData, this.token).subscribe((response:any)=>
  //   {
  //     console.log("notes is deleted");
  //     console.log(response)

  //   }
  //   )
  // }
}
