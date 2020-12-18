import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../auth/authservice.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  registerUserData:any = {}

  role=["Owner", "Manager", "Receptionist"];
  constructor( private _auth : AuthserviceService, private router : Router ) { }

  ngOnInit(): void {
    let decoded:any =this._auth.getRole(this._auth.getToken())
    if (decoded.subject === "customer" || decoded.subject === "Receptionist"){
      alert("Unauthorized")
      window.history.back()
    }
  }

  registerUser(){
    console.log(this.registerUserData)
    this._auth.signUpUser(this.registerUserData)
    .subscribe(
      res =>{
        console.log(res)
        this.router.navigate(['/login'])
      },
      err =>{console.log(err.message)}
    )
  }

}
