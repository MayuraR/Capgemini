import { Injectable } from '@angular/core';
import { HttpClient, HttpInterceptor } from '@angular/common/http';
import { Router } from '@angular/router'


@Injectable({
  providedIn: 'root'
})
export class AuthserviceService{

  private _loginUrl = "http://localhost:4000/login";
  private _logOutUrl = "http://localhost:4000/logout";
  private _signUpUrl = "http://localhost:4000/signup";
  
  constructor( private http : HttpClient, private router : Router) { }


  loginUser(user:any) {
    return this.http.post<any>(this._loginUrl, user)
  }

  loggedIn() {
    return !!localStorage.getItem('token')    
  }

  logOut(){
    localStorage.removeItem('token')
    this.router.navigate(['/login']);
    this.http.get(this._logOutUrl);
    
  }

  signUpUser(user:any){
    return this.http.post<any>(this._signUpUrl, user)
  }

  getToken(){
    console.log(`this is the getToken() in auth setvice ${localStorage.getItem('token')}`)
    return localStorage.getItem('token')
  }
}

