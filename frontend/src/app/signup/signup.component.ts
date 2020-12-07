import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../authservice.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  registerUserData:any = {}

  constructor( private _auth : AuthserviceService, private router : Router ) { }

  ngOnInit(): void {
  }

  registerUser(){
    console.log(this.registerUserData)
    this._auth.signUpUser(this.registerUserData)
    .subscribe(
      res =>{
        console.log(res)
        this.router.navigate(['/home'])
      },
      err =>{console.log(err.message)}
    )
  }

}
