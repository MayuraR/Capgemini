import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../auth/authservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-sign-up',
  templateUrl: './customer-sign-up.component.html',
  styleUrls: ['./customer-sign-up.component.css']
})
export class CustomerSignUpComponent implements OnInit {

  registerUserData:any={}

  constructor( private _auth : AuthserviceService, private router : Router ) { }

  ngOnInit(): void {
  }

  registerUser(){
    this.registerUserData.role='customer';
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

  goBack(){
    window.history.back()
  }

}
