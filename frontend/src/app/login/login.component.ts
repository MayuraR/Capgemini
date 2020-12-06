import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../authservice.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData:any = {}

  constructor( private _auth : AuthserviceService, private router : Router ) { }

  ngOnInit(): void {
  }

  loginUser(){
    console.log(this.loginUserData)
    this._auth.loginUser(this.loginUserData)
    .subscribe(
      res =>{
        localStorage.setItem('token', res.token)
        this.router.navigate(['/home'])
      },
      err =>{console.log(err.message)}
    )
  }

}
