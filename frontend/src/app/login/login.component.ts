import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../auth/authservice.service';
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
    //console.log(this.loginUserData)
    this._auth.loginUser(this.loginUserData)
    .subscribe(
      res =>{
        localStorage.setItem('token',  res.token)
        console.log(this._auth.getToken())

        let decoded:any =this._auth.getRole(this._auth.getToken())

        if (decoded.subject === "customer"){
          this.router.navigate(['/customerHome'])
        }
        else{
          this.router.navigate(['/home'])
        }
        
      },
      err =>{
        this.handleError(err)
      }
    )
  }

  handleError(err){
    if(err.status === 401){
      alert("Enter credentials again")
    }
  }

}
