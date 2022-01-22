import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService : HttpService ) { }

  userRegistration(reqData:any)
  {
let httpOptions=
{
  headers : new HttpHeaders(
    {
      'Content-type':'application/json',
      Authorization : 'token'
    }
  )
}
    console.log(reqData);
    return this.httpService.postService('User/register',reqData, false, httpOptions)
  }
  
  userLogin(reqData:any)
  {
let httpOptions=
{
  headers : new HttpHeaders(
    {
      'Content-type':'application/json',
      Authorization : 'token'
    }
  )
}
    console.log(reqData);
    return this.httpService.postService('user/login',reqData, false, httpOptions)
  }
}
