import { Component, OnInit } from '@angular/core';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-getall',
  templateUrl: './getall.component.html',
  styleUrls: ['./getall.component.scss']
})
export class GetallComponent implements OnInit {
token:any
  constructor(private note:NotesService) { }

   ngOnInit(): void {

  }
getAll()
{
  this.note.getAllNOtes(this.token).subscribe((response:any)=> {
    console.log(response);
  } )
}

}
