import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from './services/http/http.service';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

token : any;
  constructor( private httpService:HttpService) {
    this.token=localStorage.getItem("token")
    
   
   }
  userNoteCreation(reqData:any, token:any)
{
  {
    let httpOptions=
    {
    headers : new HttpHeaders(
      {
        'Content-type':'application/json',
        Authorization:'Bearer ' + this.token
        
      }
    )
    }
      console.log(reqData);
      return this.httpService.postService('/Notes',reqData, true, httpOptions)
    }
  }
    getAllNotes(token:any)
{
  let httpOptions=
    {
    headers : new HttpHeaders(
      {
        'Content-type':'application/json',
        Authorization:'Bearer ' + token
        
      }
    )
    }
      return this.httpService.getService('/Notes/allnotes', true, httpOptions)
    }
    updateNotes(reqData:any, token:any)
    {
      
        let httpOptions=
        {
        headers : new HttpHeaders(
          {
            'Content-type':'application/json',
            Authorization:'Bearer ' + this.token
            
          }
        )
        }
          console.log(reqData);
          return this.httpService.putService('/Notes/'+reqData.notesId,reqData, true, httpOptions)
        }
      


}

