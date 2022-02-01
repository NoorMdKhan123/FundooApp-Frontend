import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-getall',
  templateUrl: './getall.component.html',
  styleUrls: ['./getall.component.scss']
})
export class GetallComponent implements OnInit {


  token:any;
  notelist:any;
  constructor(private note:NotesService) { }

   ngOnInit(): void {
    this.token=localStorage.getItem('token');
    this.getAll();

  }
  
 
getAll()
{
  this.note.getAllNotes(this.token).subscribe((response:any)=> {
    console.log(response.data)
    this.notelist=response.data
    console.log(this.notelist)
    this.notelist.reverse()

  })
} 
}

