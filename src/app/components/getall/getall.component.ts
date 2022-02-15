import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NotesService } from '../../services/notesservice/notes.service';

@Component({
  selector: 'app-getall',
  templateUrl: './getall.component.html',
  styleUrls: ['./getall.component.scss']
})
export class GetallComponent implements OnInit {


  token: any;
  notelist: any;
  noteData: any
  constructor(private note: NotesService) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.getAll();

  }

  dataReceived(e: any) {
    console.log("Data received")
    this.getAll()
  }
  

  getAll() {
    this.note.getAllNotes(this.token).subscribe((response: any) => {
      console.log(response.data)
      this.notelist = response.notes.filter((result: any) => {
        this.noteData = result.isTrash === false && result.isArchive === false
        return this.noteData
      })
      this.notelist.reverse()
    })




  }
}

