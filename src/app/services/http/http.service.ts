import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  BaseUrl = environment.BaseUrl

  constructor(private http: HttpClient) { }

  postService(url:string='',payload:any={},tokenRequired:boolean=false, httpAuthOptions:any={})
  {
     return this.http.post(this.BaseUrl + url, payload, tokenRequired && httpAuthOptions)
  }
   
  putService(url:string='',payload:any={},tokenRequired:boolean=false, httpAuthOptions:any={})
  {

  }
  getService(url:string='',tokenRequired:boolean=false, httpAuthOptions:any={})
  {

  }
  deleteService(url:string='',payload:any={},tokenRequired:boolean=false, httpAuthOptions:any={})
  {

  }
  
}
