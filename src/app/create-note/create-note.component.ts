import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotesService } from '../notes.service';
import { UserService } from '../services/userservice/user.service';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {

  noteForm!:FormGroup
  submitted=true;
  card:boolean = true;
  token:any
  constructor(private form : FormBuilder, private note:NotesService ) { }

  ngOnInit(): void {

    this.noteForm=this.form.group({
      Title:[null, Validators.required]

    });
    this.token=localStorage.getItem('token');

  }
  cardSwap()
  {
    console.log(this.card);
    return this.card == true ? (this.card = false) : (this.card = true);
  }
  onSubmit()
  {
    this.submitted = true;
    if(this.noteForm.valid)
    {
    console.log(this.noteForm.value);
    let note = 
    {
      Title:this.noteForm.value.title,
      message : this.noteForm.value.TakeNote
    }
    this.note.userNoteCreation(note, this.token).subscribe((response:any)=> {
      console.log(response);
    } )
  }
  else
  {
    console.log("invalid");
  }
}

}