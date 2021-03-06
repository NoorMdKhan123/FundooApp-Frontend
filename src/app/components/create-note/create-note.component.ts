import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotesService } from 'src/app/services/notesservice/notes.service';




@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {
  createNoteForm!: FormGroup;
  submitted=false;
  card: boolean = false;
  token:any;
  @Output() autoRefreshEvent = new  EventEmitter<string>();
  constructor(private formBuilder: FormBuilder,private notesService:NotesService,private route:Router) { }

  ngOnInit(): void {
    this.createNoteForm = this.formBuilder.group({
      title: [null, Validators.required],
      takeNote:[null,Validators.required]
    });
    this.token=localStorage.getItem('token');
  }
  cardSwap() {
    console.log(this.card);
    return this.card === true ? (this.card = false) : (this.card = true);
  }


  onSubmitted()
  {
    this.submitted=true;
    if(this.createNoteForm.valid)
    {
      console.log(this.createNoteForm.value);
      let requestedData={
        title:this.createNoteForm.value.title,
        takeANote:this.createNoteForm.value.takeNote
      }
      this.notesService.userNoteCreation(requestedData,this.token).subscribe((response:any)=>{console.log(response)
       this.card = false;
        if(response.success == true)
        {

         console.log(response);

        
        }
        this.autoRefreshEvent.emit(response)
      })
    } 
    else
    this.cardSwap();
    console.log("invalid");
  }
}