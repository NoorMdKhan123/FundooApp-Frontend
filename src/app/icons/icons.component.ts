import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { NotesService } from '../services/notesservice/notes.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() NotesCard: any
  @Output() changeColorNote = new EventEmitter<any>();
  token: any

  constructor(private note: NotesService) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    console.log(this.NotesCard)
  }
  colors = [
    
    {
      name: 'Light Green', bgColorValue: '#E4E978'
    },
    {
      name: 'Lime', bgColorValue: '#B3E283'
    },
    {
      name: 'Teal', bgColorValue: '#CDF0EA'
    },
    {
      name: 'white', bgColorValue: '#ffffff'
    },
    {
      name: 'Red', bgColorValue: '#f28b82'
    },  
    
    {
      name: 'Yellow', bgColorValue: '#FFFEA9'
    }
  ];

  trashNotes() {
    console.log("calling trash api", this.NotesCard.notesId)
    let reqData =
    {
      notesIdList: [this.NotesCard.notesId],
      isTrash: false
    }
    this.note.trashNotes(reqData, this.token).subscribe((response: any) => {
      console.log("notes is deleted");
      console.log(response)

    })
    window.location.reload();

  }
  archiveNotes()
  {
    console.log("calling archive api")
    let reqData =
    {
      notesIdList: [this.NotesCard.notesId],
      isArcive: false
    }
    this.note.archiveNotes(reqData, this.token).subscribe((response: any) => {
      console.log("notes is archived");
      console.log(response)

    })
    window.location.reload();
  }

  colorNotes(noteColor:any)
  {
    let data = {
      notesIdList: [this.NotesCard.notesId],
      colour: noteColor
      
    }
    console.log(data.colour)
    this.note.colorNotes(data,this.token).subscribe((response:any)=>{
      console.log(response)
      this.changeColorNote.emit(noteColor)
    

    })
    window.location.reload();

  }


}