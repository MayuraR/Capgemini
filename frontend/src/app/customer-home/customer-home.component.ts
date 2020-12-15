import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../auth/authservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-home',
  templateUrl: './customer-home.component.html',
  styleUrls: ['./customer-home.component.css']
})
export class CustomerHomeComponent implements OnInit {

  constructor(  public _auth : AuthserviceService, private router :Router ) { }

  ngOnInit(): void {
  }

  addMember(){
    this.router.navigate(['/members/addMember'])
  }
  signUp(){
    this.router.navigate(['/signUp'])
  }
  signIn(){
    this.router.navigate(['/login'])
  }

}
