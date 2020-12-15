import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../auth/authservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( public _auth : AuthserviceService, private router :Router) { }

  ngOnInit(): void {
  }

  home(){
    let decoded:any = this._auth.getRole(localStorage.getItem('token'))
    if(decoded.subject === "customer"){
      this.router.navigate(['/customerHome'])
    }
    else{
      this.router.navigate(['home']);
    }
    
  }

}
