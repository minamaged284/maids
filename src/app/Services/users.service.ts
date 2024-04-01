import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class UsersService {
  baseurl:string="https://reqres.in/api/users";
 constructor(private _httpclient:HttpClient) { }

getUsers(PageNum:number):Observable<any>
{
  console.log(this._httpclient.get(`https://reqres.in/api/users?page=2`))
  return this._httpclient.get(`${this.baseurl}?page=${PageNum}`);
}
getUserById(id:string):Observable<any>{

  return this._httpclient.get(`https://reqres.in/api/users/${id}`)
}
}