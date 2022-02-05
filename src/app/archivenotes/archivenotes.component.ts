import { Component, OnInit } from '@angular/core';
import { NotesService } from '../services/notesservice/notes.service';
import { DataserviceService } from '../services/dataservice/dataservice.service';

@Component({
  selector: 'app-archivenotes',
  templateUrl: './archivenotes.component.html',
  styleUrls: ['./archivenotes.component.scss']
})
export class ArchivenotesComponent implements OnInit {
  token: any
  archiveListData: any
  list: any
  constructor(private dataService: DataserviceService, private note: NotesService) { }

  ngOnInit() {
    this.token = localStorage.getItem('token');
    this.dataService.receivedMessage.subscribe((displayArchived: any) => {
      console.log(displayArchived)
      this.getArchivedNotes();
    })
  }
  getArchivedNotes() {
    this.note.getAllNotes(this.token).subscribe((response: any) => {
      console.log(response.data)

      this.archiveListData = response.notes.filter((result: any) => {
        this.list = result.isArchive=== true
        return this.list
      })
      console.log("Trashed Notes:")
      this.archiveListData.reverse()



    })

  }
}
