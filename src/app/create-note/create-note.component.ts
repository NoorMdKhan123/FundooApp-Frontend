import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  constructor(private user:UserService,private form : FormBuilder ) { }

  ngOnInit(): void {
    this.noteForm=this.form.group({
      Title:[null, Validators.required]
    });

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
  }
  else
  {
    console.log("invalid");
  }
}
}