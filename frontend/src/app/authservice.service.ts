import { Injectable } from '@angular/core';
import { HttpClient, HttpInterceptor } from '@angular/common/http';
import { Router } from '@angular/router'


@Injectable({
  providedIn: 'root'
})
export class AuthserviceService{

  private _loginUrl = "http://localhost:4000/login";
  private _logOutUrl = "http://localhost:4000/logout";
  
  constructor( private http : HttpClient, private router : Router) { }


  loginUser(user:any) {
    return this.http.post<any>(this._loginUrl, user)
  }

  loggedIn() {
    return !!localStorage.getItem('token')    
  }

  logOut(){
    this.router.navigate(['/login']);
    this.http.get(this._logOutUrl);
    localStorage.removeItem('token')

  }
}

