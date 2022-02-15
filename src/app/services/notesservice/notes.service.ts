
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  token: any;
  constructor(private httpService: HttpService) {
    this.token = localStorage.getItem("token")


  }
  userNoteCreation(reqData: any, token: any) {
    {
      let httpOptions =
      {
        headers: new HttpHeaders(
          {
            'Content-type': 'application/json',
            Authorization: 'Bearer ' + this.token

          }
        )
      }
      console.log(reqData);
      return this.httpService.postService('/Notes', reqData, true, httpOptions)
    }
  }
  getAllNotes(token: any) {
    let httpOptions =
    {
      headers: new HttpHeaders(
        {
          'Content-type': 'application/json',
          Authorization: 'Bearer ' + token

        }
      )
    }
    return this.httpService.getService('/Notes/allnotes', true, httpOptions)
  }
  updateNotes(reqData: any, token: any) {

    let httpOptions =
    {
      headers: new HttpHeaders(
        {
          'Content-type': 'application/json',
          Authorization: 'Bearer ' + this.token

        }
      )
    }
    console.log(reqData);
    return this.httpService.putService('/Notes/' + reqData.notesId, reqData, true, httpOptions)
  }
  trashNotes(data:any, token:any)
  {
    let httpOptions=
  {
  headers : new HttpHeaders(
    {
      'Content-type':'application/json',
      Authorization : 'Bearer ' + token
    }
  )
  }
    console.log(data);
    console.log("token",token);
    return this.httpService.putService('/Notes/trashnotes/'+ data.notesIdList,null, true, httpOptions)
  }
  archiveNotes(data:any, token:any)
  {
    let httpOptions=
  {
  headers : new HttpHeaders(
    {
      'Content-type':'application/json',
      Authorization : 'Bearer ' + token
    }
  )
  }
    console.log(data);
    console.log("token",token);
    return this.httpService.putService('/Notes/archive/'+ data.notesIdList,null, true, httpOptions)
  }
  colorNotes(data:any, token:any)
  {
    let httpOptions=
  {
  headers : new HttpHeaders(
    {
      'Content-type':'application/json',
      Authorization : 'Bearer ' + token
    }
  )
  }
    console.log(data);
    console.log("token",token);
    return this.httpService.putService('/Notes/color/'+ data.notesIdList,data, true, httpOptions)
  }
deleteNote(data:any, token:any)
{
  let httpOptions=
  {
  headers : new HttpHeaders(
    {
      'Content-type':'application/json',
      Authorization : 'Bearer ' + token
    }
  )
  }
    console.log(data);
    console.log("token",token);
    return this.httpService.deleteService('/Notes/'+ data.notesIdList,null, true, httpOptions)

}




}

