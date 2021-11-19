import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token:any;
  currentUser = new BehaviorSubject(null);


  constructor(private _HttpClient:HttpClient) { }

  login(formData:any):Observable<any>
  {
    return  this._HttpClient.post('https://apps.sa-counter.com/api/Account/Login',formData)
  }
  saveCurrentUser()
  {
    this.token = localStorage.getItem('userToken');
    this.currentUser.next(this.token);
    console.log(this.currentUser);
    console.log(this.token);
  }
  // getToken(): any {
  //   return localStorage.getItem('userToken');
  // }

  getAllTraps():Observable<any>
  {
    return this._HttpClient.get(`https://apps.sa-counter.com/api/Admin/GetAllTraps`)
  }


  // https://apps.sa-counter.com/api/Admin/GetAllTraps
}
