import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from './services/http/http.service';

@Injectable({
  providedIn: 'root'
})
export class NotesService {


  constructor( private httpService:HttpService) {
    // this.token=localStorage.getItem("token")
    // console.log(this.token)
   
   }
  userNoteCreation(reqData:any, token:any)
{
  {
    let httpOptions=
    {
    headers : new HttpHeaders(
      {
        'Content-type':'application/json',
        'Authorization':'Bearer ' + token
        
      }
    )
    }
      console.log(reqData);
      return this.httpService.postService('/User/addNote',reqData, true, httpOptions)
    }
  }
    getAllNOtes(token:any)
{
  let httpOptions=
    {
    headers : new HttpHeaders(
      {
        'Content-type':'application/json',
        'Authorization':'Bearer ' + token
        
      }
    )
    }
      return this.httpService.getService('/User/allnotes', true, httpOptions)
    }



}

